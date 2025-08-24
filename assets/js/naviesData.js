// === Navies — base sets, Samogitia navy by year, ledger & fleet split ===

export const NAVIES_1444 = [
  { name: "England",         heavy: 4, light: 6,  galley: 0,  trans: 7, total: 17 },
  { name: "Ragusa",          heavy: 0, light: 7,  galley: 5,  trans: 4, total: 16 },
  { name: "Venice",          heavy: 0, light: 5,  galley: 3,  trans: 7, total: 15 },
  { name: "Gotland",         heavy: 0, light: 7,  galley: 5,  trans: 3, total: 15 },
  { name: "Lubeck",          heavy: 0, light: 6,  galley: 4,  trans: 4, total: 14 },
  { name: "Denmark",         heavy: 0, light: 2,  galley: 6,  trans: 6, total: 14 },
  { name: "Mamluks",         heavy: 0, light: 2,  galley: 4,  trans: 7, total: 13 },
  { name: "Novgorod",        heavy: 3, light: 5,  galley: 0,  trans: 5, total: 13 },
  { name: "Aragon",          heavy: 0, light: 2,  galley: 5,  trans: 6, total: 13 },
  { name: "Ottomans",        heavy: 0, light: 2,  galley: 4,  trans: 7, total: 13 },
  { name: "Tunis",           heavy: 0, light: 2,  galley: 4,  trans: 6, total: 12 },
  { name: "Genoa",           heavy: 0, light: 5,  galley: 3,  trans: 4, total: 12 },
  { name: "Portugal",        heavy: 3, light: 4,  galley: 0,  trans: 5, total: 12 },
  { name: "Castile",         heavy: 2, light: 3,  galley: 0,  trans: 7, total: 12 },
  { name: "Teutonic Order",  heavy: 0, light: 2,  galley: 5,  trans: 5, total: 12 },
  { name: "Livonian Order",  heavy: 0, light: 2,  galley: 6,  trans: 4, total: 12 },
  { name: "Samogitia",       heavy: 0, light: 0,  galley: 0,  trans: 0, total: 0  },
];

// Year-end snapshots for Samogitia’s navy
export const SAMOGITIA_NAVY_BY_YEAR = {
  "1444": { heavy: 0,  light: 0,  galley: 0,  trans: 0  },
  "1445": { heavy: 0,  light: 0,  galley: 0,  trans: 0  },
  "1446": { heavy: 0,  light: 0,  galley: 0,  trans: 0  },
  "1453": { heavy: 0,  light: 0,  galley: 0,  trans: 0  },
  "1454": { heavy: 12, light: 25, galley: 11, trans: 0  },
  "1455": { heavy: 12, light: 28, galley: 48, trans: 20 },
  "1456": { heavy: 16, light: 31, galley: 51, trans: 20 },
  "1457": { heavy: 16, light: 31, galley: 51, trans: 20 },
"1458": { heavy: 16, light: 31, galley: 51, trans: 20 },
"1459": { heavy: 16, light: 31, galley: 51, trans: 20 },
"1460": { heavy: 16, light: 31, galley: 51, trans: 20 },
"1461": { heavy: 16, light: 31, galley: 51, trans: 20 },

  // NEW
  "1462": { heavy: 18, light: 32, galley: 51, trans: 20 },
  "1465": { heavy: 30, light: 40, galley: 60, trans: 30 }, // Dream Fleet formed; RN/BF adjusted
  "1466": { heavy: 30, light: 40, galley: 60, trans: 30 }, // no change recorded
  "1467": { heavy: 31, light: 40, galley: 60, trans: 30 }, // +1 heavy by 1467
};


// NEW — 1453 snapshot set (unchanged from your file)
export const NAVIES_1453 = [
  { name: "Samogitia", heavy: 0, light: 0,  galley: 0,  trans: 0, total: 0  },
  { name: "Venice",    heavy: 0, light: 9,  galley: 8,  trans: 7, total: 24 },
  { name: "Genoa",     heavy: 0, light: 6,  galley: 12, trans: 4, total: 22 },
  { name: "Denmark",   heavy: 1, light: 3,  galley: 11, trans: 6, total: 21 },
  { name: "Ottomans",  heavy: 0, light: 4,  galley: 6,  trans: 10, total: 20 },
  { name: "Ragusa",    heavy: 0, light: 7,  galley: 5,  trans: 4, total: 16 },
  { name: "Mamluks",   heavy: 1, light: 2,  galley: 5,  trans: 7, total: 15 },
  { name: "Aragon",    heavy: 0, light: 4,  galley: 4,  trans: 7, total: 15 },
  { name: "Naples",    heavy: 0, light: 8,  galley: 2,  trans: 4, total: 14 },
  { name: "Portugal",  heavy: 3, light: 6,  galley: 0,  trans: 5, total: 14 },
  { name: "England",   heavy: 4, light: 3,  galley: 0,  trans: 7, total: 14 },
  { name: "Gotland",   heavy: 0, light: 6,  galley: 5,  trans: 3, total: 14 },
  { name: "Lubeck",    heavy: 0, light: 6,  galley: 3,  trans: 4, total: 13 },
  { name: "Novgorod",  heavy: 3, light: 5,  galley: 0,  trans: 5, total: 13 },
  { name: "Crimea",    heavy: 0, light: 4,  galley: 5,  trans: 4, total: 13 },
  { name: "Holland",   heavy: 1, light: 10, galley: 0,  trans: 2, total: 13 },
];

// NEW — 1456 snapshot set (your full list)
export const NAVIES_1456 = [
  { name: "Samogitia", heavy: 16, light: 31, galley: 51, trans: 20, total: 118 },
  { name: "Venice",    heavy: 0,  light: 9,  galley: 8,  trans: 7,  total: 24  },
  { name: "Genoa",     heavy: 0,  light: 8,  galley: 12, trans: 4,  total: 24  },
  { name: "Ottomans",  heavy: 1,  light: 5,  galley: 6,  trans: 10, total: 22  },
  { name: "Denmark",   heavy: 1,  light: 3,  galley: 11, trans: 6,  total: 21  },
  { name: "Mamluks",   heavy: 1,  light: 3,  galley: 6,  trans: 9,  total: 19  },
  { name: "Castile",   heavy: 2,  light: 7,  galley: 0,  trans: 9,  total: 18  },
  { name: "Naples",    heavy: 0,  light: 10, galley: 2,  trans: 4,  total: 16  },
  { name: "Ragusa",    heavy: 0,  light: 7,  galley: 5,  trans: 4,  total: 16  },
  { name: "Papal State",heavy: 0,  light: 2,  galley: 6,  trans: 7,  total: 15  },
  { name: "Portugal",  heavy: 3,  light: 7,  galley: 0,  trans: 5,  total: 15  },
  { name: "Aragon",    heavy: 0,  light: 4,  galley: 4,  trans: 7,  total: 15  },
  { name: "France",    heavy: 2,  light: 5,  galley: 0,  trans: 7,  total: 14  },
  { name: "England",   heavy: 4,  light: 3,  galley: 0,  trans: 7,  total: 14  },
  { name: "Gotland",   heavy: 0,  light: 6,  galley: 5,  trans: 3,  total: 14  },
  { name: "Lubeck",    heavy: 0,  light: 6,  galley: 3,  trans: 4,  total: 13  },
  { name: "Novgorod",  heavy: 3,  light: 5,  galley: 0,  trans: 5,  total: 13  },
  { name: "Crimea",    heavy: 0,  light: 4,  galley: 5,  trans: 4,  total: 13  },
  { name: "Holland",   heavy: 1,  light: 10, galley: 0,  trans: 2,  total: 13  },
];
// NEW — 1462
export const NAVIES_1462 = [
  { name: "Samogitia", heavy: 18, light: 32, galley: 51, trans: 20, total: 121 },
  { name: "France",    heavy: 2,  light: 14, galley: 6,  trans: 7,  total: 29  },
  { name: "Ottomans",  heavy: 1,  light: 5,  galley: 10, trans: 11, total: 27  },
  { name: "Venice",    heavy: 0,  light: 9,  galley: 8,  trans: 7,  total: 24  },
  { name: "Genoa",     heavy: 0,  light: 8,  galley: 12, trans: 4,  total: 24  },
  { name: "Mamluks",   heavy: 2,  light: 3,  galley: 6,  trans: 11, total: 22  },
  { name: "Denmark",   heavy: 1,  light: 3,  galley: 11, trans: 6,  total: 21  },
  { name: "The Papal State", heavy: 0, light: 4, galley: 9, trans: 7, total: 20 },
  { name: "Castile",   heavy: 2,  light: 7,  galley: 0,  trans: 9,  total: 18  },
  { name: "Lubeck",    heavy: 0,  light: 9,  galley: 3,  trans: 4,  total: 16  },
  { name: "Naples",    heavy: 0,  light: 10, galley: 2,  trans: 4,  total: 16  },
  { name: "Ragusa",    heavy: 0,  light: 7,  galley: 5,  trans: 4,  total: 16  },
  { name: "Portugal",  heavy: 3,  light: 7,  galley: 0,  trans: 5,  total: 15  },
  { name: "Aragon",    heavy: 0,  light: 4,  galley: 4,  trans: 7,  total: 15  },
  { name: "England",   heavy: 4,  light: 3,  galley: 0,  trans: 7,  total: 14  },
  { name: "Crimea",    heavy: 0,  light: 4,  galley: 5,  trans: 4,  total: 13  },
  { name: "Holland",   heavy: 1,  light: 10, galley: 0,  trans: 2,  total: 13  },
  { name: "Austria",   heavy: 0,  light: 1,  galley: 3,  trans: 8,  total: 12  },
  { name: "Scotland",  heavy: 7,  light: 0,  galley: 0,  trans: 5,  total: 12  },
];
export const NAVIES_1467 = [
  { name: "Lithuania",    heavy: 31, light: 40, galley: 60, trans: 30, total: 161 },
  { name: "Ottomans",     heavy: 1,  light: 6,  galley: 12, trans: 12, total: 31  },
  { name: "France",       heavy: 2,  light: 14, galley: 6,  trans: 7,  total: 29  },
  { name: "Venice",       heavy: 0,  light: 13, galley: 8,  trans: 7,  total: 28  },
  { name: "Genoa",        heavy: 0,  light: 8,  galley: 12, trans: 4,  total: 24  },
  { name: "Mamluks",      heavy: 2,  light: 3,  galley: 6,  trans: 11, total: 22  },
  { name: "Denmark",      heavy: 1,  light: 3,  galley: 11, trans: 7,  total: 22  },
  { name: "Aragon",       heavy: 0,  light: 8,  galley: 4,  trans: 7,  total: 19  },
  { name: "Lubeck",       heavy: 0,  light: 10, galley: 4,  trans: 4,  total: 18  },
  { name: "Papal State",  heavy: 0,  light: 1,  galley: 9,  trans: 7,  total: 17  },
  { name: "Naples",       heavy: 0,  light: 10, galley: 2,  trans: 4,  total: 16  },
  { name: "Ragusa",       heavy: 0,  light: 7,  galley: 5,  trans: 4,  total: 16  },
  { name: "Portugal",     heavy: 3,  light: 7,  galley: 0,  trans: 5,  total: 15  },
  { name: "Crimea",       heavy: 0,  light: 4,  galley: 5,  trans: 4,  total: 13  },
  { name: "Holland",      heavy: 1,  light: 10, galley: 0,  trans: 2,  total: 13  },
  { name: "Morocco",      heavy: 2,  light: 4,  galley: 0,  trans: 6,  total: 12  },
  { name: "Austria",      heavy: 0,  light: 1,  galley: 3,  trans: 8,  total: 12  },
];
// Split on 1 Jan 1457
export const SAMOGITIA_NAVY_FLEETS_1457 = [
  {
    name: "Royal Navy",
    leader: "Mindaugas Olshanski",
    base: "Klaipėda",
    flagship: "HMS Death",
    heavy: 7, light: 16, galley: 26, trans: 0, total: 49
  },
  {
    name: "Baltic Fleet",
    leader: "Aras Tyzenhaus",
    base: "Riga",
    flagship: "HMS Fear & HMS Agony",
    heavy: 9, light: 15, galley: 25, trans: 20, total: 69
  }
];
export const LITHUANIA_NAVY_FLEETS_1465 = [
  {
    name: "Dream Fleet",
    leader: "Vilhelmas Svyriskis",
    base: "Visby (Gotland)",
    flagship: null,
    heavy: 11, light: 8,  galley: 9,  trans: 0,  total: 28
  },
  {
    name: "Royal Navy",
    leader: "Mindaugas Olshanski",
    base: "Klaipėda",
    flagship: "HMS Death",
    heavy: 8,  light: 18, galley: 26, trans: 0,  total: 52
  },
  {
    name: "Baltic Fleet",
    leader: "Aras Tyzenhaus",
    base: "Riga",
    flagship: "HMS Fear & HMS Agony",
    heavy: 11, light: 14, galley: 25, trans: 30, total: 80
  }
];

// Detailed naval timeline (for ledgers / tooltips)
export const NAVAL_LEDGER = [
  { date: "1454-01-08", note: "First Samogitian ships; Royal Navy formed at Klaipėda under Mindaugas Olshanski", heavy: 12, light: 0,  galley: 0,  trans: 0 },
  { date: "1454-10-11", note: "Royal Navy expanded", heavy: 12, light: 24, galley: 0,  trans: 0 },
  { date: "1454-12-01", note: "Royal Navy expanded", heavy: 12, light: 25, galley: 11, trans: 0 },
  { date: "1455-02-25", note: "Royal Navy expanded", heavy: 12, light: 25, galley: 23, trans: 0 },
  { date: "1455-05-01", note: "Royal Navy expanded", heavy: 12, light: 25, galley: 35, trans: 0 },
  { date: "1455-07-31", note: "Royal Navy expanded", heavy: 12, light: 25, galley: 36, trans: 11 },
  { date: "1455-09-27", note: "Royal Navy expanded", heavy: 12, light: 28, galley: 36, trans: 20 },
  { date: "1455-12-21", note: "Royal Navy expanded", heavy: 12, light: 28, galley: 48, trans: 20 },
  { date: "1456-02-09", note: "Royal Navy expanded", heavy: 12, light: 30, galley: 48, trans: 20 },
  { date: "1456-03-31", note: "Royal Navy expanded", heavy: 12, light: 30, galley: 50, trans: 20 },
  { date: "1456-05-04", note: "Royal Navy expanded", heavy: 15, light: 30, galley: 50, trans: 20 },
  { date: "1456-09-05", note: "3 flagships built (HMS Death/Fear/Agony) & joined; Royal Navy expanded", heavy: 16, light: 31, galley: 51, trans: 20 },
  { date: "1457-01-01", note: "Navy split: Royal Navy (Klaipėda) & Baltic Fleet (Riga)", heavy: 16, light: 31, galley: 51, trans: 20 },

  // NEW
  { date: "1458-06-12", note: "Western Baltic victory vs Gotland — captured 1 ship", heavy: 16, light: 32, galley: 51, trans: 20 },
  { date: "1459-03-24", note: "Gulf of Finland victory — captured 2 ships",        heavy: 18, light: 32, galley: 51, trans: 20 },
  { date: "1459-03-25", note: "Gulf of Finland pursuit — enemy flotilla destroyed", heavy: 18, light: 32, galley: 51, trans: 20 },
  { date: "1462-01-01", note: "Fleet status at year start",                          heavy: 18, light: 32, galley: 51, trans: 20 },
{ date: "1465-11-23", note: "Dream Fleet created at Visby under explorer Vilhelmas Svyriskis; fleets reorganized", heavy: 30, light: 40, galley: 60, trans: 30 },
];


export const NAVIES_BY_YEAR = {
  1444: NAVIES_1444,
  1453: NAVIES_1453,
  1456: NAVIES_1456,
  1462: NAVIES_1462,
  1467: NAVIES_1467, // NEW
};
