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
  /** Optional URL — turns the heading into a link to the work (opens in a new tab). */
  link?: string;
}

export type Section =
  | { type: 'entries'; title: string; entries: Entry[] }
  | { type: 'skills'; title: string; groups: { category: string; items: string[] }[] };

export const cvHeader = {
  name: 'Casimir Wypyski',
  tagline: 'Geoeconomics · AI Policy',
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
        heading: '“Democratic AI-Readiness Index”',
        subheading: 'Co-author',
        period: 'July 2026',
        meta: 'Berlin, DE',
        link: 'https://www.lesswrong.com/posts/B5HANRTfbJeRBfBFa/ai-amplified-democratic-backsliding-an-exploration',
      },
      {
        heading: '“Trading Up: How R&D Investment Amplifies Trade-Driven AI Diffusion in the EU”',
        subheading: 'Author',
        period: 'April 2026',
        meta: 'Berlin, DE',
      },
      {
        heading: '“Artificial Intelligence and Its Use in Combat”',
        subheading: 'Co-author',
        period: 'June 2025',
        meta: 'Syracuse, NY, USA',
      },
      {
        heading: '“Term Frequency and Sentiment in AI Standards Frameworks”',
        subheading: 'Author',
        period: 'May 2025',
        meta: 'Syracuse, NY, USA',
      },
      {
        heading: '“Polarization of Electric Vehicles in Partisan News”',
        subheading: 'Co-author',
        period: 'May 2024',
        meta: 'West Lafayette, IN, USA',
        link: 'https://digitalcommons.pepperdine.edu/ppr/vol17/iss1/7/'
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
        items: ['Python', 'SQL', 'Visual Studio Code', 'GitHub (Git)', 'QGIS', 'STATA', 'Zotero', 'Qualtrics', 'n8n'],
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
