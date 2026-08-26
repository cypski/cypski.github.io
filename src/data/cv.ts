// ─────────────────────────────────────────────────────────────────────────
//  CV content — edit this file to update the /cv page.
//
//  To ADD A SECTION: append an object to `cvSections` below.
//    • type: 'entries'  → a list of roles / degrees / publications
//    • type: 'skills'   → grouped tag lists (category → items)
//  Order in the array = order on the page.
// ─────────────────────────────────────────────────────────────────────────

export interface Entry {
  /** Main line, e.g. a school, employer, or publication title. */
  heading: string;
  /** Second line, e.g. degree, role, or "Co-author · Location". */
  subheading?: string;
  /** Right-hand date/period, e.g. "July 2025 – June 2026". */
  period?: string;
  /** Optional right-hand second line, e.g. a location. */
  meta?: string;
  /** Optional italic note under the subheading. */
  note?: string;
  /** Optional bullet points. */
  bullets?: string[];
}

export type Section =
  | { type: 'entries'; title: string; entries: Entry[] }
  | { type: 'skills'; title: string; groups: { category: string; items: string[] }[] };

export const cvHeader = {
  name: 'Casimir Wypyski',
  tagline: 'International Affairs · Technology Policy',
};

export const cvSections: Section[] = [
  {
    type: 'entries',
    title: 'Education',
    entries: [
      {
        heading: 'The Hertie School',
        subheading: 'Master of International Affairs',
        period: 'July 2025 – June 2026',
        meta: 'Berlin, Germany',
        note: 'Concentration in international security.',
      },
      {
        heading: 'Syracuse University',
        subheading: 'Master of Public Administration',
        period: 'July 2024 – June 2025',
        meta: 'Syracuse, NY, USA',
        note: 'Focus on technology policy.',
      },
      {
        heading: 'Purdue University',
        subheading: 'Bachelor of Arts in Political Science',
        period: 'August 2020 – May 2024',
        meta: 'West Lafayette, IN, USA',
        note: 'Minor in French with a certificate in public policy.',
      },
    ],
  },
  {
    type: 'entries',
    title: 'Publications',
    entries: [
      {
        heading: '“Artificial Intelligence and Its Use in Combat”',
        subheading: 'Co-author',
        period: 'June 2025',
        meta: 'Syracuse, NY, USA',
        bullets: [
          'Prepared for the benefit of the Dnistrianskyi Centre in Lwów, Ukraine.',
          'Explores the future ethical and legal implications of artificial intelligence in combat through practical examples from the Russo-Ukrainian war and translates technical concepts for diverse audiences.',
        ],
      },
      {
        heading: '“Term Frequency and Sentiment in AI Standards”',
        subheading: 'Author',
        period: 'May 2025',
        meta: 'Syracuse, NY, USA',
        bullets: [
          'Considers 30 externally available AI standards frameworks published by three distinct organisation types.',
          'Contrasts frameworks by examining term frequency and phrase sentiment scores, revealing nuanced similarities and differences in the processed frameworks.',
        ],
      },
      {
        heading: '“Polarization of Electric Vehicles in Partisan News”',
        subheading: 'Co-author',
        period: 'May 2024',
        meta: 'West Lafayette, IN, USA',
        bullets: [
          'Published in the 17th volume of the Pepperdine Policy Review.',
          'Findings demonstrate a differential treatment of electric vehicles across the aisle.',
        ],
      },
    ],
  },
  {
    type: 'skills',
    title: 'Skills',
    groups: [
      {
        category: 'Certificates',
        items: [
          'DataCamp: Data Scientist in Python',
          'Wharton School Online: Artificial Intelligence for Business',
          'Lund University: Artificial Intelligence and Law (MOOC)',
        ],
      },
      {
        category: 'Data',
        items: ['Python', 'SQL', 'Visual Studio Code', 'GitHub (Git)', 'QGIS', 'STATA', 'Zotero', 'Qualtrics', 'Tableau'],
      },
      {
        category: 'Media',
        items: ['Microsoft Office Suite', 'Adobe InDesign', 'Adobe Photoshop', 'Adobe Premiere', 'Canva', 'WordPress'],
      },
      {
        category: 'Languages',
        items: ['English (native)', 'French (C1)', 'German (B1)'],
      },
    ],
  },
];
