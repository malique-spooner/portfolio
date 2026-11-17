from __future__ import annotations

from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / "site-dist"
DIRECTORIES = (
    "Night-Economy",
    "Origin-Acre",
    "Fantasy-Live",
    "night",
    "projects/agri",
    "projects/fantasy-5",
)


def main() -> None:
    if DESTINATION.exists():
        shutil.rmtree(DESTINATION)
    DESTINATION.mkdir(parents=True)
    shutil.copy2(ROOT / "index.html", DESTINATION / "index.html")
    for directory in DIRECTORIES:
        shutil.copytree(ROOT / directory, DESTINATION / directory)
    print(f"Built portfolio site assets in {DESTINATION}")


if __name__ == "__main__":
    main()
