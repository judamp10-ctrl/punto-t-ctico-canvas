import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BulletsBackground } from "@/components/BulletsBackground";
import {
  TheShift,
  TheMechanism,
  TheFramework,
  TheFilter,
  TerminalCTA,
  SiteFooter,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BulletsBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <TheShift />
        <TheMechanism />
        <TheFramework />
        <TheFilter />
        <TerminalCTA />
        <SiteFooter />
      </div>
    </div>
  );
}
