# Samogitian Chronicle

Monumental, ongoing history book. Authoring in Markdown/MDX under `src/content`.

## Develop
- Node 20+
- `npm ci`
- `npm run dev`

## Content model
- `src/content/chapters`: `title`, `subtitle?`, `order?`, `date?`
- `src/content/people`: `name`, `role`, `birth?`, `death?`
- `src/content/timeline`: `{ date, title, link? }`

## Publish
Push to `main` → GitHub Pages deploys automatically.
Use `staging` branch for drafts/testing (workflow duplicate can be added).
