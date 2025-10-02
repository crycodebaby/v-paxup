// src/pages/UseCases.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneOff,
  Clock,
  UserPlus,
  ArrowRight,
  Building2,
  Wrench,
  Stethoscope,
  Car,
  ShoppingCart,
  Scale,
  CheckCircle2,
  Info,
  Phone,
  Mail,
  MessagesSquare,
} from "lucide-react";

type CaseItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  intro: string;
  before: string[];
  after: string[];
  result: string;
};

const CAL_URL = "https://cal.com/paxup";

const METRICS = [
  { icon: PhoneOff, label: "80% weniger Routineanrufe" },
  { icon: Clock, label: "24/7 erreichbar" },
  { icon: UserPlus, label: "5+ Std/MA pro Woche gespart" },
] as const;

const CASES: Readonly<CaseItem[]> = [
  {
    icon: Wrench,
    title: "Anwendungsfall: Der überlastete Handwerksbetrieb",
    intro:
      "Der Meister ist auf der Baustelle, im Büro klingelt das Telefon Sturm. Wertvolle Aufträge gehen verloren.",
    before: [
      "Daueranrufe mit Standardfragen („Wann kommt der Monteur?“).",
      "Besetztzeichen/keiner erreichbar → Anfragen gehen verloren.",
      "Büro ständig aus Angebotskalkulation gerissen.",
      "Terminabstimmungen per E-Mail ziehen sich über Tage.",
    ],
    after: [
      "KI-Telefonbot nimmt 100 % der Anrufe an, beantwortet FAQs, bucht Termine.",
      "Wichtige Anrufe (Lieferanten etc.) werden gezielt durchgestellt.",
      "Web-Chatbot generiert qualifizierte Leads auch nachts.",
      "Team arbeitet fokussiert an Angeboten & Planung.",
    ],
    result:
      "70 % weniger Störungen, 25 % mehr qualifizierte Anfragen, kein Leadverlust.",
  },
  {
    icon: Building2,
    title: "Anwendungsfall: Die gestresste Immobilienverwaltung",
    intro:
      "Mieter/Eigentümer melden sich rund um die Uhr – E-Mails & Anrufe fluten das Team.",
    before: [
      "Postfach übervoll mit Fragen zu NK-Abrechnung/Hausordnung.",
      "Telefonische Schadensmeldungen unvollständig.",
      "Notfälle außerhalb der Zeiten werden spät bemerkt.",
      "Frust im Team durch repetitiven Kleinkram.",
    ],
    after: [
      "KI-Chatbot führt durch Schadensmeldung inkl. Foto-Upload.",
      "KI-Mail-Manager beantwortet Top-20 Standardmails automatisch.",
      "KI-Telefonbot nimmt 24/7 Notfälle auf und routet strukturiert.",
      "Zeit für kaufmännische & technische Kernaufgaben.",
    ],
    result:
      "95 % Schadensmeldungen vollständig, Standardantworten in 1 Sekunde statt 24 h.",
  },
  {
    icon: Car,
    title: "Anwendungsfall: Die moderne KFZ-Werkstatt",
    intro:
      "Ständige Telefonate für Termine & Statusupdates blockieren Meister und Service.",
    before: [
      "Telefon klingelt ununterbrochen (Inspektion, Reifen, TÜV).",
      "Mehrfachanrufe: „Ist mein Auto schon fertig?“",
      "Serviceberater telefoniert mehr als er berät.",
      "Späte Terminabsagen → Leerlauf.",
    ],
    after: [
      "KI-Telefonbot erledigt 90 % Terminvereinbarungen selbst.",
      "Auto-SMS bei Abholbereitschaft → keine Statusanfragen.",
      "Chatbot beantwortet Preise für Standardleistungen.",
      "Team ist bei Fahrzeug & Kunde – statt in der Hotline.",
    ],
    result: "80 % Termine ohne Mitarbeitereingriff, +30 % Kundenzufriedenheit.",
  },
  {
    icon: Stethoscope,
    title: "Anwendungsfall: Die patientenfreundliche Arztpraxis",
    intro:
      "MFA am Empfang zwischen Patienten und Dauertelefon – chaotisch und stressig.",
    before: [
      "Warteschlange vor Ort & in der Leitung.",
      "Hastige Terminvergaben → Fehler.",
      "Rezeptwünsche blockieren Leitungen.",
      "Team dauerhaft überlastet.",
    ],
    after: [
      "KI-Telefonbot vergibt/verschiebt Termine & nimmt Rezeptwünsche auf.",
      "Leitung frei für dringliche Anliegen.",
      "MFA hat Zeit für anwesende Patienten.",
      "Strukturierte Übergabe in Praxissoftware.",
    ],
    result:
      "90 % Terminabläufe vollautomatisch, keine Warteschleife, spürbar weniger Stress.",
  },
  {
    icon: Scale,
    title: "Anwendungsfall: Die ausgelastete Anwaltskanzlei",
    intro:
      "Wertvolle Fachzeit versandet in Telefon-Triage und FAQ-Beantwortung.",
    before: [
      "Viele Erstberatungstermine per Telefon anfragen/vereinbaren.",
      "„Stand der Dinge?“-Anrufe blockieren den Ablauf.",
      "Falsche Anfragen (falsches Rechtsgebiet) fressen Zeit.",
      "Hochqualifizierte Fachangestellte telefonieren nur noch.",
    ],
    after: [
      "KI-Telefonbot qualifiziert & terminiert Erstgespräche inkl. Stammdaten.",
      "Web-FAQ via Chatbot („Welche Unterlagen mitbringen?“).",
      "Statusabfragen self-service, kein Unterbrechen.",
      "Team arbeitet fokussiert an Fällen.",
    ],
    result: "+40 % Fachzeit, perfekte Vorkalifizierung, 24/7 Terminvergabe.",
  },
  {
    icon: ShoppingCart,
    title: "Anwendungsfall: Der wachsende Online-Shop",
    intro:
      "Mehr Bestellungen → Support explodiert → Marge leidet durch reinen Reaktiv-Modus.",
    before: [
      "Top-Mail: „Wo ist meine Bestellung?“ überflutet das Postfach.",
      "Anrufe/Chats zu Retouren/Produkten binden Team.",
      "Service nur 9–17 Uhr erreichbar.",
      "Reaktiv statt proaktiv – Verkauf leidet.",
    ],
    after: [
      "Chatbot checkt Live-Bestellstatus & beantwortet WISMO sofort.",
      "Bot startet Retouren & beantwortet Produktfragen 24/7.",
      "KI-Mail-Manager beantwortet 70 % der Mails automatisch.",
      "Team löst komplexe Fälle & verkauft aktiv.",
    ],
    result:
      "75 % Support automatisiert, Zufriedenheit steigt, Fokus auf Umsatz.",
  },
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-subtle">
          {/* zarte Aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(36rem 20rem at 18% 14%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(30rem 20rem at 84% 8%, hsl(var(--secondary)/0.12), transparent 60%)",
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Weniger Chaos, mehr Geschäft:{" "}
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  So löst unsere KI deine Kommunikationsprobleme.
                </span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Unsere Kommunikations-KI automatisiert Anrufe, E-Mails und
                Chats, damit sich dein Team auf das Wesentliche konzentrieren
                kann. Sieh selbst, wie wir den Alltag in deiner Branche
                verändern – und die Basis für deine langfristige KI-Strategie
                legen.
              </p>

              {/* USP Bar */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {METRICS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-card/80 p-4 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/70"
                  >
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                      <Icon className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Micro CTA Row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                  <Phone className="h-3.5 w-3.5" /> Telefon
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                  <Mail className="h-3.5 w-3.5" /> E-Mail
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                  <MessagesSquare className="h-3.5 w-3.5" /> Chat
                </span>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="shadow-button hover:-translate-y-0.5 transition-all bg-[hsl(var(--secondary))] text-white dark:bg-[hsl(var(--primary))]"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  Kostenloses Strategiegespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM → LÖSUNG */}
        <section className="py-14 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Kommt dir das bekannt vor?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Telefon klingelt permanent, Postfach explodiert, Standardfragen
                fressen Fokus. Jede Minute Admin ist keine Minute Umsatz. Unsere
                **Kommunikations-KI** wird dein digitaler Mitarbeiter – der
                schnellste Weg zu messbarer Automatisierung.
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>
                  Erster wirksamer Schritt – Basis für deine KI-Roadmap.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-10 md:mb-14 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Unsere Kommunikations-KI in der Praxis
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Vorher/Nachher – klar visualisiert. Ergebnisse in Wochen, nicht
                in Jahren.
              </p>
            </div>

            <div className="grid gap-8 lg:gap-10">
              {CASES.map(
                ({ icon: Icon, title, intro, before, after, result }) => (
                  <Card
                    key={title}
                    className="relative overflow-hidden rounded-2xl border border-border bg-card/95 p-6 md:p-8 shadow-soft supports-[backdrop-filter]:bg-card/90 backdrop-blur transition-all duration-300 hover:shadow-card"
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
                        <Icon className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-muted-foreground">
                          {intro}
                        </p>
                      </div>
                    </div>

                    {/* Content: Vorher / Nachher */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground/80">
                          Vorher – das tägliche Chaos
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {before.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-destructive" />
                              <span className="text-muted-foreground">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground/80">
                          Nachher – mit PAXUP KI
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {after.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Ergebnis & CTA */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="rounded-xl border border-[hsl(var(--secondary)/0.35)] bg-[hsl(var(--secondary)/0.08)] px-3 py-2 text-sm text-[hsl(var(--secondary))] dark:border-[hsl(var(--primary)/0.35)] dark:bg-[hsl(var(--primary)/0.12)] dark:text-[hsl(var(--primary))]">
                        <strong>Konkrete Ergebnisse:</strong> {result}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-center"
                        onClick={() => window.open(CAL_URL, "_blank")}
                      >
                        Ähnliches Projekt starten
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        {/* SELF-CHECK */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Die perfekte Lösung, wenn …
              </h2>
            </div>

            <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
              {[
                "… bei euch ständig das Telefon die Arbeit unterbricht.",
                "… wertvolle Anfragen verloren gehen, weil niemand durchkommt.",
                "… Top-Mitarbeiter über Admin-Routine klagen.",
                "… ihr wachsen wollt, ohne sofort mehr Büro-Personal einzustellen.",
                "… ihr endlich den ersten wirksamen Schritt in Richtung KI gehen wollt.",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-card/60"
                >
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    <span>{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-primary text-white">
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Dein Unternehmen kann das auch. Lass uns sprechen.
              </h2>
              <p className="mt-3 text-lg opacity-90">
                Im kostenlosen Strategiegespräch analysieren wir dein
                Anfragevolumen, identifizieren Zeitfresser und zeigen das
                konkrete Potenzial deiner Kommunikations-KI.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  Kostenloses Strategiegespräch buchen
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/services")}
                >
                  Mehr über unsere KI-Beratung
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
