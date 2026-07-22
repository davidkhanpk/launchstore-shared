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
:: Always runs. This is the standard release flow — every publish ships
:: the new version to every consumer without manual intervention. Each
:: consumer is its own subdirectory under the parent repo:
::   ../launchstore-frontend  (Next.js Puck editor)
::   ../launchstore-storefront (Next.js Medusa renderer)
::   ../..                    (NestJS parent backend)
::
:: The backend (NestJS parent) needs --legacy-peer-deps to work around the
:: zod 3 vs 4 peer dep conflict with @langchain.
echo [6/6] Installing v%NEW_VERSION% in consumer repos ...
echo.

:: Build the dep string. Note: this script will set the entry in BOTH
:: dependencies and devDependencies if present (some consumers keep it in
:: devDependencies), so consumers don't have to move it.
set "NEW_DEP=github:davidkhanpk/launchstore-shared#v%NEW_VERSION%"

:: ---- Consumer table ---------------------------------------------------
:: Each consumer has its own entry: REL_<name> (path) and FLAGS_<name>
:: (npm install flags). The for loop below uses sequential if-chains
:: (no nested parens, no delayed-expansion indirection) to pick them
:: up — CMD's parser reliably chokes on the more clever patterns, and
:: we hit that hard. Plain string compares work.
set "CONSUMER_LIST=frontend storefront backend"

set "CONSUMER_OK=0"
set "CONSUMER_SKIP=0"
set "CONSUMER_FAIL=0"

for %%V in (%CONSUMER_LIST%) do (
    :: Use %%V directly in if-compares instead of bouncing through
    :: !CNAME!. Delayed expansion inside a for loop's parens block is
    :: fragile on some Windows builds and can leave the !-bound variable
    :: empty even after the same code sets it via `set "X=%%V"`. The
    :: for-loop variable itself is reliably available as %%V, so we just
    :: use that directly. This is what makes the consumer install work
    :: end-to-end.
    set "CREL="
    set "CFLAGS="
    if "%%V"=="frontend"   set "CREL=launchstore-frontend"
    if "%%V"=="storefront" set "CREL=launchstore-storefront"
    if "%%V"=="backend"    set "CREL=.."
    if "%%V"=="backend"    set "CFLAGS=--legacy-peer-deps"
    call :install_in_consumer "%%V" "!CREL!" "!CFLAGS!"
    echo.
)

echo        install summary: ok=!CONSUMER_OK! skip=!CONSUMER_SKIP! fail=!CONSUMER_FAIL!
if !CONSUMER_FAIL! gtr 0 (
    echo.
    echo [WARN] Some consumer installs failed. Fix the failing consumer
    echo        and re-run publish.bat — the next bump will retry them.
    set "HAD_FAIL=1"
) else (
    set "HAD_FAIL=0"
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

:: ---- Subroutine: install in one consumer ----------------------------
:: Called from the for loop in step 6 with three args:
::   %~1 = consumer name (e.g. "frontend")
::   %~2 = relative path from launchstore-shared/ (e.g. "launchstore-frontend" or "..")
::   %~3 = npm install flags (e.g. "" or "--legacy-peer-deps")
::
:: Side effects:
::   - mutates CONSUMER_OK / CONSUMER_SKIP / CONSUMER_FAIL counters
::   - pushes/pops the consumer's cwd
::   - on success: consumer's package.json + node_modules are updated
::
:: Why a subroutine: inlining this in the for loop made the nesting 4 levels
:: deep (for/if/if/if) and CMD's parser choked on the `else if` chain with
:: "else was unexpected at this time". Extracting to a subroutine keeps
:: nesting to 2 levels which is reliable.
:install_in_consumer
set "CNAME=%~1"
set "CREL=%~2"
set "CFLAGS=%~3"

if "!CREL!"=="" (
    echo        [SKIP] !CNAME! (parent backend, run separately)
    set /a CONSUMER_SKIP=CONSUMER_SKIP+1
    goto :eof
)

set "CDIR=%PARENT_DIR%\%CREL%"
if not exist "%CDIR%\package.json" (
    echo        [SKIP] !CNAME! — %CDIR%\package.json not found
    set /a CONSUMER_SKIP=CONSUMER_SKIP+1
    goto :eof
)

echo        -------- !CNAME! ^(!CDIR!^) --------
pushd "%CDIR%" >nul
if !errorlevel! neq 0 (
    echo        [FAIL] could not cd into %CDIR%
    set /a CONSUMER_FAIL=CONSUMER_FAIL+1
    goto :eof
)

:: 6a. Update dep string in package.json.
::     Pass only the version; node script builds the full dep string from it.
::     Exit code 2 = no entry to update (skip, don't fail).
::     Exit code 0 = updated successfully.
::     Other non-zero = unexpected error (fail).
::
:: IMPORTANT: argv[1] is the version, not argv[2]. With
:: `node -e SCRIPT ARG1` the arg lands at argv[1] because Node does not
:: inject a [eval] placeholder for -e scripts in modern versions. We
:: confirmed this with:
::   argv[0] = node path
::   argv[1] = "0.1.17"  (the version)
::   argv[2] = undefined
:: The earlier "process.argv[2]" produced "#vundefined" — a silent bug
:: that wrote garbage to consumers' package.json.
node -e "var p=require('./package.json');var v=process.argv[1];var d='github:davidkhanpk/launchstore-shared#v'+v;var k='@launchstore/shared-puck';var hit=false;if(p.dependencies&&p.dependencies[k]){p.dependencies[k]=d;hit=true}if(p.devDependencies&&p.devDependencies[k]){p.devDependencies[k]=d;hit=true}if(!hit){process.stderr.write('no entry to update, skipping\n');process.exit(2)}var raw=JSON.stringify(p,null,2)+'\n';var fs=require('fs');var b=Buffer.from(raw,'utf8');fs.writeFileSync('package.json',b);console.log('   dep string ^-> '+d);" "%NEW_VERSION%" 2>nul
set "NODE_RC=!errorlevel!"

if !NODE_RC! equ 2 (
    echo        [SKIP] no @launchstore/shared-puck entry in package.json
    set /a CONSUMER_SKIP=CONSUMER_SKIP+1
    popd >nul
    goto :eof
)
if !NODE_RC! neq 0 (
    echo        [FAIL] failed to update package.json ^(!NODE_RC!^)
    set /a CONSUMER_FAIL=CONSUMER_FAIL+1
    popd >nul
    goto :eof
)

:: 6b. Run npm install. Use the per-consumer flags (the backend needs
::     --legacy-peer-deps to work around the zod 3 vs 4 peer dep
::     conflict with @langchain).
echo        running: npm install !CFLAGS!
call npm install !CFLAGS!
if !errorlevel! neq 0 (
    echo        [FAIL] npm install failed in !CNAME!
    set /a CONSUMER_FAIL=CONSUMER_FAIL+1
) else (
    echo        [OK]   installed in !CNAME!
    set /a CONSUMER_OK=CONSUMER_OK+1
)
popd >nul
goto :eof

:fail
echo.
echo [FAIL] publish.bat aborted at a failed step. See output above.
exit /b 1

:end
exit /b 0
