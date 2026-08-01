import { useEffect, useState } from "react";

export type Intent = "defensa" | "deportivo" | "tactico";

export interface ProductVariant {
  label: string;
  image: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  caliber: string;
  intents: Intent[];
  variants: ProductVariant[];
  specs: {
    action: string;
    capacity: string;
    barrel: string;
    weight: string;
    length: string;
    material: string;
  };
  status: "DISPONIBLE" | "BAJO CONSULTA" | "LISTA DE ESPERA";
  description: string;
}

export const WHATSAPP_URL =
  "https://wa.me/573027104931?text=Hola%20Punto%20T%C3%A1ctico,%20solicito%20asesor%C3%ADa%20para%20adquisici%C3%B3n";

/** Dynamic WhatsApp deep link including product name + selected variant. */
export function whatsappForProduct(name: string, variantLabel?: string) {
  const base =
    "https://wa.me/573027104931?text=Hola%20Punto%20T%C3%A1ctico,%20solicito%20asesor%C3%ADa%20para%20adquisici%C3%B3n%20del%20equipo:%20";
  const item = variantLabel ? `${name} - ${variantLabel}` : name;
  return base + encodeURIComponent(item);
}

const P = (file: string) => `/${encodeURIComponent(file)}`;

export const DEFAULT_PRODUCTS: Product[] = [
  /* ---------- DEFENSA PERSONAL ---------- */
  {
    id: "blow-mini-9",
    code: "PT·BM9",
    name: "BLOW MINI 9",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [{ label: "Estándar", image: P("BLOW MINI 9.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "6+1",
      barrel: "86 mm",
      weight: "550 g",
      length: "154 mm",
      material: "Polímero alta resistencia",
    },
    status: "DISPONIBLE",
    description:
      "Pistola traumática ultra-compacta para porte encubierto. Diseño discreto y confiable sin sacrificar potencia.",
  },
  {
    id: "blow-tr14",
    code: "PT·TR14",
    name: "BLOW TR 14",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [{ label: "Estándar", image: P("BLOW TR 14.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "14+1",
      barrel: "4.1\"",
      weight: "850 g",
      length: "186 mm",
      material: "Aleación metálica",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma metálica de servicio para portador civil. Alta capacidad y precisión mecánica.",
  },
  {
    id: "blow-trz914",
    code: "PT·TZ914",
    name: "BLOW TRZ 914",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [{ label: "Estándar", image: P("BLOW TRZ 914.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "14+1",
      barrel: "3.9\"",
      weight: "730 g",
      length: "160 mm",
      material: "Metal Body",
    },
    status: "DISPONIBLE",
    description: "Compacta metálica con equilibrio óptimo entre peso y capacidad. Ideal EDC.",
  },
  {
    id: "ekol-firat-compact",
    code: "PT·FC9",
    name: "EKOL FIRAT COMPACT",
    caliber: "9 mm P.A.K.",
    intents: ["defensa"],
    variants: [
      { label: "Negra", image: P("EKOL FIRAT COMPACT NEGRA.jpeg") },
      { label: "Blanca", image: P("EKOL FIRAT COMPACT BLANCA.jpeg") },
    ],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "3.9\"",
      weight: "780 g",
      length: "175 mm",
      material: "Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Versión compacta de la Firat con capacidad de servicio. Portabilidad óptima para EDC civil. Disponible en acabado negro y blanco.",
  },
  {
    id: "retay-g19c",
    code: "PT·G19C",
    name: "RETAY G19C",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [{ label: "Estándar", image: P("RETAY G19C.jpeg") }],
    specs: {
      action: "Semi-automática · Striker",
      capacity: "14+1",
      barrel: "4.0\"",
      weight: "750 g",
      length: "190 mm",
      material: "Aleación metálica",
    },
    status: "DISPONIBLE",
    description:
      "Referencia striker-fired compacta. Manejo instintivo y rápido despliegue defensivo.",
  },
  {
    id: "ekol-viper-25",
    code: "PT·V25",
    name: "EKOL VIPER 2.5\"",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [
      { label: "Blanca", image: P("EKOL VIPER 2.5.jpeg") },
      { label: "Negra", image: P("EKOL VIPER 2.5 NEGRA.jpeg") },
    ],
    specs: {
      action: "Revólver · Doble Acción",
      capacity: "6 tiros",
      barrel: "2.5\"",
      weight: "850 g",
      length: "180 mm",
      material: "Aleación metálica",
    },
    status: "DISPONIBLE",
    description:
      "Revólver traumático compacto de doble acción. Simplicidad mecánica y disuasión inmediata.",
  },
  {
    id: "ekol-viper-30",
    code: "PT·V30",
    name: "EKOL VIPER 3.0\"",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    variants: [
      { label: "Blanca", image: P("EKOL VIPER 3.0.jpeg") },
      { label: "Negra", image: P("EKOL VIPER 3.0 NEGRA.jpeg") },
    ],
    specs: {
      action: "Revólver · Doble Acción",
      capacity: "6 tiros",
      barrel: "3\"",
      weight: "730 g",
      length: "200 mm",
      material: "Aleación metálica",
    },
    status: "DISPONIBLE",
    description:
      "Revólver traumático de cañón medio. Balance entre portabilidad y control de disparo.",
  },

  /* ---------- TIRO DEPORTIVO ---------- */
  {
    id: "blow-f92",
    code: "PT·F92",
    name: "BLOW F 92",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("BLOW F 92.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "4.5\"",
      weight: "950 g",
      length: "210 mm",
      material: "Metal Body",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma inspirada en la 92 con chasis metálico. Sensación operativa premium.",
  },
  {
    id: "ekol-firat-magnum",
    code: "PT·FMG",
    name: "EKOL FIRAT MAGNUM",
    caliber: "9 mm P.A.K.",
    intents: ["deportivo"],
    variants: [
      { label: "Negra", image: P("EKOL FIRAT MAGNUM NEGRA.jpeg") },
      { label: "Blanca", image: P("EKOL FIRAT MAGNUM BLANCA.jpeg") },
    ],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "4.5\"",
      weight: "930 g",
      length: "210 mm",
      material: "Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Full size de alta capacidad con masa aumentada para práctica intensiva. Disponible en negro y blanco.",
  },
  {
    id: "ekol-nig-211",
    code: "PT·N211",
    name: "EKOL NIG 211",
    caliber: "9 mm P.A.K.",
    intents: ["deportivo"],
    variants: [
      { label: "Negra", image: P("EKOL NIG 211 NEGRA.jpeg") },
      { label: "Blanca", image: P("EKOL NIG 211 BLANCA.jpeg") },
    ],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "3.9\"",
      weight: "780 g",
      length: "175 mm",
      material: "Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Chasis 1911-style con excelente ergonomía. Estabilidad y precisión de disparo. Dos acabados disponibles.",
  },
  {
    id: "ekol-special-99",
    code: "PT·S99",
    name: "EKOL SPECIAL 99 REV-II",
    caliber: "9 mm P.A.K.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("EKOL SPECIAL 99 REV-II.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "4.5\"",
      weight: "830 g",
      length: "200 mm",
      material: "Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Full size clásica de servicio. Robustez y consistencia para entrenamiento en polígono.",
  },
  {
    id: "ekol-viper-45",
    code: "PT·V45",
    name: "EKOL VIPER 4.5\"",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [
      { label: "Blanca", image: P("EKOL VIPER 4.5.jpeg") },
      { label: "Negra", image: P("EKOL VIPER 4.5 NEGRA.jpeg") },
    ],
    specs: {
      action: "Revólver · Doble Acción",
      capacity: "6 tiros",
      barrel: "4.5\"",
      weight: "980 g",
      length: "245 mm",
      material: "Aleación metálica",
    },
    status: "DISPONIBLE",
    description:
      "Revólver traumático de cañón largo. Máxima precisión para tiro deportivo y polígono.",
  },
  {
    id: "retay-g17",
    code: "PT·G17",
    name: "RETAY G17",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("RETAY G17.jpeg") }],
    specs: {
      action: "Semi-automática · Striker",
      capacity: "17+1",
      barrel: "4.49\"",
      weight: "830 g",
      length: "200 mm",
      material: "Polímero reforzado",
    },
    status: "DISPONIBLE",
    description:
      "Full size striker-fired de altísima capacidad. Referencia deportiva por excelencia.",
  },
  {
    id: "retay-s2022",
    code: "PT·S2022",
    name: "RETAY S2022",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("RETAY S2022.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "4.5\"",
      weight: "830 g",
      length: "200 mm",
      material: "Polímero reforzado",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma moderna de servicio con excelente ergonomía y recuperación de disparo.",
  },
  {
    id: "retay-xpro",
    code: "PT·XPR",
    name: "RETAY X PRO",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("RETAY X PRO.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "4.5\"",
      weight: "740 g",
      length: "190 mm",
      material: "Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Versión Pro de alta capacidad. Precisión y consistencia para práctica intensiva.",
  },
  {
    id: "retay-xtreme",
    code: "PT·XTR",
    name: "RETAY X TREME",
    caliber: "9 mm P.A.",
    intents: ["deportivo"],
    variants: [{ label: "Estándar", image: P("RETAY X TREME.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "14+1",
      barrel: "4.5\"",
      weight: "740 g",
      length: "190 mm",
      material: "Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma deportiva ligera con excelente balance. Rápida recuperación de disparo.",
  },

  /* ---------- ENTRENAMIENTO TÁCTICO ---------- */
  {
    id: "escopeta-cal12",
    code: "PT·ESC12",
    name: "ESCOPETA CALIBRE 12",
    caliber: "Cal. 12 Traumática",
    intents: ["tactico"],
    variants: [{ label: "Estándar", image: P("ESCOPETA CALIBRE 12.jpeg") }],
    specs: {
      action: "Bombeo (Pump-Action)",
      capacity: "5+1",
      barrel: "18\"",
      weight: "2.8 kg",
      length: "930 mm",
      material: "Polímero alta resistencia",
    },
    status: "DISPONIBLE",
    description:
      "Escopeta táctica calibre 12 traumática. Máxima disuasión con acción de bombeo confiable.",
  },
  {
    id: "fusil-9mm",
    code: "PT·F9",
    name: "FUSIL CALIBRE 9MM",
    caliber: "9 mm",
    intents: ["tactico"],
    variants: [{ label: "Estándar", image: P("FUSIL CALIBRE 9MM.jpeg") }],
    specs: {
      action: "Semi-automático",
      capacity: "Alta capacidad",
      barrel: "10\"",
      weight: "3 kg",
      length: "780 mm",
      material: "Polímero alta resistencia",
    },
    status: "DISPONIBLE",
    description:
      "Fusil semi-automático 9mm con cargadores de alta capacidad. Plataforma modular de entrenamiento táctico.",
  },
  {
    id: "ekol-asi",
    code: "PT·ASI",
    name: "EKOL ASI",
    caliber: "9 mm P.A.K.",
    intents: ["tactico"],
    variants: [{ label: "Estándar", image: P("EKOL ASi.jpeg") }],
    specs: {
      action: "Full & Semi Auto",
      capacity: "17+1",
      barrel: "5.5\"",
      weight: "2100 g",
      length: "485 mm",
      material: "Aleación / Polímero",
    },
    status: "BAJO CONSULTA",
    description:
      "Subfusil traumático de selección full/semi auto. Plataforma operativa premium para entrenamiento táctico avanzado.",
  },
  {
    id: "ekol-jackal",
    code: "PT·JKM",
    name: "EKOL JACKAL DUAL MAGNUM",
    caliber: "9 mm P.A.K.",
    intents: ["tactico"],
    variants: [{ label: "Estándar", image: P("EKOL JACKEL DUAL MAGNUM.jpeg") }],
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: "5.0\"",
      weight: "1050 g",
      length: "220 mm",
      material: "Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma reforzada Dual Magnum con masa aumentada. Reducción de retroceso y desempeño táctico.",
  },
];



/* ---------- Local catalog store (demo persistence via localStorage) ---------- */
const STORAGE_KEY = "pt.catalog.v1";

let current: Product[] = DEFAULT_PRODUCTS;
let hydrated = false;
const listeners = new Set<() => void>();

function readStorage(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PRODUCTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed as Product[];
  } catch {
    // ignore
  }
  return DEFAULT_PRODUCTS;
}

function emit() {
  listeners.forEach((l) => l());
}

export function getCatalog(): Product[] {
  return current;
}

export function setCatalog(next: Product[]) {
  current = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  emit();
}

export function resetCatalog() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  current = DEFAULT_PRODUCTS;
  emit();
}

export function upsertProduct(product: Product) {
  const idx = current.findIndex((p) => p.id === product.id);
  const next = idx >= 0 ? current.map((p) => (p.id === product.id ? product : p)) : [...current, product];
  setCatalog(next);
}

export function deleteProduct(id: string) {
  setCatalog(current.filter((p) => p.id !== id));
}

/** Subscribe to catalog changes; hydrates from localStorage on first client use. */
export function useCatalog(): Product[] {
  const [items, setItems] = useState<Product[]>(current);

  useEffect(() => {
    if (!hydrated) {
      hydrated = true;
      current = readStorage();
    }
    const sync = () => setItems(current);
    sync();
    listeners.add(sync);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        current = readStorage();
        sync();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return items;
}
