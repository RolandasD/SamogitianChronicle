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
  { name: "Castille",  inf: 8000,  cav: 2000, art: 0, total: 10000 },
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
  "1450": { inf: 30000, cav: 18000, art: 12000 }, // + three regiments (5k/3k/2k each)
  "1453": { inf: 45000, cav: 27000, art: 18000 }, // from your 1453 list
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

// (optional) handy index for charts/tables
export const ARMIES_BY_YEAR = {
  1444: ARMIES_1444,
  1447: ARMIES_1447,
  1453: ARMIES_1453,
};
