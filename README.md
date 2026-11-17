# Malique Spooner — Portfolio

Source for the personal portfolio at [maliquespooner.com](https://maliquespooner.com/).

The site presents Malique as a Computer Science student and product builder, with project landings for Night Economy, Origin & Acre, and Fantasy Live.

## Selected projects

- **Night Economy** — hospitality pricing concept with public, no-sign-in venue and market demos, plus a guest-facing mobile menu.
- **Origin & Acre** — public read-only coffee supply demo using synthetic records, with farm search, buyer pledges, and export-lot coordination.
- **Fantasy Live** — information page for a phone-first five-a-side fantasy football concept and scoring model; a working demo is not available yet.

## Interactive hero

The landing page uses a custom WebGL point cloud to render the name in perspective. The name is assembled from particles that fly in from outside the viewport on entry; the cursor pushes nearby points away like opposing magnets. Pointer movement also tilts the field, and scrolling carries it out of view as the project story begins. The interaction respects reduced-motion preferences and falls back to a readable text title when WebGL is unavailable.

## Run locally

Open `index.html` in a browser. The main portfolio is self-contained; project pages live at `/Night-Economy/`, `/Origin-Acre/`, and `/Fantasy-Live/`. Earlier project URLs forward to these canonical pages.

This repository contains only the portfolio website source and documentation. Keep private work files, CVs, credentials, and raw listening history out of this repository.
## Nike film

The portfolio includes a web-optimized 1080p export of the independent football concept film “Joy is the Game.” The Premiere Pro project contains a poem audio track, piano music, and a 16:9 sequence; the edit moves through football play and shared celebrations. The original 4K export is kept locally in `media/nike/source/` and excluded from Git; the optimized public MP4 and poster are included under `media/nike/`. The film is a speculative concept and is not affiliated with or commissioned by Nike.
