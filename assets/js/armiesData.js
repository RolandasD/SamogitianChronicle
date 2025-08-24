// === Armies — base sets and Samogitia by year ===

// existing
export const ARMIES_1444 = [
  { name: "Mamluks",   inf: 11000, cav: 4000, art: 0, total: 15000 },
  { name: "Muscovy",   inf: 11000, cav: 4000, art: 0, total: 15000 },
  { name: "Lithuania", inf: 11000, cav: 4000, art: 0, total: 15000 },
  { name: "Aragon",    inf: 7000,  cav: 2000, art: 3000, total: 12000 },
  { name: "Ottomans",  inf: 9000,  cav: 3000, art: 0, total: 12000 },
  { name: "France",    inf: 8000,  cav: 3000, art: 0, total: 11000 },
  { name: "Poland",    inf: 8000,  cav: 3000, art: 0, total: 11000 },
  { name: "Uzbek",     inf: 8000,  cav: 2000, art: 0, total: 10000 },
  { name: "Morocco",   inf: 7000,  cav: 3000, art: 0, total: 10000 },
  { name: "Castile",   inf: 8000,  cav: 2000, art: 0, total: 10000 },
  { name: "Bohemia",   inf: 8000,  cav: 2000, art: 0, total: 10000 },
  { name: "England",   inf: 8000,  cav: 2000, art: 0, total: 10000 },
  { name: "Kazan",     inf: 7000,  cav: 2000, art: 0, total: 9000 },
  { name: "Venice",    inf: 7000,  cav: 2000, art: 0, total: 9000 },
  { name: "Burgundy",  inf: 7000,  cav: 2000, art: 0, total: 9000 },
  { name: "Hungary",   inf: 7000,  cav: 2000, art: 0, total: 9000 },
  { name: "Austria",   inf: 6000,  cav: 2000, art: 0, total: 8000 },
  { name: "Samogitia", inf: 5000,  cav: 1000, art: 0, total: 6000 },
];

export const SAMOGITIA_ARMY_BY_YEAR = {
  "1444": { inf: 5000,  cav: 1000, art: 0 },
  "1445": { inf: 5000,  cav: 3000, art: 2000 },
  "1446": { inf: 10000, cav: 6000, art: 4000 },
  "1447": { inf: 15000, cav: 9000, art: 6000 }, // Jan 1447
  "1450": { inf: 30000, cav: 18000, art: 12000 }, // three new 5/3/2 regiments
  "1453": { inf: 45000, cav: 27000, art: 18000 }, // Aug expansions (IW/BD/GL to 10/6/4)
  "1454": { inf: 45000, cav: 27000, art: 18000 },
  "1455": { inf: 45000, cav: 27000, art: 18000 },
  "1456": { inf: 55000, cav: 33000, art: 22000 },
  "1457": { inf: 55000, cav: 33000, art: 22000 },

  // NEW
  "1462": { inf: 55000, cav: 33000, art: 22000 }, // pre-muster status quo
  "1463": { inf: 60000, cav: 36000, art: 24000 }, // 2 Oct — Pagan Fear expands to 10/6/4
  "1464": { inf: 90000, cav: 54000, art: 36000 }, // 8 Feb + 1 Jun grand musters (all six at 15/9/6)
"1465": { inf: 90000, cav: 54000, art: 36000 }, // no change to army this year
  "1466": { inf: 124000, cav: 56000, art: 44000 }, // PF & RF to 32/10/10 (others at 15/9/6)
  "1467": { inf: 124000, cav: 56000, art: 44000 }, // carried into 1467
};

// you already have this from last step
export const ARMIES_1447 = [
  { name: "Samogitia",     inf: 15000, cav: 9000, art: 6000, total: 30000 },
  { name: "Aragon",        inf: 18000, cav: 5000, art: 3000, total: 26000 },
  { name: "Mamluks",       inf: 13000, cav: 12000, art: 0, total: 25000 },
  { name: "France",        inf: 13000, cav: 10000, art: 0, total: 23000 },
  { name: "Ottomans",      inf: 20000, cav: 3000,  art: 0, total: 23000 },
  { name: "Austria",       inf: 18000, cav: 3000,  art: 0, total: 21000 },
  { name: "Lithuania",     inf: 15000, cav: 5000,  art: 0, total: 20000 },
  { name: "Qara Qoyunlu",  inf: 16000, cav: 2000,  art: 0, total: 18000 },
  { name: "England",       inf: 13000, cav: 4000,  art: 0, total: 17000 },
  { name: "Burgundy",      inf: 11000, cav: 4000,  art: 0, total: 15000 },
  { name: "Byzantium",     inf: 14000, cav: 1000,  art: 0, total: 15000 },
  { name: "Kazan",         inf: 8000,  cav: 7000,  art: 0, total: 15000 },
  { name: "Morocco",       inf: 10000, cav: 4000,  art: 0, total: 14000 },
  { name: "Castile",       inf: 12000, cav: 2000,  art: 0, total: 14000 },
  { name: "Venice",        inf: 9000,  cav: 4000,  art: 0, total: 13000 },
  { name: "Hungary",       inf: 9000,  cav: 4000,  art: 0, total: 13000 },
  { name: "Muscovy",       inf: 9000,  cav: 4000,  art: 0, total: 13000 },
  { name: "Bohemia",       inf: 10000, cav: 3000,  art: 0, total: 13000 },
  { name: "Denmark",       inf: 8000,  cav: 4000,  art: 0, total: 12000 },
  { name: "Poland",        inf: 8000,  cav: 3000,  art: 0, total: 11000 },
  { name: "Uzbek",         inf: 8000,  cav: 3000,  art: 0, total: 11000 },
  { name: "Nogai",         inf: 6000,  cav: 5000,  art: 0, total: 11000 },
];

// NEW — January 1453
export const ARMIES_1453 = [
  { name: "Samogitia",     inf: 45000, cav: 27000, art: 18000, total: 90000 },
  { name: "Ottomans",      inf: 25000, cav: 11000, art: 0,     total: 36000 },
  { name: "France",        inf: 17000, cav: 10000, art: 0,     total: 27000 },
  { name: "Mamluks",       inf: 17000, cav: 10000, art: 0,     total: 27000 },
  { name: "Austria",       inf: 20000, cav: 7000,  art: 0,     total: 27000 },
  { name: "Qara Qoyunlu",  inf: 22000, cav: 4000,  art: 0,     total: 26000 },
  { name: "Venice",        inf: 13000, cav: 4000,  art: 0,     total: 17000 },
  { name: "Kazan",         inf: 7800,  cav: 6500,  art: 0,     total: 14300 },
  { name: "Castile",       inf: 12000, cav: 2000,  art: 0,     total: 14000 },
  { name: "England",       inf: 5864,  cav: 8000,  art: 0,     total: 13864 },
  { name: "Hungary",       inf: 9000,  cav: 4000,  art: 0,     total: 13000 },
  { name: "Crimea",        inf: 7000,  cav: 4934,  art: 0,     total: 11934 },
  { name: "Bohemia",       inf: 9118,  cav: 2811,  art: 0,     total: 11929 },
  { name: "Aragon",        inf: 6896,  cav: 3613,  art: 1000,  total: 11509 },
  { name: "Lithuania",     inf: 7697,  cav: 3801,  art: 0,     total: 11498 },
  { name: "Uzbek",         inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Great Horde",   inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Nogai",         inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Scotland",      inf: 8000,  cav: 3000,  art: 0,     total: 11000 },
  { name: "Morocco",       inf: 8976,  cav: 2000,  art: 0,     total: 10976 },
  { name: "Portugal",      inf: 7000,  cav: 3000,  art: 0,     total: 10000 },
  { name: "Denmark",       inf: 7000,  cav: 2000,  art: 0,     total: 9000 },
  { name: "Muscovy",       inf: 4708,  cav: 4167,  art: 0,     total: 8875 },
  { name: "Naples",        inf: 5914,  cav: 1962,  art: 0,     total: 7876 },
  { name: "Poland",        inf: 1000,  cav: 0,     art: 0,     total: 1000 },
];

// NEW — 1456 (your full list)
export const ARMIES_1456 = [
  { name: "Samogitia",     inf: 55000, cav: 33000, art: 22000, total: 110000 },
  { name: "Ottomans",      inf: 25725, cav: 8000,  art: 0,     total: 33725 },
  { name: "France",        inf: 21902, cav: 10000, art: 0,     total: 31902 },
  { name: "Mamluks",       inf: 19000, cav: 11000, art: 0,     total: 30000 },
  { name: "Austria",       inf: 17452, cav: 7000,  art: 0,     total: 24452 },
  { name: "Lithuania",     inf: 15000, cav: 9000,  art: 0,     total: 24000 },
  { name: "Qara Qoyunlu",  inf: 15000, cav: 5000,  art: 0,     total: 20000 },
  { name: "Castile",       inf: 14938, cav: 2000,  art: 0,     total: 16938 },
  { name: "Venice",        inf: 14000, cav: 4000,  art: 0,     total: 18000 },
  { name: "England",       inf: 7747,  cav: 7244,  art: 0,     total: 14991 },
  { name: "Kazan",         inf: 6863,  cav: 6238,  art: 0,     total: 13101 },
  { name: "Morocco",       inf: 9038,  cav: 3964,  art: 0,     total: 13002 },
  { name: "Bohemia",       inf: 9462,  cav: 2788,  art: 0,     total: 12250 },
  { name: "Denmark",       inf: 6569,  cav: 5639,  art: 0,     total: 12208 },
  { name: "Crimea",        inf: 7000,  cav: 5000,  art: 0,     total: 12000 },
  { name: "Uzbek",         inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Great Horde",   inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Nogai",         inf: 6000,  cav: 5000,  art: 0,     total: 11000 },
  { name: "Albania",       inf: 9000,  cav: 2000,  art: 0,     total: 11000 },
  { name: "Scotland",      inf: 7451,  cav: 3000,  art: 0,     total: 10451 },
  { name: "Georgia",       inf: 6000,  cav: 4000,  art: 0,     total: 10000 },
  { name: "Portugal",      inf: 7000,  cav: 3000,  art: 0,     total: 10000 },
  { name: "Hungary",       inf: 10000, cav: 0,     art: 0,     total: 10000 },
  { name: "Burgundy",      inf: 4614,  cav: 5000,  art: 0,     total: 9614 },
  { name: "Aragon",        inf: 4335,  cav: 3896,  art: 1000,  total: 9231 },
  { name: "Muscovy",       inf: 4000,  cav: 5000,  art: 0,     total: 9000 },
  { name: "Poland",        inf: 3000,  cav: 1000,  art: 0,     total: 4000 },
];
// NEW — 1462
export const ARMIES_1462 = [
  { name: "Samogitia",     inf: 55000, cav: 33000, art: 22000, total: 110000 },
  { name: "Ottomans",      inf: 32174, cav: 12923, art: 0,     total: 45097  },
  { name: "Mamluks",       inf: 32000, cav: 11000, art: 0,     total: 43000  },
  { name: "Austria",       inf: 24929, cav: 7000,  art: 0,     total: 31929  },
  { name: "France",        inf: 20033, cav: 10000, art: 0,     total: 30033  },
  { name: "Venice",        inf: 16990, cav: 3990,  art: 0,     total: 20980  },
  { name: "England",       inf: 10959, cav: 8000,  art: 0,     total: 18959  },
  { name: "Qara Qoyunlu",  inf: 12889, cav: 5000,  art: 0,     total: 17889  },
  { name: "Castile",       inf: 15000, cav: 2000,  art: 0,     total: 17000  },
  { name: "Denmark",       inf: 8000,  cav: 6000,  art: 0,     total: 14000  },
  { name: "Morocco",       inf: 9801,  cav: 4000,  art: 0,     total: 13801  },
  { name: "Aragon",        inf: 8000,  cav: 4000,  art: 1000,  total: 13000  },
  { name: "Bohemia",       inf: 13000, cav: 0,     art: 0,     total: 13000  },
  { name: "Naples",        inf: 8564,  cav: 4000,  art: 0,     total: 12564  },
  { name: "Kazan",         inf: 6845,  cav: 5334,  art: 0,     total: 12179  },
  { name: "Burgundy",      inf: 6348,  cav: 5000,  art: 0,     total: 11348  },
  { name: "Scotland",      inf: 8000,  cav: 3000,  art: 0,     total: 11000  },
  { name: "Albania",       inf: 9000,  cav: 2000,  art: 0,     total: 11000  },
  { name: "Great Horde",   inf: 5944,  cav: 5000,  art: 0,     total: 10944  },
  { name: "Nogai",         inf: 5450,  cav: 5000,  art: 0,     total: 10450  },
  { name: "Trier",         inf: 6000,  cav: 4000,  art: 0,     total: 10000  },
  { name: "Hungary",       inf: 10000, cav: 0,     art: 0,     total: 10000  },
  { name: "Portugal",      inf: 6000,  cav: 3000,  art: 0,     total: 9000   },
];
export const ARMIES_1467 = [
  { name: "Lithuania",    inf: 124000, cav: 56000, art: 44000, total: 224000 },
  { name: "Ottomans",     inf: 31255,  cav: 14000, art: 0,     total: 45255  },
  { name: "Mamluks",      inf: 30000,  cav: 11000, art: 0,     total: 41000  },
  { name: "France",       inf: 23059,  cav: 10000, art: 0,     total: 33059  },
  { name: "Austria",      inf: 24623,  cav: 7000,  art: 0,     total: 31623  },
  { name: "Qara Qoyunlu", inf: 10822,  cav: 6918,  art: 0,     total: 17740  },
  { name: "Kazan",        inf: 10844,  cav: 6000,  art: 0,     total: 16844  },
  { name: "Morocco",      inf: 10000,  cav: 6000,  art: 0,     total: 16000  },
  { name: "Crimea",       inf: 7000,   cav: 6000,  art: 0,     total: 13000  },
  { name: "Naples",       inf: 9000,   cav: 4000,  art: 0,     total: 13000  },
  { name: "Aragon",       inf: 8000,   cav: 4000,  art: 1000,  total: 13000  },
  { name: "Bohemia",      inf: 13000,  cav: 0,     art: 0,     total: 13000  },
  { name: "Burgundy",     inf: 6893,   cav: 5000,  art: 0,     total: 11893  },
  { name: "Great Horde",  inf: 6000,   cav: 5000,  art: 0,     total: 11000  },
  { name: "Nogai",        inf: 6000,   cav: 5000,  art: 0,     total: 11000  },
  { name: "Albania",      inf: 9000,   cav: 2000,  art: 0,     total: 11000  },
  { name: "England",      inf: 3432,   cav: 6971,  art: 0,     total: 10403  },
  { name: "Uzbek",        inf: 5000,   cav: 5000,  art: 0,     total: 10000  },
  { name: "Hungary",      inf: 10000,  cav: 0,     art: 0,     total: 10000  },
  { name: "Portugal",     inf: 6000,   cav: 3000,  art: 0,     total: 9000   },
];
// (optional) handy index for charts/tables
export const ARMIES_BY_YEAR = {
  1444: ARMIES_1444,
  1447: ARMIES_1447,
  1453: ARMIES_1453,
  1456: ARMIES_1456,
  1462: ARMIES_1462,
  1467: ARMIES_1467, // NEW
};

