import { assetPath } from "@/lib/assetPath";

export const portfolioCategories = [
  { id: "all", label: "All work" },
  { id: "cleaning", label: "Home cleaning" },
  { id: "construction", label: "Construction" },
  { id: "repairs", label: "Home repairs" },
  { id: "floors", label: "Floors" },
  { id: "ceilings", label: "Acoustic ceilings" },
  { id: "drywall", label: "Drywall" },
  { id: "painting", label: "Painting" },
] as const;

export type PortfolioCategoryId = (typeof portfolioCategories)[number]["id"];

export type BeforeAfterPair = {
  id: string;
  label: string;
  before: string;
  after: string;
};

export type PortfolioItem = {
  id: string;
  category: Exclude<PortfolioCategoryId, "all">;
  title: string;
  location: string;
  summary: string;
  scope: string[];
  pairs?: BeforeAfterPair[];
  gallery?: string[];
  featured?: boolean;
};

const arregloPairs: BeforeAfterPair[] = [
  {
    id: "cocina",
    label: "Kitchen",
    before: assetPath("arreglo_casa", "antes", "cocina_1.jpeg"),
    after: assetPath("arreglo_casa", "despues", "cocina_1.jpeg"),
  },
  {
    id: "bano",
    label: "Bathroom",
    before: assetPath("arreglo_casa", "antes", "bano_1.jpeg"),
    after: assetPath("arreglo_casa", "despues", "bano_1.jpeg"),
  },
  {
    id: "habitacion",
    label: "Bedroom",
    before: assetPath("arreglo_casa", "antes", "habitacion_1.jpeg"),
    after: assetPath("arreglo_casa", "despues", "habitacion_1.jpeg"),
  },
  {
    id: "escaleras",
    label: "Staircase",
    before: assetPath("arreglo_casa", "antes", "escaleras.jpeg"),
    after: assetPath("arreglo_casa", "despues", "escaleras.jpeg"),
  },
];

const limpiezaCasa2Pairs: BeforeAfterPair[] = [
  {
    id: "casa-1",
    label: "Room 1",
    before: assetPath("limpieza_casa_2", "antes", "casa_1.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_3.jpeg"),
  },
  {
    id: "casa-2",
    label: "Room 2",
    before: assetPath("limpieza_casa_2", "antes", "casa_9.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_2.jpeg"),
  },
  {
    id: "casa-3",
    label: "Room 3",
    before: assetPath("limpieza_casa_2", "antes", "casa_3.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_3.jpeg"),
  },
  {
    id: "casa-4",
    label: "Room 4",
    before: assetPath("limpieza_casa_2", "antes", "casa_8.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_4.jpeg"),
  },
  {
    id: "casa-5",
    label: "Room 5",
    before: assetPath("limpieza_casa_2", "antes", "casa_5.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_7.jpeg"),
  },
  {
    id: "casa-6",
    label: "Room 6",
    before: assetPath("limpieza_casa_2", "antes", "casa_6.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_6.jpeg"),
  },
  {
    id: "casa-7",
    label: "Room 7",
    before: assetPath("limpieza_casa_2", "antes", "casa_7.jpeg"),
    after: assetPath("limpieza_casa_2", "despues", "casa_5.jpeg"),
  },
];

export const portfolioOwner = {
  name: "Paola",
  role: "Founder · PA. Cleaning & Construction",
  bio:
    "Licensed general contractor in Georgia — from deep residential cleans to construction turnarounds, acoustic ceiling work, and full interior repairs. Paola leads every job with documented scope, respectful crews, and spaces that are ready to use when we leave.",
  images: [
    assetPath("personal", "pose_urbano_parque.jpeg"),
    assetPath("personal", "pose_urbano_baranda.jpeg"),
    assetPath("personal", "pose_urbano_banca.jpeg"),
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "arreglo-casa",
    category: "repairs",
    title: "Whole-home repair & refresh",
    location: "Georgia",
    featured: true,
    summary:
      "Complete interior and exterior home repair — kitchens, baths, bedrooms, and common areas restored so you can move in or hand the property off with confidence.",
    scope: ["Interior", "Exterior", "Before & after"],
    pairs: arregloPairs,
    gallery: [
      assetPath("arreglo_casa", "antes", "frente_casa.jpeg"),
      assetPath("arreglo_casa", "antes", "habitacion_2.jpeg"),
      assetPath("arreglo_casa", "antes", "habitacion_3.jpeg"),
      assetPath("arreglo_casa", "despues", "cocina_2.jpeg"),
      assetPath("arreglo_casa", "despues", "cocina_3.jpeg"),
      assetPath("arreglo_casa", "despues", "cocina_4.jpeg"),
      assetPath("arreglo_casa", "despues", "bano_1_1.jpeg"),
      assetPath("arreglo_casa", "despues", "bano1_1_1.jpeg"),
    ],
  },
  {
    id: "techos-acuaticos",
    category: "ceilings",
    title: "Acoustic ceiling tear-out & reinstall",
    location: "Georgia · Schools & commercial",
    summary:
      "Acoustic ceilings: we tear out, reinstall, and leave the area clean — on-site cleaning included. School projects (MLK) and work statewide across Georgia.",
    scope: ["Demolition", "Reinstall", "Cleanup included"],
    pairs: [
      {
        id: "ceiling-1",
        label: "Ceiling grid",
        before: assetPath(
          "techos_acuaticos",
          "antes",
          "WhatsApp Image 2026-10-23 at 12.26.27 AM.jpeg"
        ),
        after: assetPath(
          "techos_acuaticos",
          "despues",
          "WhatsApp Image 2026-10-23 at 12.26.28 AM (2).jpeg"
        ),
      },
      {
        id: "ceiling-2",
        label: "Classroom ceiling",
        before: assetPath(
          "techos_acuaticos",
          "antes",
          "WhatsApp Image 2026-10-23 at 12.26.27 AM (1).jpeg"
        ),
        after: assetPath(
          "techos_acuaticos",
          "despues",
          "WhatsApp Image 2026-10-23 at 12.26.28 AM (3).jpeg"
        ),
      },
      {
        id: "ceiling-3",
        label: "Finished bay",
        before: assetPath(
          "techos_acuaticos",
          "antes",
          "WhatsApp Image 2026-10-23 at 12.26.28 AM (1).jpeg"
        ),
        after: assetPath(
          "techos_acuaticos",
          "despues",
          "WhatsApp Image 2026-10-23 at 12.26.28 AM (4).jpeg"
        ),
      },
    ],
    gallery: [
      assetPath(
        "techos_acuaticos",
        "antes",
        "WhatsApp Image 2026-10-23 at 12.26.27 AM (2).jpeg"
      ),
      assetPath(
        "techos_acuaticos",
        "despues",
        "WhatsApp Image 2026-10-23 at 12.26.29 AM.jpeg"
      ),
      assetPath(
        "techos_acuaticos",
        "despues",
        "WhatsApp Image 2026-10-23 at 12.26.30 AM.jpeg"
      ),
    ],
  },
  {
    id: "drywall",
    category: "drywall",
    title: "Drywall / sheetrock walls",
    location: "Georgia",
    summary:
      "Sheetrock (drywall) — gypsum board for walls. Installation, finishing, and surfaces ready to paint or move into.",
    scope: ["Sheetrock", "Finishing", "Jobsite ready"],
    pairs: [
      {
        id: "wall-1",
        label: "Wall section",
        before: assetPath(
          "drywall",
          "antes",
          "WhatsApp Image 2026-10-23 at 12.32.50 AM.jpeg"
        ),
        after: assetPath(
          "drywall",
          "despues",
          "WhatsApp Image 2026-10-23 at 12.32.50 AM (3).jpeg"
        ),
      },
    ],
    gallery: [
      assetPath(
        "drywall",
        "antes",
        "WhatsApp Image 2026-10-23 at 12.32.50 AM (1).jpeg"
      ),
      assetPath(
        "drywall",
        "antes",
        "WhatsApp Image 2026-10-23 at 12.32.50 AM (2).jpeg"
      ),
    ],
  },
  {
    id: "limpieza-casa-2",
    category: "cleaning",
    title: "Full-home deep clean",
    location: "Atlanta metro",
    summary:
      "Room-by-room deep cleaning — dust, floors, kitchen, and baths documented with before-and-after photos in every space.",
    scope: ["Deep clean", "Room by room", "Occupied homes"],
    pairs: limpiezaCasa2Pairs,
    gallery: [assetPath("limpieza_casa_2", "antes", "casa_10.jpeg")],
  },
  {
    id: "limpieza-casa",
    category: "cleaning",
    title: "Living room & bedroom reset",
    location: "Georgia",
    summary:
      "Living room and child's bedroom — surfaces, floors, and furniture detailing so the home is ready for guests.",
    scope: ["Living areas", "Bedrooms", "Detail"],
    pairs: [
      {
        id: "sala",
        label: "Living room",
        before: assetPath("limpieza_casa", "antes", "sala.jpeg"),
        after: assetPath("limpieza_casa", "despues", "sala.jpeg"),
      },
      {
        id: "hab-nina",
        label: "Bedroom",
        before: assetPath("limpieza_casa", "antes", "hab_nina.jpeg"),
        after: assetPath("limpieza_casa", "despues", "hab_nina.jpeg"),
      },
    ],
  },
  {
    id: "limpieza-construccion",
    category: "construction",
    title: "Post-construction corridor clean",
    location: "Jobsite · Georgia",
    summary:
      "Hallways and common areas after construction — construction dust, debris, and traffic marks removed for inspection or turnover.",
    scope: ["Corridors", "Dust-out", "Final clean"],
    pairs: [
      {
        id: "pasillo",
        label: "Hallway",
        before: assetPath("limpieza_construccion", "antes", "pasillo.jpeg"),
        after: assetPath("limpieza_construccion", "despues", "corredor.jpeg"),
      },
      {
        id: "pasillo-2",
        label: "Corridor detail",
        before: assetPath("limpieza_construccion", "antes", "pasillo_2.jpeg"),
        after: assetPath("limpieza_construccion", "despues", "corredor_casa.jpeg"),
      },
    ],
  },
  {
    id: "limpieza-pisos",
    category: "floors",
    title: "Floor restoration & polish",
    location: "Georgia",
    summary:
      "Floors treated to restore shine and consistency — from prep through final finish in high-traffic areas.",
    scope: ["Strip & clean", "Polish", "High traffic"],
    pairs: [1, 2, 3, 4].map((n) => ({
      id: `piso-${n}`,
      label: `Floor zone ${n}`,
      before: assetPath("limpieza_pisos", "antes", `piso_${n}.jpeg`),
      after: assetPath("limpieza_pisos", "despues", `piso_${n}.jpeg`),
    })),
    gallery: [assetPath("limpieza_pisos", "despues", "piso_5.jpeg")],
  },
  {
    id: "limpieza-casa-3",
    category: "cleaning",
    title: "Detail clean — gallery",
    location: "Georgia",
    summary:
      "Residential work across the home: kitchen, baths, and living areas with the same level of detail on every visit.",
    scope: ["Kitchen", "Baths", "Touch-ups"],
    gallery: [
      assetPath(
        "limpieza_casa_3",
        "WhatsApp Image 2026-10-23 at 12.30.29 AM.jpeg"
      ),
      assetPath(
        "limpieza_casa_3",
        "WhatsApp Image 2026-10-23 at 12.30.29 AM (1).jpeg"
      ),
      assetPath(
        "limpieza_casa_3",
        "WhatsApp Image 2026-10-23 at 12.30.29 AM (2).jpeg"
      ),
      assetPath(
        "limpieza_casa_3",
        "WhatsApp Image 2026-10-23 at 12.30.29 AM (3).jpeg"
      ),
    ],
  },
  {
    id: "pintura-casas",
    category: "painting",
    title: "Interior & exterior painting",
    location: "Georgia",
    summary:
      "Surface prep and paint for homes — walls, trim, and exteriors with an even, professional finish.",
    scope: ["Prep", "Interior", "Exterior"],
    gallery: [
      assetPath(
        "pintura_casas",
        "WhatsApp Image 2026-10-23 at 12.29.12 AM.jpeg"
      ),
      assetPath(
        "pintura_casas",
        "WhatsApp Image 2026-10-23 at 12.29.13 AM.jpeg"
      ),
      assetPath(
        "pintura_casas",
        "WhatsApp Image 2026-10-23 at 12.29.13 AM (1).jpeg"
      ),
      assetPath(
        "pintura_casas",
        "WhatsApp Image 2026-10-23 at 12.29.13 AM (2).jpeg"
      ),
      assetPath(
        "pintura_casas",
        "WhatsApp Image 2026-10-23 at 12.29.14 AM.jpeg"
      ),
    ],
  },
];

export function allImagesForItem(item: PortfolioItem): string[] {
  const fromPairs = item.pairs?.flatMap((p) => [p.before, p.after]) ?? [];
  const gallery = item.gallery ?? [];
  return Array.from(new Set([...fromPairs, ...gallery]));
}
