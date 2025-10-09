// src/components/UseCasesSection.tsx

import { useState, useId, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building,
  Package,
  Users,
  Heart,
  Wrench,
  TrendingUp,
  Clock,
  Euro,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

type IndustryId =
  | "immobilien"
  | "grosshandel"
  | "dienstleistung"
  | "pflege"
  | "handwerk";

type IndustryEntry = {
  id: IndustryId;
  name: string;
  shortDesc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type UseCase = {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type IndustryData = {
  title: string;
  subtitle: string;
  cases: UseCase[];
};

const INDUSTRIES: Readonly<IndustryEntry[]> = [
  {
    id: "immobilien",
    name: "Immobilien",
    shortDesc: "Verwaltung & Makler",
    icon: Building,
  },
  {
    id: "grosshandel",
    name: "Großhandel",
    shortDesc: "B2B & Distribution",
    icon: Package,
  },
  {
    id: "dienstleistung",
    name: "Dienstleistung",
    shortDesc: "Beratung & Services",
    icon: Users,
  },
  { id: "pflege", name: "Pflege", shortDesc: "Heime & Dienste", icon: Heart },
  {
    id: "handwerk",
    name: "Handwerk",
    shortDesc: "Betriebe & Service",
    icon: Wrench,
  },
];

const USE_CASES: Record<IndustryId, IndustryData> = {
  immobilien: {
    title: "Digitalisierung in der Immobilienverwaltung",
    subtitle: "Verwaltungsprozesse automatisieren & Mieterservice verbessern",
    cases: [
      {
        title: "Automatische Mieterkommunikation 24/7",
        description:
          "Chatbot & KI-Telefonassistenz für rund-um-die-Uhr-Betreuung.",
        benefits: [
          "24/7 Verfügbarkeit",
          "Sofortige Antworten",
          "Entlastung des Teams",
        ],
        icon: Clock,
      },
      {
        title: "Vermietungsprozess automatisieren",
        description:
          "Absagen & Terminplanung laufen automatisiert schneller zum Mietvertrag.",
        benefits: [
          "Automatische Absagen",
          "Auto-Termine",
          "50% schnellere Vermietung",
        ],
        icon: BarChart3,
      },
      {
        title: "Echtzeit-Dokumentenprüfung",
        description:
          "Kundendokumente werden auf Aktualität und Vollständigkeit geprüft.",
        benefits: [
          "Schnellere Abwicklung",
          "Lückenlose Doku",
          "Weniger Aufwand",
        ],
        icon: TrendingUp,
      },
    ],
  },
  grosshandel: {
    title: "Digitalisierung im Großhandel",
    subtitle: "B2B-Prozesse optimieren & Lieferketten automatisieren",
    cases: [
      {
        title: "Angebots- & Rechnungserstellung automatisieren",
        description:
          "Bestellungen werden per Workflow in Angebote & Rechnungen verwandelt.",
        benefits: [
          "Weniger Admin",
          "Schnellere Abwicklung",
          "95% weniger Fehler",
        ],
        icon: Clock,
      },
      {
        title: "Intelligente Bestands- & Nachbestellprognosen",
        description:
          "KI nutzt Absatz- & Lagerdaten für optimale Bestellmengen.",
        benefits: [
          "Geringere Lagerkosten",
          "Höhere Lieferfähigkeit",
          "Weniger Kapitalbindung",
        ],
        icon: BarChart3,
      },
      {
        title: "Kundenkommunikation & Support automatisieren",
        description:
          "KI beantwortet Standardfragen zu Lieferzeiten & Verfügbarkeit sofort.",
        benefits: [
          "Entlastung Innendienst",
          "24/7 Service",
          "Höhere Zufriedenheit",
        ],
        icon: TrendingUp,
      },
    ],
  },
  dienstleistung: {
    title: "Digitalisierung in der Dienstleistung",
    subtitle: "Beratungsqualität steigern, Prozesse verschlanken",
    cases: [
      {
        title: "KI-gestützte Report- & Präsentationserstellung",
        description:
          "Reports & Slides entstehen aus Unternehmensdaten + KI-Analyse.",
        benefits: [
          "Pro-Slides in Minuten",
          "Fundierte Insights",
          "CI-Konsistenz",
        ],
        icon: Clock,
      },
      {
        title: "Angebots- & Verträge automatisieren",
        description:
          "Vorlagen befüllen sich aus CRM-/Kundendaten fehlerarm & schnell.",
        benefits: [
          "Schnellere Angebote",
          "Weniger Fehler",
          "Professioneller Auftritt",
        ],
        icon: Euro,
      },
      {
        title: "Automatisierter Sales-Prozess",
        description: "KI qualifiziert Leads & steuert Follow-ups systematisch.",
        benefits: [
          "Kein Lead geht verloren",
          "Planbarer Vertrieb",
          "Mehr Umsatz",
        ],
        icon: TrendingUp,
      },
    ],
  },
  pflege: {
    title: "Digitalisierung in der Pflege",
    subtitle: "Pflegequalität steigern, Doku vereinfachen",
    cases: [
      {
        title: "Digitale Doku per Sprachaufnahme",
        description:
          "Pflegedoku per Sprache strukturiert & automatisch im System.",
        benefits: ["−70% Doku-Zeit", "Hands-free", "Nahtlose Integration"],
        icon: BarChart3,
      },
      {
        title: "Standardfragen automatisch beantworten",
        description:
          "Mail & Telefon-Anfragen werden per KI automatisch beantwortet.",
        benefits: [
          "24/7 erreichbar",
          "Team entlastet",
          "Schnelle Reaktionszeiten",
        ],
        icon: Clock,
      },
      {
        title: "Einsatzplanung mit KI",
        description: "Personalplanung optimiert – mehr Zeit für Pflegearbeit.",
        benefits: [
          "Optimale Auslastung",
          "Mehr Patient:innen-Zeit",
          "Höhere Effizienz",
        ],
        icon: TrendingUp,
      },
    ],
  },
  handwerk: {
    title: "Digitalisierung im Handwerk",
    subtitle: "Auftragsabwicklung modernisieren, Kundenbindung stärken",
    cases: [
      {
        title: "Automatische Angebotserstellung (60% der Fälle)",
        description:
          "Standardaufträge werden KI-gestützt schneller & konsistent erstellt.",
        benefits: [
          "−60% Aufwand",
          "Schnellere Angebote",
          "Standardisierte Qualität",
        ],
        icon: Clock,
      },
      {
        title: "Monteur-Erfassung für Nachberechnung",
        description:
          "Leistungen & Material werden vor Ort per Sprache erfasst.",
        benefits: [
          "Lückenlose Erfassung",
          "Direkte Rechnungsstellung",
          "Präzise Nachkalkulation",
        ],
        icon: Euro,
      },
      {
        title: "Automatischer Angebotsvergleich",
        description:
          "Lieferantenpreise werden automatisch verglichen – beste Konditionen.",
        benefits: ["Beste Preise", "Transparente Kosten", "Mehr Marge"],
        icon: TrendingUp,
      },
    ],
  },
};

export default function UseCasesSection() {
  const sectionId = useId();
  const [activeIndustry, setActiveIndustry] =
    useState<IndustryId>("immobilien");
  const order = useMemo(() => INDUSTRIES.map((i) => i.id), []);
  const active = USE_CASES[activeIndustry];

  // Tastatursteuerung (←/→) für Tabs
  function handleArrowNav(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const idx = order.indexOf(activeIndustry);
    const next =
      e.key === "ArrowRight"
        ? order[(idx + 1) % order.length]
        : order[(idx - 1 + order.length) % order.length];
    setActiveIndustry(next);
  }

  return (
    <section
      id={sectionId}
      className="relative overflow-hidden border-y bg-gradient-subtle py-16 sm:py-20 font-sans"
      aria-labelledby="usecases-heading"
    >
      {/* CI-Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(40rem 24rem at 20% 20%, hsl(var(--secondary)/0.08), transparent 65%), radial-gradient(28rem 18rem at 88% 10%, hsl(var(--secondary)/0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block opacity-60"
        style={{
          background:
            "radial-gradient(40rem 24rem at 20% 20%, hsl(var(--primary)/0.08), transparent 65%), radial-gradient(28rem 18rem at 88% 10%, hsl(var(--primary)/0.10), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Kopf */}
        <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
          <h2
            id="usecases-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Anwendungsfälle aus der Praxis
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Entdecke konkrete Digitalisierungslösungen je Branche – klar
            visualisiert, mit messbaren Vorteilen.
          </p>
        </div>

        {/* Branchen-Tabs – Touch-first & 4K-ready */}
        <div className="relative">
          {/* Fades als Hint */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />

          <div
            className="
              mb-10 -mx-4 px-4 overflow-x-auto overscroll-x-contain touch-pan-x
              snap-x snap-mandatory scroll-smooth
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            "
            role="tablist"
            aria-label="Branchen"
            onKeyDown={handleArrowNav}
          >
            <ul className="flex items-stretch gap-3 2xl:gap-4">
              {INDUSTRIES.map(({ id, name, shortDesc, icon: Icon }) => {
                const isActive = id === activeIndustry;
                return (
                  <li key={id} className="snap-center">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${sectionId}-${id}`}
                      onClick={() => setActiveIndustry(id)}
                      className={[
                        // Größe & Touch-Ziel
                        "group relative inline-flex min-w-[210px] sm:min-w-[230px] 2xl:min-w-[260px] items-center gap-3",
                        "rounded-2xl border px-4 py-4 md:px-5 md:py-5",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary))] dark:focus-visible:ring-[hsl(var(--primary))]",
                        // Zustand
                        isActive
                          ? "border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))] text-white shadow-card dark:border-[hsl(var(--primary))] dark:bg-[hsl(var(--primary))]"
                          : "border-border bg-card text-foreground hover:border-[hsl(var(--secondary)/0.6)] hover:shadow-soft dark:hover:border-[hsl(var(--primary)/0.6)]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "grid h-12 w-12 place-content-center rounded-xl ring-1 transition-all",
                          isActive
                            ? "bg-white/15 ring-white/30"
                            : "bg-[hsl(var(--secondary)/0.10)] ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.12)] dark:ring-[hsl(var(--primary)/0.35)]",
                        ].join(" ")}
                      >
                        <Icon
                          className={[
                            "h-6 w-6",
                            isActive
                              ? "text-white"
                              : "text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]",
                          ].join(" ")}
                        />
                      </span>
                      <span className="min-w-0 md:text-center">
                        <span className="block truncate text-sm font-semibold tracking-tight">
                          {name}
                        </span>
                        <span
                          className={
                            isActive
                              ? "block text-xs text-white/85"
                              : "block text-xs text-muted-foreground"
                          }
                        >
                          {shortDesc}
                        </span>
                      </span>

                      {/* Aktive Unterstreichung */}
                      <span
                        aria-hidden
                        className={[
                          "absolute left-4 right-4 -bottom-[2px] h-[3px] rounded-full transition-all duration-300",
                          isActive
                            ? "bg-white/90 dark:bg-white/90"
                            : "bg-transparent group-hover:bg-[hsl(var(--secondary)/0.25)] dark:group-hover:bg-[hsl(var(--primary)/0.25)]",
                        ].join(" ")}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Inhalt – Cards (breiteres Grid auf großen Screens) */}
        <div
          id={`${sectionId}-${activeIndustry}`}
          role="tabpanel"
          aria-labelledby={activeIndustry}
          className="animate-fade-in"
        >
          <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {active.title}
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">
              {active.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] grid gap-5 sm:gap-6 lg:grid-cols-3 2xl:gap-8">
            {active.cases.map(
              ({ title, description, benefits, icon: Icon }) => (
                <Card
                  key={title}
                  className="
                  group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border
                  bg-card/95 supports-[backdrop-filter]:bg-card/90 backdrop-blur
                  p-6 sm:p-7 shadow-soft transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-card
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-[hsl(var(--secondary)/0.6)]
                  dark:focus-within:ring-[hsl(var(--primary)/0.6)]
                "
                >
                  {/* zarter Verlauf */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(24rem 16rem at 50% -10%, hsl(var(--secondary)/0.10), transparent 60%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 hidden rounded-2xl opacity-100 dark:block"
                    style={{
                      background:
                        "radial-gradient(24rem 16rem at 50% -10%, hsl(var(--primary)/0.08), transparent 60%)",
                    }}
                  />

                  {/* Icon-Badge */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div
                        className="
                        grid h-16 w-16 place-content-center rounded-full shadow-button transition-transform duration-300 group-hover:scale-105
                        bg-[radial-gradient(60%_60%_at_30%_30%,_rgba(255,255,255,0.45),_rgba(255,255,255,0.05))]
                        ring-1 ring-border
                      "
                      >
                        <Icon className="h-8 w-8 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[hsl(var(--secondary)/0.18)] dark:ring-[hsl(var(--primary)/0.20)]" />
                      <span className="pointer-events-none absolute -inset-1 rounded-full ring-1 ring-black/5 dark:ring-white/5" />
                    </div>
                  </div>

                  {/* Titel/Desc */}
                  <div className="mx-auto w-full max-w-md text-center lg:max-w-none lg:min-h-[132px] flex flex-col justify-start">
                    <h4 className="text-lg font-semibold tracking-tight leading-snug line-clamp-2">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="mt-5 grid gap-2.5">
                    {benefits.map((b) => (
                      <li
                        key={b}
                        className="mx-auto flex w-full max-w-md items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6" />
                  <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--secondary)/0.45)] to-transparent dark:via-[hsl(var(--primary)/0.45)]" />
                </Card>
              )
            )}
          </div>
        </div>

        {/* Abschluss-CTA */}
        <div
          className="
            mt-12 sm:mt-14 rounded-2xl border border-border bg-card/95
            p-7 sm:p-8 text-center shadow-soft supports-[backdrop-filter]:bg-card/90 backdrop-blur
          "
        >
          <h4 className="text-2xl font-bold tracking-tight">
            Deine Branche ist nicht dabei?
          </h4>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
            Wir entwickeln maßgeschneiderte Lösungen für jede Branche. Lass uns
            über Dein Projekt sprechen.
          </p>
          <div className="mt-6">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open("https://cal.com/paxup", "_blank")}
              className="
                shadow-button transition-transform duration-300 hover:scale-[1.02]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                focus-visible:ring-[hsl(var(--secondary))] dark:focus-visible:ring-[hsl(var(--primary))]
              "
            >
              Individuelle Beratung anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
