import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad · Punto Táctico" },
      { name: "description", content: "Política de tratamiento de datos personales de Punto Táctico bajo la Ley Estatutaria 1581 de 2012 (Habeas Data)." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10 flex items-center justify-between font-mono-tech text-[10px] text-amber/80">
          <span>[LEGAL · DOC-02]</span>
          <Link to="/" className="border border-[color:var(--amber)]/40 px-3 py-1 text-amber transition hover:bg-[color:var(--amber)] hover:text-primary-foreground">
            ← Volver
          </Link>
        </div>

        <h1 className="font-black uppercase leading-none tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Política de <span className="text-amber">Privacidad</span>
        </h1>
        <p className="mt-4 font-mono-tech text-[11px] text-muted-foreground">
          Última actualización · {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">1. Marco Legal</h2>
            <p>
              Punto Táctico cumple estrictamente con la <strong className="text-amber">Ley Estatutaria 1581 de 2012 (Habeas Data)</strong> y sus
              decretos reglamentarios, que regulan el tratamiento de datos personales en la República de Colombia. Todo dato entregado
              por el usuario es tratado con confidencialidad, integridad y disponibilidad.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">2. Datos Recolectados</h2>
            <p>
              Recopilamos únicamente la información necesaria para el proceso de asesoría y trámite legal:
            </p>
            <ul className="mt-4 space-y-2 border-l border-[color:var(--amber)]/40 pl-6">
              <li>· Nombre completo y documento de identidad</li>
              <li>· Datos de contacto (WhatsApp, correo electrónico)</li>
              <li>· Perfil operativo declarado (defensa civil, tiro deportivo, seguridad privada)</li>
              <li>· Documentación complementaria exigida por Indumil</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">3. Finalidad del Tratamiento</h2>
            <p className="border-l-2 border-[color:var(--amber)] bg-[color:var(--amber)]/5 p-4">
              Los identificadores de usuario y perfiles operativos recolectados vía WhatsApp se almacenan de forma segura y se utilizan
              <strong className="text-amber"> estrictamente para verificaciones legales de antecedentes y trámites de registro ante Indumil</strong>.
              No comercializamos, cedemos ni compartimos datos con terceros ajenos al proceso legal.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">4. Almacenamiento y Seguridad</h2>
            <p>
              Los datos se conservan en repositorios cifrados con acceso restringido al personal autorizado del área de gestión legal.
              Aplicamos medidas técnicas y administrativas para prevenir acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">5. Derechos del Titular</h2>
            <p>
              Como titular de datos, usted tiene derecho a:
            </p>
            <ul className="mt-4 space-y-2 border-l border-[color:var(--amber)]/40 pl-6">
              <li>· Conocer, actualizar y rectificar sus datos personales</li>
              <li>· Solicitar prueba de la autorización otorgada</li>
              <li>· Ser informado sobre el uso dado a sus datos</li>
              <li>· Revocar la autorización y/o solicitar la supresión del dato</li>
              <li>· Acceder gratuitamente a sus datos objeto de tratamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">6. Retención</h2>
            <p>
              Los datos se conservan mientras dure la relación comercial y durante los plazos legales requeridos por las autoridades
              militares y tributarias colombianas. Posteriormente son eliminados o anonimizados según protocolo interno.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground">7. Canal de Peticiones</h2>
            <p>
              Para ejercer sus derechos como titular, escríbanos vía WhatsApp al <span className="text-amber">+57 302-710-4931</span>{" "}
              indicando su solicitud. Responderemos dentro de los plazos legales establecidos por la Ley 1581/2012.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
