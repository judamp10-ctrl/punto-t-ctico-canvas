import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type Intent = "defensa" | "deportivo" | "tactico";

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

const P = (file: string) => `/${encodeURIComponent(file)}`;

export const PRODUCTS: Product[] = [
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
    variants: [{ label: "Estándar", image: P("EKOL VIPER 2.5.jpeg") }],
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
    variants: [{ label: "Estándar", image: P("EKOL VIPER 3.0.jpeg") }],
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
    variants: [{ label: "Estándar", image: P("EKOL VIPER 4.5.jpeg") }],
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

const INTENTS: { id: Intent | "all"; label: string; sub: string }[] = [
  { id: "all", label: "Todos", sub: "INVENTARIO COMPLETO" },
  { id: "defensa", label: "Defensa Personal", sub: "CIVIL · EDC" },
  { id: "deportivo", label: "Tiro Deportivo", sub: "IPSC · IDPA" },
  { id: "tactico", label: "Entrenamiento Táctico", sub: "OPERATIVO" },
];

/* ---------- Image with ASSET_PENDING fallback ---------- */
function AssetImage({
  src,
  alt,
  className,
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]">
        <span className="font-mono-tech text-[9px] tracking-widest text-amber/70">
          [ ASSET_PENDING ]
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function Catalog() {
  const [intent, setIntent] = useState<Intent | "all">("all");
  const [detail, setDetail] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (intent === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.intents.includes(intent))),
    [intent],
  );

  return (
    <section id="catalogo" className="relative border-t border-[color:var(--amber)]/10 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-grain mix-blend-overlay" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 font-mono-tech text-[10px] text-amber/80">
            <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
            [SYS.INV.ONLINE]
            <span className="h-px flex-1 max-w-24 bg-[color:var(--amber)]/40" />
            <span className="text-muted-foreground">
              {String(filtered.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2
              className="font-black uppercase leading-[0.9] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Inventario<br />
              <span
                style={{
                  background: "linear-gradient(180deg, #F5A623 0%, #b8791a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Operativo.
              </span>
            </h2>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              Plataformas de tiro avaladas para importación y registro en Colombia. Cada unidad se asigna previa validación de perfil operativo.
            </p>
          </div>
        </div>

        {/* Intent Filters */}
        <div className="mb-8 border-y border-[color:var(--amber)]/15">
          <div className="flex flex-wrap gap-0">
            {INTENTS.map((it) => {
              const active = intent === it.id;
              return (
                <button
                  key={it.id}
                  onClick={() => setIntent(it.id)}
                  className={`group relative flex-1 min-w-[140px] border-r border-[color:var(--amber)]/15 px-3 py-3 text-left transition-colors last:border-r-0 ${
                    active ? "bg-[color:var(--amber)]/10" : "hover:bg-[color:var(--amber)]/5"
                  }`}
                >
                  <div className={`font-mono-tech text-[9px] ${active ? "text-amber" : "text-muted-foreground"}`}>
                    [{it.sub}]
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold uppercase tracking-wide md:text-sm ${active ? "text-foreground" : "text-foreground/70"}`}
                  >
                    {it.label}
                  </div>
                  {active && (
                    <motion.div
                      layoutId="intent-underline"
                      className="absolute inset-x-0 bottom-[-1px] h-px bg-[color:var(--amber)] shadow-[0_0_10px_var(--amber)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Grid: 2 mobile / 4 desktop */}
        <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onOpen={() => setDetail(p)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--amber)]/10 pt-6 pb-2 font-mono-tech text-[10px] text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)]/60" />
            ACCESO RESTRINGIDO · MAYORES DE EDAD · COL
          </div>
          <div>PRECIOS BAJO CONSULTA · ASIGNACIÓN SUJETA A PERFIL</div>
        </div>
      </div>

      <AnimatePresence>
        {detail && <ProductDetail product={detail} onClose={() => setDetail(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProductCard({
  product,
  index,
  onOpen,
}: {
  product: Product;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      className="group relative flex cursor-pointer flex-col border border-[color:var(--amber)]/10 bg-[#111] transition-all duration-300 hover:border-[color:var(--amber)]/70 hover:shadow-[0_0_32px_-10px_rgba(245,166,35,0.45)]"
      onClick={onOpen}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-[color:var(--amber)]/70" />

      <div className="flex items-center justify-between border-b border-[color:var(--amber)]/10 px-2.5 py-1.5 font-mono-tech text-[8px]">
        <span className="text-amber">{product.code}</span>
        <span
          className={`flex items-center gap-1 ${product.status === "DISPONIBLE" ? "text-amber" : "text-muted-foreground"}`}
        >
          <span
            className={`h-1 w-1 rounded-full ${product.status === "DISPONIBLE" ? "bg-[color:var(--amber)] shadow-[0_0_6px_var(--amber)] animate-hud-pulse" : "bg-muted-foreground/50"}`}
          />
          {product.status}
        </span>
      </div>

      <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <AssetImage
          src={product.variants[0].image}
          alt={`${product.name} — ${product.caliber}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        {product.variants.length > 1 && (
          <div className="absolute right-1.5 top-1.5 border border-[color:var(--amber)]/60 bg-black/80 px-1.5 py-0.5 font-mono-tech text-[8px] text-amber">
            {product.variants.length} COLORES
          </div>
        )}

        {/* Hover blueprint */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="font-mono-tech text-[8px] text-amber/80">[SPECS]</div>
          <div className="mt-1.5 grid grid-cols-2 gap-x-2 gap-y-0.5 font-mono-tech text-[9px]">
            <SpecRow k="CAP" v={product.specs.capacity} />
            <SpecRow k="LEN" v={product.specs.length} />
            <SpecRow k="MASS" v={product.specs.weight} />
            <SpecRow k="BBL" v={product.specs.barrel} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-2.5 md:p-3">
        <div>
          <h3 className="text-[13px] font-bold uppercase leading-tight tracking-wide text-foreground md:text-sm">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center justify-between font-mono-tech text-[9px]">
            <span className="text-amber">{product.caliber}</span>
            <span className="text-muted-foreground">{product.specs.capacity}</span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between border border-[color:var(--amber)]/50 px-2 py-1.5 font-mono-tech text-[9px] text-amber transition-all group-hover:bg-[color:var(--amber)] group-hover:text-primary-foreground">
          <span>Ver Ficha</span>
          <svg width="10" height="8" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-1.5 border-b border-[color:var(--amber)]/10 pb-0.5">
      <span className="text-muted-foreground">{k}</span>
      <span className="truncate text-right text-foreground/90">{v}</span>
    </div>
  );
}

/* ---------- Detail modal ---------- */
function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const variant = product.variants[variantIndex] ?? product.variants[0];

  const specRows: [string, string][] = [
    ["Calibre", product.caliber],
    ["Acción", product.specs.action],
    ["Capacidad", product.specs.capacity],
    ["Cañón", product.specs.barrel],
    ["Peso", product.specs.weight],
    ["Longitud total", product.specs.length],
    ["Material", product.specs.material],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto flex w-full max-w-4xl flex-col border border-[color:var(--amber)]/40 bg-[#0A0A0A] shadow-[0_0_80px_-10px_rgba(245,166,35,0.35)] md:flex-row"
      >
        <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]" />

        {/* Close button — large, amber, tap-friendly */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-11 w-11 items-center justify-center border border-[color:var(--amber)] bg-[color:var(--amber)]/15 text-amber shadow-[0_0_20px_-4px_var(--amber)] transition-colors hover:bg-[color:var(--amber)] hover:text-primary-foreground md:right-3 md:top-3"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </button>

        {/* Image side */}
        <div className="relative flex w-full flex-col md:w-1/2">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#111] p-4 md:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <AssetImage
              src={variant.image}
              alt={`${product.name} — ${variant.label}`}
              className="relative z-10 max-h-full max-w-full object-contain"
            />
          </div>

          {product.variants.length > 1 && (
            <div className="border-t border-[color:var(--amber)]/20 bg-black/60 p-3">
              <div className="font-mono-tech text-[9px] uppercase tracking-widest text-amber/80">
                Acabados disponibles
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => setVariantIndex(i)}
                    className={`flex items-center gap-2 border px-2.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-wider transition-all ${
                      i === variantIndex
                        ? "border-[color:var(--amber)] bg-[color:var(--amber)]/15 text-amber"
                        : "border-[color:var(--amber)]/30 text-muted-foreground hover:border-[color:var(--amber)]/70"
                    }`}
                  >
                    <span className="relative h-8 w-8 overflow-hidden border border-[color:var(--amber)]/20 bg-[#1A1A1A]">
                      <AssetImage
                        src={v.image}
                        alt={v.label}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </span>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info side */}
        <div className="flex w-full flex-col border-t border-[color:var(--amber)]/20 md:w-1/2 md:border-l md:border-t-0">
          <div className="flex items-center justify-between border-b border-[color:var(--amber)]/20 px-4 py-2.5 pr-14 font-mono-tech text-[10px] md:px-6">
            <span className="text-amber">{product.code}</span>
            <span className="flex items-center gap-1.5 text-amber">
              <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)] shadow-[0_0_6px_var(--amber)]" />
              {product.status}
            </span>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-4 py-5 md:px-6 md:py-6">
            <div>
              <div className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-amber/80">
                Ficha Técnica
              </div>
              <h3
                className="mt-2 font-black uppercase leading-[0.95] tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {product.name}
              </h3>
            </div>

            <p className="text-[13px] leading-relaxed text-muted-foreground">{product.description}</p>

            <dl className="grid grid-cols-1 border border-[color:var(--amber)]/20 font-mono-tech text-[11px]">
              {specRows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between px-3 py-2 ${
                    i < specRows.length - 1 ? "border-b border-[color:var(--amber)]/10" : ""
                  }`}
                >
                  <dt className="uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="text-right text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-[color:var(--amber)]/20 bg-black/60 p-3 md:p-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-[color:var(--amber)] bg-[color:var(--amber)]/10 px-4 py-3 font-mono-tech text-[11px] uppercase tracking-wider text-amber transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground"
            >
              <span>Consultar Disponibilidad · WhatsApp</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
