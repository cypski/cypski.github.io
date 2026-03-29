---
title: "On Writing Readable Code"
description: "Code is read far more often than it is written. Here's how I try to write code that's kind to the next reader — usually future me."
pubDate: 2025-01-18
tags: ["software-craft", "best-practices"]
---

Code is read far more often than it is written. When I sit down to write a function, I try to imagine the person who will read it six months from now — often that person is me.

## Name things for what they mean, not what they are

Variable names like `data`, `result`, or `temp` carry no information. Use the domain language:

```typescript
// Before
const data = await fetch('/api/users');
const result = data.filter(x => x.active);

// After
const users = await fetchUsers();
const activeUsers = users.filter((user) => user.isActive);
```

The second version reads like a sentence.

## Short functions, single responsibility

If you can't describe what a function does without using "and", it probably does too much. I aim for functions under 20 lines. When they grow longer, I look for the natural seams where one concern ends and another begins.

## Comments explain *why*, not *what*

The code says what it does. Comments should explain why a decision was made — especially when the code looks surprising:

```typescript
// Retry once: the auth service occasionally returns 401 on the first
// request due to a race condition in token refresh. This is a known issue
// tracked in JIRA-1234.
const response = await fetchWithRetry(url, { retries: 1 });
```

Without that comment, a future engineer might "fix" the retry and reintroduce the bug.

## Prefer explicit over clever

Clever code is satisfying to write and painful to debug. I'll trade a few extra lines for code that a junior developer can follow on first read. Consistency compounds: a codebase where everything is straightforward is far easier to maintain than one with isolated patches of brilliance.

These principles don't require any tools or frameworks — just a moment of consideration before hitting commit.
