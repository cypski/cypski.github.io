// Generates a cropped Mercator world map (public-domain Natural Earth data)
// as JSON consumed by src/components/MoreAboutMe.astro.
//
//   npm run generate:map
//
// Output: src/data/world-map.json  { viewBox, countries: [{ iso, name, d }] }
// Antarctica is dropped and the frame is cropped to the bounds of the
// remaining land, so no country outline is cut mid-shape.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import isoCountries from 'i18n-iso-countries';

const root = fileURLToPath(new URL('..', import.meta.url));

const topo = JSON.parse(
  readFileSync(root + 'node_modules/world-atlas/countries-110m.json', 'utf8')
);

const fc = feature(topo, topo.objects.countries);

// Drop Antarctica (ISO numeric 010) — huge Mercator smear, cropped away.
const feats = fc.features.filter((f) => String(f.id) !== '10' && String(f.id) !== '010');
const collection = { type: 'FeatureCollection', features: feats };

const WIDTH = 1000;
const projection = geoMercator();
projection.fitWidth(WIDTH, collection);

// Crop vertically to the land bounds (top = northern Greenland, bottom =
// southern tip of South America), so there is no empty polar whitespace.
const bounds = geoPath(projection).bounds(collection);
const [[, y0], [, y1]] = bounds;
const height = Math.ceil(y1 - y0);
const [tx, ty] = projection.translate();
projection.translate([tx, ty - y0]); // shift so the top of the land sits at y=0

const path = geoPath(projection);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

let mapped = 0;
const countries = [];
for (const f of feats) {
  const d = path(f);
  if (!d) continue;
  const numeric = String(f.id).padStart(3, '0');
  const iso = isoCountries.numericToAlpha2(numeric) || '';
  // The UK is drawn as its four nations instead (see below) — skip the whole.
  if (iso === 'GB') continue;
  if (iso) mapped++;
  countries.push({ iso, name: f.properties.name, d });
}

// Split the UK into England / Scotland / Wales / Northern Ireland, projected
// with the same projection so they sit exactly where the single UK shape was.
const uk = JSON.parse(readFileSync(root + 'src/data/uk-subunits.geojson', 'utf8'));
for (const f of uk.features) {
  const d = path(f);
  if (!d) continue;
  countries.push({ iso: f.properties.code, name: f.properties.name, d });
  mapped++;
}

const out = {
  viewBox: `0 0 ${WIDTH} ${height}`,
  countries,
};

writeFileSync(root + 'src/data/world-map.json', JSON.stringify(out));
console.log(`Wrote src/data/world-map.json`);
console.log(`  ${countries.length} countries, ${mapped} with ISO codes, viewBox 0 0 ${WIDTH} ${height}`);
// Sanity: show a few seed countries resolved correctly
for (const code of ['DE', 'US', 'FR', 'PL', 'JP']) {
  const hit = countries.find((c) => c.iso === code);
  console.log(`  ${code}: ${hit ? 'OK (' + hit.name + ')' : 'MISSING'}`);
}
