import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones · Punto Táctico" },
      { name: "description", content: "Términos y condiciones de Punto Táctico bajo el marco legal colombiano — Decretos 1417/2021 y 1563/2022." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10 flex items-center justify-between font-mono-tech text-[10px] text-amber/80">
          <span>[LEGAL · DOC-01]</span>
          <Link to="/" className="border border-[color:var(--amber)]/40 px-3 py-1 text-amber transition hover:bg-[color:var(--amber)] hover:text-primary-foreground">
            ← Volver
          </Link>
        </div>

        <h1 className="font-black uppercase leading-none tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Términos y <span className="text-amber">Condiciones</span>
        </h1>
        <p className="mt-4 font-mono-tech text-[11px] text-muted-foreground">
          Última actualización · {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">1. Marco Legal Aplicable</h2>
            <p>
              Punto Táctico opera en cumplimiento estricto del <strong className="text-amber">Decreto 1417 de 2021</strong> y el{" "}
              <strong className="text-amber">Decreto 1563 de 2022</strong> de la República de Colombia, que regulan la fabricación,
              importación, comercialización, tenencia y porte de armas menos letales, traumáticas y de fogueo en el territorio nacional.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">2. Naturaleza de los Productos</h2>
            <p>
              Las armas traumáticas comercializadas son productos restringidos. Su adquisición, tenencia y porte requieren
              obligatoriamente registro ante <strong className="text-amber">Indumil</strong> (Industria Militar de Colombia)
              y la obtención del <strong className="text-amber">Permiso de Tenencia o Porte</strong> vigente, expedido por la
              autoridad competente.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">3. Rol de Punto Táctico</h2>
            <p className="border-l-2 border-[color:var(--amber)] bg-[color:var(--amber)]/5 p-4">
              <strong className="text-amber">Punto Táctico actúa como facilitador comercial. La aprobación final depende del Estado Colombiano.</strong>
            </p>
            <p className="mt-3">
              Nuestra labor consiste en asesorar, gestionar documentación, coordinar la importación y trazabilidad, y entregar
              los equipos únicamente a clientes que hayan cumplido con la totalidad de los requisitos legales estatales.
              La emisión del permiso, aprobación de trámites y autorización final son competencia exclusiva de las autoridades
              militares y administrativas colombianas.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">4. Perfil del Cliente</h2>
            <p>
              Todo cliente debe ser mayor de edad, contar con antecedentes limpios y superar el proceso de verificación de
              perfil operativo requerido por Indumil. Punto Táctico se reserva el derecho de rechazar cualquier solicitud
              que no cumpla los criterios legales o éticos establecidos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">5. Uso Responsable</h2>
            <p>
              El comprador se compromete a un uso exclusivamente lícito de los equipos, dentro del marco de la legítima defensa,
              práctica deportiva o entrenamiento autorizado. El uso indebido, ilegal o negligente exime completamente de responsabilidad
              a Punto Táctico y es materia exclusiva del portador.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">6. Garantía</h2>
            <p>
              Los productos cuentan con la garantía indicada en su ficha técnica (3 meses estándar), aplicable a defectos de
              fabricación bajo términos y condiciones. La garantía no cubre uso indebido, mantenimiento inadecuado o munición
              no homologada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">7. Contacto</h2>
            <p>
              Cualquier inquietud sobre estos términos debe canalizarse por WhatsApp al <span className="text-amber">+57 302-710-4931</span>{" "}
              o consultar directamente con nuestra sede operativa en Palmira - Valle.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
