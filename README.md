# casimirwypyski.com

Personal website of Casimir Wypyski — blog, CV, and reading list. Built with
[Astro](https://astro.build) and deployed to GitHub Pages on a custom domain.

## Editing the site

Everyday content lives in three places — see **[CONTENT.md](./CONTENT.md)** for
the full cheat sheet:

- `src/content/blog/` — blog posts (one `.md` file per post)
- `src/data/cv.ts` — the CV
- `src/data/reading.ts` — the reading list

## Local development

```sh
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build to ./dist
```

Pushing to `main` deploys automatically via GitHub Actions.

## Copyright

© 2026 Casimir Wypyski. **All rights reserved.** This code, design, and content
are not licensed for reuse — see [LICENSE](./LICENSE). Please do not fork, copy,
or repurpose this site without permission.
