# noeljo23.github.io

Personal site of Noel John, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + static build into dist/
```

## Edit content

| What | Where |
|---|---|
| Name, bio, experience, awards, education, skills | `src/data/site.ts` |
| Project case studies | `src/content/projects/*.md` (one file per project; `order` sets position, newest first) |
| Images | `src/assets/` (optimised automatically at build) |
| Colours and type | `src/styles/global.css` |

## CV and share image

The downloadable CV and the OpenGraph image are generated, not hand-edited:

```bash
python scripts/build_cv.py   # scripts/cv.html -> public/Noel-John-CV.pdf (needs Chrome)
python scripts/build_og.py   # -> public/og.png (needs Pillow)
```

The painting beside the text is `src/assets/dusk.jpg`, shown uncropped.

## Custom domain

To move to `noeljohn.dev`: buy the domain, add it under the repo's Settings → Pages, point the DNS at GitHub Pages, then change `site` in `astro.config.mjs` and the URL in `public/robots.txt`.
