import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gunCompact from "@/assets/gun-compact.jpg";
import gunFullsize from "@/assets/gun-fullsize.jpg";
import gunRevolver from "@/assets/gun-revolver.jpg";

type Intent = "defensa" | "deportivo" | "tactico";

interface Product {
  id: string;
  code: string;
  name: string;
  caliber: string;
  intents: Intent[];
  image: string;
  specs: {
    weight: string;
    barrel: string;
    capacity: string;
    length: string;
    action: string;
    material: string;
  };
  status: "DISPONIBLE" | "BAJO CONSULTA" | "LISTA DE ESPERA";
}

const WHATSAPP = "https://wa.me/573000000000";

const PRODUCTS: Product[] = [
  {
    id: "trm-1024",
    code: "PT·001",
    name: "TRM-1024 Compact",
    caliber: "9x19 P.A.K.",
    intents: ["defensa"],
    image: gunCompact,
    specs: {
      weight: "824 g",
      barrel: "114 mm",
      capacity: "15+1",
      length: "198 mm",
      action: "Semi-auto DA/SA",
      material: "Polímero / Acero nitrurado",
    },
    status: "DISPONIBLE",
  },
  {
    id: "trm-2014",
    code: "PT·014",
    name: "TRM-2014 Operator",
    caliber: "9x22 P.A.K.",
    intents: ["tactico", "deportivo"],
    image: gunFullsize,
    specs: {
      weight: "1042 g",
      barrel: "138 mm",
      capacity: "17+1",
      length: "221 mm",
      action: "Striker-fired",
      material: "Aluminio 7075 / Polímero",
    },
    status: "BAJO CONSULTA",
  },
  {
    id: "trv-357",
    code: "PT·037",
    name: "TRV-357 Sentinel",
    caliber: ".38 CTS Traumático",
    intents: ["defensa", "tactico"],
    image: gunRevolver,
    specs: {
      weight: "1120 g",
      barrel: "102 mm",
      capacity: "6",
      length: "232 mm",
      action: "Doble acción",
      material: "Acero forjado nitrurado",
    },
    status: "DISPONIBLE",
  },
  {
    id: "trm-980x",
    code: "PT·080",
    name: "TRM-980X Ranger",
    caliber: "9x19 P.A.K.",
    intents: ["deportivo"],
    image: gunFullsize,
    specs: {
      weight: "890 g",
      barrel: "125 mm",
      capacity: "17+1",
      length: "210 mm",
      action: "Semi-auto SA",
      material: "Polímero reforzado",
    },
    status: "LISTA DE ESPERA",
  },
  {
    id: "trm-050c",
    code: "PT·050",
    name: "TRM-050C Covert",
    caliber: "9x19 P.A.K.",
    intents: ["defensa"],
    image: gunCompact,
    specs: {
      weight: "702 g",
      barrel: "88 mm",
      capacity: "12+1",
      length: "168 mm",
      action: "Striker-fired",
      material: "Polímero / Acero",
    },
    status: "DISPONIBLE",
  },
  {
    id: "trm-311t",
    code: "PT·311",
    name: "TRM-311T Trainer",
    caliber: "9x22 P.A.K.",
    intents: ["tactico"],
    image: gunFullsize,
    specs: {
      weight: "965 g",
      barrel: "120 mm",
      capacity: "17+1",
      length: "205 mm",
      action: "Semi-auto DA/SA",
      material: "Polímero / Acero nitrurado",
    },
    status: "BAJO CONSULTA",
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
            <span className="text-muted-foreground">{String(filtered.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}</span>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className="font-black uppercase leading-[0.9] tracking-tight text-foreground" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
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
                  <div className={`mt-1 text-sm font-semibold uppercase tracking-wide md:text-base ${active ? "text-foreground" : "text-foreground/70"}`}>
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
              <ProductCard key={p.id} product={p} index={i} />
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
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const waLink = `${WHATSAPP}?text=${encodeURIComponent(
    `Hola Punto Táctico, quiero consultar disponibilidad de ${product.name} (${product.code}).`,
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative border border-[color:var(--amber)]/10 bg-[#111] transition-all duration-300 hover:border-[color:var(--amber)]/70 hover:shadow-[0_0_40px_-10px_rgba(245,166,35,0.4)]"
    >
      {/* Corner ticks */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]/70" />

      {/* Top meta bar */}
      <div className="flex items-center justify-between border-b border-[color:var(--amber)]/10 px-3 py-2 font-mono-tech text-[9px]">
        <span className="text-amber">{product.code}</span>
        <span className={`flex items-center gap-1.5 ${product.status === "DISPONIBLE" ? "text-amber" : "text-muted-foreground"}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${product.status === "DISPONIBLE" ? "bg-[color:var(--amber)] shadow-[0_0_6px_var(--amber)] animate-hud-pulse" : "bg-muted-foreground/50"}`} />
          {product.status}
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
        {/* Blueprint grid */}
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
          width={1280}
          height={768}
          className="absolute inset-0 h-full w-full object-cover mix-blend-lighten transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Measurement line */}
        <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-center gap-2 opacity-60">
          <div className="h-1.5 w-px bg-[color:var(--amber)]/70" />
          <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
          <span className="font-mono-tech text-[8px] text-amber/80">{product.specs.length}</span>
          <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
          <div className="h-1.5 w-px bg-[color:var(--amber)]/70" />
        </div>

        {/* Blueprint overlay on hover */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-black/30 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="font-mono-tech text-[9px] text-amber/80">[SPECS · CLASIFICADO]</div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono-tech text-[10px]">
            <SpecRow k="MASS" v={product.specs.weight} />
            <SpecRow k="BBL" v={product.specs.barrel} />
            <SpecRow k="CAP" v={product.specs.capacity} />
            <SpecRow k="LEN" v={product.specs.length} />
            <SpecRow k="ACT" v={product.specs.action} />
            <SpecRow k="MAT" v={product.specs.material} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-bold uppercase tracking-wide text-foreground md:text-lg">{product.name}</h3>
          <span className="font-mono-tech text-[9px] text-muted-foreground">CAL</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono-tech text-[10px] text-amber">{product.caliber}</span>
          <span className="font-mono-tech text-[9px] text-muted-foreground">
            PRECIO · <button onClick={() => setExpanded((v) => !v)} className="underline underline-offset-2 hover:text-amber">consultar</button>
          </span>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-[color:var(--amber)]/10 pt-3 font-mono-tech text-[10px]">
                <SpecRow k="MASS" v={product.specs.weight} />
                <SpecRow k="BBL" v={product.specs.barrel} />
                <SpecRow k="CAP" v={product.specs.capacity} />
                <SpecRow k="ACT" v={product.specs.action} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setExpanded(true)}
          className="mt-4 flex items-center justify-between border border-[color:var(--amber)]/50 px-3 py-2.5 font-mono-tech text-[10px] text-amber transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground hover:shadow-[0_0_24px_-4px_var(--amber)]"
        >
          <span>{product.status === "LISTA DE ESPERA" ? "Solicitar Asignación" : "Consultar Disponibilidad"}</span>
          <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-[color:var(--amber)]/10 pb-1">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground/90">{v}</span>
    </div>
  );
}
