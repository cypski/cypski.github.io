// ─────────────────────────────────────────────────────────────────────────
//  Reading list — edit this file to update the /reading page.
//
//  To ADD A BOOK: append an object to `books` below.
//    • finished: true   → shown as read
//    • finished: false  → shown as "currently reading"
//    • link: optional URL to a summary / Goodreads / review
//  Newest entries first is a nice convention, but order is up to you.
// ─────────────────────────────────────────────────────────────────────────

export interface Book {
  title: string;
  author: string;
  finished: boolean;
  link?: string;
}

export const books: Book[] = [
  // ↓ Replace these examples with your own.
  {
    title: 'The Alignment Problem',
    author: 'Brian Christian',
    finished: true,
    link: 'https://www.goodreads.com/book/show/50489349-the-alignment-problem',
  },
  {
    title: 'Army of None',
    author: 'Paul Scharre',
    finished: true,
    link: 'https://www.goodreads.com/book/show/36566990-army-of-none',
  },
  {
    title: 'The Age of AI',
    author: 'Henry Kissinger, Eric Schmidt & Daniel Huttenlocher',
    finished: false,
    link: 'https://www.goodreads.com/book/show/58712038-the-age-of-ai',
  },
];
