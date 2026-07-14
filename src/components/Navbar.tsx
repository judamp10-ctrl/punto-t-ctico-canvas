import { Link } from "@tanstack/react-router";
// Link retained for logo home navigation


export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--amber)]/20 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center border border-[color:var(--amber)]/70">
            <div className="h-2 w-2 bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)]" />
          </div>
          <div className="leading-none">
            <div className="font-display text-sm font-bold uppercase tracking-[0.25em] text-foreground">
              Punto <span className="text-amber">Táctico</span>
            </div>
            <div className="font-mono-tech text-[9px] text-muted-foreground">
              CO · TACTICAL DIVISION
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 font-mono-tech text-[11px] text-muted-foreground md:flex">
          <a href="#catalogo" className="hover:text-amber transition-colors">Catálogo</a>
          <a href="#accesorios" className="hover:text-amber transition-colors">Accesorios</a>
          <a href="#legal" className="hover:text-amber transition-colors">Marco Legal</a>
          <a href="#contacto" className="hover:text-amber transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#asesoria"
            className="group inline-flex items-center gap-2 border border-[color:var(--amber)]/70 bg-transparent px-4 py-2 font-mono-tech text-[11px] text-amber transition-all hover:bg-[color:var(--amber)] hover:text-primary-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber)] shadow-[0_0_8px_var(--amber)] group-hover:bg-black" />
            Solicitar Asesoría
          </a>
        </div>

      </div>
    </header>
  );
}
