---
title: "Analytics Dashboard"
description: "A real-time analytics platform for tracking user engagement across a SaaS product, serving 50k+ daily active users."
pubDate: 2024-11-01
tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"]
liveUrl: "https://example.com/dashboard"
repoUrl: "https://github.com/"
featured: true
---

## Overview

This dashboard gives product teams a live view of user behavior — active sessions, conversion funnels, retention curves, and custom event tracking — all updating in near-real-time.

## The problem

The existing solution was a patchwork of third-party analytics tools that didn't talk to each other, required manual exports, and cost more than the engineering team's cloud bill. Product managers were spending hours each week stitching spreadsheets together.

## What I built

- **Ingestion pipeline** — a Node.js service that receives events, validates and enriches them, then writes to PostgreSQL via a high-throughput batch insert strategy
- **Query layer** — pre-aggregated views in PostgreSQL with a Redis cache for the most-requested metrics; P95 query time under 80ms
- **React frontend** — a component library built around Recharts with a focus on readability at a glance; dark/light mode, keyboard navigation, responsive layout
- **Alerting** — configurable threshold-based alerts delivered via email and Slack webhook

## Key outcomes

- Replaced three third-party tools, saving ~$2,400/month
- Reduced time-to-insight for product managers from hours to seconds
- API response times averaged 62ms (P95: 78ms) under peak load

## Technical decisions

**Why PostgreSQL over a purpose-built TSDB?** The data volume didn't justify the operational overhead of a specialized time-series database. PostgreSQL with proper partitioning by day and a few targeted indexes handled the load comfortably.

**Why Redis for caching?** Dashboard metrics are expensive to compute but change slowly. A short TTL (30s) on the most-requested aggregations absorbed the vast majority of read traffic.
