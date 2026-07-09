@echo off
setlocal enabledelayedexpansion

:: ---------------------------------------------------------------------------
:: launchstore-shared publish script
::
:: Reads current version, bumps it, rebuilds dist/, commits, tags, pushes.
::
:: Usage:
::   publish.bat              [default: patch bump]
::   publish.bat patch        [explicit patch bump]
::   publish.bat minor        [minor bump]
::   publish.bat major        [major bump]
::   publish.bat --no-push    [skip git push; stage locally only]
::   publish.bat --skip-build [skip npm run build; assumes dist/ is fresh]
::   publish.bat --no-push --skip-build [dry-run with current dist/]
::
:: After a successful run, bump the dep string in each consumer's
:: package.json and run .\build-and-push\frontend.bat / backend.bat to roll.
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

:: Script sits at the repo root
set "ROOT_DIR=%~dp0"
cd /d "%ROOT_DIR%"

echo.
echo ============================================================
echo   publish.bat       ^|       bump: %BUMP_TYPE%
echo   cwd: %ROOT_DIR%
echo ============================================================
echo.

:: ---- Step 1: Bump version in package.json ---------------------------
echo [1/5] Bumping version ...
for /f "tokens=*" %%i in ('node -e "var p=require('./package.json');var v=p.version.split('.').map(Number);if(process.argv[1]==='major')v[0]++;else if(process.argv[1]==='minor')v[1]++;else v[2]++;var nv=v.join('.');p.version=nv;require('fs').writeFileSync('package.json',JSON.stringify(p,null,2)+'\n');console.log(nv);" %BUMP_TYPE%') do set "NEW_VERSION=%%i"
if !errorlevel! neq 0 goto :fail
echo        new version: %NEW_VERSION%
echo.

:: ---- Step 2: npm run build ------------------------------------------
if "%SHOULD_BUILD%"=="1" goto :run_build
echo [2/5] Skipping npm run build (--skip-build)
goto :build_done
:run_build
echo [2/5] Running npm run build ...
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
echo [3/5] Committing changes ...
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
echo [4/5] Tagging v%NEW_VERSION% ...
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
echo [5/5] Pushing to origin ...
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
echo ============================================================
echo   [OK] Done - v%NEW_VERSION% published
echo ============================================================
echo.
echo Next steps - bump the dep string in each consumer:
echo   1a. launchstore-frontend\package.json
echo   1b. launchstore-storefront\package.json
echo   1c. launchstore\package.json
echo Change "@launchstore/shared-puck": "github:davidkhanpk/launchstore-shared#v0.0.3"
echo to                       "github:davidkhanpk/launchstore-shared#v%NEW_VERSION%"
echo   2. build-and-push\backend.bat
echo   3. build-and-push\frontend.bat
echo.
goto :end
:skip_push
echo [5/5] Skipping push, --no-push was set
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
