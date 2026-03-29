---
title: "This Website"
description: "Personal site built with Astro — a blog, portfolio, and resume, with zero JavaScript shipped by default."
pubDate: 2025-03-29
tags: ["Astro", "TypeScript", "CSS"]
repoUrl: "https://github.com/"
featured: false
---

## Overview

You're looking at it. This is my personal site — the one I actually wanted to have for years but kept putting off because I could never agree with myself on the right stack.

## Why Astro

I write content more than I build interactions. A site like this doesn't need a SPA framework. Astro ships static HTML by default, has first-class support for Markdown content collections, and gets out of your way.

## Design goals

- **Fast** — Core Web Vitals in the green without any manual optimization
- **Readable** — Typography that works at any size; enough whitespace to breathe
- **Maintainable** — Minimal dependencies; no build-time surprises in two years

## What's under the hood

- Astro with Content Collections for type-safe blog posts and portfolio items
- Zero external UI dependencies — styles are plain CSS custom properties
- Dark mode via `prefers-color-scheme` media query (no JavaScript needed)
- Deployed to Cloudflare Pages with automatic deploys on push to `main`

## Performance

Lighthouse scores on the homepage:

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
