import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import ekolViper from "@/assets/products/ekol-viper-3.jpg";
import retayS2022 from "@/assets/products/retay-s2022.jpg";
import blowF92 from "@/assets/products/blow-f92.jpg";
import retayG17 from "@/assets/products/retay-g17.jpg";
import ekolNig211 from "@/assets/products/ekol-nig-211.jpg";
import ekolFiratMagnum from "@/assets/products/ekol-firat-magnum.jpg";
import blowTr92d from "@/assets/products/blow-tr92d.jpg";
import ekolSpecial99 from "@/assets/products/ekol-special-99.jpg";
import ekolFiratCompact from "@/assets/products/ekol-firat-compact.jpg";

type Intent = "defensa" | "deportivo" | "tactico";

export interface Product {
  id: string;
  code: string;
  name: string;
  caliber: string;
  intents: Intent[];
  image: string;
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

const WHATSAPP = "https://wa.me/573000000000";

export const PRODUCTS: Product[] = [
  {
    id: "ekol-viper-3",
    code: "PT·V03",
    name: "EKOL VIPER 3.0",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    image: ekolViper,
    specs: {
      action: "Doble acción · Revólver",
      capacity: "6 tiros",
      barrel: '3" (76 mm)',
      weight: "730 g",
      length: "20 cm",
      material: "Aleación de acero / Zamak",
    },
    status: "DISPONIBLE",
    description:
      "Revólver traumático de doble acción, robusto y confiable. Diseño clásico para portadores civiles que priorizan simplicidad mecánica y disuasión inmediata.",
  },
  {
    id: "retay-s2022",
    code: "PT·S22",
    name: "RETAY S2022",
    caliber: "9 mm P.A.",
    intents: ["defensa", "deportivo"],
    image: retayS2022,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '4.5" (114 mm)',
      weight: "830 g",
      length: "20 cm",
      material: "Aleación / Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Plataforma semi-automática balanceada. Alta capacidad, ergonomía moderna y disparo consistente para defensa civil y práctica en polígono.",
  },
  {
    id: "blow-f92",
    code: "PT·F92",
    name: "BLOW F 92",
    caliber: "9 mm P.A.",
    intents: ["defensa", "tactico"],
    image: blowF92,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '4.5" (114 mm)',
      weight: "950 g",
      length: "21 cm",
      material: "Aleación forjada",
    },
    status: "DISPONIBLE",
    description:
      "Chasis metálico de servicio pesado, inspirado en la plataforma 92. Estabilidad de disparo y sensación operativa premium.",
  },
  {
    id: "retay-g17",
    code: "PT·G17",
    name: "RETAY G17",
    caliber: "9 mm P.A.",
    intents: ["deportivo", "tactico"],
    image: retayG17,
    specs: {
      action: "Semi-automática · Striker",
      capacity: "17+1",
      barrel: '4.49" (114 mm)',
      weight: "830 g",
      length: "20 cm",
      material: "Polímero / Acero nitrurado",
    },
    status: "DISPONIBLE",
    description:
      "Referencia striker-fired de alta capacidad. Ideal para entrenamiento táctico y disciplinas de tiro rápido.",
  },
  {
    id: "ekol-nig-211",
    code: "PT·N21",
    name: "EKOL NIG 211",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    image: ekolNig211,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '3.9" (99 mm)',
      weight: "780 g",
      length: "17.5 cm",
      material: "Aleación / Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Compacta 1911-style para porte encubierto. Excelente relación tamaño/capacidad para EDC civil.",
  },
  {
    id: "blow-tr92d",
    code: "PT·T92",
    name: "BLOW TR92 D",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    image: blowTr92d,
    specs: {
      action: "Semi-automática DA/SA",
      capacity: "15+1",
      barrel: '4.1" (104 mm)',
      weight: "720 g",
      length: "19 cm",
      material: "Aleación ligera",
    },
    status: "DISPONIBLE",
    description:
      "Ligera y ágil. Manejo instintivo con capacidad de servicio; una plataforma equilibrada para portador civil experimentado.",
  },
  {
    id: "ekol-firat-magnum",
    code: "PT·FM9",
    name: "EKOL FIRAT MAGNUM",
    caliber: "9 mm P.A.",
    intents: ["tactico", "deportivo"],
    image: ekolFiratMagnum,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '4.5" (114 mm)',
      weight: "930 g",
      length: "21 cm",
      material: "Acero / Aleación",
    },
    status: "DISPONIBLE",
    description:
      "Versión reforzada de la línea Firat. Masa aumentada para reducción de retroceso y desempeño premium en polígono.",
  },
  {
    id: "ekol-special-99",
    code: "PT·S99",
    name: "EKOL SPECIAL 99 REV-II",
    caliber: "9 mm P.A.",
    intents: ["defensa", "deportivo"],
    image: ekolSpecial99,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '4.5" (114 mm)',
      weight: "830 g",
      length: "20 cm",
      material: "Aleación / Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Modelo insignia de la línea Special. Acabado premium y ergonomía refinada para uso mixto defensivo/deportivo.",
  },
  {
    id: "ekol-firat-compact",
    code: "PT·FC9",
    name: "EKOL FIRAT COMPACT",
    caliber: "9 mm P.A.",
    intents: ["defensa"],
    image: ekolFiratCompact,
    specs: {
      action: "Semi-automática",
      capacity: "15+1",
      barrel: '3.9" (99 mm)',
      weight: "780 g",
      length: "17.5 cm",
      material: "Aleación / Polímero",
    },
    status: "DISPONIBLE",
    description:
      "Versión compacta de la Firat. Portabilidad óptima manteniendo capacidad de servicio: ideal EDC civil.",
  },
];

const INTENTS: { id: Intent | "all"; label: string; sub: string }[] = [
  { id: "all", label: "Todos", sub: "INVENTARIO COMPLETO" },
  { id: "defensa", label: "Defensa Personal", sub: "CIVIL · EDC" },
  { id: "deportivo", label: "Tiro Deportivo", sub: "IPSC · IDPA" },
  { id: "tactico", label: "Entrenamiento Táctico", sub: "OPERATIVO" },
];

export function Catalog() {
  const [intent, setIntent] = useState<Intent | "all">("all");
  const [detail, setDetail] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (intent === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.intents.includes(intent))),
    [intent],
  );

  return (
    <section id="catalogo" className="relative border-t border-[color:var(--amber)]/10 bg-[#0A0A0A] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-grain mix-blend-overlay" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
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
        <div className="mb-10 border-y border-[color:var(--amber)]/15">
          <div className="flex flex-wrap gap-0">
            {INTENTS.map((it) => {
              const active = intent === it.id;
              return (
                <button
                  key={it.id}
                  onClick={() => setIntent(it.id)}
                  className={`group relative flex-1 min-w-[160px] border-r border-[color:var(--amber)]/15 px-4 py-4 text-left transition-colors last:border-r-0 ${
                    active ? "bg-[color:var(--amber)]/10" : "hover:bg-[color:var(--amber)]/5"
                  }`}
                >
                  <div className={`font-mono-tech text-[9px] ${active ? "text-amber" : "text-muted-foreground"}`}>
                    [{it.sub}]
                  </div>
                  <div
                    className={`mt-1 text-sm font-semibold uppercase tracking-wide md:text-base ${active ? "text-foreground" : "text-foreground/70"}`}
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

        {/* Grid */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onOpen={() => setDetail(p)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--amber)]/10 pt-6 font-mono-tech text-[10px] text-muted-foreground md:flex-row md:items-center">
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative cursor-pointer border border-[color:var(--amber)]/10 bg-[#111] transition-all duration-300 hover:border-[color:var(--amber)]/70 hover:shadow-[0_0_40px_-10px_rgba(245,166,35,0.4)]"
      onClick={onOpen}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]/70" />

      <div className="flex items-center justify-between border-b border-[color:var(--amber)]/10 px-3 py-2 font-mono-tech text-[9px]">
        <span className="text-amber">{product.code}</span>
        <span
          className={`flex items-center gap-1.5 ${product.status === "DISPONIBLE" ? "text-amber" : "text-muted-foreground"}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${product.status === "DISPONIBLE" ? "bg-[color:var(--amber)] shadow-[0_0_6px_var(--amber)] animate-hud-pulse" : "bg-muted-foreground/50"}`}
          />
          {product.status}
        </span>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <img
          src={product.image}
          alt={`${product.name} — ${product.caliber}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-center gap-2 opacity-60">
          <div className="h-1.5 w-px bg-[color:var(--amber)]/70" />
          <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
          <span className="font-mono-tech text-[8px] text-amber/80">{product.specs.length}</span>
          <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
          <div className="h-1.5 w-px bg-[color:var(--amber)]/70" />
        </div>

        {/* Blueprint hover overlay with specs */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-black/30 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="font-mono-tech text-[9px] text-amber/80">[SPECS · CLASIFICADO]</div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono-tech text-[10px]">
            <SpecRow k="ACT" v={product.specs.action} />
            <SpecRow k="CAP" v={product.specs.capacity} />
            <SpecRow k="BBL" v={product.specs.barrel} />
            <SpecRow k="MASS" v={product.specs.weight} />
            <SpecRow k="LEN" v={product.specs.length} />
            <SpecRow k="MAT" v={product.specs.material} />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-bold uppercase tracking-wide text-foreground md:text-lg">{product.name}</h3>
          <span className="font-mono-tech text-[9px] text-muted-foreground">CAL</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono-tech text-[10px] text-amber">{product.caliber}</span>
          <span className="font-mono-tech text-[9px] text-muted-foreground">{product.specs.capacity}</span>
        </div>

        <div
          className="mt-4 flex items-center justify-between border border-[color:var(--amber)]/50 px-3 py-2.5 font-mono-tech text-[10px] text-amber transition-all group-hover:bg-[color:var(--amber)] group-hover:text-primary-foreground group-hover:shadow-[0_0_24px_-4px_var(--amber)]"
        >
          <span>Ver Ficha Técnica</span>
          <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-[color:var(--amber)]/10 pb-1">
      <span className="text-muted-foreground">{k}</span>
      <span className="truncate text-right text-foreground/90">{v}</span>
    </div>
  );
}

/* ---------- Detail modal ---------- */
function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const waLink = `${WHATSAPP}?text=${encodeURIComponent(
    `Hola Punto Táctico, quiero consultar disponibilidad de ${product.name} (${product.code}).`,
  )}`;

  const specRows: [string, string][] = [
    ["Acción", product.specs.action],
    ["Capacidad", product.specs.capacity],
    ["Cañón", product.specs.barrel],
    ["Peso", product.specs.weight],
    ["Longitud total", product.specs.length],
    ["Material", product.specs.material],
    ["Calibre", product.caliber],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-6xl grid-cols-1 overflow-hidden border border-[color:var(--amber)]/40 bg-[#0A0A0A] shadow-[0_0_80px_-10px_rgba(245,166,35,0.35)] md:grid-cols-[1.15fr_1fr]"
      >
        <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[color:var(--amber)]" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[color:var(--amber)]" />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-[color:var(--amber)]/40 bg-black/60 text-amber transition-colors hover:bg-[color:var(--amber)] hover:text-primary-foreground"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image side */}
        <div className="relative flex items-center justify-center overflow-hidden bg-[#111] p-6 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 max-h-[60vh] w-full object-contain"
          />
          {/* Corner measurements */}
          <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center gap-2 opacity-70">
            <div className="h-1.5 w-px bg-[color:var(--amber)]" />
            <div className="h-px flex-1 bg-[color:var(--amber)]/50" />
            <span className="font-mono-tech text-[9px] text-amber">{product.specs.length}</span>
            <div className="h-px flex-1 bg-[color:var(--amber)]/50" />
            <div className="h-1.5 w-px bg-[color:var(--amber)]" />
          </div>
        </div>

        {/* Info side */}
        <div className="relative flex max-h-[92vh] flex-col overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[color:var(--amber)]/20 px-6 py-3 font-mono-tech text-[10px]">
            <span className="text-amber">{product.code}</span>
            <span className="flex items-center gap-1.5 text-amber">
              <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)] shadow-[0_0_6px_var(--amber)]" />
              {product.status}
            </span>
          </div>

          <div className="flex-1 space-y-6 px-6 py-6 md:px-8">
            <div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-amber/80">
                FICHA TÉCNICA · CLASIFICADA
              </div>
              <h3
                className="mt-3 font-black uppercase leading-[0.95] tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
              >
                {product.name}
              </h3>
              <div className="mt-2 font-mono-tech text-[11px] text-amber">{product.caliber}</div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div>
              <div className="mb-3 font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
                Especificaciones
              </div>
              <dl className="grid grid-cols-1 border border-[color:var(--amber)]/20 font-mono-tech text-[11px]">
                {specRows.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between px-4 py-2.5 ${
                      i < specRows.length - 1 ? "border-b border-[color:var(--amber)]/10" : ""
                    }`}
                  >
                    <dt className="uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="text-right text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="mb-2 font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
                Perfil operativo
              </div>
              <div className="flex flex-wrap gap-2 font-mono-tech text-[10px]">
                {product.intents.map((i) => (
                  <span
                    key={i}
                    className="border border-[color:var(--amber)]/40 px-2.5 py-1 uppercase tracking-widest text-amber"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[color:var(--amber)]/20 bg-black/60 p-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-[color:var(--amber)] bg-[color:var(--amber)]/10 px-5 py-3 font-mono-tech text-[11px] uppercase tracking-wider text-amber transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground hover:shadow-[0_0_25px_-4px_var(--amber)]"
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
