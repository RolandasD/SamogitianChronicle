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
// --- Unified military & navy for Samogitia (army + navy per year) ---

export const SAMOGITIA_BY_YEAR = {
  // Existing years
  "1444": { inf:  5000, cav:  1000, art:    0, heavy: 0, light: 0, galley: 0, trans: 0 },
  "1445": { inf:  5000, cav:  3000, art: 2000, heavy: 0, light: 0, galley: 0, trans: 0 },
  "1446": { inf: 10000, cav:  6000, art: 4000, heavy: 0, light: 0, galley: 0, trans: 0 },
  "1447": { inf: 15000, cav:  9000, art: 6000, heavy: 0, light: 0, galley: 0, trans: 0 },
  "1450": { inf: 30000, cav: 18000, art:12000, heavy: 0, light: 0, galley: 0, trans: 0 },
  "1453": { inf: 45000, cav: 27000, art:18000, heavy: 0, light: 0, galley: 0, trans: 0 },

  // NEW — your updates
  // 1454: Massive training starts (Jan). Navy raised & expanded through the year.
  // End-of-year snapshot after 1 Dec 1454: 12 heavy, 25 light, 11 galley, 0 trans.
  "1454": { inf: 45000, cav: 27000, art:18000, heavy: 12, light: 25, galley: 11, trans: 0 },

  // 1455: Multiple expansions, end-of-year (21 Dec): 12/28/48/20
  "1455": { inf: 45000, cav: 27000, art:18000, heavy: 12, light: 28, galley: 48, trans: 20 },

  // 1456: Army upgrades (May & Aug) + flagships (Sep) -> 16/31/51/20
  // Army totals add +10k/+6k/+2k twice (Royal Force & Iron Legion): 55k / 33k / 22k
  "1456": { inf: 55000, cav: 33000, art:22000, heavy: 16, light: 31, galley: 51, trans: 20 },
};

// --- Named armies by year (used by tooltip + named table on your Samogitia page) ---

export const SAMOGITIA_NAMED_ARMIES_BY_YEAR = {
  "1445": [
    { name: "Iron Wolf",  commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
  ],
  "1446": [
    { name: "Iron Wolf",  commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death",commandor: "Kantibutas Giedraiciai", inf: 5000, cav: 3000, art: 2000 },
  ],
  "1447": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion",commander: "Tomas Gostautas",       inf: 5000, cav: 3000, art: 2000 },
  ],
  "1450": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",inf: 5000, cav: 3000, art: 2000 },
    { name: "Green Legion",commander: "Tomas Gostautas",       inf: 5000, cav: 3000, art: 2000 },
    { name: "Royal Force", commander: "Gintautas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Pagan Fear",  commander: "Tarvydas Korybut",      inf: 5000, cav: 3000, art: 2000 },
    { name: "Iron Legion", commander: "Lingvenis Olshanski",   inf: 5000, cav: 3000, art: 2000 },
  ],
  "1453": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",   inf:10000, cav: 6000, art: 4000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",inf:10000, cav: 6000, art: 4000 },
    { name: "Green Legion",commander: "Tomas Gostautas",       inf:10000, cav: 6000, art: 4000 },
    { name: "Royal Force", commander: "Gintautas Tyzenhaus",   inf: 5000, cav: 3000, art: 2000 },
    { name: "Pagan Fear",  commander: "Tarvydas Korybut",      inf: 5000, cav: 3000, art: 2000 },
    { name: "Iron Legion", commander: "Lingvenis Olshanski",   inf: 5000, cav: 3000, art: 2000 },
  ],
  "1456": [
    { name: "Iron Wolf",   commander: "Daugvilas Tyzenhaus",      inf:10000, cav: 6000, art: 4000 },
    { name: "Black Death", commander: "Kantibutas Giedraiciai",   inf:10000, cav: 6000, art: 4000 },
    { name: "Green Legion",commander: "Tomas Gostautas",          inf:10000, cav: 6000, art: 4000 },
    { name: "Royal Force", commander: "Gintautas Tyzenhaus",      inf:10000, cav: 6000, art: 4000 }, // ↑ 21 May 1456
    { name: "Pagan Fear",  commander: "Daugvilas Jogailaitis",    inf: 5000, cav: 3000, art: 2000 }, // leader change 20 Jan 1456
    { name: "Iron Legion", commander: "Lingvenis Olshanski",      inf:10000, cav: 6000, art: 4000 }, // ↑ 1 Aug 1456
  ],
};

// --- Optional: Named navy by year (not yet used in the page, but ready if you want it) ---
export const SAMOGITIA_NAMED_NAVY_BY_YEAR = {
  "1454": [
    { name: "Royal Navy", commander: "Mindaugas Olshanski", port: "Klaipėda",
      heavy:12, light:25, galley:11, trans:0,
      notes: ["First Samogitian fleet formed (8 May: 12 heavies)."]
    }
  ],
  "1455": [
    { name: "Royal Navy", commander: "Mindaugas Olshanski", port: "Klaipėda",
      heavy:12, light:28, galley:48, trans:20
    }
  ],
  "1456": [
    { name: "Royal Navy", commander: "Mindaugas Olshanski", port: "Klaipėda",
      heavy:16, light:31, galley:51, trans:20,
      flagships: ["HMS Death (Heavy)", "HMS Fear (Light)", "HMS Agony (Galley)"] // 5 Sep 1456
    }
  ],
};


