---
title: "A New Home on the Web"
description: "Rebuilding this site around a single idea: three doors, and nothing in the way."
pubDate: 2026-08-26
tags: ["meta", "design"]
draft: true
---

This is the first post on the redesigned site. The whole thing is built around one
idea — the home screen is just three words: **blog**, **CV**, and **reading list**.
Pick one and it floats to the top of the page to reveal what's underneath.

## Why so little?

Most personal sites open with a wall of introduction. I wanted the opposite: a
choice, and then the thing you chose. Everything else — who I am, what I write about —
lives one click away, where it belongs.

> Simplicity is a feature, not an absence.

## Adding a post like this one

Each post is a single Markdown file in `src/content/blog/`. Frontmatter at the top
sets the title, description, date, and tags; everything below is just writing.

Images work the same way — drop a file in and reference it inline:

```md
![A descriptive caption](./my-picture.jpg)
```

That's the entire workflow. Write a file, commit, done.
