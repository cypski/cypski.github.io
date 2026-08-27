// ─────────────────────────────────────────────────────────────────────────
//  Places — the interactive map under the CV ("more about me").
//
//  There are four categories:
//    • lived        → coloured (see `colors` below)
//    • visited      → coloured
//    • wantToVisit  → coloured
//    • never lived in → EVERY country you don't list here (rendered with no
//                       colour). You never maintain this one — it's automatic.
//
//  To tag a country: add an entry to the matching list below.
//    • country : ISO 3166-1 alpha-2 code, e.g. 'DE', 'US', 'FR' (see the
//                cheat sheet in CONTENT.md for a link to the full code list)
//    • capital : optional subtitle shown under the country name
//    • notes   : optional bullet points shown on hover / tap
//
//  A country should appear in only ONE list.
// ─────────────────────────────────────────────────────────────────────────

/** Swap these freely to recolour the map + legend (pastel colourway). */
export const colors = {
  lived: '#a7d7a9',   // pastel green
  visited: '#f6c9a4', // pastel peach
  want: '#a9c7ec',    // pastel blue
};

// ── Pastel palette to play with ──────────────────────────────────────────
//  Copy any hex into `colors` above, save, and refresh to preview it.
//    greens : #a7d7a9  #b8d8c0 (sage)   #b5e3d8 (mint)
//    yellows: #f2dfa7  #f7e6b0
//    peaches: #f6c9a4  #f3b9a3 (coral)  #f5d0b0
//    blues  : #a9c7ec  #bcd6f0 (sky)    #b3c7e6
//    purples: #cdbfe8 (lilac)  #d5c8ec (lavender)
//    pinks  : #f0c0d4  #eec3cf (rose)
//    teals  : #a6d6d0  #bfe0dd
// ─────────────────────────────────────────────────────────────────────────

/** Labels shown in the legend. */
export const labels = {
  lived: 'Lived in',
  visited: 'Visited',
  want: 'Want to visit',
};

export interface Place {
  /** ISO 3166-1 alpha-2 country code, e.g. 'DE'. */
  country: string;
  /** Optional capital / city subtitle. */
  capital?: string;
  /** Optional bullet points. */
  notes?: string[];
}

export const lived: Place[] = [
  {
    country: 'DE',
    capital: 'Berlin',
    notes: ['Master of International Affairs at the Hertie School', 'Currently based here'],
  },
  {
    country: 'US',
    capital: 'Washington, D.C.',
    notes: ['Grew up here', 'Undergrad at Purdue; MPA at Syracuse'],
  },
];

export const visited: Place[] = [
  {
    country: 'FR',
    capital: 'Paris',
    notes: ['Studied French (C1)', 'A minor in undergrad'],
  },
  {
    country: 'PL',
    capital: 'Warsaw',
    notes: ['Family roots'],
  },
];

export const wantToVisit: Place[] = [
  {
    country: 'JP',
    capital: 'Tokyo',
    notes: ['Top of the list'],
  },
];
