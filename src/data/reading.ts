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
    finished: false,
    link: 'https://www.goodreads.com/book/show/50489349-the-alignment-problem',
  },
  {
    title: 'Heart of Europe: A Short History of Poland',
    author: 'Norman Davies',
    finished: false,
    link: 'https://www.goodreads.com/book/show/368039.Heart_of_Europe',
  },
  {
    title: 'Künstliche Intelligenz, Was sie kann & was uns erwartet or Artificial Intelligence, What it can do and what awaits us',
    author: 'Manuela Lenzen',
    finished: false,
    link: 'https://www.goodreads.com/book/show/8664353-unbroken',
  },
  {
    title: 'Minds and Machines',
    author: 'W. Sluckin',
    finished: false,
    link: 'https://www.goodreads.com/book/show/35535299-minds-and-machines',
  },
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    finished: true,
    link: 'https://www.goodreads.com/book/show/16634.The_Glass_Bead_Game',
  },
    {
    title: 'The Last Question',
    author: 'Isaac Asimov',
    finished: true,
    link: 'https://www.goodreads.com/book/show/4808763-the-last-question',
  },
   {
    title: 'Chip War',
    author: 'Chris Miller',
    finished: true,
    link: 'https://www.goodreads.com/book/show/60321447-chip-war',
  },
   {
    title: 'The Last Question',
    author: 'Isaac Asimov',
    finished: true,
    link: 'https://www.goodreads.com/book/show/4808763-the-last-question',
  },
   {
    title: 'On Experience',
    author: 'Michel de Montaigne',
    finished: true,
    link: 'https://www.goodreads.com/book/show/25797832-on-experience',
  },
   {
    title: "L'Étranger or The Stranger",
    author: 'Albert Camus',
    finished: true,
    link: 'https://www.goodreads.com/book/show/49552.The_Stranger',
  },
   {
    title: 'Unbroken: A World War II Story of Survival, Resilience and Redemption',
    author: 'Laura Hillenbrand',
    finished: true,
    link: 'https://www.goodreads.com/book/show/8664353-unbroken',
  },
  {
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    finished: true,
    link: 'https://www.goodreads.com/book/show/52036.Siddhartha',
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    finished: true,
    link: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
  },
  {
    title: 'Le Mur or The Wall',
    author: 'Jean Paul Sartre',
    finished: true,
    link: 'https://www.goodreads.com/book/show/770661.Le_mur',
  },
  {
    title: 'This is Technology Ethics',
    author: 'Sven Nyholm',
    finished: true,
    link: 'https://www.goodreads.com/book/show/61719336-this-is-technology-ethics',
  },
];
