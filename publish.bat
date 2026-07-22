@echo off
setlocal enabledelayedexpansion

:: ---------------------------------------------------------------------------
:: launchstore-shared publish script
::
:: Reads current version, bumps it, rebuilds dist/, commits, tags, pushes,
:: then updates the @launchstore/shared-puck dep string + runs `npm install`
:: in each consumer repo so the new version is ready to use immediately.
::
:: This is the standard release flow. There is no opt-out for the consumer
:: install step — every release ships the new version to every consumer
:: automatically.
::
:: Usage:
::   publish.bat              [default: patch bump + install in all consumers]
::   publish.bat patch        [explicit patch bump]
::   publish.bat minor        [minor bump]
::   publish.bat major        [major bump]
::   publish.bat --no-push    [skip git push; stage locally only]
::   publish.bat --skip-build [skip npm run build; assumes dist/ is fresh]
:: ---------------------------------------------------------------------------

set "BUMP_TYPE=patch"
set "SHOULD_PUSH=1"
set "SHOULD_BUILD=1"

:: Parse args
for %%a in (%*) do (
    if "%%a"=="major"     set "BUMP_TYPE=major"
    if "%%a"=="minor"     set "BUMP_TYPE=minor"
    if "%%a"=="patch"     set "BUMP_TYPE=patch"
    if "%%a"=="--no-push" set "SHOULD_PUSH=0"
    if "%%a"=="--skip-build" set "SHOULD_BUILD=0"
)

:: Script sits at the repo root (launchstore-shared/).
:: Consumer repos live at the parent's children: ../launchstore-frontend etc.
set "ROOT_DIR=%~dp0"

cd /d "%ROOT_DIR%"

:: Resolve the parent dir to an absolute path. The string %ROOT_DIR%..
:: is a valid path but contains a literal "..", and CMD's pushd + if not
:: exist do NOT reliably resolve ".." mid-path on every Windows build
:: (they treat "\..\foo" as a drive-relative component and fail with
:: "The system cannot find the drive specified."). Resolve once at the
:: top of the script using for's %%~fP modifier, then use the absolute
:: form for every pushd / if not exist call.
for %%P in ("%ROOT_DIR%..") do set "PARENT_DIR=%%~fP"

echo.
echo ============================================================
echo   publish.bat       ^|       bump: %BUMP_TYPE%
echo   cwd: %ROOT_DIR%
echo ============================================================
echo.

:: ---- Step 1: Bump version in package.json ---------------------------
echo [1/6] Bumping version ...
for /f "tokens=*" %%i in ('node -e "var p=require('./package.json');var v=p.version.split('.').map(Number);if(process.argv[1]==='major')v[0]++;else if(process.argv[1]==='minor')v[1]++;else v[2]++;var nv=v.join('.');p.version=nv;require('fs').writeFileSync('package.json',JSON.stringify(p,null,2)+'\n');console.log(nv);" %BUMP_TYPE%') do set "NEW_VERSION=%%i"
if !errorlevel! neq 0 goto :fail
echo        new version: %NEW_VERSION%
echo.

:: ---- Step 2: npm run build ------------------------------------------
if "%SHOULD_BUILD%"=="1" goto :run_build
echo [2/6] Skipping npm run build (--skip-build)
goto :build_done
:run_build
echo [2/6] Running npm run build ...
:: Always clean first — `tsc` is incremental and a stale tsconfig.tsbuildinfo
:: can otherwise cause it to emit NOTHING, shipping an empty dist/.
call npm run clean
call npm run build
if !errorlevel! neq 0 (
    echo [FAIL] npm run build failed
    echo [TIP]  Run npm run build manually to see the error.
    exit /b 1
)
echo.
echo        [OK] dist/ built
:build_done
echo.

:: ---- Step 3: git add + commit ---------------------------------------
echo [3/6] Committing changes ...
set "COMMIT_MSG=chore: release v%NEW_VERSION%"
git add -A
if !errorlevel! neq 0 (
    echo [FAIL] git add failed
    exit /b 1
)
git commit -m "%COMMIT_MSG%"
if !errorlevel! neq 0 (
    echo        [INFO] nothing new to commit, continuing.
) else (
    echo        [OK] commit made
)
echo.

:: ---- Step 4: git tag -----------------------------------------------
echo [4/6] Tagging v%NEW_VERSION% ...
:: Use -a -m before the tag name so Windows git parses args correctly.
git tag -a v%NEW_VERSION% -m "Release v%NEW_VERSION%"
if !errorlevel! neq 0 (
    echo [FAIL] git tag failed
    exit /b 1
)
echo        [OK] tag created
echo.

:: ---- Step 5: git push (branch + tag) -------------------------------
if "%SHOULD_PUSH%"=="0" goto :skip_push
echo [5/6] Pushing to origin ...
for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
echo        pushing branch: %BRANCH%
git push origin %BRANCH%
if !errorlevel! neq 0 (
    echo [FAIL] git push origin %BRANCH% failed
    exit /b 1
)
echo        pushing tag: v%NEW_VERSION%
git push origin v%NEW_VERSION%
if !errorlevel! neq 0 (
    echo [FAIL] git push origin v%NEW_VERSION% failed
    exit /b 1
)
echo.
goto :install_phase
:skip_push
echo [5/6] Skipping push, --no-push was set
echo.
:install_phase

:: ---- Step 6: Update dep string + npm install in every consumer -----
:: Always runs. Every publish ships the new version to every consumer
:: without manual intervention. The actual work is delegated to a Python
:: script — the previous in-CMD implementation (for-loop + subroutine +
:: delayed expansion) was unreliable on some Windows builds and produced
:: 9 "drive not found" errors with skip=3. The Python script handles
:: path resolution, dep-string updates, and npm install for all 3
:: consumers deterministically. The backend gets --legacy-peer-deps to
:: work around the zod 3 vs 4 peer dep conflict with @langchain.
echo [6/6] Installing v%NEW_VERSION% in consumer repos ...
echo.
set "HAD_FAIL=0"
python "%~dp0scripts\install_in_consumers.py" "%NEW_VERSION%"
if !errorlevel! neq 0 (
    echo.
    echo [WARN] Consumer install reported failures. See output above.
    echo        Fix the failing consumer and re-run publish.bat ^- the
    echo        next bump will retry it.
    set "HAD_FAIL=1"
)
echo.

:: ---- Final summary ----------------------------------------------
:: Use goto-based control flow instead of nested if/else — CMD's parser
:: chokes on deeply nested if/else after a for loop.
if "%SHOULD_PUSH%"=="0" goto :summary_nopush

echo ============================================================
echo   [OK] Done - v%NEW_VERSION% published
echo ============================================================

if "%HAD_FAIL%"=="1" goto :next_steps_failures
goto :next_steps_success

:next_steps_failures
echo.
echo Consumers with install failures still need manual attention.
echo.
goto :end

:next_steps_success
echo.
echo Next steps - roll the new version to prod:
echo   build-and-push\storefront.bat
echo   build-and-push\frontend.bat
echo   build-and-push\backend.bat
echo.
goto :end

:summary_nopush
echo ============================================================
echo   [OK] Local release staged - NOT pushed
echo ============================================================
for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
echo.
echo When ready run:
echo    git push origin %BRANCH%
echo    git push origin v%NEW_VERSION%

:fail
echo.
echo [FAIL] publish.bat aborted at a failed step. See output above.
exit /b 1

:end
exit /b 0
