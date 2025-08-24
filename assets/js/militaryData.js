// assets/js/militaryData.js
import {
  ARMIES_1444,
  ARMIES_1447,
  ARMIES_1453,
  ARMIES_1456,
  ARMIES_BY_YEAR,
  SAMOGITIA_ARMY_BY_YEAR
} from './armiesData.js';

import {
  NAVIES_1444,
  NAVIES_1453,
  NAVIES_1456,
  NAVIES_BY_YEAR,
  SAMOGITIA_NAVY_BY_YEAR,
  SAMOGITIA_NAVY_FLEETS_1457,
  NAVAL_LEDGER
} from './naviesData.js';

// Build a combined Samogitia-by-year object used by powers.html & samogitia.html
const ARMY = SAMOGITIA_ARMY_BY_YEAR;
const NAVY = SAMOGITIA_NAVY_BY_YEAR;

const YEARS = Array.from(new Set([
  ...Object.keys(ARMY),
  ...Object.keys(NAVY)
])).sort((a,b)=>+a-+b);

export const SAMOGITIA_BY_YEAR = Object.fromEntries(
  YEARS.map(y => {
    const a = ARMY[y] || { inf: 0, cav: 0, art: 0 };
    const n = NAVY[y] || { heavy: 0, light: 0, galley: 0, trans: 0 };
    return [y, { ...a, ...n }];
  })
);

// Re-export the other datasets so pages can import from here
export {
  ARMIES_1444,
  ARMIES_1447,
  ARMIES_1453,
  ARMIES_1456,
  ARMIES_BY_YEAR,
  NAVIES_1444,
  NAVIES_1453,
  NAVIES_1456,
  NAVIES_BY_YEAR
};

// === Named regiments per year (for tooltips/ledgers) ===
export const SAMOGITIA_NAMED_ARMIES_BY_YEAR = {
  "1444": [
    { name: "Field Army (proto–Iron Wolf)", commander: "Daugvilas Tyzenhaus", inf: 5000, cav: 1000, art: 0 }
  ],
  "1445": [
    { name: "Iron Wolf", commander: "Daugvilas Tyzenhaus", inf: 5000, cav: 3000, art: 2000 }
  ],
  "1446": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai", inf: 5000, cav: 3000, art: 2000 }
  ],
  "1447": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai", inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 5000, cav: 3000, art: 2000 }
  ],
  "1450": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai", inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 5000, cav: 3000, art: 2000 },
    { name: "Royal Force",  commander: "Gintautas Tyzenhaus",    inf: 5000, cav: 3000, art: 2000 },
    { name: "Pagan Fear",   commander: "Tarvydas Korybut",       inf: 5000, cav: 3000, art: 2000 },
    { name: "Iron Legion",  commander: "Lingvenis Olshanski",    inf: 5000, cav: 3000, art: 2000 }
  ],
  // 1453: IW/BD/GL expanded to 10/6/4 (Aug)
  "1453": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",   inf: 10000, cav: 6000, art: 4000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai", inf: 10000, cav: 6000, art: 4000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 10000, cav: 6000, art: 4000 },
    { name: "Royal Force",  commander: "Gintautas Tyzenhaus",    inf: 5000,  cav: 3000, art: 2000 },
    { name: "Pagan Fear",   commander: "Tarvydas Korybut",       inf: 5000,  cav: 3000, art: 2000 },
    { name: "Iron Legion",  commander: "Lingvenis Olshanski",    inf: 5000,  cav: 3000, art: 2000 }
  ],
  // 1454 & 1455: training underway, same composition as 1453 unless you have changes
  "1454": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",   inf: 10000, cav: 6000, art: 4000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai", inf: 10000, cav: 6000, art: 4000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 10000, cav: 6000, art: 4000 },
    { name: "Royal Force",  commander: "Gintautas Tyzenhaus",    inf: 5000,  cav: 3000, art: 2000 },
    { name: "Pagan Fear",   commander: "Tarvydas Korybut",       inf: 5000,  cav: 3000, art: 2000 },
    { name: "Iron Legion",  commander: "Lingvenis Olshanski",    inf: 5000,  cav: 3000, art: 2000 }
  ],
  "1455": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",   inf: 10000, cav: 6000, art: 4000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai", inf: 10000, cav: 6000, art: 4000 },
    { name: "Green Legion", commander: "Tomas Gostautas",        inf: 10000, cav: 6000, art: 4000 },
    { name: "Royal Force",  commander: "Gintautas Tyzenhaus",    inf: 5000,  cav: 3000, art: 2000 },
    { name: "Pagan Fear",   commander: "Tarvydas Korybut",       inf: 5000,  cav: 3000, art: 2000 },
    { name: "Iron Legion",  commander: "Lingvenis Olshanski",    inf: 5000,  cav: 3000, art: 2000 }
  ],
  // 1456: commander change & two expansions
  "1456": [
    { name: "Iron Wolf",    commander: "Daugvilas Tyzenhaus",     inf: 10000, cav: 6000, art: 4000 },
    { name: "Black Death",  commander: "Kantibutas Giedraiciai",  inf: 10000, cav: 6000, art: 4000 },
    { name: "Green Legion", commander: "Tomas Gostautas",         inf: 10000, cav: 6000, art: 4000 },
    { name: "Royal Force",  commander: "Gintautas Tyzenhaus",     inf: 10000, cav: 6000, art: 4000 }, // expanded 21 May
    { name: "Pagan Fear",   commander: "Daugvilas Jogailaitis",   inf: 5000,  cav: 3000, art: 2000 }, // new leader 20 Jan
    { name: "Iron Legion",  commander: "Lingvenis Olshanski",     inf: 10000, cav: 6000, art: 4000 }, // expanded 1 Aug
  ],
};

// Navy extras for pages
export { SAMOGITIA_NAVY_FLEETS_1457, NAVAL_LEDGER };
