// src/pages/ImmobilienLandingPage.tsx
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  Building2,
  Zap,
  Target,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";
import immobilienHeroImage from "@/assets/immobilien-digitalisierung-hero.jpg";

const CAL_URL = "https://cal.com/paxup";
type Answer = { text: string; points: number };
type Question = { question: string; answers: Answer[] };

const METRICS = [
  { icon: Clock, label: "Täglich 3+ Std. gespart" },
  { icon: Users, label: "24/7 erreichbar ohne Mehrkosten" },
  { icon: TrendingUp, label: "Leerstand messbar reduziert" },
] as const;

const PROBLEMS = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Bewerberflut, aber wenig Qualität?",
    description:
      "KI filtert vor, automatisiert Absagen, sammelt fehlende Infos: freundlich, strukturiert, durchgängig.",
    result: "Qualifiziertere Anfragen, weniger Back-and-Forth.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Schadensmeldungen chaotisch?",
    description:
      "Geführte Meldung inkl. Foto/Video-Upload, automatische Zuordnung zum Objekt, Ticket & Handwerker: ohne Medienbruch.",
    result: "95% vollständige Meldungen, schnellere Reaktion.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Vermietung zieht sich?",
    description:
      "Standardprozesse werden automatisiert (Terminierung, Unterlagen, Nachfassen). Du gewinnst Tempo: und Umsatz.",
    result: "Kürzere Leerstandszeiten, planbarer Cashflow.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Standardfragen fressen Zeit?",
    description:
      "Telefon-, Mail- und Chat-Bot beantworten wiederkehrende Fragen sofort. Wichtiges wird an dich eskaliert.",
    result: "Weniger Unterbrechungen, mehr Fokus für Wertschöpfung.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Terminplanung zäh?",
    description:
      "Self-Service-Buchung, automatische Erinnerungen & saubere Kalender-Syncs. Kein Ping-Pong mehr.",
    result: "Minuten statt Stunden für Koordination.",
  },
] as const;

const CHECK_QUESTIONS: Readonly<Question[]> = [
  {
    question:
      "Wie viel Zeit verbringst du täglich mit Routineanfragen von Mietern?",
    answers: [
      { text: "Mehr als 2 Stunden", points: 0 },
      { text: "1-2 Stunden", points: 1 },
      { text: "30-60 Minuten", points: 2 },
      { text: "Weniger als 30 Minuten", points: 3 },
    ],
  },
  {
    question: "Wie lange dauert durchschnittlich dein Vermietungsprozess?",
    answers: [
      { text: "Mehr als 8 Wochen", points: 0 },
      { text: "4-8 Wochen", points: 1 },
      { text: "2-4 Wochen", points: 2 },
      { text: "Weniger als 2 Wochen", points: 3 },
    ],
  },
  {
    question: "Wie handhabst du aktuell Schadensmeldungen?",
    answers: [
      { text: "Telefon und E-Mail", points: 0 },
      { text: "Einfache Online-Formulare", points: 1 },
      { text: "Digitale Plattform mit Foto-Upload", points: 2 },
      { text: "Vollautomatisierte Lösung mit KI", points: 3 },
    ],
  },
  {
    question: "Wie organisierst du Besichtigungstermine?",
    answers: [
      { text: "Telefonisch oder per E-Mail", points: 0 },
      { text: "Online-Kalender nur zur Anzeige", points: 1 },
      { text: "Selbstbuchung durch Interessenten", points: 2 },
      { text: "KI-gestützte Terminplanung", points: 3 },
    ],
  },
  {
    question: "Setzt du bereits KI oder Automatisierung produktiv ein?",
    answers: [
      { text: "Noch gar nicht", points: 0 },
      { text: "Erste Überlegungen", points: 1 },
      { text: "Pilotprojekte laufen", points: 2 },
      { text: "Ja – produktiv im Einsatz", points: 3 },
    ],
  },
];

function getCheckResult(score: number) {
  if (score <= 5)
    return {
      level: "Großes Potenzial; sofort anpacken!",
      description:
        "Viel manuell, viele Unterbrechungen. Du hast die Chance, sehr schnell spürbar Zeit & Nerven zu sparen.",
      tone: {
        box: "bg-destructive/10 border-destructive/30",
        heading: "text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]",
      },
    };
  if (score <= 10)
    return {
      level: "Guter Start, skaliere jetzt!",
      description:
        "Die Basis stimmt. Mit KI-Bots & Integrationen hebst du die Effizienz auf das nächste Level.",
      tone: {
        box: "bg-secondary/10 border-secondary/30",
        heading: "text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]",
      },
    };
  return {
    level: "Sehr gut. Feinschliff & der Mehrwert wird kommen",
    description:
      "Du bist schon weit. Feintuning & Reporting machen Erfolge sichtbar und multiplizieren den Mehrwert.",
    tone: {
      box: "bg-success/10 border-success/30",
      heading: "text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]",
    },
  };
}

export default function ImmobilienLandingPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(CHECK_QUESTIONS.length).fill(null)
  );
  const score = useMemo(
    () =>
      answers.reduce(
        (sum, idx, q) =>
          idx === null ? sum : sum + CHECK_QUESTIONS[q].answers[idx].points,
        0
      ),
    [answers]
  );
  const allAnswered = useMemo(
    () => answers.every((a) => a !== null),
    [answers]
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Header />

      {/* HERO – CI-Verläufe (secondary↔accent + conic primary), fluid type */}
      <section className="relative overflow-hidden py-fluid-10 lg:py-fluid-16">
        {/* Hintergrundlayer: weich & CI-treu (Light/Dark) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(40rem 24rem at 12% 0%, hsl(var(--secondary)/0.12), transparent 60%),
              radial-gradient(38rem 22rem at 88% -12%, hsl(var(--accent)/0.10), transparent 60%),
              conic-gradient(from 160deg at 50% -20%, hsl(var(--primary)/0.06), hsl(var(--primary)/0.0) 45%)
            `,
          }}
        />
        {/* zarter Overlay zur Lesbarkeit */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background)/0.85) 0%, hsl(var(--background)/0.60) 30%, hsl(var(--background)/0.00) 70%)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {/* Badge mit Gradient-Text */}
              <div className="inline-flex mb-6 rounded-full px-3 py-1 ring-1 ring-border/60 bg-background/70 backdrop-blur">
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  🚀 KI für die Immobilienverwaltung
                </span>
              </div>

              <h1 className="text-fluid-h1 font-bold leading-tight text-balance">
                Spare{" "}
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  täglich 3+ Stunden
                </span>{" "}
                durch intelligente Automatisierung
              </h1>

              <p className="mt-4 text-fluid-body text-muted-foreground text-balance">
                Schluss mit Bewerberflut, Termin-Ping-Pong und Standardfragen.
                Unsere Kommunikations-KI übernimmt die Routine und du gewinnst
                Ruhe und planbares Wachstum.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  className="w-full sm:w-auto text-lg px-6 py-6 shadow-button bg-secondary text-secondary-foreground hover:bg-secondary/90 dark:bg-primary dark:hover:bg-primary/90"
                  size="lg"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  <Phone className="w-5 h-5 mr-2" /> Kostenloses Gespräch (30
                  Min)
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto text-lg"
                >
                  <a href="#digital-check">
                    <Target className="w-5 h-5 mr-2" /> Digitalisierungs-Check
                    starten
                  </a>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm text-muted-foreground">
                {METRICS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-card/80 p-4 text-center"
                  >
                    <div className="flex items-center justify-center gap-2 font-semibold">
                      <Icon className="h-5 w-5 text-secondary dark:text-primary" />
                      <span className="text-balance">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero-Bild mit sanftem CI-Glow */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-3xl"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(18rem 12rem at 70% 20%, hsl(var(--primary)/0.25), transparent 60%)",
                  }}
                />
                <img
                  src={immobilienHeroImage}
                  alt="Automatisierte Kommunikation für Hausverwaltungen"
                  className="relative w-full rounded-2xl border border-border/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Vertraut von zukunftsorientierten Hausverwaltungen
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70">
              {[
                "Hausverwaltung Müller",
                "ImmoGlück GmbH",
                "City Real Estate",
                "Wohnen & Leben",
                "Mein Grundbesitz",
              ].map((name) => (
                <span key={name} className="font-medium text-muted-foreground">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEME → LÖSUNGEN */}
      <section className="py-fluid-10 md:py-fluid-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-fluid-h2 font-bold text-balance">
                5 Zeitfresser, die du{" "}
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  heute
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))",
                      opacity: 0.25,
                    }}
                  />
                </span>{" "}
                lösen kannst
              </h2>
              <p className="mt-3 text-lg text-muted-foreground text-balance">
                Wir automatisieren die Routinen und dein Team fokussiert sich
                aufs Wesentliche.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((p) => (
                <Card
                  key={p.title}
                  className="group border-border/60 hover:border-primary/30 transition-colors flex flex-col"
                >
                  <CardContent className="p-7 flex flex-col flex-grow">
                    <div className="mb-5">{p.icon}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground flex-grow">
                      {p.description}
                    </p>
                    <div className="mt-4 rounded-lg border border-success/30 bg-success/10 p-3">
                      <p className="text-sm text-success-foreground">
                        <span className="font-bold">Ergebnis:</span> {p.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* CTA-Card mit edlem Doppel-Gradient (Light/Dark betont CI) */}
              <Card
                className="md:col-span-2 lg:col-span-1 border-0 text-primary-foreground relative overflow-hidden"
                style={{
                  background: `
                    linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%),
                    radial-gradient(30rem 18rem at 70% -10%, hsl(var(--secondary)/0.35), transparent 60%)
                  `,
                }}
              >
                <CardContent className="relative p-8 h-full grid place-content-center text-center">
                  {/* softer Lichtkegel für Tiefe */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(16rem 10rem at 50% 0%, hsl(0 0% 100%/0.10), transparent 60%)",
                      mixBlendMode: "screen",
                    }}
                  />
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-95" />
                  <h3 className="text-xl font-bold">
                    Bereit für den nächsten Schritt?
                  </h3>
                  <p className="mt-2 opacity-90">
                    Wir identifizieren deine größten Zeitfresser und lösen sie.
                  </p>
                  <Button
                    onClick={() => window.open(CAL_URL, "_blank")}
                    size="lg"
                    className="mt-6 w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt Termin buchen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITALISIERUNGS-CHECK */}
      <section
        id="digital-check"
        className="py-fluid-10 md:py-fluid-16 overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted)) 90%)",
        }}
      >
        {/* dezente CI-Farbwolke im Hintergrund */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(34rem 18rem at 12% 0%, hsl(var(--secondary)/0.10), transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-fluid-h2 font-bold">
                🎯 Digitalisierungs-Check: Wo stehst du?
              </h2>
              <p className="mt-3 text-lg text-muted-foreground text-balance">
                Beantworte 5 Fragen und erhalte deine Einschätzung inkl.
                nächster Schritte.
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="space-y-8">
                  {CHECK_QUESTIONS.map((q, qIndex) => (
                    <div key={q.question} className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {qIndex + 1}. {q.question}
                      </h3>
                      <div className="grid gap-3">
                        {q.answers.map((a, aIndex) => (
                          <Button
                            key={a.text}
                            type="button"
                            variant={
                              answers[qIndex] === aIndex ? "default" : "outline"
                            }
                            className="h-auto p-4 justify-start text-left w-full"
                            onClick={() =>
                              setAnswers((prev) => {
                                const next = [...prev];
                                next[qIndex] = aIndex;
                                return next;
                              })
                            }
                          >
                            {a.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {allAnswered && (
                    <div className="mt-6 animate-fade-in">
                      <Separator className="mb-6" />
                      {(() => {
                        const res = getCheckResult(score);
                        return (
                          <div
                            className={`rounded-lg border p-6 ${res.tone.box}`}
                          >
                            <h4
                              className={`text-xl font-bold mb-2 ${res.tone.heading}`}
                            >
                              Dein Ergebnis: {res.level}
                            </h4>
                            <p className="text-muted-foreground mb-6">
                              {res.description}
                            </p>
                            <div className="rounded-lg border border-border p-6 bg-background">
                              <h5 className="font-semibold mb-3">
                                💡 Deine nächsten Schritte mit PAXUP:
                              </h5>
                              <ul className="space-y-2 text-muted-foreground mb-6">
                                {[
                                  "Kostenlose 30-Min-Analyse deiner Prozesse",
                                  "3 sofort umsetzbare Maßnahmen für mehr Effizienz",
                                  "Fahrplan bis zur Inbetriebnahme (60 - 90 Tage)",
                                ].map((line) => (
                                  <li
                                    key={line}
                                    className="flex items-center gap-2"
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-success" />
                                    <span>{line}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="default"
                                size="lg"
                                className="w-full"
                                onClick={() => window.open(CAL_URL, "_blank")}
                              >
                                <Calendar className="w-5 h-5 mr-2" />
                                Kostenloses Erstgespräch vereinbaren
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-fluid-10 md:py-fluid-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-fluid-h2 font-bold text-balance">
                Starte jetzt deine Transformation
              </h2>
              <p className="mt-4 text-fluid-body opacity-90 text-balance">
                In 30 Minuten klären wir deinen Status, dein Potenzial und die
                ersten konkreten Schritte: klar, ehrlich und direkt umsetzbar.
              </p>
              <div className="mt-8 pt-8 border-t border-accent-foreground/20 space-y-4">
                {[
                  "Analyse deiner größten Zeitfresser",
                  "3 Quick Wins mit sofortigem ROI",
                  "90-Tage-Blueprint bis zum Go-Live",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0 text-secondary dark:text-primary" />
                    <span className="text-lg">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 bg-card text-card-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-1">
                  Fast-Track zum Gespräch
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Wir rufen dich für die Terminfindung zurück.
                </p>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(CAL_URL, "_blank");
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">
                      Dein Name
                    </label>
                    <Input
                      placeholder="Max Mustermann"
                      className="h-11"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">
                      E-Mail oder Telefon
                    </label>
                    <Input
                      placeholder="max@firma.de"
                      className="h-11"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 dark:bg-primary dark:hover:bg-primary/90"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Rückruf für Termin anfordern
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Keine Verpflichtung. Wir melden uns innerhalb von 24h.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
