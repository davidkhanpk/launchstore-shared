#!/usr/bin/env python3
"""Strip BOM from package.json (Next.js JSON.parse can't handle it)."""
import sys
from pathlib import Path

BOM = b"\xef\xbb\xbf"

for p_str in sys.argv[1:]:
    p = Path(p_str)
    if not p.exists():
        print(f"  {p}: missing")
        continue
    raw = p.read_bytes()
    if raw.startswith(BOM):
        p.write_bytes(raw[3:])
        print(f"  {p}: BOM stripped")
    else:
        print(f"  {p}: no BOM (already clean)")
