// src/components/UseCasesSection.tsx

import { useState, useId } from "react";
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
    subtitle: "Verwaltungsprozesse automatisieren und Mieterservice verbessern",
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
          "Absagen & Terminplanung laufen automatisiert – schneller zum Mietvertrag.",
        benefits: [
          "Automatische Absagen",
          "Auto-Termine",
          "50% schnellere Vermietung",
        ],
        icon: BarChart3,
      },
      {
        title: "Versicherungsschäden automatisch melden",
        description:
          "Schadensfälle werden dokumentiert und direkt an Versicherer übermittelt.",
        benefits: [
          "Schnellere Abwicklung",
          "Lückenlose Dokumentation",
          "Weniger Aufwand",
        ],
        icon: TrendingUp,
      },
    ],
  },
  grosshandel: {
    title: "Digitalisierung im Großhandel",
    subtitle: "B2B-Prozesse optimieren und Lieferketten automatisieren",
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
          "Pro Präsentationen in Minuten",
          "Fundierte Insights",
          "CI-Konsistenz",
        ],
        icon: Clock,
      },
      {
        title: "Angebots- & Vertragsdokumente automatisieren",
        description:
          "Vorlagen befüllen sich aus CRM-/Kundendaten – fehlerarm & schnell.",
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
          "Pflegedoku per Sprache – strukturiert & automatisch im System.",
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
        description:
          "Personalplanung optimiert – mehr Zeit für die Pflegearbeit.",
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
          "Standardaufträge werden KI-gestützt erstellt – schneller & konsistent.",
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
  const [activeIndustry, setActiveIndustry] =
    useState<IndustryId>("immobilien");
  const sectionId = useId();

  const active = USE_CASES[activeIndustry];

  return (
    <section
      id={sectionId}
      className="relative overflow-hidden border-y bg-gradient-subtle py-20"
      aria-labelledby="usecases-heading"
    >
      {/* zarte CI-Aura (sekundär, rot) im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(40rem 24rem at 20% 20%, hsl(var(--secondary)/0.08), transparent 65%), radial-gradient(28rem 18rem at 88% 10%, hsl(var(--secondary)/0.10), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Kopf */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="usecases-heading"
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Anwendungsfälle aus der Praxis
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Entdecken Sie konkrete Digitalisierungslösungen je Branche – klar
            visualisiert, mit messbaren Vorteilen.
          </p>
        </div>

        {/* Branchen-Tabs: horizontal scroll auf Mobile (ohne sichtbare Scrollbar) */}
        <div className="relative">
          {/* Fades an den Rändern als dezente Scroll-Andeutung */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />

          <div
            className="mb-10 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Branchen"
          >
            <ul className="flex snap-x snap-mandatory gap-3 md:grid md:grid-cols-3 lg:grid-cols-5">
              {INDUSTRIES.map(({ id, name, shortDesc, icon: Icon }) => {
                const isActive = id === activeIndustry;
                return (
                  <li key={id} className="snap-start">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${sectionId}-${id}`}
                      onClick={() => setActiveIndustry(id)}
                      className={[
                        "group w-[220px] md:w-auto rounded-xl border px-4 py-3 text-left transition-all md:text-center",
                        isActive
                          ? "border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))] text-white shadow-card"
                          : "border-border bg-card text-foreground hover:border-[hsl(var(--secondary)/0.6)] hover:shadow-soft",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3 md:flex-col md:gap-2">
                        <span
                          className={[
                            "grid h-10 w-10 place-content-center rounded-lg ring-1 transition-all",
                            isActive
                              ? "bg-white/15 ring-white/30"
                              : "bg-[hsl(var(--secondary)/0.10)] ring-[hsl(var(--secondary)/0.35)]",
                          ].join(" ")}
                        >
                          <Icon
                            className={[
                              "h-6 w-6",
                              isActive
                                ? "text-white"
                                : "text-[hsl(var(--secondary))]",
                            ].join(" ")}
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold">
                            {name}
                          </span>
                          <span
                            className={[
                              "block text-xs",
                              isActive
                                ? "text-white/85"
                                : "text-muted-foreground",
                            ].join(" ")}
                          >
                            {shortDesc}
                          </span>
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Inhalt der aktiven Branche */}
        <div
          id={`${sectionId}-${activeIndustry}`}
          role="tabpanel"
          aria-labelledby={activeIndustry}
          className="animate-fade-in"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="text-2xl font-bold md:text-3xl">{active.title}</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              {active.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {active.cases.map(
              ({ title, description, benefits, icon: Icon }) => (
                <Card
                  key={title}
                  className="group flex h-full flex-col overflow-hidden border-border p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  {/* Icon-Badge */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div className="grid h-16 w-16 place-content-center rounded-full bg-gradient-primary shadow-button transition-transform group-hover:scale-105">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {/* dünner sekundärer Ring */}
                      <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[hsl(var(--secondary)/0.25)]" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="mx-auto w-full max-w-md text-center">
                    <h4 className="line-clamp-2 text-lg font-bold">{title}</h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  {/* Vorteile */}
                  <ul className="mt-5 grid gap-2">
                    {benefits.map((b) => (
                      <li
                        key={b}
                        className="mx-auto flex w-full max-w-md items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))]" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* dezente Unterkante in CI-Rot */}
                  <div className="mt-6 h-0.5 w-full bg-[hsl(var(--secondary)/0.35)]" />
                </Card>
              )
            )}
          </div>
        </div>

        {/* Abschluss-CTA */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
          <h4 className="text-2xl font-bold">Ihre Branche nicht dabei?</h4>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
            Wir entwickeln maßgeschneiderte Lösungen für jede Branche. Sprechen
            wir über Ihr Projekt.
          </p>
          <div className="mt-6">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open("https://cal.com/paxup", "_blank")}
              className="shadow-button transition-transform hover:scale-[1.02]"
            >
              Individuelle Beratung anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
