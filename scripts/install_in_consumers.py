#!/usr/bin/env python3
"""
install_in_consumers.py — robustly update @launchstore/shared-puck dep string
in every launchstore consumer repo, then run `npm install` so package-lock.json
gets the new version.

This replaces the broken CMD subroutine in publish.bat. The bat file calls this
after a successful version bump + git push.

Usage:
    python install_in_consumers.py <new_version>
    e.g. python install_in_consumers.py 0.1.23

Exit codes:
    0 = all consumers updated + npm install succeeded
    1 = at least one consumer failed (details printed to stderr)

Env overrides (rarely needed):
    LAUNCHSTORE_PARENT_DIR  - absolute path of the parent dir (D:\\Repos\\launchstore)
                              Defaults to the script's inferred parent.
"""
from __future__ import annotations
import json
import os
import re
import subprocess
import sys
from pathlib import Path

DEP_KEY = "@launchstore/shared-puck"
DEP_RE = re.compile(rf'"{re.escape(DEP_KEY)}"\s*:\s*"[^"]*"')
BOM = b"\xef\xbb\xbf"

# Consumer table. Each entry is (display_name, package.json path, npm install flags).
# Order matches the previous publish.bat behavior (frontend, storefront, backend).
CONSUMERS: list[tuple[str, Path, list[str]]] = [
    ("frontend",   Path(r"D:\Repos\launchstore\launchstore-frontend\package.json"),   []),
    ("storefront", Path(r"D:\Repos\launchstore\launchstore-storefront\package.json"), []),
    ("backend",    Path(r"D:\Repos\launchstore\package.json"),                        ["--legacy-peer-deps"]),
]


def read_text(p: Path) -> tuple[str, bool]:
    raw = p.read_bytes()
    had_bom = raw.startswith(BOM)
    if had_bom:
        raw = raw[3:]
    return raw.decode("utf-8"), had_bom


def write_text(p: Path, text: str, *, had_bom: bool) -> None:
    payload = text.encode("utf-8")
    if had_bom:
        payload = BOM + payload
    p.write_bytes(payload)


def update_dep_string(p: Path, new_version: str) -> tuple[bool, str]:
    """Update the @launchstore/shared-puck dep string. Returns (changed, new_string)."""
    text, had_bom = read_text(p)
    new_dep = f'"{DEP_KEY}": "github:davidkhanpk/launchstore-shared#v{new_version}"'
    matches = DEP_RE.findall(text)
    if not matches:
        return (False, "")
    if matches[0] == new_dep:
        return (False, new_dep)  # already up to date
    # Replace ALL occurrences (defensive: shouldn't be more than one, but just in case)
    new_text = DEP_RE.sub(new_dep, text)
    write_text(p, new_text, had_bom=had_bom)
    return (True, new_dep)


def run_npm_install(cwd: Path, flags: list[str]) -> tuple[bool, str]:
    """Run `npm install <flags>` in `cwd`. Returns (ok, summary_line)."""
    # On Windows, `npm` is a .cmd shim. subprocess.run with a list on Windows
    # uses CreateProcess which does NOT auto-resolve .cmd via PATHEXT, so we
    # need shell=True (or `cmd /c npm ...`). shell=True inherits the user's
    # PATH, which is what we want.
    cmd_parts = " ".join(["npm", "install", *flags])
    try:
        result = subprocess.run(
            cmd_parts,
            cwd=cwd,
            capture_output=True,
            text=True,
            timeout=900,  # 15 min max
            shell=True,
        )
    except subprocess.TimeoutExpired:
        return (False, "TIMEOUT after 15min")
    except FileNotFoundError:
        return (False, "npm not found in PATH")

    if result.returncode == 0:
        # Try to extract the final summary line
        last_meaningful = ""
        for line in reversed(result.stdout.splitlines()):
            line = line.strip()
            if line and not line.startswith("npm warn"):
                last_meaningful = line
                break
        return (True, last_meaningful or "ok")
    return (False, f"exit code {result.returncode}")


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: install_in_consumers.py <new_version>", file=sys.stderr)
        return 1
    new_version = sys.argv[1].lstrip("v")
    print(f"=== installing v{new_version} in {len(CONSUMERS)} consumer repos ===")
    print()

    results: list[tuple[str, bool, str]] = []  # (name, ok, detail)

    for name, pj_path, flags in CONSUMERS:
        if not pj_path.exists():
            print(f"  [FAIL] {name}: package.json not found at {pj_path}")
            results.append((name, False, "no package.json"))
            continue

        # Update the dep string
        changed, new_dep = update_dep_string(pj_path, new_version)
        if new_dep:
            print(f"  [{name}] dep string -> {new_dep}")
        else:
            print(f"  [{name}] [WARN] no @launchstore/shared-puck entry in package.json")

        # Run npm install
        npm_flags_str = " ".join(flags) if flags else ""
        print(f"  [{name}] running: npm install {npm_flags_str}".rstrip())
        ok, detail = run_npm_install(pj_path.parent, flags)
        if ok:
            print(f"  [{name}] [OK]   {detail}")
            results.append((name, True, "ok"))
        else:
            print(f"  [{name}] [FAIL] {detail}")
            results.append((name, False, detail))
        print()

    # Summary
    ok_count = sum(1 for _, ok, _ in results if ok)
    print("=== install summary ===")
    for name, ok, detail in results:
        status = "OK  " if ok else "FAIL"
        print(f"  {name:12s} {status}  {detail}")
    print()
    print(f"  total: ok={ok_count} fail={len(results) - ok_count}")
    return 0 if ok_count == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
