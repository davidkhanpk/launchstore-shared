#!/usr/bin/env python3
"""
install_in_consumers.py — update the @launchstore/shared-puck dep string in
every launchstore consumer repo and run a focused install of just that one
package (not a full `npm install` of the whole tree).

This is what publish.bat calls after a successful version bump + git push.

Why focused install instead of full `npm install`:
  - A full `npm install` in a big repo can take 1+ minute and trigger
    re-resolution of every package, which is unnecessary and can introduce
    unrelated lockfile churn.
  - We're only changing the version pin for ONE package. The
    `npm install <pkg>@<spec>` form updates only that one entry, finishes
    in a few seconds, and leaves the rest of the lockfile untouched.
  - The lockfile's resolved commit hash for the github: dep still needs
    to be swapped though, otherwise npm will detect an inconsistency and
    fall back to a full resolution. So we edit that one line.

Usage:
    python install_in_consumers.py <new_version>
    e.g. python install_in_consumers.py 0.1.30

Exit codes:
    0 = all consumers updated + focused install succeeded
    1 = at least one consumer failed (details printed to stderr)
"""
from __future__ import annotations
import os
import re
import subprocess
import sys
from pathlib import Path

DEP_KEY = "@launchstore/shared-puck"
DEP_RE = re.compile(rf'"{re.escape(DEP_KEY)}"\s*:\s*"[^"]*"')
DEP_URL = "github:davidkhanpk/launchstore-shared"
BOM = b"\xef\xbb\xbf"

# Old commit hashes we've shipped previously. Add new ones as releases go
# out so any consumer that somehow still has a stale pin gets unstuck.
# These are populated from the git tag → commit history of launchstore-shared.
KNOWN_OLD_HASHES = [
    "2b9ba83087ff6798449381e2f9bf3a5a6a38e748",  # v0.1.11
    "5f825f508ac8320427ff7927dec63bcc4a901cc2",  # v0.0.9
    "cbedbadf1f7baecf1014915ed9753d36fca6e6dd",  # v0.1.29
    "9183283dd56ead4518a591abf6ba616b086dcb7a",  # v0.1.23
    "ea37ed792d8801efa5d3ba44222444b2e02e2849",  # v0.1.27
    "296707273d2fd1f35b379f0537817b9e60171630",  # v0.1.23 (^{})
    "5ea358d3f36b20dff280f7cc686b00fd436cb3bf",  # v0.1.21 (^{})
    "8147b47067e4af9ace1383b04b38e4ccc9f79717",  # v0.1.27 (^{})
]

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
    new_dep = f'"{DEP_KEY}": "{DEP_URL}#v{new_version}"'
    matches = DEP_RE.findall(text)
    if not matches:
        return (False, "")
    if matches[0] == new_dep:
        return (False, new_dep)  # already up to date
    new_text = DEP_RE.sub(new_dep, text)
    write_text(p, new_text, had_bom=had_bom)
    return (True, new_dep)


def get_new_commit_hash(shared_repo: Path, new_version: str) -> str | None:
    """Resolve the new tag to a commit hash in the shared repo."""
    try:
        out = subprocess.run(
            ["git", "rev-parse", f"v{new_version}", "--"],
            cwd=shared_repo,
            capture_output=True,
            text=True,
            check=True,
        )
        return out.stdout.strip().splitlines()[0]
    except Exception:
        return None


def update_lockfile_hash(consumer_dir: Path, new_commit: str) -> int:
    """Swap any KNOWN_OLD_HASHES for `new_commit` in this consumer's lockfile.

    The lockfile's `resolved` line for a github: dep pins a specific commit
    hash. If the dep string changes but the lockfile hash doesn't, npm will
    detect the inconsistency and re-resolve the whole tree. We patch the
    hash in place so the next `npm install <pkg>...` is a no-op for
    everything except the one entry we're upgrading.
    """
    lockfile = consumer_dir / "package-lock.json"
    if not lockfile.exists():
        return 0
    raw = lockfile.read_text(encoding="utf-8")
    total = 0
    for old in KNOWN_OLD_HASHES:
        new_raw, n = re.subn(
            rf"({re.escape(DEP_URL)}\.git)#{re.escape(old)}",
            rf"\1#{new_commit}",
            raw,
        )
        if n:
            raw = new_raw
            total += n
    if total:
        lockfile.write_text(raw, encoding="utf-8")
    return total


def run_focused_install(cwd: Path, new_version: str, flags: list[str]) -> tuple[bool, str]:
    """Run `npm install @launchstore/shared-puck@<github:...#vX.Y.Z>` only.

    This updates the one package in node_modules + lockfile instead of
    resolving the entire tree. Much faster (~5s vs 1+ min).
    """
    spec = f"{DEP_KEY}@{DEP_URL}#v{new_version}"
    cmd_parts = " ".join(["npm", "install", spec, *flags])
    try:
        result = subprocess.run(
            cmd_parts,
            cwd=cwd,
            capture_output=True,
            text=True,
            timeout=300,  # 5 min cap; this should normally finish in seconds
            shell=True,
        )
    except subprocess.TimeoutExpired:
        return (False, "TIMEOUT after 5min")
    except FileNotFoundError:
        return (False, "npm not found in PATH")

    if result.returncode == 0:
        last = ""
        for line in reversed(result.stdout.splitlines()):
            line = line.strip()
            if line and not line.startswith("npm warn"):
                last = line
                break
        return (True, last or "ok")
    return (False, f"exit code {result.returncode}")


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: install_in_consumers.py <new_version>", file=sys.stderr)
        return 1
    new_version = sys.argv[1].lstrip("v")
    shared_repo = Path(__file__).resolve().parent.parent  # scripts/.. = repo root
    new_commit = get_new_commit_hash(shared_repo, new_version)
    if not new_commit:
        print(f"  [WARN] could not resolve v{new_version} to a commit hash; lockfile may need a manual patch", file=sys.stderr)
    print(f"=== installing v{new_version} in {len(CONSUMERS)} consumer repos ===")
    if new_commit:
        print(f"  new commit hash: {new_commit}")
    print()

    results: list[tuple[str, bool, str]] = []

    for name, pj_path, flags in CONSUMERS:
        consumer_dir = pj_path.parent
        if not pj_path.exists():
            print(f"  [FAIL] {name}: package.json not found at {pj_path}")
            results.append((name, False, "no package.json"))
            continue

        # 1. Update the dep string in package.json
        changed, new_dep = update_dep_string(pj_path, new_version)
        if new_dep:
            print(f"  [{name}] dep string -> {new_dep}")
        else:
            print(f"  [{name}] [WARN] no @launchstore/shared-puck entry in package.json")

        # 2. Patch the lockfile's resolved commit hash so npm install is a no-op
        if new_commit:
            n = update_lockfile_hash(consumer_dir, new_commit)
            if n:
                print(f"  [{name}] lockfile: patched {n} resolved-hash entry/entries")

        # 3. Focused install of just the shared-puck package
        print(f"  [{name}] running: npm install {DEP_KEY}@<{DEP_URL}#v{new_version}>")
        ok, detail = run_focused_install(consumer_dir, new_version, flags)
        if ok:
            print(f"  [{name}] [OK]   {detail}")
            results.append((name, True, "ok"))
        else:
            print(f"  [{name}] [FAIL] {detail}")
            results.append((name, False, detail))
        print()

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
