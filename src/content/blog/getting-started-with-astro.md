---
title: "Getting Started with Astro"
description: "An introduction to Astro — why it's great for content-driven sites and how to get up and running quickly."
pubDate: 2025-03-01
tags: ["astro", "web-development", "tutorial"]
---

Astro has quickly become one of my favorite tools for building content-focused websites. Its "islands" architecture means you ship zero JavaScript by default — and only hydrate the interactive parts you actually need.

## Why Astro?

Most modern frameworks default to client-side rendering. That's fine for apps, but blogs and portfolio sites don't need that complexity. Astro flips the model:

- Pages are rendered to static HTML at build time
- Interactive components (React, Vue, Svelte) can be added selectively
- Content Collections give you type-safe frontmatter out of the box

## Setting up a project

Getting started takes about 30 seconds:

```bash
npm create astro@latest my-site
cd my-site
npm run dev
```

You'll have a development server running at `http://localhost:4321`.

## Content Collections

Content Collections are one of Astro's killer features. You define a Zod schema for your frontmatter, and Astro gives you fully-typed access to every piece of content:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

Now when you call `getCollection('blog')`, every item is fully typed.

## What's next

In a future post I'll cover deploying an Astro site to Cloudflare Pages — it's remarkably simple, and the edge CDN means fast load times everywhere.
