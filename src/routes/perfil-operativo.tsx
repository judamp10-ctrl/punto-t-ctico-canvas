import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, FormEvent } from "react";
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
  LogOut,
  User,
  Inbox,
} from "lucide-react";
import { BulletsBackground } from "@/components/BulletsBackground";
import {
  useCatalog,
  upsertProduct,
  deleteProduct,
  resetCatalog,
  type Product,
  type Intent,
} from "@/lib/products";

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

// NOTE: Client-side auth only for internal demo/staging. Do not treat as real security.
const OP_USER = "comandante";
const OP_PASS = "puntotactico2026";
const AUTH_KEY = "pt.op.auth";

function PerfilOperativo() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
    } catch {
      // ignore
    }
    setChecked(true);
  }, []);

  if (!checked) return null;

  if (!authed) {
    return (
      <div className="relative min-h-screen bg-background text-foreground">
        <BulletsBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <LoginScreen
            onSuccess={() => {
              try {
                sessionStorage.setItem(AUTH_KEY, "1");
              } catch {
                // ignore
              }
              setAuthed(true);
            }}
          />
        </div>
      </div>
    );
  }

  return <Console onLogout={() => {
    try { sessionStorage.removeItem(AUTH_KEY); } catch { /* ignore */ }
    setAuthed(false);
  }} />;
}

/* ---------- Login screen ---------- */
function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTimeout(() => {
      if (user.trim().toLowerCase() === OP_USER && pass === OP_PASS) {
        onSuccess();
      } else {
        setError("Credenciales inválidas · Acceso denegado.");
        setLoading(false);
      }
    }, 450);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-grain mix-blend-overlay" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative w-full max-w-md">
        <div className="mb-4 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.25em] text-amber/80">
          <Link to="/" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-amber">
            <ArrowLeft className="h-3 w-3" /> Volver
          </Link>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
            SECURE · LOGIN
          </span>
        </div>

        <div className="relative border border-[color:var(--amber)]/40 bg-black/80 p-8 backdrop-blur shadow-[0_0_60px_-15px_rgba(245,166,35,0.35)]">
          <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[color:var(--amber)]" />

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[color:var(--amber)]/70">
              <Lock className="h-4 w-4 text-amber" />
            </div>
            <div className="leading-none">
              <div className="font-display text-sm font-bold uppercase tracking-[0.25em]">
                Punto <span className="text-amber">Táctico</span>
              </div>
              <div className="mt-1 font-mono-tech text-[9px] text-muted-foreground">ADMIN · CONSOLE / AUTH</div>
            </div>
          </div>

          <div className="mt-6 border-y border-[color:var(--amber)]/20 py-3 font-mono-tech text-[10px] uppercase tracking-widest text-amber">
            [ ESTADO: Acceso Restringido · Personal Autorizado ]
          </div>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <label className="block">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Operador</span>
              <div className="mt-2 flex items-center gap-2 border border-[color:var(--amber)]/30 bg-black/60 px-3 py-2 focus-within:border-[color:var(--amber)]">
                <User className="h-3.5 w-3.5 text-amber/70" />
                <input
                  autoFocus
                  type="text"
                  autoComplete="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full bg-transparent font-mono-tech text-[13px] text-foreground outline-none placeholder:text-muted-foreground/60"
                  placeholder="usuario"
                />
              </div>
            </label>
            <label className="block">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Contraseña</span>
              <div className="mt-2 flex items-center gap-2 border border-[color:var(--amber)]/30 bg-black/60 px-3 py-2 focus-within:border-[color:var(--amber)]">
                <Lock className="h-3.5 w-3.5 text-amber/70" />
                <input
                  type="password"
                  autoComplete="current-password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full bg-transparent font-mono-tech text-[13px] text-foreground outline-none placeholder:text-muted-foreground/60"
                  placeholder="••••••••"
                />
              </div>
            </label>

            {error && (
              <div className="border border-destructive/40 bg-destructive/10 px-3 py-2 font-mono-tech text-[11px] text-destructive">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-between border border-[color:var(--amber)] bg-[color:var(--amber)] px-5 py-3 font-mono-tech text-[11px] uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--amber)] disabled:opacity-60"
            >
              <span>{loading ? "Autenticando…" : "Iniciar Sesión"}</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </form>

          <div className="mt-6 border-t border-[color:var(--amber)]/15 pt-3 font-mono-tech text-[9px] uppercase tracking-widest text-muted-foreground">
            SESSION · A-0001 · CO-BOG
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Console (authenticated) ---------- */

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

function Console({ onLogout }: { onLogout: () => void }) {
  const [active, setActive] = useState<TabKey>("productos");
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BulletsBackground />
      <div className="relative flex min-h-screen" style={{ zIndex: 1 }}>
        <Sidebar active={active} setActive={setActive} onLogout={onLogout} />
        <div className="flex flex-1 flex-col">
          <AccessBanner onLogout={onLogout} />
          <TopBar active={active} />
          <main className="flex-1 px-8 py-8">
            <MainPanel active={active} />
          </main>
        </div>
      </div>
    </div>
  );
}

function AccessBanner({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="flex items-center justify-between border-b border-[color:var(--amber)]/25 bg-[color:var(--amber)]/[0.06] px-8 py-2 font-mono-tech text-[10px] uppercase tracking-[0.2em]">
      <div className="flex items-center gap-3 text-amber">
        <Lock className="h-3 w-3" />
        <span>Estado:</span>
        <span className="text-amber/90">Acceso Restringido · Personal Autorizado</span>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <span className="hidden md:inline">SESSION · A-1042</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
        <button
          onClick={onLogout}
          className="inline-flex items-center gap-1.5 border border-[color:var(--amber)]/30 px-2 py-0.5 uppercase tracking-widest text-amber/80 transition hover:border-[color:var(--amber)] hover:text-amber"
        >
          <LogOut className="h-3 w-3" />
          Salir
        </button>
      </div>
    </div>
  );
}

function Sidebar({ active, setActive, onLogout }: { active: TabKey; setActive: (k: TabKey) => void; onLogout: () => void }) {
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
        <div className="px-2 pb-2 font-mono-tech text-[9px] uppercase tracking-widest text-amber/70">Módulos</div>
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

      <div className="space-y-2 border-t border-[color:var(--amber)]/20 p-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground transition hover:text-amber"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al sitio
        </Link>
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-2 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground transition hover:text-amber"
        >
          <LogOut className="h-3.5 w-3.5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

function TopBar({ active }: { active: TabKey }) {
  const label = TABS.find((t) => t.key === active)?.label ?? "";
  return (
    <div className="flex items-center justify-between border-b border-[color:var(--amber)]/15 px-8 py-5">
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-amber/80">
          MÓDULO / {label}
        </div>
        <h1 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-foreground">{label}</h1>
      </div>
      <div className="flex items-center gap-3 font-mono-tech text-[10px] text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-amber" />
        <span>OPERADOR · CMD.01</span>
      </div>
    </div>
  );
}

function MainPanel({ active }: { active: TabKey }) {
  switch (active) {
    case "productos": return <ProductosPanel />;
    case "inventario": return <InventarioPanel />;
    case "categorias": return <CategoriasPanel />;
    case "pedidos": return <PedidosPanel />;
    case "clientes": return <ClientesPanel />;
    case "ofertas": return <OfertasPanel />;
    case "seo": return <SeoPanel />;
    case "configuracion": return <ConfigPanel />;
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
  empty,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  empty?: React.ReactNode;
}) {
  if (rows.length === 0 && empty) {
    return (
      <div className="border border-dashed border-[color:var(--amber)]/25 bg-black/40 p-12 text-center backdrop-blur">
        {empty}
      </div>
    );
  }
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

function EmptyState({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-3 font-mono-tech">
      <Inbox className="h-8 w-8 text-amber/60" strokeWidth={1.2} />
      <div className="text-[12px] uppercase tracking-widest text-foreground">{title}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{subtitle}</div>
    </div>
  );
}

/* ---------- Panels ---------- */
const EMPTY_FORM = {
  id: "",
  code: "",
  name: "",
  caliber: "",
  intents: "defensa" as Intent,
  action: "",
  capacity: "",
  barrel: "",
  weight: "",
  length: "",
  material: "",
  status: "DISPONIBLE" as Product["status"],
  description: "",
  variants: "",
};

type FormState = typeof EMPTY_FORM;

function toForm(p: Product): FormState {
  return {
    id: p.id,
    code: p.code,
    name: p.name,
    caliber: p.caliber,
    intents: (p.intents[0] ?? "defensa") as Intent,
    action: p.specs.action,
    capacity: p.specs.capacity,
    barrel: p.specs.barrel,
    weight: p.specs.weight,
    length: p.specs.length,
    material: p.specs.material,
    status: p.status,
    description: p.description,
    variants: p.variants.map((v) => `${v.label}|${v.image}`).join("\n"),
  };
}

function fromForm(f: FormState): Product {
  const variants = f.variants
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split("|");
      return { label: (label ?? "Estándar").trim(), image: rest.join("|").trim() };
    });
  return {
    id: f.id || f.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `sku-${Date.now()}`,
    code: f.code || "PT·NEW",
    name: f.name,
    caliber: f.caliber,
    intents: [f.intents],
    variants: variants.length ? variants : [{ label: "Estándar", image: "" }],
    specs: {
      action: f.action,
      capacity: f.capacity,
      barrel: f.barrel,
      weight: f.weight,
      length: f.length,
      material: f.material,
    },
    status: f.status,
    description: f.description,
  };
}

function Field({
  label,
  value,
  onChange,
  textarea,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full border border-[color:var(--amber)]/30 bg-black/60 px-3 py-2 font-mono-tech text-[11px] text-foreground outline-none transition-colors focus:border-[color:var(--amber)]";
  return (
    <label className="block space-y-1">
      <span className="font-mono-tech text-[9px] uppercase tracking-widest text-amber/80">{label}</span>
      {textarea ? (
        <textarea rows={3} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className={cls} />
      ) : (
        <input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </label>
  );
}

function ProductForm({
  initial,
  onCancel,
  onSave,
}: {
  initial: FormState;
  onCancel: () => void;
  onSave: (p: Product) => void;
}) {
  const [f, setF] = useState<FormState>(initial);
  const set = (k: keyof FormState) => (v: string) => setF((prev) => ({ ...prev, [k]: v }));

  return (
    <div className="border border-[color:var(--amber)]/40 bg-black/60 p-5 backdrop-blur">
      <div className="mb-4 font-mono-tech text-[10px] uppercase tracking-widest text-amber">
        {initial.id ? `Editar / ${initial.name}` : "Registrar Armamento"}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Modelo" value={f.name} onChange={set("name")} placeholder="EKOL VIPER 3.0" />
        <Field label="SKU" value={f.code} onChange={set("code")} placeholder="PT·V30" />
        <Field label="Calibre" value={f.caliber} onChange={set("caliber")} placeholder="9 mm P.A." />
        <label className="block space-y-1">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest text-amber/80">Categoría</span>
          <select
            value={f.intents}
            onChange={(e) => setF((prev) => ({ ...prev, intents: e.target.value as Intent }))}
            className="w-full border border-[color:var(--amber)]/30 bg-black/60 px-3 py-2 font-mono-tech text-[11px] text-foreground outline-none focus:border-[color:var(--amber)]"
          >
            <option value="defensa">Defensa Personal</option>
            <option value="deportivo">Tiro Deportivo</option>
            <option value="tactico">Entrenamiento Táctico</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest text-amber/80">Estado</span>
          <select
            value={f.status}
            onChange={(e) => setF((prev) => ({ ...prev, status: e.target.value as Product["status"] }))}
            className="w-full border border-[color:var(--amber)]/30 bg-black/60 px-3 py-2 font-mono-tech text-[11px] text-foreground outline-none focus:border-[color:var(--amber)]"
          >
            <option value="DISPONIBLE">DISPONIBLE</option>
            <option value="BAJO CONSULTA">BAJO CONSULTA</option>
            <option value="LISTA DE ESPERA">LISTA DE ESPERA</option>
          </select>
        </label>
        <Field label="Acción" value={f.action} onChange={set("action")} placeholder="Semi-automática" />
        <Field label="Capacidad" value={f.capacity} onChange={set("capacity")} placeholder="15+1" />
        <Field label="Cañón" value={f.barrel} onChange={set("barrel")} placeholder='4.5"' />
        <Field label="Peso" value={f.weight} onChange={set("weight")} placeholder="850 g" />
        <Field label="Longitud" value={f.length} onChange={set("length")} placeholder="200 mm" />
        <Field label="Material" value={f.material} onChange={set("material")} placeholder="Zamak" />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field
          label="Variantes (Etiqueta|/ruta-imagen.jpeg — una por línea)"
          value={f.variants}
          onChange={set("variants")}
          textarea
          placeholder={"Negra|/EKOL VIPER 3.0 NEGRA.jpeg\nBlanca|/EKOL VIPER 3.0.jpeg"}
        />
        <Field label="Descripción" value={f.description} onChange={set("description")} textarea />
      </div>
      <div className="mt-5 flex gap-2">
        <button
          onClick={() => f.name.trim() && onSave(fromForm(f))}
          className="inline-flex items-center gap-2 border border-[color:var(--amber)] bg-[color:var(--amber)] px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_25px_rgba(245,166,35,0.45)]"
        >
          Guardar
        </button>
        <button
          onClick={onCancel}
          className="inline-flex items-center gap-2 border border-[color:var(--amber)]/40 px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-amber transition-all hover:border-[color:var(--amber)]"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

function ProductosPanel() {
  const products = useCatalog();
  const [form, setForm] = useState<FormState | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="SKUs Activos" value={String(products.length).padStart(2, "0")} delta="Catálogo dinámico" icon={Package} />
        <MetricCard label="Equipos Despachados" value="00" delta="Sin ventas registradas" icon={TrendingUp} />
        <MetricCard label="Trámites Pendientes" value="00" delta="Bandeja limpia" icon={Clock} />
        <MetricCard label="Stock Crítico" value="00" delta="Todo abastecido" icon={Activity} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Registro / Armamento Traumático
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (confirm("¿Restaurar el catálogo original?")) resetCatalog();
            }}
            className="inline-flex items-center gap-2 border border-[color:var(--amber)]/40 px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-amber transition-all hover:border-[color:var(--amber)] hover:bg-[color:var(--amber)]/10"
          >
            Restaurar Catálogo
          </button>
          <button
            onClick={() => setForm({ ...EMPTY_FORM })}
            className="inline-flex items-center gap-2 border border-[color:var(--amber)] bg-[color:var(--amber)] px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_25px_rgba(245,166,35,0.45)]"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
            Registrar Armamento
          </button>
        </div>
      </div>

      {form && (
        <ProductForm
          key={form.id || "new"}
          initial={form}
          onCancel={() => setForm(null)}
          onSave={(p) => {
            upsertProduct(p);
            setForm(null);
          }}
        />
      )}

      <DataTable
        headers={["SKU", "Modelo", "Calibre", "Acción", "Capacidad", "Variantes", "Estado", "Acciones"]}
        rows={products.map((p) => [
          p.code,
          <span className="text-foreground">{p.name}</span>,
          p.caliber,
          p.specs.action,
          p.specs.capacity,
          p.variants.map((v) => v.label).join(" · "),
          <StatusPill tone={p.status === "DISPONIBLE" ? "ok" : "warn"}>{p.status}</StatusPill>,
          <RowActions
            onEdit={() => setForm(toForm(p))}
            onDelete={() => {
              if (confirm(`¿Eliminar ${p.name} del catálogo?`)) deleteProduct(p.id);
            }}
          />,
        ])}
      />
    </div>
  );
}

function RowActions({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="flex gap-2 text-[10px] uppercase tracking-widest">
      <button onClick={onEdit} className="text-amber hover:underline">Editar</button>
      <span className="text-muted-foreground/40">·</span>
      <button onClick={onDelete} className="text-muted-foreground hover:text-destructive">Eliminar</button>
    </div>
  );
}

function InventarioPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Unidades en Bodega" value="00" delta="Sin lotes registrados" icon={Boxes} />
        <MetricCard label="Series Registradas" value="00" delta="0% trazadas" icon={ShieldCheck} />
        <MetricCard label="Importaciones YTD" value="00" delta="Sin manifiestos" icon={Activity} />
      </div>

      <div className="flex justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">
          Bitácora / Serial · Import Log
        </div>
        <ActionBtn primary icon={Plus}>Registrar Lote</ActionBtn>
      </div>

      <DataTable
        headers={["Serial", "SKU", "Lote", "Ingreso", "Manifiesto", "Estado"]}
        rows={[]}
        empty={<EmptyState title="Sin lotes registrados" subtitle="Registra tu primera importación para iniciar la bitácora" />}
      />
    </div>
  );
}

function CategoriasPanel() {
  const PRODUCTS = useCatalog();
  const counts = {
    defensa: PRODUCTS.filter((p) => p.intents.includes("defensa")).length,
    deportivo: PRODUCTS.filter((p) => p.intents.includes("deportivo")).length,
    tactico: PRODUCTS.filter((p) => p.intents.includes("tactico")).length,
  };
  const cats = [
    { name: "Defensa Personal Civil", items: counts.defensa, code: "CAT-01" },
    { name: "Tiro Deportivo", items: counts.deportivo, code: "CAT-02" },
    { name: "Entrenamiento Táctico", items: counts.tactico, code: "CAT-03" },
    { name: "Accesorios & Dotación", items: 0, code: "CAT-04" },
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
        <MetricCard label="Activos WhatsApp" value="00" icon={ShoppingCart} />
        <MetricCard label="En Verificación" value="00" icon={ShieldCheck} />
        <MetricCard label="Aprobados / Semana" value="00" icon={TrendingUp} />
        <MetricCard label="Ticket Promedio" value="—" delta="Sin datos aún" icon={Activity} />
      </div>
      <DataTable
        headers={["Pedido", "Cliente", "SKU", "Canal", "Estado", "Actualizado"]}
        rows={[]}
        empty={<EmptyState title="Sin pedidos aún" subtitle="Los pedidos entrantes por WhatsApp aparecerán aquí" />}
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
        rows={[]}
        empty={<EmptyState title="Sin clientes registrados" subtitle="Comienza registrando el primer perfil verificado" />}
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
      <div className="border border-dashed border-[color:var(--amber)]/25 bg-black/40 p-12 text-center backdrop-blur">
        <EmptyState title="Sin ofertas activas" subtitle="Crea tu primer bundle táctico o combo promocional" />
      </div>
    </div>
  );
}

function SeoPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Páginas Indexadas" value="00" delta="Pendiente indexación" icon={Search} />
        <MetricCard label="Keywords Top 10" value="00" delta="Sin rastreo aún" icon={TrendingUp} />
        <MetricCard label="CTR Promedio" value="—" delta="Sin datos" icon={Activity} />
      </div>
      <div className="space-y-4">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber/80">Meta Tags · Home</div>
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
            <StatusPill tone="muted">Sin conectar</StatusPill>
          </li>
          <li className="flex justify-between border-b border-[color:var(--amber)]/10 pb-2">
            <span className="text-muted-foreground">Instagram Graph</span>
            <StatusPill tone="muted">Sin conectar</StatusPill>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Indumil · Trazabilidad</span>
            <StatusPill tone="muted">Sin conectar</StatusPill>
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
