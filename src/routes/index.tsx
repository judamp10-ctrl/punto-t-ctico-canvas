import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import {
  TheShift,
  TheMechanism,
  TheFramework,
  TheFilter,
  Poligono,
  Mantenimiento,
  Contacto,
  TerminalCTA,
  SiteFooter,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punto Táctico — Armería Traumática Legal · Colombia" },
      { name: "description", content: "Inventario operativo de armas traumáticas 9mm P.A., escopetas y fusiles. Registro legal Indumil. Palmira - Valle, Colombia." },
      { property: "og:title", content: "Punto Táctico — Tactical Division CO" },
      { property: "og:description", content: "Inventario operativo. Trámite legal. Respaldo Indumil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Catalog />
      <TheShift />
      <TheMechanism />
      <TheFramework />
      <TheFilter />
      <Poligono />
      <Mantenimiento />
      <Contacto />
      <TerminalCTA />
      <SiteFooter />
    </>
  );
}
