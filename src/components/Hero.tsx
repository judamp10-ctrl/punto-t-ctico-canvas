import { motion } from "motion/react";
import heroGun from "@/assets/hero-gun.png";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Vignette + grain */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_95%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grain mix-blend-overlay" />

      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--amber)]/10 to-transparent animate-scanline" />

      {/* Smoke */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-[70vh] w-[70vh] rounded-full blur-3xl animate-smoke-1"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.18), transparent 60%)" }}
        />
        <div
          className="absolute h-[55vh] w-[80vh] rounded-full blur-3xl animate-smoke-2"
          style={{ background: "radial-gradient(circle, rgba(120,80,20,0.35), transparent 65%)" }}
        />
        <div
          className="absolute h-[40vh] w-[90vh] rounded-full blur-2xl"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.05), transparent 70%)" }}
        />
      </div>

      {/* Corner brackets */}
      <CornerBrackets />

      {/* HUD tech labels */}
      <div className="pointer-events-none absolute left-8 top-24 font-mono-tech text-[10px] text-amber/70 space-y-1 animate-flicker">
        <div>REF · TRM-1024</div>
        <div className="text-muted-foreground">TRAUMATIC 9×19</div>
        <div className="text-muted-foreground">FULL SIZE</div>
        <div className="mt-2 h-px w-16 bg-[color:var(--amber)]/60" />
      </div>

      <div className="pointer-events-none absolute right-8 top-24 text-right font-mono-tech text-[10px] text-amber/70 space-y-1 animate-flicker">
        <div>PT · 001</div>
        <div className="text-muted-foreground">PUNTO TÁCTICO</div>
        <div className="text-muted-foreground">TECHNOLOGIES</div>
        <div className="mt-2 ml-auto h-px w-16 bg-[color:var(--amber)]/60" />
      </div>

      <div className="pointer-events-none absolute bottom-24 right-8 text-right font-mono-tech text-[10px] text-muted-foreground space-y-0.5">
        <TechRow label="LENGTH" value="221 MM" />
        <TechRow label="HEIGHT" value="144 MM" />
        <TechRow label="WIDTH" value="34 MM" />
        <TechRow label="WEIGHT" value="824 G" />
        <TechRow label="BARREL" value="114 MM" />
        <TechRow label="CALIBER" value="9×19" />
      </div>

      {/* Central composition */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-20">
        {/* Massive title behind gun */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.02em" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[18%] w-full text-center font-black uppercase leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 13vw, 12rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(245,166,35,0.35)",
          }}
        >
          PUNTO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[22%] w-full text-center font-black uppercase leading-[0.85] tracking-tight text-foreground"
          style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)" }}
        >
          <span
            style={{
              background:
                "linear-gradient(180deg, #F5A623 0%, #b8791a 60%, #6b4610 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TÁCTICO
          </span>
        </motion.h1>

        {/* Gun */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl"
        >
          <motion.img
            src={heroGun}
            alt="Pistola táctica traumática Punto Táctico"
            width={1600}
            height={912}
            className="mx-auto w-full select-none object-contain drop-shadow-[0_40px_60px_rgba(245,166,35,0.15)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            draggable={false}
          />

          {/* Crosshair overlay on gun */}
          <div className="pointer-events-none absolute inset-0">
            <Crosshair className="absolute left-[62%] top-[28%]" />
            <Crosshair className="absolute left-[28%] top-[58%]" size={28} />
            {/* Measurement lines */}
            <div className="absolute left-[10%] right-[10%] top-[8%] flex items-center gap-2">
              <div className="h-2 w-px bg-[color:var(--amber)]/70" />
              <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
              <span className="font-mono-tech text-[10px] text-amber/80">221</span>
              <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
              <div className="h-2 w-px bg-[color:var(--amber)]/70" />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-20 -mt-4 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 font-mono-tech text-[10px] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--amber)]/60" />
            <span>9×19 · P.A.K.</span>
            <span className="h-px w-8 bg-[color:var(--amber)]/60" />
          </div>

          <a
            href="#catalogo"
            className="group relative inline-flex items-center gap-3 border border-[color:var(--amber)]/60 bg-black/40 px-8 py-4 font-mono-tech text-xs text-amber backdrop-blur-sm transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground hover:shadow-[0_0_40px_rgba(245,166,35,0.4)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)] animate-hud-pulse group-hover:bg-black" />
            Ver Catálogo Legal
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom HUD strip */}
      <div className="pointer-events-none absolute bottom-6 left-8 right-8 flex items-end justify-between font-mono-tech text-[10px] text-muted-foreground">
        <div className="space-y-1">
          <div className="text-amber/80">SYS · ONLINE</div>
          <div>LAT 4.7110° N · LON 74.0721° W</div>
          <div>BOGOTÁ · COLOMBIA</div>
        </div>
        <div className="space-y-1 text-right">
          <div className="text-amber/80">PT·DESIGN / 2025</div>
          <div>VENTA LEGAL · RESPONSABLE</div>
        </div>
      </div>
    </section>
  );
}

function TechRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-end gap-4">
      <span>{label}</span>
      <span className="text-amber/90">{value}</span>
    </div>
  );
}

function Crosshair({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <div className={`animate-hud-pulse ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <circle cx="20" cy="20" r="14" stroke="var(--amber)" strokeWidth="0.6" strokeDasharray="2 3" />
        <circle cx="20" cy="20" r="1.5" fill="var(--amber)" />
        <line x1="20" y1="0" x2="20" y2="8" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="20" y1="32" x2="20" y2="40" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="0" y1="20" x2="8" y2="20" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="32" y1="20" x2="40" y2="20" stroke="var(--amber)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

function CornerBrackets() {
  const arm = "h-6 w-6 border-[color:var(--amber)]/70";
  return (
    <>
      <div className={`pointer-events-none absolute left-6 top-20 border-l border-t ${arm}`} />
      <div className={`pointer-events-none absolute right-6 top-20 border-r border-t ${arm}`} />
      <div className={`pointer-events-none absolute left-6 bottom-20 border-l border-b ${arm}`} />
      <div className={`pointer-events-none absolute right-6 bottom-20 border-r border-b ${arm}`} />
    </>
  );
}
