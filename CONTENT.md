# Editing this site — a cheat sheet

Everything you'll change day-to-day lives in **three places**. No framework
knowledge needed — you edit a Markdown file or a list, preview, commit, done.

```
src/content/blog/     ← blog posts        (one .md file per post)
src/data/cv.ts        ← the CV page       (education, publications, skills…)
src/data/reading.ts   ← the reading list  (books)
```

---

## Preview while you edit

From the project folder (`Desktop/Website`), in a terminal:

```sh
npm run dev
```

Open **http://localhost:4321**. The page live-reloads as you save. Press
`Ctrl+C` in the terminal to stop it.

---

## 1. Add a blog post

Create a new file in `src/content/blog/`, e.g. `my-post.md`. The filename
(minus `.md`) becomes the URL: `my-post.md` → `/blog/my-post`.

Start it with this block (the "frontmatter"), then write below the `---`:

```md
---
title: "Your Post Title"
description: "One sentence shown in the blog list and previews."
pubDate: 2026-08-26
tags: ["ai-governance", "security"]
draft: false
---

Write your post here in Markdown.

## A heading

A paragraph. **Bold**, *italic*, and [a link](https://example.com) all work.

- a list item
- another
```

Field notes:
- **pubDate** — `YYYY-MM-DD`. Posts sort newest-first by this date.
- **tags** — optional; delete the line or use `[]` for none.
- **draft: true** — hides the post from the site (use it for works-in-progress).
  Set to `false` (or delete the line) to publish.

### Adding images to a post

Drop the image file into `src/content/blog/` next to your `.md` file, then
reference it with a **relative path**:

```md
![A short description of the image](./my-picture.jpg)
```

Astro optimises it automatically. Keep the `./` — it tells Astro the image
sits beside the post. For a caption, the description text in the `![...]` is
used as the alt text; write it descriptively.

### The blog intro text

The "Writing" heading, the lede, and the one-line disclaimer under it are not a
post — they live in `src/pages/blog/index.astro`, near the top, as plain text:

```html
<h1>Writing</h1>
<p class="lede">Notes on international affairs, technology policy, and AI governance.</p>
<p class="disclaimer">Views represent only those of the stated author(s). Writing contains no AI-generated prose unless otherwise stated.</p>
```

Edit the text between the tags; leave the tags themselves alone.

---

## 2. Edit the CV

Open `src/data/cv.ts`. Each section is one object in the `cvSections` list.
**Order in the list = order on the page.**

**To add an entry** (a degree, role, or publication) to an existing section,
copy an existing `{ ... }` block inside that section's `entries` and edit it:

```ts
{
  heading: 'The Hertie School',                 // main line
  subheading: 'Master of International Affairs', // second line (optional)
  period: 'July 2025 – June 2026',               // right-hand date (optional)
  meta: 'Berlin, Germany',                       // right-hand 2nd line (optional)
  note: 'Concentration in international security.', // italic note (optional)
  bullets: [                                     // optional bullet points
    'A point about the work.',
    'Another point.',
  ],
  link: 'https://example.com/the-paper',         // optional: makes the heading a clickable link (opens in a new tab)
},
```

**To add a whole new section**, append one of these to `cvSections`:

```ts
// A list-style section (like Education / Publications):
{ type: 'entries', title: 'Experience', entries: [ /* entry objects */ ] },

// A skills-style section (grouped tag lists):
{ type: 'skills', title: 'Tools', groups: [
  { category: 'Languages', items: ['English (native)', 'French (C1)'] },
] },
```

Any optional field can be left out — just delete that line.

---

## 3. Edit the reading list

Open `src/data/reading.ts`. Add a book by appending to the `books` list:

```ts
{
  title: 'Book Title',
  author: 'Author Name',
  finished: true,   // true = "Read"  |  false = "Currently reading"
  link: 'https://www.goodreads.com/...',  // optional summary link
},
```

- Flip `finished` between `true`/`false` to move a book between the two
  groups on the page.
- Drop the `link` line if there's no summary to point to.

---

## 4. Edit the map ("more about me")

The interactive map at the bottom of the CV is driven by `src/data/places.ts`.
There are three lists — `lived`, `visited`, and `wantToVisit`. Any country you
**don't** list stays uncoloured ("never lived in"). Add a country to a list:

```ts
{
  country: 'IT',                 // ISO 3166-1 alpha-2 code (see below)
  capital: 'Rome',               // optional subtitle
  notes: ['A week in Tuscany', 'Loved Florence'],  // optional bullet points
},
```

- **Country codes** are the 2-letter ISO codes (`DE`, `US`, `FR`, `JP`, …).
  Full list: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
- Put a country in **only one** list.
- **Recolour** the map by editing the `colors` block at the top of the file.
- `capital` and `notes` are optional — omit them and the country still colours.

You should not need to touch the map itself. But if you ever want to regenerate
the base map (it's committed as `src/data/world-map.json`), run `npm run
generate:map`.

---

## 5. Publish your changes

The site auto-deploys to **cypski.github.io** whenever you push to the
`main` branch (via `.github/workflows/deploy.yml`).

```sh
git add -A
git commit -m "Add post about X"   # describe what you changed
git push
```

Wait ~1–2 minutes for the GitHub Action to build and go live. You can watch it
under the repo's **Actions** tab on GitHub.

---

## If something looks broken

- Run `npm run build` locally first — if it prints an error, the message names
  the file and line. Most errors are a missing comma or quote in a `.ts`/`.md`
  frontmatter block.
- Dates must be `YYYY-MM-DD`. Text values with special characters are safest
  wrapped in `"quotes"`.
