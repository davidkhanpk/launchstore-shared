# Setup — pushing this repo to a remote

This repo currently exists only locally at `D:\Repos\launchstore\launchstore-shared`
(initialized 2026-07-06). To publish it as a real remote the consumers can pull
from, follow these steps.

## Step 1 — create the remote

Pick one:

- **GitHub:** create a new repo at `github.com/launchstore/shared-puck` (private during WIP)
- **GitLab / Bitbucket / self-hosted:** equivalent

Record the canonical URL (e.g. `git@github.com:launchstore/shared-puck.git`).

## Step 2 — push the local repo

```bash
cd D:\Repos\launchstore\launchstore-shared

# First commit (if not done yet) — see commit instructions at the bottom of this file
git add -A
git commit -m "chore: initial scaffolding as standalone repo (extracted from launchstore monorepo)"

# Add the remote
git remote add origin <canonical-url-from-step-1>

# Push
git push -u origin main
```

## Step 3 — protect main on the remote

In the remote's settings:
- Require PR + 1 review before merge
- Require CI to pass (the GitHub Actions workflow in `.github/workflows/ci.yml`
  runs on every PR automatically once this repo exists on GitHub)
- Disable direct pushes to `main`

## Step 4 — update the 3 consumers to use the remote path

The consumers currently point at `file:` paths (dev convenience). For CI / other
contributors, switch to the remote:

```json
// launchstore-backend/package.json (and launchstore-frontend, launchstore-storefront)
"@launchstore/shared-puck": "github:launchstore/shared-puck#v0.0.1"
```

For local dev, contributors can either:
1. Keep the `file:` path (what's there today)
2. Or `npm link @launchstore/shared-puck` after `npm run build` in shared

See `MIGRATION.md` for the queue.

## Common pitfalls

- **Parent repo swallows shared changes.** `launchstore/.gitignore` already excludes
  `launchstore-shared/` (line 3). If you ever `git add launchstore-shared/` from
  the parent, git will refuse (the dir has its own `.git`). If it doesn't,
  clean with `git rm --cached -r launchstore-shared/`.
- **Symlinked dev path.** `launchstore-storefront/package.json` uses
  `file:./launchstore-shared-link` (a symlink to `../launchstore-shared`). When
  you swap to `github:`, trash the symlink too.
- **CI cache invalidation.** Bumping `cache-dependency-path` to the lockfile in
  the workflow covers npm cache. If you add a new build script, invalidate the
  artifact by bumping `dist/` cache key.

## First-commit instructions (only if you've never committed in this repo)

```bash
cd D:\Repos\launchstore\launchstore-shared
git add -A
git commit -m "chore: initial scaffolding as standalone repo (extracted from launchstore monorepo)"
```