# Sofia Lindelow Portfolio

Sofia Lindelow's public portfolio: a 1990s desktop on a pixel-art computer. Folder icons open windows for Work, each project, Research, Writing, Education and Contact.

RELAY demo video: <https://youtu.be/vvf3aMxv6k8>

## Layout

Plain static files in `public/`, no build step.

- `public/index.html`: the desktop, windows and routing (`#/work`, `#/relay` and one route per project).
- `public/shared/content.js`: site copy, word for word from the approved manuscript.
- `public/shared/kit.js`, `kit.css`: drawn diagrams and shared styles.
- `public/shared/code.js`: code excerpts, pinned to commits in the public project repositories.
- `public/shared/films.js`: the RELAY motion graphic.
- `public/media/`: EEG figures. `public/fonts/`: self-hosted VT323 (SIL Open Font License 1.1).
- `public/og.png`: link preview image. `public/Sofia_Lindelow_CV.pdf`: public CV.

## Update flow

1. Edit the files in `public/`.
2. Preview with `python3 -m http.server 8765 --directory public` and check desktop, phone width and reduced motion.
3. Commit to a branch and open a pull request for a Netlify deploy preview.
4. Merge to `main` only after Sofia approves the public version. Netlify deploys `main` automatically.

## Netlify settings

- Build command: none
- Publish directory: `public`
- Production branch: `main`

## Public content boundary

Lake House Group may be named on this portfolio. Client identities, internal project names, confidential implementation details, and unsupported outcomes must stay out of the public repository.
