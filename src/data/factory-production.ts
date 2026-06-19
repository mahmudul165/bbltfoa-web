// North Bengal bottle-leaf (bought-leaf) tea factories — annual production.
// Year columns: 2022, 2023, 2024, 2025. null = not yet operating.
// Units: production figures (treat as kg). 2025 may be a partial / in-progress year.

export interface FactoryProduction {
  id: number;
  name: string;
  /** [2022, 2023, 2024, 2025] — null means "not yet operating" */
  values: (number | null)[];
}

export const PRODUCTION_YEARS = [2022, 2023, 2024, 2025] as const;

export const factoryProduction: FactoryProduction[] = [
  { id: 1,  name: "Moitree Tea Industries",                 values: [2968120, 2352080, 2085065, 2894166] },
  { id: 2,  name: "North Bengal Central Tea Ltd",           values: [1644736,  796859,  766514, 1136307] },
  { id: 3,  name: "Korotoa Cha Karkhana",                   values: [ 167712,  195026,   64289,  320486] },
  { id: 4,  name: "Bangla Tea Manufacturing Industries",    values: [ 545460,  589630,  373500,  655525] },
  { id: 5,  name: "Green Care Agro Ltd",                    values: [1107879,  801383,  596807,  515882] },
  { id: 6,  name: "Fabiha Tea Company Ltd",                 values: [ 628015,  645757,  522350,  665700] },
  { id: 7,  name: "Kazi & Kazi Tea Estate Ltd",            values: [ 596459,  559720,  640195,  632360] },
  { id: 8,  name: "Salilan Tea Estate Ltd",                 values: [ 305650,  192750,   74363,  164987] },
  { id: 9,  name: "Green Field Tea Industries Ltd",         values: [ 594968,  347103,  234621,  404253] },
  { id: 10, name: "Moli Cha Karkhana",                      values: [ 492772,  344231,  218089,  255129] },
  { id: 11, name: "Sabuj Agro Tea Industries",              values: [ 706404,  409571,    9223,       0] },
  { id: 12, name: "Imperial Tea Estate Ltd",                values: [ 184048,   82158,   84630,  269626] },
  { id: 13, name: "Morgen Tea Industries",                  values: [2984820, 3225675, 2481966, 2316010] },
  { id: 14, name: "Nahid Tea Estate Ltd",                   values: [ 922018,  824705,  489280,  803195] },
  { id: 15, name: "Sajeda-Rafiq Tea Factory Ltd",           values: [ 720530,  882733,  586485,  792710] },
  { id: 16, name: "M M Tea Estate Ltd",                     values: [  80651,  160148,  215311,  225596] },
  { id: 17, name: "Popular Tea Factory",                    values: [ 607927,  671209,  462292,  741450] },
  { id: 18, name: "Uttara Green Tea Industries",            values: [ 396467,  408611,  211152,  158298] },
  { id: 19, name: "Surma & Purnima Tea Ltd",                values: [ 519150,  881505,  780742, 1278637] },
  { id: 20, name: "Bismillah Tea Factory",                  values: [ 897380,  677963,  597812,  704580] },
  { id: 21, name: "Kornojhora Agro Ltd",                    values: [ 404327,  479816,  120472,  257641] },
  { id: 22, name: "Royal Tea Factory",                      values: [ 241693,  319648,  237936,  639049] },
  { id: 23, name: "Talma Tea Industries Ltd",               values: [ 135560,  604631,  640231,  924487] },
  { id: 24, name: "Zaman Tea Agro Factory",                 values: [ 106000,  209970,  291687,  418129] },
  { id: 25, name: "Korotoa Bohumukhi Samabay Samiti",       values: [  23192,   67549,  104841,  158652] },
  { id: 26, name: "Mega Tea Industries",                    values: [   null,  525373,  352159,  753171] },
  { id: 27, name: "Supreme Tea Ltd",                        values: [   null,  598586,  694579,  785115] },
  { id: 28, name: "Far-East Tea Industries Ltd",            values: [   null,  112880,  321807,  666979] },
  { id: 29, name: "Euro Asia Tea Factory",                  values: [   null,    null,  223096,  417680] },
  { id: 30, name: "Elite Global",                           values: [   null,    null,    null,  167680] },
  { id: 31, name: "Rafiq & Sons",                           values: [   null,    null,    null,  102825] },
  { id: 32, name: "Triple Z",                               values: [   null,    null,    null,   15789] },
];

/** Official totals supplied per year (2022, 2023, 2024, 2025). */
export const officialTotals = [17781938, 19967270, 18841494, 20242052] as const;
