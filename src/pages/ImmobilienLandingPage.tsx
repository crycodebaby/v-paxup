// src/pages/ImmobilienLandingPage.tsx
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Building2,
  Zap,
  Target,
  Award,
  Star,
  MessageSquare,
} from "lucide-react";

/* =========================================================
   Konstanten & Typen
   ========================================================= */
const CAL_URL = "https://cal.com/paxup";

type Answer = { text: string; points: number };
type Question = { question: string; answers: Answer[] };

/* =========================================================
   Daten (psychologisch sauber, Du-Ansprache)
   ========================================================= */
const METRICS = [
  { icon: Clock, label: "Täglich 3+ Std. gespart" },
  { icon: Users, label: "24/7 erreichbar – ohne Mehrkosten" },
  { icon: TrendingUp, label: "Leerstand messbar reduziert" },
] as const;

const PROBLEMS = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Bewerberflut, aber wenig Qualität?",
    description:
      "KI filtert vor, automatisiert Absagen, sammelt fehlende Infos – freundlich, strukturiert, durchgängig.",
    result: "Qualifiziertere Anfragen, weniger Back-and-Forth.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Schadensmeldungen chaotisch?",
    description:
      "Geführte Meldung inkl. Foto/Video-Upload, automatische Zuordnung zum Objekt, Ticket & Handwerker – ohne Medienbruch.",
    result: "95% vollständige Meldungen, schnellere Reaktion.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Vermietung zieht sich?",
    description:
      "Standardprozesse werden automatisiert (Terminierung, Unterlagen, Nachfassen). Du gewinnst Tempo – und Umsatz.",
    result: "Kürzere Leerstandszeiten, planbarer Cashflow.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Standardfragen fressen Zeit?",
    description:
      "Telefon-, Mail- und Chat-Bot beantworten wiederkehrende Fragen sofort. Wichtiges wird an Dich eskaliert.",
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
      "Wie viel Zeit verbringst Du täglich mit Routineanfragen von Mietern?",
    answers: [
      { text: "Mehr als 2 Stunden", points: 0 },
      { text: "1–2 Stunden", points: 1 },
      { text: "30–60 Minuten", points: 2 },
      { text: "Weniger als 30 Minuten", points: 3 },
    ],
  },
  {
    question: "Wie lange dauert durchschnittlich Dein Vermietungsprozess?",
    answers: [
      { text: "Mehr als 8 Wochen", points: 0 },
      { text: "4–8 Wochen", points: 1 },
      { text: "2–4 Wochen", points: 2 },
      { text: "Weniger als 2 Wochen", points: 3 },
    ],
  },
  {
    question: "Wie handhabst Du aktuell Schadensmeldungen?",
    answers: [
      { text: "Telefon und E-Mail", points: 0 },
      { text: "Einfache Online-Formulare", points: 1 },
      { text: "Digitale Plattform mit Foto-Upload", points: 2 },
      { text: "Vollautomatisierte Lösung mit KI", points: 3 },
    ],
  },
  {
    question: "Wie organisierst Du Besichtigungstermine?",
    answers: [
      { text: "Telefonisch oder per E-Mail", points: 0 },
      { text: "Online-Kalender nur zur Anzeige", points: 1 },
      { text: "Selbstbuchung durch Interessenten", points: 2 },
      { text: "KI-gestützte Terminplanung", points: 3 },
    ],
  },
  {
    question: "Setzt Du bereits KI oder Automatisierung produktiv ein?",
    answers: [
      { text: "Noch gar nicht", points: 0 },
      { text: "Erste Überlegungen", points: 1 },
      { text: "Pilotprojekte laufen", points: 2 },
      { text: "Ja – produktiv im Einsatz", points: 3 },
    ],
  },
];

/* =========================================================
   Hilfsfunktionen: Scoring
   ========================================================= */
function getCheckResult(score: number) {
  if (score <= 5)
    return {
      level: "Großes Potenzial – sofort anpacken",
      description:
        "Viel manuell, viele Unterbrechungen. Du hast die Chance, sehr schnell spürbar Zeit & Nerven zu sparen.",
      tone: {
        box: "bg-destructive/10 border-destructive/30",
        heading: "text-destructive",
      },
    };
  if (score <= 10)
    return {
      level: "Guter Start – jetzt skalieren",
      description:
        "Die Basis stimmt. Mit KI-Bots & Integrationen hebst Du die Effizienz auf das nächste Level.",
      tone: {
        box: "bg-amber-500/10 border-amber-500/30",
        heading: "text-amber-600 dark:text-amber-400",
      },
    };
  return {
    level: "Sehr gut – Feinschliff & ROI",
    description:
      "Du bist schon weit. Feintuning & Reporting machen Erfolge sichtbar – und multiplizieren den ROI.",
    tone: {
      box: "bg-success/10 border-success/30",
      heading: "text-success",
    },
  };
}

/* =========================================================
   Seite
   ========================================================= */
export default function ImmobilienLandingPage() {
  // Alexandria sicher aktivieren:
  // (root-wrapper nutzt font-sans → var(--font-sans) aus index.css)
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(CHECK_QUESTIONS.length).fill(null)
  );

  const score = useMemo(
    () =>
      answers.reduce((sum, idx, q) => {
        if (idx === null) return sum;
        return sum + CHECK_QUESTIONS[q].answers[idx].points;
      }, 0),
    [answers]
  );

  const allAnswered = useMemo(
    () => answers.every((a) => a !== null),
    [answers]
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-subtle py-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-90"
          style={{
            background:
              "radial-gradient(36rem 20rem at 12% 8%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(30rem 20rem at 88% -6%, hsl(var(--secondary)/0.12), transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                🚀 KI für die Immobilienverwaltung
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Spare{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  täglich 3+ Stunden
                </span>{" "}
                durch intelligente Automatisierung
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Schluss mit Bewerberflut, Termin-Ping-Pong und Standardfragen.
                Unsere Kommunikations-KI übernimmt Routine – Du gewinnst Ruhe
                und planbares Wachstum.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="cta"
                  size="lg"
                  className="text-lg px-6 py-6 shadow-button"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kostenloses Gespräch (30 Min)
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg">
                  <a href="#digital-check">
                    <Target className="w-5 h-5 mr-2" />
                    Digitalisierungs-Check starten
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
                      <Icon className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-3xl opacity-20" />
                <img
                  src="/lovable-uploads/b6154235-92ef-4609-8331-93cbfe6ae4dd.png"
                  alt="Automatisierte Kommunikation für Hausverwaltungen"
                  className="relative w-full h-auto rounded-2xl border border-border/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-muted-foreground mb-6">
              Vertraut von zukunftsorientierten Hausverwaltungen
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 items-center opacity-70">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-12 rounded-lg bg-muted/60 flex items-center justify-center"
                >
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEME → LÖSUNGEN */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">
                5 Zeitfresser, die Du{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  heute
                </span>{" "}
                lösen kannst
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Wir automatisieren die Routinen – Dein Team fokussiert sich aufs
                Wesentliche.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((p) => (
                <Card
                  key={p.title}
                  className="group border-border/60 hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-7">
                    <div className="mb-5">{p.icon}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-4 rounded-lg border border-success/30 bg-success/10 p-3">
                      <p className="text-sm text-success-foreground">
                        ✅ <strong>Ergebnis:</strong> {p.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* CTA Tile */}
              <Card className="md:col-span-2 lg:col-span-1 bg-gradient-primary text-white border-0">
                <CardContent className="p-8 h-full grid place-content-center text-center">
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">
                    Bereit für den nächsten Schritt?
                  </h3>
                  <p className="mt-2 opacity-90">
                    Wir identifizieren Deine größten Zeitfresser – und lösen
                    sie.
                  </p>
                  <Button
                    onClick={() => window.open(CAL_URL, "_blank")}
                    variant="secondary"
                    size="lg"
                    className="mt-6 bg-white text-primary hover:bg-white/90"
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

      {/* DIGITALISIERUNGS-CHECK (Interaktiv) */}
      <section id="digital-check" className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                🎯 Digitalisierungs-Check: Wo stehst Du?
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Beantworte 5 Fragen – und erhalte Deine Einschätzung inkl.
                nächster Schritte.
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  {CHECK_QUESTIONS.map((q, qIndex) => (
                    <div key={q.question} className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {qIndex + 1}. {q.question}
                      </h3>
                      <div className="grid gap-3">
                        {q.answers.map((a, aIndex) => {
                          const active = answers[qIndex] === aIndex;
                          return (
                            <Button
                              key={a.text}
                              type="button"
                              variant={active ? "default" : "outline"}
                              className="h-auto p-4 justify-start text-left"
                              onClick={() => {
                                setAnswers((prev) => {
                                  const next = [...prev];
                                  next[qIndex] = aIndex;
                                  return next;
                                });
                              }}
                            >
                              {a.text}
                            </Button>
                          );
                        })}
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
                                  "Kostenlose 30-Min-Analyse Deiner Prozesse",
                                  "3 sofort umsetzbare Maßnahmen für mehr Effizienz",
                                  "Roadmap & Fahrplan bis zum Go-Live (60–90 Tage)",
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
                                variant="cta"
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

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Das sagen unsere Kunden
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Über 500 Hausverwaltungen vertrauen auf PAXUP
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Michael Schmidt",
                  company: "Schmidt Immobilien GmbH",
                  text: "PAXUP spart uns jeden Tag ~3 Stunden in der Mieterkommunikation. Endlich Zeit für die wichtigen Themen.",
                  rating: 5,
                },
                {
                  name: "Andrea Müller",
                  company: "Hausverwaltung Müller",
                  text: "Vermietungsprozesse automatisiert, Leerstand um 40% reduziert. Der ROI kam schneller als erwartet.",
                  rating: 5,
                },
              ].map((t) => (
                <Card
                  key={t.name}
                  className="border-border/60 hover:shadow-card transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="italic text-lg text-muted-foreground mb-6 leading-relaxed">
                      “{t.text}”
                    </blockquote>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT / FINAL CTA – ohne Horizontalscrolling */}
      <section className="py-16 md:py-20 bg-gradient-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Starte jetzt Deine Transformation
            </h2>
            <p className="mt-2 text-xl opacity-90">
              Buche Dein kostenloses 30-Minuten-Gespräch und erhalte sofort
              umsetzbare Schritte.
            </p>

            <Card className="mt-8 border-0 bg-white text-foreground">
              <CardContent className="p-8 lg:p-12">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-semibold">
                      Warum das Gespräch?
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {[
                        "Wir bewerten Dein Anfrage- & Prozessvolumen",
                        "Wir identifizieren Zeitfresser mit Sofort-ROI",
                        "Du bekommst einen klaren 60–90-Tage-Plan",
                      ].map((line) => (
                        <li key={line} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 text-left">
                    <label className="block text-sm font-medium">
                      Dein Name
                    </label>
                    <Input placeholder="Max Mustermann" className="h-11" />
                    <label className="block text-sm font-medium">E-Mail</label>
                    <Input
                      type="email"
                      placeholder="max@deine-hausverwaltung.de"
                      className="h-11"
                    />
                    <Button
                      variant="cta"
                      size="lg"
                      className="w-full"
                      onClick={() => window.open(CAL_URL, "_blank")}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Kostenloses Erstgespräch vereinbaren
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      Keine Verpflichtung. Wir melden uns innerhalb von 24h.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(CAL_URL, "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Direkt Termin buchen
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() =>
                  (window.location.href = "mailto:hi@paxup.support")
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                E-Mail schreiben
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
