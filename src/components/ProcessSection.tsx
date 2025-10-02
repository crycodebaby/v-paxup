// src/components/ProcessSection.tsx
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Search,
  Target,
  Cog,
  ChevronDown,
  Clock,
  Users,
  Zap,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

// Hintergrundbild (CI-konform dezent überlagert)
import processBg from "@/assets/process-section-bg.jpg";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  duration: string;
  examples: string[];
  deliverables: string;
};

const STEPS: Readonly<Step[]> = [
  {
    number: "01",
    icon: Search,
    title: "Potenzialanalyse (Inhouse-Methode)",
    description:
      "Statuscheck von Prozessen, Daten & Tools – messbar, vergleichbar, priorisiert.",
    detailedDescription:
      "Wir erfassen Ihre Ist-Situation: Workflows, Tool-Landschaft, Datenflüsse, Medienbrüche, DSGVO-Risiken. Dazu Interviews mit Fachbereichen und ein technisches Assessment. Ergebnis: eine klar priorisierte Liste aus Quick-Wins und Hebeln mit quantifiziertem Nutzen.",
    duration: "3–10 Tage",
    examples: [
      "Systeminventar (E-Mail, Telefonie, Kalender, CRM/ERP, DMS)",
      "Prozess-Mapping & Pain-Points (z. B. Angebot, Dispo, Support)",
      "KPI-Baseline (Durchlaufzeiten, Fehlerquoten, Ticketvolumen)",
      "DSGVO-Check (Datenorte, Auftragsverarbeiter, Löschregeln)",
      "Quick-Win-Kandidaten inkl. Aufwand/Nutzen",
    ],
    deliverables:
      "Analyse-Report mit Impact/Effort-Matrix, ROI-Schätzung, Risiken & Empfehlungen",
  },
  {
    number: "02",
    icon: Target,
    title: "Blueprint & Roadmap",
    description:
      "Zielbild, Architektur & 90-Tage-Plan – was, womit, in welcher Reihenfolge.",
    detailedDescription:
      "Aus den Potenzialen entsteht Ihr Umsetzungsplan: Zielprozesse, Integrationsarchitektur (Schnittstellen), Make/Buy-Entscheidungen, Verantwortlichkeiten, Budgetrahmen und Timeline. Inkl. Erfolgskriterien und Fördercheck.",
    duration: "3–5 Tage",
    examples: [
      "Zielprozess-Diagramme & Verantwortlichkeiten (RACI)",
      "Datenmodell & Integrationspunkte (API, Webhooks, ETL)",
      "Tool-Auswahl (z. B. Cal.com, CRM/ERP, Telefonie, DMS)",
      "KI-Use-Cases (LLM-Agenten, Klassifikation, Extraktion)",
      "Förderfähigkeit prüfen & vorbereiten",
    ],
    deliverables:
      "Roadmap (90-Tage-Plan) + Umsetzungs-Backlog mit Meilensteinen, Budget & Erfolgskriterien",
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementierung & Automatisierung",
    description:
      "KI-Worker & Integrationen live – stabil, auditierbar, DSGVO-konform.",
    detailedDescription:
      "Wir setzen iterativ um: Integrationen (E-Mail, Telefonie, Kalender, CRM/ERP, DMS), KI-Automationen (z. B. LLM-Agenten), Tests, Schulungen und Go-Live. Anschließend Monitoring und Feintuning, bis Ziel-KPIs erreicht sind.",
    duration: "4–12 Wochen",
    examples: [
      "E-Mail-Triage & Auto-Antworten mit KI (Priorisierung, Zuweisung)",
      "Telefon-Notizen & Zusammenfassungen (Call-to-CRM)",
      "Kalender-Sync & Termin-Workflows (z. B. Cal.com ↔ CRM)",
      "Ticket-/Auftrags-Automation (Status, SLA, Benachrichtigungen)",
      "Dokumenten-Extraktion (Rechnungen, Verträge, Formulare)",
    ],
    deliverables:
      "Produktiv laufende Automationen + Dashboard (KPI-Tracking), Schulungen & Betriebsübergabe",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionId = useId();

  return (
    <section
      aria-labelledby={`${sectionId}-title`}
      className="relative overflow-hidden"
    >
      {/* Hintergrundbild */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${processBg})`,
        }}
      />
      {/* Overlay: dunkles Blau -> brand Rot, reduziert für Lesbarkeit */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,hsl(215_28%_12%/_0.85)_0%,hsl(215_28%_12%/_0.88)_40%,hsl(var(--primary)/0.06)_100%)]"
      />

      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id={`${sectionId}-title`}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            So digitalisieren wir&nbsp;Ihr Unternehmen
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Potenzialanalyse&nbsp;→&nbsp;Blueprint&nbsp;→&nbsp;Implementierung.
            <span className="hidden sm:inline">
              {" "}
              Alles messbar, sicher, förderfähig.
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const panelId = `${sectionId}-panel-${index}`;
            const btnId = `${sectionId}-btn-${index}`;

            return (
              <Card
                key={step.number}
                className={[
                  "transition-all duration-300 overflow-hidden bg-white/90 dark:bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-card/85",
                  isActive
                    ? "border-primary/30 ring-1 ring-primary/20 shadow-card"
                    : "border-border/60 hover:border-primary/20 hover:shadow-card",
                ].join(" ")}
              >
                {/* Kopfzeile */}
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isActive}
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="w-full text-left p-5 md:p-7 lg:p-8"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Nummer */}
                    <div
                      className={[
                        "grid place-content-center rounded-full text-white font-bold text-base md:text-lg w-12 h-12 md:w-14 md:h-14 shadow-button transition-transform duration-300",
                        isActive ? "scale-110" : "",
                        "bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(215_28%_18%)_100%)]",
                      ].join(" ")}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={[
                        "grid place-content-center rounded-xl w-11 h-11 md:w-12 md:h-12 transition-colors",
                        isActive ? "bg-primary/20" : "bg-primary/10",
                      ].join(" ")}
                    >
                      <Icon
                        className={[
                          "w-5 h-5 md:w-6 md:h-6 transition-transform",
                          isActive ? "text-primary scale-110" : "text-primary",
                        ].join(" ")}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground truncate">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-none">
                        {step.description}
                      </p>
                    </div>

                    {/* Indicator */}
                    <div className="ml-auto pl-2 shrink-0">
                      {isActive ? (
                        <ChevronDown className="w-6 h-6 text-primary transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-muted-foreground transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Panel */}
                {isActive && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-5 md:px-7 lg:px-8 pb-6 md:pb-8 animate-fade-in"
                  >
                    <div className="space-y-6">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {step.detailedDescription}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Dauer + Deliverables */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-accent mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-foreground">
                                Dauer
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {step.duration}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-foreground mb-1">
                                Ergebnis
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {step.deliverables}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Konkrete Beispiele */}
                        <div>
                          <div className="flex items-start gap-3 mb-3">
                            <Users className="w-5 h-5 text-accent mt-0.5" />
                            <h5 className="font-semibold text-foreground">
                              Was wir konkret machen
                            </h5>
                          </div>

                          <ul className="space-y-2">
                            {step.examples.map((ex) => (
                              <li
                                key={ex}
                                className="flex items-start gap-2 text-sm"
                              >
                                <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-muted-foreground">
                                  {ex}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="cta"
            size="lg"
            className="px-7 py-6 text-base md:text-lg shadow-button hover:shadow-elegant transition-all duration-300"
            onClick={() => window.open("https://cal.com/paxup", "_blank")}
          >
            Jetzt mit KI im Unternehmen starten
          </Button>
        </div>
      </div>
    </section>
  );
}
