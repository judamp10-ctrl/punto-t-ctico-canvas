import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Package,
  Boxes,
  Layers,
  ShoppingCart,
  Users,
  Tag,
  Search,
  Settings,
  Lock,
  Plus,
  ArrowLeft,
  Activity,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { BulletsBackground } from "@/components/BulletsBackground";

export const Route = createFileRoute("/perfil-operativo")({
  head: () => ({
    meta: [
      { title: "Perfil Operativo · Panel Administrativo — Punto Táctico" },
      { name: "description", content: "Panel administrativo restringido de Punto Táctico. Acceso autorizado únicamente." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: PerfilOperativo,
});

type TabKey =
  | "productos"
  | "inventario"
  | "categorias"
  | "pedidos"
  | "clientes"
  | "ofertas"
  | "seo"
  | "configuracion";

const TABS: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[] = [
  { key: "productos", label: "Productos", icon: Package },
  { key: "inventario", label: "Inventario", icon: Boxes },
  { key: "categorias", label: "Categorías", icon: Layers },
  { key: "pedidos", label: "Pedidos", icon: ShoppingCart },
  { key: "clientes", label: "Clientes", icon: Users },
  { key: "ofertas", label: "Ofertas", icon: Tag },
  { key: "seo", label: "SEO", icon: Search },
  { key: "configuracion", label: "Configuración", icon: Settings },
];

function PerfilOperativo() {
  const [active, setActive] = useState<TabKey>("productos");

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BulletsBackground />
      <div className="relative flex min-h-screen" style={{ zIndex: 1 }}>
        <Sidebar active={active} setActive={setActive} />
        <div className="flex flex-1 flex-col">
          <AccessBanner />
          <TopBar active={active} />
          <main className="flex-1 px-8 py-8">
            <MainPanel active={active} />
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------- Access banner ---------- */
function AccessBanner() {
  return (
    <div className="flex items-center justify-between border-b border-[color:var(--amber)]/25 bg-[color:var(--amber)]/[0.06] px-8 py-2 font-mono-tech text-[10px] uppercase tracking-[0.2em]">
      <div className="flex items-center gap-3 text-amber">
        <Lock className="h-3 w-3" />
        <span>Estado:</span>
        <span className="text-amber/90">Acceso Restringido · Personal Autorizado</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="hidden md:inline">SESSION · A-1042</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
      </div>
    </div>
  );
}

/* ---------- Sidebar ---------- */
function Sidebar({ active, setActive }: { active: TabKey; setActive: (k: TabKey) => void }) {
  return (
    <aside className="sticky top-0 flex h-screen w-[240px] flex-col border-r border-[color:var(--amber)]/20 bg-black/70 backdrop-blur">
      <div className="flex h-16 items-center gap-3 border-b border-[color:var(--amber)]/20 px-5">
        <div className="flex h-7 w-7 items-center justify-center border border-[color:var(--amber)]/70">
          <div className="h-2 w-2 bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
        </div>
        <div className="leading-none">
          <div className="font-display text-[13px] font-bold uppercase tracking-[0.22em]">
            Punto <span className="text-amber">Táctico</span>
          </div>
          <div className="mt-1 font-mono-tech text-[9px] text-muted-foreground">ADMIN · CONSOLE</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="px-2 pb-2 font-mono-tech text-[9px] uppercase tracking-widest text-amber/70">
          Módulos
        </div>
        <ul className="space-y-1">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <li key={t.key}>
                <button
                  onClick={() => setActive(t.key)}
                  className={`group flex w-full items-center gap-3 border px-3 py-2 text-left font-mono-tech text-[11px] uppercase tracking-wider transition-all ${
                    isActive
                      ? "border-[color:var(--amber)] bg-[color:var(--amber)]/10 text-amber shadow-[inset_0_0_20px_rgba(245,166,35,0.08)]"
                      : "border-transparent text-muted-foreground hover:border-[color:var(--amber)]/40 hover:text-foreground"
                  }`}
                >
                  <t.icon className="h-4 w-4" strokeWidth={1.4} />
                  <span>[ {t.label} ]</span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-[color:var(--amber)]/20 p-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground transition hover:text-amber"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al sitio
        </Link>
      </div>
    </aside>
  );
}

/* ---------- Top bar ---------- */
function TopBar({ active }: { active: TabKey }) {
  const label = TABS.find((t) => t.key === active)?.label ?? "";
  return (
    <div className="flex items-center justify-between border-b border-[color:var(--amber)]/15 px-8 py-5">
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-amber/80">
          MÓDULO / {label}
        </div>
        <h1 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
          {label}
        </h1>
      </div>
      <div className="flex items-center gap-3 font-mono-tech text-[10px] text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-amber" />
        <span>OPERADOR · CMD.01</span>
      </div>
    </div>
  );
}

/* ---------- Main panel ---------- */
function MainPanel({ active }: { active: TabKey }) {
  switch (active) {
    case "productos":
      return <ProductosPanel />;
    case "inventario":
      return <InventarioPanel />;
    case "categorias":
      return <CategoriasPanel />;
    case "pedidos":
      return <PedidosPanel />;
    case "clientes":
      return <ClientesPanel />;
    case "ofertas":
      return <OfertasPanel />;
    case "seo":
      return <SeoPanel />;
    case "configuracion":
      return <ConfigPanel />;
  }
}

/* ---------- Reusable pieces ---------- */
function MetricCard({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div className="border border-[color:var(--amber)]/25 bg-black/50 p-5 backdrop-blur">
      <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
        <span>{label}</span>
        <Icon className="h-4 w-4 text-amber" strokeWidth={1.4} />
      </div>
      <div className="mt-4 font-display text-3xl font-bold text-foreground">{value}</div>
      {delta && <div className="mt-1 font-mono-tech text-[10px] text-muted-foreground">{delta}</div>}
    </div>
  );
}

function ActionBtn({
  children,
  primary,
  icon: Icon,
}: {
  children: React.ReactNode;
  primary?: boolean;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 border px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider transition-all ${
        primary
          ? "border-[color:var(--amber)] bg-[color:var(--amber)] text-primary-foreground hover:shadow-[0_0_25px_rgba(245,166,35,0.45)]"
          : "border-[color:var(--amber)]/40 bg-transparent text-amber hover:border-[color:var(--amber)] hover:bg-[color:var(--amber)]/10"
      }`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />}
      {children}
    </button>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-hidden border border-[color:var(--amber)]/25 bg-black/40 backdrop-blur">
      <table className="w-full font-mono-tech text-[11px]">
        <thead>
          <tr className="border-b border-[color:var(--amber)]/25 bg-[color:var(--amber)]/[0.04] text-left uppercase tracking-widest text-amber/80">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-[10px] font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-[color:var(--amber)]/10 text-muted-foreground transition-colors hover:bg-[color:var(--amber)]/[0.05] hover:text-foreground"
            >
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({ tone, children }: { tone: "ok" | "warn" | "muted"; children: React.ReactNode }) {
  const map = {
    ok: "border-emerald-500/40 text-emerald-400",
    warn: "border-[color:var(--amber)]/60 text-amber",
    muted: "border-muted-foreground/30 text-muted-foreground",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] uppercase tracking-widest ${map[tone]}`}>
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}

/* ---------- Panels ---------- */
function ProductosPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="SKUs Activos" value="42" delta="+3 esta semana" icon={Package} />
        <MetricCard label="Equipos Despachados" value="187" delta="MTD · +12%" icon={TrendingUp} />
        <MetricCard label="Trámites Pendientes" value="09" delta="Prom. 3.2 días" icon={Clock} />
        <MetricCard label="Stock Crítico" value="04" delta="Reposición requerida" icon={Activity} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Registro / Armamento Traumático
        </div>
        <div className="flex gap-2">
          <ActionBtn>Exportar CSV</ActionBtn>
          <ActionBtn primary icon={Plus}>Registrar Armamento</ActionBtn>
        </div>
      </div>

      <DataTable
        headers={["SKU", "Modelo", "Categoría", "Calibre", "Stock", "Estado", "Acciones"]}
        rows={[
          ["TRM-1024", "Compact D-9", "Defensa Personal", "9×19 P.A.K.", "14", <StatusPill tone="ok">Disponible</StatusPill>, <RowActions />],
          ["TRM-2014", "Operator X", "Táctico", "9×19 P.A.K.", "06", <StatusPill tone="warn">Bajo</StatusPill>, <RowActions />],
          ["TRV-357", "Sentinel R", "Defensa Personal", ".357 T", "02", <StatusPill tone="warn">Bajo</StatusPill>, <RowActions />],
          ["TRM-980X", "Ranger L", "Tiro Deportivo", "9×19 P.A.K.", "00", <StatusPill tone="muted">Agotado</StatusPill>, <RowActions />],
          ["TRM-050C", "Covert C", "Encubierto", ".380 T", "09", <StatusPill tone="ok">Disponible</StatusPill>, <RowActions />],
          ["TRM-311T", "Trainer P", "Entrenamiento", "9×19 P.A.K.", "22", <StatusPill tone="ok">Disponible</StatusPill>, <RowActions />],
        ]}
      />
    </div>
  );
}

function RowActions() {
  return (
    <div className="flex gap-2 text-[10px] uppercase tracking-widest">
      <button className="text-amber hover:underline">Editar</button>
      <span className="text-muted-foreground/40">·</span>
      <button className="text-muted-foreground hover:text-destructive">Eliminar</button>
    </div>
  );
}

function InventarioPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Unidades en Bodega" value="312" icon={Boxes} />
        <MetricCard label="Series Registradas" value="298" delta="94.2% trazadas" icon={ShieldCheck} />
        <MetricCard label="Importaciones YTD" value="07" delta="Últ. lote · 2026-05-18" icon={Activity} />
      </div>

      <div className="flex justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Bitácora / Serial · Import Log
        </div>
        <ActionBtn primary icon={Plus}>Registrar Lote</ActionBtn>
      </div>

      <DataTable
        headers={["Serial", "SKU", "Lote", "Ingreso", "Manifiesto", "Estado"]}
        rows={[
          ["PT-9M-000841", "TRM-1024", "L-24-08", "2026-06-01", "MAN-0451", <StatusPill tone="ok">En Bodega</StatusPill>],
          ["PT-9M-000842", "TRM-1024", "L-24-08", "2026-06-01", "MAN-0451", <StatusPill tone="warn">Reservado</StatusPill>],
          ["PT-357-000112", "TRV-357", "L-24-07", "2026-05-22", "MAN-0442", <StatusPill tone="ok">En Bodega</StatusPill>],
          ["PT-9M-000701", "TRM-2014", "L-24-06", "2026-05-04", "MAN-0431", <StatusPill tone="muted">Despachado</StatusPill>],
        ]}
      />
    </div>
  );
}

function CategoriasPanel() {
  const cats = [
    { name: "Defensa Personal Civil", items: 18, code: "CAT-01" },
    { name: "Tiro Deportivo", items: 9, code: "CAT-02" },
    { name: "Seguridad Privada", items: 11, code: "CAT-03" },
    { name: "Entrenamiento Táctico", items: 4, code: "CAT-04" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Intenciones Operativas
        </div>
        <ActionBtn primary icon={Plus}>Nueva Categoría</ActionBtn>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cats.map((c) => (
          <div key={c.code} className="border border-[color:var(--amber)]/25 bg-black/50 p-5 backdrop-blur">
            <div className="flex justify-between font-mono-tech text-[10px] text-amber/80">
              <span>{c.code}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">{c.name}</h3>
            <div className="mt-2 font-mono-tech text-[11px] text-muted-foreground">{c.items} referencias</div>
            <div className="mt-5 flex gap-2 text-[10px] uppercase tracking-widest">
              <button className="text-amber hover:underline">Editar</button>
              <span className="text-muted-foreground/40">·</span>
              <button className="text-muted-foreground hover:text-destructive">Archivar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PedidosPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Activos WhatsApp" value="12" icon={ShoppingCart} />
        <MetricCard label="En Verificación" value="05" icon={ShieldCheck} />
        <MetricCard label="Aprobados / Semana" value="18" icon={TrendingUp} />
        <MetricCard label="Ticket Promedio" value="—" delta="Consultar backend" icon={Activity} />
      </div>
      <DataTable
        headers={["Pedido", "Cliente", "SKU", "Canal", "Estado", "Actualizado"]}
        rows={[
          ["#PT-2109", "J. Restrepo", "TRM-1024", "WhatsApp", <StatusPill tone="warn">Verificando</StatusPill>, "hace 12m"],
          ["#PT-2108", "L. Cárdenas", "TRV-357", "WhatsApp", <StatusPill tone="ok">Aprobado</StatusPill>, "hace 1h"],
          ["#PT-2107", "M. Gómez", "TRM-2014", "Instagram", <StatusPill tone="warn">Pendiente Carnet</StatusPill>, "hace 3h"],
          ["#PT-2106", "S. Ortiz", "TRM-050C", "WhatsApp", <StatusPill tone="muted">Despachado</StatusPill>, "ayer"],
        ]}
      />
    </div>
  );
}

function ClientesPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          CRM / Perfiles Verificados
        </div>
        <ActionBtn primary icon={Plus}>Nuevo Cliente</ActionBtn>
      </div>
      <DataTable
        headers={["ID", "Nombre", "Cédula", "Carnet Porte", "Perfil", "Estado"]}
        rows={[
          ["USR-0421", "J. Restrepo", "1.023.***.412", "CP-889-24", "Defensa Civil", <StatusPill tone="ok">Verificado</StatusPill>],
          ["USR-0420", "L. Cárdenas", "80.***.221", "CP-762-24", "Seguridad Privada", <StatusPill tone="ok">Verificado</StatusPill>],
          ["USR-0419", "M. Gómez", "43.***.008", "En trámite", "Tiro Deportivo", <StatusPill tone="warn">Pendiente</StatusPill>],
          ["USR-0418", "S. Ortiz", "1.140.***.700", "CP-701-24", "Defensa Civil", <StatusPill tone="ok">Verificado</StatusPill>],
        ]}
      />
    </div>
  );
}

function OfertasPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Bundles Tácticos · Configurador
        </div>
        <ActionBtn primary icon={Plus}>Crear Oferta</ActionBtn>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { code: "OFR-01", name: "Kit Defensa Civil", items: "Pistola · Spray OC · Curso", status: "Activa" as const },
          { code: "OFR-02", name: "Set Tiro Deportivo", items: "Red dot · Munición · Funda", status: "Activa" as const },
          { code: "OFR-03", name: "Dotación Escolta", items: "Chaleco · Radio · Funda III", status: "Borrador" as const },
        ].map((o) => (
          <div key={o.code} className="border border-[color:var(--amber)]/25 bg-black/50 p-5 backdrop-blur">
            <div className="flex justify-between font-mono-tech text-[10px] text-amber/80">
              <span>{o.code}</span>
              <StatusPill tone={o.status === "Activa" ? "ok" : "muted"}>{o.status}</StatusPill>
            </div>
            <h3 className="mt-3 font-display text-base font-bold uppercase tracking-wide">{o.name}</h3>
            <p className="mt-2 font-mono-tech text-[11px] text-muted-foreground">{o.items}</p>
            <div className="mt-5 flex gap-2 text-[10px] uppercase tracking-widest">
              <button className="text-amber hover:underline">Editar</button>
              <span className="text-muted-foreground/40">·</span>
              <button className="text-muted-foreground hover:text-destructive">Pausar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SeoPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Páginas Indexadas" value="14" delta="Google · CO" icon={Search} />
        <MetricCard label="Keywords Top 10" value="08" delta="+2 vs. mes anterior" icon={TrendingUp} />
        <MetricCard label="CTR Promedio" value="4.2%" delta="Últ. 28 días" icon={Activity} />
      </div>
      <div className="space-y-4">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Meta Tags · Home
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <SeoField label="Meta Title" value="Punto Táctico — Armas Traumáticas Legales en Colombia" />
          <SeoField label="Meta Description" value="Venta legal y responsable de armas traumáticas y equipo táctico premium. Asesoría certificada Indumil." />
          <SeoField label="Canonical" value="https://puntotactico.co/" />
          <SeoField label="OG Image" value="/og/home.jpg" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Keywords rastreadas</div>
        <div className="flex flex-wrap gap-2 font-mono-tech text-[11px]">
          {["armas traumáticas colombia", "pistola 9mm p.a.k.", "defensa personal legal", "tiro deportivo bogotá", "carnet porte indumil"].map((k) => (
            <span key={k} className="border border-[color:var(--amber)]/30 px-3 py-1 text-muted-foreground">
              {k}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[color:var(--amber)]/25 bg-black/40 p-4 backdrop-blur">
      <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">{label}</div>
      <div className="mt-2 font-mono-tech text-[12px] text-foreground">{value}</div>
    </div>
  );
}

function ConfigPanel() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="border border-[color:var(--amber)]/25 bg-black/50 p-6 backdrop-blur">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Integraciones</div>
        <ul className="mt-4 space-y-3 font-mono-tech text-[11px]">
          <li className="flex justify-between border-b border-[color:var(--amber)]/10 pb-2">
            <span className="text-muted-foreground">WhatsApp Business API</span>
            <StatusPill tone="ok">Conectado</StatusPill>
          </li>
          <li className="flex justify-between border-b border-[color:var(--amber)]/10 pb-2">
            <span className="text-muted-foreground">Instagram Graph</span>
            <StatusPill tone="warn">Reautenticar</StatusPill>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Indumil · Trazabilidad</span>
            <StatusPill tone="ok">Activo</StatusPill>
          </li>
        </ul>
      </div>
      <div className="border border-[color:var(--amber)]/25 bg-black/50 p-6 backdrop-blur">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Roles de Acceso</div>
        <ul className="mt-4 space-y-3 font-mono-tech text-[11px]">
          <li className="flex justify-between border-b border-[color:var(--amber)]/10 pb-2">
            <span className="text-muted-foreground">Comandante</span>
            <span className="text-amber">FULL</span>
          </li>
          <li className="flex justify-between border-b border-[color:var(--amber)]/10 pb-2">
            <span className="text-muted-foreground">Operador</span>
            <span className="text-amber">R/W</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Auditor</span>
            <span className="text-amber">R</span>
          </li>
        </ul>
        <div className="mt-6">
          <ActionBtn primary icon={Plus}>Agregar Rol</ActionBtn>
        </div>
      </div>
    </div>
  );
}
