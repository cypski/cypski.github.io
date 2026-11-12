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
  {
    title: 'A Short Stay in Hell',
    author: 'Steven L. Peck',
    finished: true,
    link: 'https://www.goodreads.com/book/show/13456414-a-short-stay-in-hell?ref=nav_sb_ss_1_20',
  },
  {
    title: 'The Alignment Problem',
    author: 'Brian Christian',
    finished: false,
    link: 'https://www.goodreads.com/book/show/50489349-the-alignment-problem',
  },
  {
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    finished: false,
    link: 'https://www.goodreads.com/book/show/426504',
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
    link: 'https://www.goodreads.com/book/show/38604055-k-nstliche-intelligenz',
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
    title: 'Erewhon',
    author: 'Samuel Butler',
    finished: true,
    link: 'https://www.goodreads.com/book/show/516570',
  },
   {
    title: 'All Tomorrows: The Myriad Species and Mixed Fortunes of Man',
    author: 'C.M. Koseman',
    finished: false,
    link: 'https://www.goodreads.com/book/show/13456414-a-short-stay-in-hell',
  },
  {
    title: "The Art of Living",
    author: 'Epicetus',
    finished: true,
    link: 'https://www.goodreads.com/book/show/61957745',
  },
   {
    title: "Huis clos or No Exit ",
    author: 'Jean Paul Sartre',
    finished: true,
    link: 'https://www.goodreads.com/book/show/971726',
  },
   {
    title: "Le mythe de sisyphe or The Myth of Sisyphus",
    author: 'Albert Camus',
    finished: true,
    link: 'https://www.goodreads.com/book/show/91950.The_Myth_of_Sisyphus?ref=nav_sb_ss_1_15',
  },
   {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    finished: true,
    link: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
  },
  {
    title: "Matilda",
    author: 'Roald Dahl',
    finished: true,
    link: 'https://www.goodreads.com/book/show/39988',
  },
  {
    title: "The Ones Who Walk Away from Omelas",
    author: 'Ursula K. Le Guin',
    finished: true,
    link: 'https://www.goodreads.com/book/show/92625.The_Ones_Who_Walk_Away_from_Omelas?ref=nav_sb_ss_1_33',
  },
   {
    title: 'On Experience',
    author: 'Michel de Montaigne',
    finished: true,
    link: 'https://www.goodreads.com/book/show/25797832-on-experience',
  },
   {
    title: "L'étranger or The Stranger",
    author: 'Albert Camus',
    finished: true,
    link: 'https://www.goodreads.com/book/show/49552.The_Stranger',
  },
   {
    title: 'The AI Mirror',
    author: 'Shannon Vallor',
    finished: true,
    link: 'https://www.goodreads.com/book/show/197812306',
  },
  {
    title: "On the Shortness of Life",
    author: 'Seneca',
    finished: true,
    link: 'https://www.goodreads.com/book/show/97412',
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
    title: 'Groundwork of the Metaphysics of Morals',
    author: 'Immanuel Kant',
    finished: true,
    link: 'https://www.goodreads.com/book/show/60080',
  },
  {
    title: 'Darwin Amongst the Machines',
    author: 'Samuel Butler',
    finished: true,
    link: 'https://www.goodreads.com/book/show/191355',
  },
  {
    title: 'Hills Like White Elephants',
    author: 'Ernest Hemingway',
    finished: true,
    link: 'https://www.goodreads.com/book/show/56814505',
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    finished: true,
    link: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
  },
  {
    title: 'Le mur or The Wall',
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
