---
title: "TypeScript Tips I Use Every Day"
description: "Practical TypeScript patterns that have saved me hours of debugging and made my code dramatically easier to refactor."
pubDate: 2025-02-10
tags: ["typescript", "javascript", "tips"]
---

After several years writing TypeScript daily, a handful of patterns have become second nature. These aren't exotic type-system tricks — they're practical tools I reach for constantly.

## Prefer `interface` for object shapes, `type` for everything else

This is a soft rule, but having a convention eliminates the endless `interface vs type` debate:

```typescript
// Object shapes — use interface
interface User {
  id: string;
  name: string;
  email: string;
}

// Unions, intersections, mapped types — use type
type Status = 'idle' | 'loading' | 'success' | 'error';
type Nullable<T> = T | null;
```

## Discriminated unions beat optional properties

Optional properties are ambiguous. Discriminated unions make impossible states unrepresentable:

```typescript
// Avoid this
interface Response {
  data?: User;
  error?: string;
  isLoading: boolean;
}

// Prefer this
type ApiState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; message: string };
```

Now the type system prevents you from accidentally reading `data` when there's an error.

## `satisfies` for safer object literals

The `satisfies` operator (TypeScript 4.9+) lets you validate an object against a type while preserving the literal types of its values:

```typescript
const config = {
  port: 3000,
  host: 'localhost',
} satisfies Partial<ServerConfig>;

// config.port is typed as 3000, not number
```

## Use `as const` on lookup objects

Instead of enums, a `const` object gives you the values as a union type for free:

```typescript
const ROLES = {
  Admin: 'admin',
  Editor: 'editor',
  Viewer: 'viewer',
} as const;

type Role = typeof ROLES[keyof typeof ROLES];
// 'admin' | 'editor' | 'viewer'
```

These are small wins individually, but together they push a lot of runtime bugs into compile-time errors where they belong.
