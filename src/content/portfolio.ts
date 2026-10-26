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

const limpiezaCasa2Pairs: BeforeAfterPair[] = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  id: `casa-${n}`,
  label: `Room ${n}`,
  before: assetPath("limpieza_casa_2", "antes", `casa_${n}.jpeg`),
  after: assetPath("limpieza_casa_2", "despues", `casa_${n}.jpeg`),
}));

export const portfolioOwner = {
  name: "Paola",
  role: "Founder · PA. Cleaning & Construction",
  bio:
    "From deep residential cleans to construction turnarounds, acoustic ceiling work, and full interior repairs — Paola leads every job with the same standard: documented scope, respectful crews, and spaces that are ready to use when we leave.",
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
      "Arreglo de casa por dentro y por fuera — cocinas, baños, habitaciones y áreas comunes restauradas para vivir o entregar con confianza.",
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
      "Cielos acuáticos: demolemos, reinstalamos y dejamos el área limpia — incluida limpieza en sitio. Proyectos en escuelas (MLK) y en todo el estado de Georgia.",
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
      "Sheetrock (drywall) — el yeso o panel que se utiliza para paredes. Instalación, acabado y entrega de superficies listas para pintar o habitar.",
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
      "Limpieza profunda habitación por habitación — polvo, pisos, cocina y baños documentados con antes y después en cada espacio.",
    scope: ["Deep clean", "Room by room", "Occupied homes"],
    pairs: limpiezaCasa2Pairs,
    gallery: [
      assetPath("limpieza_casa_2", "antes", "casa_8.jpeg"),
      assetPath("limpieza_casa_2", "antes", "casa_9.jpeg"),
      assetPath("limpieza_casa_2", "antes", "casa_10.jpeg"),
    ],
  },
  {
    id: "limpieza-casa",
    category: "cleaning",
    title: "Living room & bedroom reset",
    location: "Georgia",
    summary:
      "Sala y habitación infantil — superficies, pisos y detalle en muebles para un hogar listo para recibir visitas.",
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
      "Pasillos y áreas comunes después de obra — polvo de construcción, residuos y marcas de tránsito eliminados para inspección o entrega.",
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
      "Pisos tratados para recuperar brillo y uniformidad — desde preparación hasta acabado final en zonas de alto tránsito.",
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
      "Secuencia de trabajo en residencia: cocina, baños y áreas sociales con el mismo nivel de detalle en cada visita.",
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
      "Preparación de superficies y aplicación de pintura en viviendas — muros, molduras y fachadas con acabado uniforme.",
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
