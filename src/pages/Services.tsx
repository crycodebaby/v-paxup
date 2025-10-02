// src/pages/Services.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Target,
  Cog,
  Clock,
  CheckCircle2,
  ArrowRight,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const CAL_URL = "https://cal.com/paxup";

type Step = {
  number: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  kicker: string;
  short: string;
  bullets: string[];
  benefits: string[];
  kpis?: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
  }[];
};

const STEPS: Readonly<Step[]> = [
  {
    number: "01",
    icon: Search,
    title: "Potenzialanalyse (Inhouse)",
    kicker: "Statuscheck von Prozessen, Daten & Tools",
    short:
      "Wir erfassen Ihre Ist-Situation — messbar, vergleichbar, priorisiert. Ergebnis: eine klare Liste aus Quick-Wins und Hebeln mit quantifiziertem Nutzen.",
    bullets: [
      "Systeminventar: E-Mail, Telefonie, Kalender, CRM/ERP, DMS",
      "Prozess-Mapping & Pain-Points (Angebot, Dispo, Support)",
      "KPI-Baseline: Durchlaufzeit, Fehlerquote, Ticketvolumen",
      "DSGVO-Check: Datenorte, AVV, Löschregeln",
      "Quick-Wins inkl. Aufwand/Nutzen",
    ],
    benefits: [
      "Transparenz in Tagen statt Wochen",
      "Fokus auf Maßnahmen mit echtem Effekt",
      "Solide Entscheidungsgrundlage (ROI/Impact)",
    ],
    kpis: [
      { icon: Gauge, label: "Quick-Wins identifiziert" },
      { icon: Clock, label: "3–10 Tage Laufzeit" },
      { icon: ShieldCheck, label: "DSGVO-Risiken sichtbar" },
    ],
  },
  {
    number: "02",
    icon: Target,
    title: "Blueprint & Roadmap",
    kicker: "Zielbild, Architektur & 90-Tage-Plan",
    short:
      "Wir übersetzen Potenziale in einen umsetzbaren Plan: Zielprozesse, Integrationen, Make/Buy, Budget und Meilensteine — inkl. Fördercheck.",
    bullets: [
      "Zielprozesse & Verantwortlichkeiten (RACI)",
      "Datenmodell & Integrationspunkte (API, Webhooks, ETL)",
      "Tool-Auswahl (z. B. Cal.com, CRM/ERP, Telefonie, DMS)",
      "KI-Use-Cases: Agenten, Klassifikation, Extraktion",
      "Roadmap: 90 Tage + Backlog mit Meilensteinen",
    ],
    benefits: [
      "Klarheit: was, womit, in welcher Reihenfolge",
      "Planbarkeit für Budget & Ressourcen",
      "Förderfähigkeit geprüft & vorbereitet",
    ],
    kpis: [
      { icon: Workflow, label: "Saubere Integrationsarchitektur" },
      { icon: Gauge, label: "Klares Priorisierungs-Backlog" },
      { icon: Clock, label: "3–5 Tage Laufzeit" },
    ],
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementierung & Automatisierung",
    kicker: "KI-Worker & Integrationen live",
    short:
      "Wir setzen konsistent um: Integrationen, KI-Automationen, Tests, Schulungen und Go-Live. Danach Monitoring & Feintuning bis die KPIs sitzen.",
    bullets: [
      "E-Mail-Triage & Auto-Antworten (Priorisierung, Zuweisung)",
      "Telefon-Notizen & Zusammenfassungen (Call-to-CRM)",
      "Kalender-Sync & Termin-Workflows (z. B. Cal.com ↔ CRM)",
      "Ticket/Auftrags-Automation (Status, SLA, Alerts)",
      "Dokumenten-Extraktion (Rechnungen, Verträge, Formulare)",
    ],
    benefits: [
      "Weniger Routine — mehr Produktivität",
      "Nachweisbar: KPIs & Dashboard",
      "Auditierbar & DSGVO-konform",
    ],
    kpis: [
      { icon: Gauge, label: ">30% Durchsatzsteigerung*" },
      { icon: ShieldCheck, label: "Audit-fähig" },
      { icon: Clock, label: "4–12 Wochen Umsetzung" },
    ],
  },
] as const;

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-card/70 backdrop-blur ring-1 ring-border">
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                Leistungen & Vorgehen
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                In 3 Schritten zu messbarer Digitalisierung
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Klarer Plan, schnelle Effekte, stabile Umsetzung — ohne Bla, mit
                Ergebnis.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="shadow-button hover:-translate-y-0.5 transition-smooth bg-[hsl(var(--secondary))] text-white dark:bg-[hsl(var(--primary))]"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  Kostenlose Erstberatung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                * Erfahrungswerte je nach Prozess & Ausgangslage
              </p>
            </div>
          </div>
        </section>

        {/* STEP OVERVIEW (3 Cards) */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <Card
                  key={s.number}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card/95 p-7 shadow-soft supports-[backdrop-filter]:bg-card/90 backdrop-blur transition-all duration-300 hover:shadow-card"
                >
                  {/* Glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(24rem 16rem at 50% -10%, hsl(var(--secondary)/0.10), transparent 60%)",
                    }}
                  />
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <s.icon className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-muted-foreground">
                        {s.number}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                        {s.kicker}
                      </p>
                    </div>
                  </div>
                  {/* Copy */}
                  <p className="mt-3 text-sm text-muted-foreground">
                    {s.short}
                  </p>
                  {/* Mini KPIs */}
                  {s.kpis && (
                    <ul className="mt-5 grid grid-cols-1 gap-2">
                      {s.kpis.map(({ icon: Icon, label }) => (
                        <li
                          key={label}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Icon className="h-4 w-4 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED STEPS */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                So setzen wir um
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Kurze Wege, klare Sprints und ein Dashboard, das Wirkung zeigt.
              </p>
            </div>

            <div className="space-y-10 md:space-y-12">
              {STEPS.map((s) => (
                <div
                  key={s.number}
                  className="bg-background rounded-2xl p-6 md:p-8 shadow-card border border-border"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left: Head + bullets */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="grid h-12 w-12 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                          <s.icon className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            {s.title}
                          </h3>
                          <p className="text-sm font-medium text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                            {s.kicker}
                          </p>
                        </div>
                      </div>

                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {s.short}
                      </p>

                      <h4 className="mt-6 text-base md:text-lg font-semibold">
                        Was wir konkret tun
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm md:text-base"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Benefits */}
                    <div>
                      <h4 className="text-base md:text-lg font-semibold">
                        Ihr Vorteil
                      </h4>
                      <div className="mt-3 grid gap-3">
                        {s.benefits.map((v) => (
                          <div
                            key={v}
                            className="rounded-xl border border-border bg-gradient-subtle p-4"
                          >
                            <div className="flex items-start gap-3">
                              <ArrowRight className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))] mt-0.5" />
                              <p className="font-medium">{v}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Optional: KPIs spiegeln */}
                      {s.kpis && (
                        <ul className="mt-6 grid gap-2">
                          {s.kpis.map(({ icon: Icon, label }) => (
                            <li
                              key={label}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Icon className="h-4 w-4 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                              <span className="text-muted-foreground">
                                {label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button
                variant="cta"
                size="lg"
                className="px-7 py-6 text-base md:text-lg shadow-button hover:shadow-elegant transition-all duration-300"
                onClick={() => window.open(CAL_URL, "_blank")}
              >
                Jetzt mit KI im Unternehmen starten
              </Button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Bereit für Wirkung statt Hype?
              </h2>
              <p className="mt-3 text-lg opacity-90">
                Wir bringen Ihre Prozesse auf Kurs — pragmatisch, sicher,
                messbar.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  Kostenlose Erstberatung
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/foerderung")}
                >
                  Fördermöglichkeiten entdecken
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
