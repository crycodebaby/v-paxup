// src/components/ServicesSection.tsx
import { memo, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Database,
  Shield,
  Zap,
  Brain,
  type LucideIcon,
  ChevronDown,
} from "lucide-react";
import UpMark from "@/assets/logo/Up_rot.png";

// --- Types & Data (unverändert) ---
type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  benefit: string;
};
const SERVICES: Readonly<Service[]> = [
  {
    icon: Database,
    title: "Digitale Datenbasis",
    description: "Ordnung & Transparenz für bessere, schnelle Entscheidungen.",
    details:
      "Wir schaffen ein zentrales System, in dem jede Information sofort griffbereit ist  egal ob auf der Baustelle, im Pflegedienst oder im Vertrieb. Schluss mit der Zettelwirtschaft.",
    benefit: "Dein Vorteil: Entscheidungen in Sekunden, nicht in Stunden.",
  },
  {
    icon: Shield,
    title: "Datenschutz & Sicherheit",
    description: "DSGVO-konform. Hosting & Verarbeitung in Deutschland.",
    details:
      "Mit Servern ausschließlich in Deutschland und klaren Prozessen ist dein Unternehmen rechtlich geschützt, damit du dich wieder voll auf dein Kerngeschäft konzentrieren kannst.",
    benefit:
      "Dein Vorteil: Volle Konzentration aufs Wesentliche, ohne Angst vor Strafen.",
  },
  {
    icon: Zap,
    title: "Systemintegration",
    description:
      "Tools verbinden, Workflows automatisieren, Medienbrüche schließen.",
    details:
      "Wir vernetzen deine Insellösungen, damit Aufträge, Kundendaten und Rechnungen automatisch fließen. Das ist der größte Hebel gegen Zeitfresser und manuelle Fehler.",
    benefit:
      "Dein Vorteil: Weniger Fehler, mehr Tempo und Zeit für wertschöpfende Arbeit.",
  },
  {
    icon: Brain,
    title: "Strategische KI-Beratung",
    description:
      "KI pragmatisch einsetzen  messbar, verständlich, förderfähig.",
    details:
      "Wir finden den einen KI-Hebel mit dem größten Nutzen für dich  z.B. bei Angebots-Erstellung, Tourenplanung oder Kundenbetreuung. Verständlich, pragmatisch und oft förderfähig.",
    benefit:
      "Dein Vorteil: Arbeite am statt im Unternehmen  produktiver, zukunftsfähig.",
  },
];

/* ------------------------------- Section -------------------------------- */

function ServicesSectionBase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Starte mit dem ersten offenen Element

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-background text-foreground">
      {/* Hintergrund (angepasst für besseren Kontrast) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-subtle" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(40rem 40rem at 8% 8%, hsl(var(--secondary)/0.35), transparent 55%), radial-gradient(26rem 26rem at 90% 0%, hsl(var(--secondary)/0.25), transparent 60%)",
        }}
      />
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none select-none absolute -z-10 right-[-2.5rem] top-[12%] hidden sm:block w-[200px] opacity-[0.04] rotate-[-10deg]"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Leistungen für den&nbsp;Mittelstand
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Digitalisierung, Prozessautomatisierung &{" "}
            <span className="text-secondary dark:text-primary font-semibold">
              KI
            </span>{" "}
            pragmatisch, sicher, förderfähig.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Analyse", "Strategie", "Umsetzung"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary dark:border-primary/30 dark:bg-primary/10 dark:text-primary"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Das neue interaktive "Bento Grid" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <Card
                key={service.title}
                onClick={() => handleToggle(i)}
                className={`
                  relative overflow-hidden rounded-2xl border bg-card p-6 md:p-8 shadow-soft cursor-pointer
                  transition-all duration-500 ease-in-out group
                  ${
                    isActive
                      ? "lg:col-span-2 shadow-elegant border-primary"
                      : "hover:shadow-card hover:-translate-y-1"
                  }
                `}
              >
                {/* Ambient Glows */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background:
                      "radial-gradient(20rem 14rem at 50% 0%, hsl(var(--secondary)/0.10), transparent 65%)",
                  }}
                />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 dark:opacity-0 ${
                    isActive
                      ? "dark:opacity-100"
                      : "dark:group-hover:opacity-100"
                  }`}
                  style={{
                    background:
                      "radial-gradient(20rem 14rem at 50% 0%, hsl(var(--primary)/0.08), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div
                      className={`
                      grid h-14 w-14 md:h-16 md:w-16 place-content-center rounded-2xl flex-shrink-0
                      bg-secondary/10 ring-1 ring-secondary/30 text-secondary
                      dark:bg-primary/10 dark:ring-primary/30 dark:text-primary
                      transition-all duration-300 group-hover:scale-105 ${
                        isActive ? "scale-105" : ""
                      }`}
                    >
                      <service.icon className="h-7 w-7 md:h-8 md:w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`ml-auto h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Ausklappbarer Detailbereich */}
                  <div
                    className={`
                    grid transition-[grid-template-rows] duration-500 ease-in-out
                    ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-6 mt-6 border-t text-left">
                        <p className="text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground">
                          {service.details}
                        </p>
                        <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed font-semibold text-foreground">
                          {service.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ServicesSection = memo(ServicesSectionBase);
export default ServicesSection;
