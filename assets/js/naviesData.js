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
  // 1454 (last change that year: 1 Dec — 12/25/11/0)
  "1454": { heavy: 12, light: 25, galley: 11, trans: 0  },
  // 1455 (last change that year: 21 Dec — 12/28/48/20)
  "1455": { heavy: 12, light: 28, galley: 48, trans: 20 },
  // 1456 (last change that year: 5 Sep — 16/31/51/20)
  "1456": { heavy: 16, light: 31, galley: 51, trans: 20 },
  // 1457 (split into two fleets; combined strength unchanged on 1 Jan)
  "1457": { heavy: 16, light: 31, galley: 51, trans: 20 },
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
];

export const NAVIES_BY_YEAR = {
  1444: NAVIES_1444,
  1453: NAVIES_1453,
  1456: NAVIES_1456,
};
