import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Wrench, ScrollText, ShieldCheck, FileCheck, Fingerprint, Search, FileText, PackageCheck, MessageCircle, Instagram, Lock, Target, Droplet, Crosshair, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/components/Catalog";

import prueba1 from "@/assets/videos/prueba_1.mp4.asset.json";
import prueba2 from "@/assets/videos/prueba_2.mp4.asset.json";
import prueba3 from "@/assets/videos/prueba_3.mp4.asset.json";
import prueba4 from "@/assets/videos/prueba_4.mp4.asset.json";
import mantenimientoVid from "@/assets/videos/mantiniemiento.mp4.asset.json";
import ubicacionVid from "@/assets/videos/ubicacion.mp4.asset.json";

const WA_CONTACTO = "https://wa.me/573027104931?text=Hola%20Punto%20T%C3%A1ctico,%20solicito%20asesor%C3%ADa%20para%20adquisici%C3%B3n";

/* ---------- Section shell ---------- */
function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono-tech text-[10px] text-amber/80">
      <span className="text-amber">[{index}]</span>
      <span className="h-px w-8 bg-[color:var(--amber)]/60" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-black uppercase leading-[0.95] tracking-tight text-foreground"
      style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)" }}
    >
      {children}
    </h2>
  );
}

/* ---------- [02] THE SHIFT ---------- */
export function TheShift() {
  const cards = [
    { icon: AlertTriangle, title: "Mercado Informal", body: "Sin garantías, sin respaldo legal.", tag: "RISK · 01" },
    { icon: Wrench, title: "Equipos Obsoletos", body: "Fallas mecánicas en momentos críticos.", tag: "RISK · 02" },
    { icon: ScrollText, title: "Falta de Asesoría", body: "Riesgos legales por desconocimiento.", tag: "RISK · 03" },
  ];
  return (
    <section id="shift" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl space-y-6">
          <SectionLabel index="02" label="THE SHIFT" />
          <SectionTitle>
            La seguridad real no acepta <span className="text-amber">improvisaciones</span>.
          </SectionTitle>
        </div>
        <div className="grid gap-px overflow-hidden border border-[color:var(--amber)]/30 bg-[color:var(--amber)]/20 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-background p-8 transition-colors hover:bg-[#111]"
            >
              <div className="flex items-center justify-between font-mono-tech text-[10px] text-muted-foreground">
                <span>{c.tag}</span>
                <span className="h-1.5 w-1.5 bg-[color:var(--amber)]/60" />
              </div>
              <c.icon className="mt-8 h-8 w-8 text-amber" strokeWidth={1.2} />
              <h3 className="mt-6 text-xl font-bold uppercase tracking-wide text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-8 h-px w-full bg-[color:var(--amber)]/20 transition-all group-hover:bg-[color:var(--amber)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- [03] THE MECHANISM = MARCO LEGAL ---------- */
export function TheMechanism() {
  const nodes = [
    { icon: FileCheck, code: "M-01", title: "Importación Legal", body: "Marcaje, serialización y trazabilidad desde origen." },
    { icon: Fingerprint, code: "M-02", title: "Carnetización Oficial", body: "Registro, biometría y documentación autorizada." },
    { icon: ShieldCheck, code: "M-03", title: "Trazabilidad Indumil", body: "Certificación bajo autoridad militar colombiana." },
  ];
  return (
    <section id="marco-legal" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div className="space-y-6">
            <SectionLabel index="03" label="MARCO LEGAL" />
            <SectionTitle>
              Protocolo <span className="text-amber">Punto Táctico</span>.
            </SectionTitle>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            No solo entregamos equipo táctico. Entregamos un sistema blindado por la ley colombiana —
            documentado, certificado y trazable en cada eslabón.
          </p>
        </div>

        <div className="relative overflow-hidden border border-[color:var(--amber)]/30 bg-black/50 p-6 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-3">
            {nodes.map((n, i) => (
              <div key={n.title} className="relative">
                {i < nodes.length - 1 && (
                  <div className="pointer-events-none absolute right-[-16px] top-8 hidden items-center md:flex">
                    <div className="h-px w-8 bg-[color:var(--amber)]/60" />
                    <span className="ml-1 text-amber">›</span>
                  </div>
                )}
                <div className="border border-[color:var(--amber)]/40 bg-background/80 p-6 backdrop-blur">
                  <div className="flex items-center justify-between font-mono-tech text-[10px] text-amber/80">
                    <span>{n.code}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
                  </div>
                  <n.icon className="mt-6 h-7 w-7 text-amber" strokeWidth={1.2} />
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 font-mono-tech text-[10px] text-muted-foreground">
          <span>DECRETO 1417/2021</span>
          <span className="text-amber/40">·</span>
          <span>DECRETO 1563/2022</span>
          <span className="text-amber/40">·</span>
          <span>LEY 1581/2012</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- [04] THE FRAMEWORK ---------- */
export function TheFramework() {
  const steps = [
    { n: "01", icon: Search, title: "Filtro y Asesoría", body: "Evaluamos tu perfil operativo y objetivos de defensa." },
    { n: "02", icon: FileText, title: "Gestión Documental", body: "Tramitamos el manifiesto, permisos y carnet oficial." },
    { n: "03", icon: PackageCheck, title: "Entrega Táctica", body: "Recibes tu equipo con inducción técnica y legal." },
  ];
  return (
    <section id="proceso" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl space-y-6">
          <SectionLabel index="04" label="THE FRAMEWORK" />
          <SectionTitle>
            Adquisición responsable en <span className="text-amber">3 pasos</span>.
          </SectionTitle>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[color:var(--amber)] via-[color:var(--amber)]/40 to-transparent md:block md:left-0 md:top-8 md:h-px md:w-full md:bg-gradient-to-r" />
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 md:pl-0 md:pt-16"
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-4">
                  <div className="relative h-4 w-4">
                    <div className="absolute inset-0 rounded-full bg-[color:var(--amber)] shadow-[0_0_16px_var(--amber)] animate-hud-pulse" />
                    <div className="absolute inset-[3px] rounded-full bg-black" />
                  </div>
                </div>
                <div className="font-mono-tech text-[11px] text-amber/80">STEP · {s.n}</div>
                <div className="mt-4 flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-amber" strokeWidth={1.2} />
                  <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">{s.title}</h3>
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- [05] THE FILTER = ACCESORIOS/PERFILES ---------- */
export function TheFilter() {
  const profiles = [
    {
      key: "civil",
      title: "Defensa Civil",
      tag: "PROFILE · A",
      body: "Protección personal y familiar bajo el marco de legítima defensa. Equipo compacto, disuasivo y legal.",
      bullets: ["Pistolas traumáticas 9×19 P.A.K.", "Sprays de defensa OC", "Curso de porte responsable"],
    },
    {
      key: "deportivo",
      title: "Tiro Deportivo",
      tag: "PROFILE · B",
      body: "Precisión, rendimiento y competencia. Equipos calibrados y accesorios de nivel profesional.",
      bullets: ["Ópticas y red dots", "Miras iluminadas", "Munición de práctica certificada"],
    },
    {
      key: "seguridad",
      title: "Seguridad Privada",
      tag: "PROFILE · C",
      body: "Dotación operativa para empresas de vigilancia y escoltas con requerimientos táctico-legales.",
      bullets: ["Chalecos y fundas nivel II/III", "Comunicación táctica", "Trámite empresarial completo"],
    },
  ];
  const [active, setActive] = useState(profiles[0].key);
  const current = profiles.find((p) => p.key === active)!;

  return (
    <section id="accesorios" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl space-y-6">
          <SectionLabel index="05" label="ACCESORIOS / PERFIL" />
          <SectionTitle>
            Selecciona tu <span className="text-amber">perfil operativo</span>.
          </SectionTitle>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {profiles.map((p) => {
            const isActive = p.key === active;
            return (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`group relative border p-6 text-left font-mono-tech transition-all ${
                  isActive
                    ? "border-[color:var(--amber)] bg-[color:var(--amber)]/10 shadow-[0_0_30px_rgba(245,166,35,0.15)]"
                    : "border-[color:var(--amber)]/25 bg-background hover:border-[color:var(--amber)]/60"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-amber/80">
                  <span>{p.tag}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" : "bg-muted-foreground/40"}`}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">
                  {p.title}
                </h3>
              </button>
            );
          })}
        </div>

        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 border border-[color:var(--amber)]/30 bg-black/60 p-8 backdrop-blur md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="font-mono-tech text-[10px] text-amber/80">{current.tag} · CONFIG</div>
              <h3 className="mt-3 text-2xl font-bold uppercase tracking-wide text-foreground">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{current.body}</p>
            </div>
            <ul className="space-y-3">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 border-l border-[color:var(--amber)]/50 pl-4 font-mono-tech text-[12px] text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-[color:var(--amber)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- [A] PRUEBAS DE POLIGONO ---------- */
export function Poligono() {
  const vids = [prueba1.url, prueba2.url, prueba3.url];
  return (
    <section id="poligono" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl space-y-5">
          <SectionLabel index="A" label="PRUEBAS DE POLIGONO" />
          <SectionTitle>
            Evidencia <span className="text-amber">Operativa</span>.
          </SectionTitle>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Nuestros clientes comprobando la fiabilidad y potencia de los equipos en polígono.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {vids.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative border border-[color:var(--amber)]/60 bg-black shadow-[0_0_30px_-10px_rgba(245,166,35,0.4)]"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]" />
              <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]" />
              <div className="flex items-center justify-between border-b border-[color:var(--amber)]/40 px-3 py-1.5 font-mono-tech text-[9px] text-amber/80">
                <span>REC · {String(i + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)]" />
                  POLIGONO
                </span>
              </div>
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="block aspect-[9/16] w-full bg-black object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- [B] MANTENIMIENTO ---------- */
export function Mantenimiento() {
  const tips = [
    { icon: Droplet, title: "Limpieza post-polígono obligatoria." },
    { icon: Wrench, title: "Lubricación en guías de corredera." },
    { icon: Crosshair, title: "Uso exclusivo de munición Ozkursan u homologada." },
  ];
  return (
    <section id="mantenimiento" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl space-y-5">
          <SectionLabel index="B" label="MANTENIMIENTO Y CUIDADO" />
          <SectionTitle>
            Protocolo de <span className="text-amber">Mantenimiento</span>.
          </SectionTitle>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10">
          <div className="relative border border-[color:var(--amber)]/60 bg-black shadow-[0_0_30px_-10px_rgba(245,166,35,0.4)]">
            <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]" />
            <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]" />
            <div className="flex items-center justify-between border-b border-[color:var(--amber)]/40 px-3 py-1.5 font-mono-tech text-[9px] text-amber/80">
              <span>REC · MANT-01</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)]" />
                PROTOCOLO
              </span>
            </div>
            <video
              src={mantenimientoVid.url}
              controls
              playsInline
              preload="metadata"
              className="block aspect-video w-full bg-black object-cover"
            />
          </div>

          <ul className="space-y-3">
            {tips.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative flex items-start gap-4 border border-[color:var(--amber)]/25 bg-background/60 p-5 transition-colors hover:border-[color:var(--amber)]/70"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center border border-[color:var(--amber)]/40 bg-black">
                  <t.icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] text-amber/80">
                    TIP · {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground md:text-base">
                    {t.title}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- [C] CONTACTO ---------- */
export function Contacto() {
  return (
    <section id="contacto" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex justify-center">
          <SectionLabel index="C" label="CONTACTO Y COORDENADAS" />
        </div>
        <h2
          className="mx-auto mt-6 font-black uppercase leading-[0.95] tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          Sede <span className="text-amber">Operativa</span>.
        </h2>

        <div className="mt-10 relative mx-auto border border-[color:var(--amber)]/60 bg-black shadow-[0_0_40px_-10px_rgba(245,166,35,0.4)]">
          <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--amber)]" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--amber)]" />
          <div className="flex items-center justify-between border-b border-[color:var(--amber)]/40 px-3 py-1.5 font-mono-tech text-[9px] text-amber/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> COORDENADAS
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-hud-pulse rounded-full bg-[color:var(--amber)]" />
              PEREIRA · CO
            </span>
          </div>
          <video
            src={ubicacionVid.url}
            controls
            playsInline
            preload="metadata"
            className="block aspect-video w-full bg-black object-cover"
          />
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Sede Operativa: Pereira, Colombia. Atención exclusiva previa verificación de perfil.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={WA_CONTACTO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[color:var(--amber)] px-8 py-4 font-mono-tech text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_50px_rgba(245,166,35,0.5)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Contactar vía WhatsApp
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <div className="font-mono-tech text-[10px] text-muted-foreground">+57 302-710-4931 · RESPUESTA &lt; 15 MIN</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- [06] TERMINAL CTA ---------- */
export function TerminalCTA() {
  return (
    <section id="cta" className="relative border-t border-[color:var(--amber)]/15 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel index="06" label="TERMINAL · READY" />
        <h2
          className="mx-auto mt-8 max-w-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          Equípate con el <span className="text-amber">respaldo de la ley</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Inicia tu proceso de perfilamiento hoy mismo. Un asesor certificado te guiará paso a paso.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={WA_CONTACTO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[color:var(--amber)] px-8 py-4 font-mono-tech text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_50px_rgba(245,166,35,0.5)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Iniciar Trámite vía WhatsApp
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <div className="font-mono-tech text-[10px] text-muted-foreground">RESPUESTA · &lt; 15 MIN · L-S</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--amber)]/25 bg-black/80 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center border border-[color:var(--amber)]/70">
                <div className="h-2 w-2 bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
              </div>
              <div className="font-display text-sm font-bold uppercase tracking-[0.25em] text-foreground">
                Punto <span className="text-amber">Táctico</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Comercialización bajo el marco legal colombiano vigente. Todos los productos se entregan
              con documentación, trazabilidad y respaldo Indumil.
            </p>
          </div>

          <div>
            <div className="font-mono-tech text-[10px] text-amber/80">NAV</div>
            <ul className="mt-4 space-y-2 font-mono-tech text-[11px] text-muted-foreground">
              <li><a href="#catalogo" className="hover:text-amber transition">Catálogo</a></li>
              <li><a href="#accesorios" className="hover:text-amber transition">Accesorios</a></li>
              <li><a href="#marco-legal" className="hover:text-amber transition">Marco Legal</a></li>
              <li><a href="#contacto" className="hover:text-amber transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-tech text-[10px] text-amber/80">CONTACTO / LEGAL</div>
            <ul className="mt-4 space-y-2 font-mono-tech text-[11px] text-muted-foreground">
              <li>
                <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-amber transition">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/puntotactico" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-amber transition">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
              </li>
              <li><Link to="/privacidad" className="hover:text-amber transition">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-amber transition">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[color:var(--amber)]/15 pt-6 font-mono-tech text-[10px] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} · PUNTO TÁCTICO · PEREIRA, CO</div>
          <div className="flex items-center gap-4">
            <Link
              to="/perfil-operativo"
              className="inline-flex items-center gap-1.5 border border-[color:var(--amber)]/30 px-2.5 py-1 uppercase tracking-widest text-amber/80 transition hover:border-[color:var(--amber)] hover:text-amber"
            >
              <Lock className="h-3 w-3" /> Perfil Operativo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
