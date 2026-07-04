import { motion } from "motion/react";
import heroGun from "@/assets/hero-gun.png";
import heroBg from "@/assets/hero-bg.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative flex h-[100dvh] min-h-[600px] w-full flex-col overflow-hidden bg-background pt-16">
      {/* Background image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 0,
          backgroundImage: `url(${heroBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.7) 70%, #000 100%)",
        }}
      />
      {/* Vignette + grain */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_95%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grain mix-blend-overlay" />

      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--amber) 1px, transparent 1px), linear-gradient(90deg, var(--amber) 1px, transparent 1px)",
          backgroundSize: "clamp(40px, 6vw, 80px) clamp(40px, 6vw, 80px)",
        }}
      />

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--amber)]/10 to-transparent animate-scanline" />

      {/* Smoke */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-[60vh] w-[60vh] rounded-full blur-3xl animate-smoke-1"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.18), transparent 60%)" }}
        />
        <div
          className="absolute h-[45vh] w-[70vh] rounded-full blur-3xl animate-smoke-2"
          style={{ background: "radial-gradient(circle, rgba(120,80,20,0.35), transparent 65%)" }}
        />
      </div>

      <CornerBrackets />

      {/* HUD side labels */}
      <div className="pointer-events-none absolute left-4 top-20 font-mono-tech text-[9px] text-amber/70 space-y-0.5 animate-flicker md:left-8 md:top-24 md:text-[10px]">
        <div>REF · TRM-1024</div>
        <div className="text-muted-foreground">TRAUMATIC 9×19</div>
        <div className="text-muted-foreground">FULL SIZE</div>
        <div className="mt-1.5 h-px w-12 bg-[color:var(--amber)]/60 md:w-16" />
      </div>

      <div className="pointer-events-none absolute right-4 top-20 text-right font-mono-tech text-[9px] text-amber/70 space-y-0.5 animate-flicker md:right-8 md:top-24 md:text-[10px]">
        <div>PT · 001</div>
        <div className="text-muted-foreground">PUNTO TÁCTICO</div>
        <div className="text-muted-foreground">TECHNOLOGIES</div>
        <div className="mt-1.5 ml-auto h-px w-12 bg-[color:var(--amber)]/60 md:w-16" />
      </div>

      {/* Central composition — flex-1 to consume available vertical space */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <div className="relative flex w-full max-w-6xl items-center justify-center">
          {/* PUNTO — behind */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -top-2 w-full text-center font-black uppercase leading-[0.8] tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 11vw, 9rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(245,166,35,0.35)",
            }}
          >
            PUNTO
          </motion.h1>

          {/* TÁCTICO — bottom */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -bottom-2 w-full text-center font-black uppercase leading-[0.8] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 11vw, 9rem)" }}
          >
            <span
              style={{
                background: "linear-gradient(180deg, #F5A623 0%, #b8791a 60%, #6b4610 100%)",
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
            className="relative z-10 w-full"
          >
            <motion.img
              src={heroGun}
              alt="Pistola táctica traumática Punto Táctico"
              width={1600}
              height={912}
              className="mx-auto w-auto select-none object-contain drop-shadow-[0_30px_50px_rgba(245,166,35,0.15)]"
              style={{ maxHeight: "min(60dvh, 560px)", maxWidth: "100%" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0">
              <Crosshair className="absolute left-[62%] top-[24%]" />
              <Crosshair className="absolute left-[26%] top-[62%]" size={24} />
              <div className="absolute left-[8%] right-[8%] top-[4%] flex items-center gap-2">
                <div className="h-2 w-px bg-[color:var(--amber)]/70" />
                <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
                <span className="font-mono-tech text-[9px] text-amber/80">221 MM</span>
                <div className="h-px flex-1 bg-[color:var(--amber)]/40" />
                <div className="h-2 w-px bg-[color:var(--amber)]/70" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-20 flex flex-col items-center gap-3 pb-6"
      >
        <div className="flex items-center gap-3 font-mono-tech text-[9px] text-muted-foreground md:text-[10px]">
          <span className="h-px w-8 bg-[color:var(--amber)]/60" />
          <span>9×19 · P.A.K. · CO</span>
          <span className="h-px w-8 bg-[color:var(--amber)]/60" />
        </div>

        <a
          href="#catalogo"
          className="group relative inline-flex items-center gap-3 border border-[color:var(--amber)]/60 bg-black/40 px-6 py-3 font-mono-tech text-[11px] text-amber backdrop-blur-sm transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground hover:shadow-[0_0_40px_rgba(245,166,35,0.4)] md:px-8 md:py-4 md:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)] animate-hud-pulse group-hover:bg-black" />
          Ver Catálogo Legal
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
      </motion.div>

      {/* Bottom HUD strip */}
      <div className="pointer-events-none absolute bottom-2 left-4 right-4 hidden items-end justify-between font-mono-tech text-[9px] text-muted-foreground md:flex md:bottom-3">
        <div className="space-y-0.5">
          <div className="text-amber/80">SYS · ONLINE</div>
          <div>LAT 4.7110° N · LON 74.0721° W</div>
        </div>
        <div className="space-y-0.5 text-right">
          <div className="text-amber/80">PT·DESIGN / 2025</div>
          <div>VENTA LEGAL · RESPONSABLE</div>
        </div>
      </div>
    </section>
  );
}

function Crosshair({ className = "", size = 36 }: { className?: string; size?: number }) {
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
  const arm = "h-5 w-5 border-[color:var(--amber)]/70 md:h-6 md:w-6";
  return (
    <>
      <div className={`pointer-events-none absolute left-4 top-20 border-l border-t md:left-6 ${arm}`} />
      <div className={`pointer-events-none absolute right-4 top-20 border-r border-t md:right-6 ${arm}`} />
      <div className={`pointer-events-none absolute left-4 bottom-16 border-l border-b md:left-6 ${arm}`} />
      <div className={`pointer-events-none absolute right-4 bottom-16 border-r border-b md:right-6 ${arm}`} />
    </>
  );
}
