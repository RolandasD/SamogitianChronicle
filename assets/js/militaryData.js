// assets/js/militaryData.js
import {
  ARMIES_1444,
  ARMIES_1447,
  ARMIES_1453,
  ARMIES_BY_YEAR,
  SAMOGITIA_ARMY_BY_YEAR
} from './armiesData.js';

import {
  NAVIES_1444,
  NAVIES_1453,
  NAVIES_BY_YEAR,
  SAMOGITIA_NAVY_BY_YEAR
} from './naviesData.js';

// Build a combined Samogitia-by-year object used by powers.html & samogitia.html
const ARMY = SAMOGITIA_ARMY_BY_YEAR;
const NAVY = SAMOGITIA_NAVY_BY_YEAR;

const YEARS = Array.from(new Set([
  ...Object.keys(ARMY),
  ...Object.keys(NAVY)
])).sort(); // ["1444","1445","1446","1447","1450","1453", ...]

export const SAMOGITIA_BY_YEAR = Object.fromEntries(
  YEARS.map(y => {
    const a = ARMY[y] || { inf: 0, cav: 0, art: 0 };
    const n = NAVY[y] || { heavy: 0, light: 0, galley: 0, trans: 0 };
    // note: 'trans' is the transport field name we use everywhere else
    return [y, { ...a, ...n }];
  })
);

// Re-export the other datasets so powers.html can import all from here
export {
  ARMIES_1444,
  ARMIES_1447,
  ARMIES_1453,
  ARMIES_BY_YEAR,
  NAVIES_1444,
  NAVIES_1453,
  NAVIES_BY_YEAR
};
// === New: show named regiments per year for tooltip/detail UIs ===
// Add/update this block
export const SAMOGITIA_NAMED_ARMIES_BY_YEAR = {
  "1444": [
    { name: "Field Army (proto–Iron Wolf)", commander: "Daugvilas Tyzenhaus", inf: 5000, cav: 1000, art: 0 }
  ],
  "1445": [
    { name: "Iron Wolf", commander: "Daugvilas Tyzenhaus", inf: 5000, cav: 3000, art: 2000 }
  ],
  "1446": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",    inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",  inf: 5000, cav: 3000, art: 2000 }
  ],
  "1447": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",    inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",  inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 5000, cav: 3000, art: 2000 }
  ],
  "1450": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",    inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",  inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 5000, cav: 3000, art: 2000 },
    { name: "Royal Force", commander: "Gintautas Tyzenhaus",     inf: 5000, cav: 3000, art: 2000 },
    { name: "Pagan Fear",  commander: "Tarvydas Korybut",        inf: 5000, cav: 3000, art: 2000 },
    { name: "Iron Legion", commander: "Lingvenis Olshanski",     inf: 5000, cav: 3000, art: 2000 }
  ],
  // January 1453: still nine at 5/3/2 each
  "1453": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",    inf: 10000, cav: 6000, art: 4000 }, // Aug-expanded
    { name: "Black Death", commander: "Kantibutas Giedraiciai",  inf: 10000, cav: 6000, art: 4000 }, // Aug-expanded
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 10000, cav: 6000, art: 4000 }, // Aug-expanded
    { name: "Royal Force", commander: "Gintautas Tyzenhaus",     inf: 5000,  cav: 3000, art: 2000 },
    { name: "Pagan Fear",  commander: "Tarvydas Korybut",        inf: 5000,  cav: 3000, art: 2000 },
    { name: "Iron Legion", commander: "Lingvenis Olshanski",     inf: 5000,  cav: 3000, art: 2000 },
  ]
};


