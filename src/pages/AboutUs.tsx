// src/pages/AboutUs.tsx
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Clock,
  CheckCircle,
  Brain,
  Shield,
  Zap,
  LineChart,
  Sparkles,
  ChevronRight,
  HeartHandshake,
  MessageSquare,
} from "lucide-react";
import teamAbout from "@/assets/team-about.jpg";

/* ===========================================================
   Werte / Nutzen
   =========================================================== */

const promises = [
  "Klartext statt Hype: Wir lösen Dein konkretes Problem zuerst.",
  "Messbare Ziele vor Start: Zeitersparnis, Kosten, Zufriedenheit.",
  "Go-Live in 60–90 Tagen – nicht „irgendwann“.",
  "Datenschutz von Anfang an: DSGVO & Hosting in Deutschland.",
  "Du behältst die Kontrolle: verständliche Tools, dokumentierte Prozesse.",
] as const;

const whyUs = [
  {
    icon: MessageSquare,
    title: "Wir kennen Dein Chaos",
    description:
      "Volles Postfach, Dauertelefon, Standardfragen – genau dort haben wir 2020 angefangen. Kleine Schritte, großer Effekt.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatische KI",
    description:
      "KI, die heute wirkt: Telefon-, E-Mail- und Chat-Automation. Weniger Unterbrechungen, mehr Fokus im Team.",
  },
  {
    icon: HeartHandshake,
    title: "Partner, kein PowerPoint",
    description:
      "Wir begleiten Dich vom Engpass bis zum Go-Live. Transparent, verbindlich, nah dran an Deinem Alltag.",
  },
] as const;

const steps = [
  {
    icon: Brain,
    title: "1) Potenzialanalyse",
    text: "Wir schauen uns Prozesse, Tools und Daten an – und priorisieren die Hebel, die sofort wirken.",
  },
  {
    icon: Target,
    title: "2) Blueprint & Roadmap",
    text: "Zielbild, Architektur, 90-Tage-Plan. Förderfähigkeit & DSGVO inklusive.",
  },
  {
    icon: Zap,
    title: "3) Implementierung",
    text: "Bots & Integrationen gehen live. Schulung, Monitoring, KPIs – bis die Ziele stehen.",
  },
] as const;

/* ===========================================================
   Interaktive Timeline (bleibt erhalten)
   =========================================================== */

type Milestone = {
  year: string;
  title: string;
  story: string;
  impact: string[];
  tech: string[];
};

const milestones: Readonly<Milestone[]> = [
  {
    year: "2020",
    title: "Gründung – Kommunikation entlasten",
    story:
      "Aus einer kleinen Idee wird PAXUP: Kommunikations-KI, die Teams entlastet und Arbeit wieder fließen lässt.",
    impact: ["Erste Voice-Bots im Handwerk", "Mail-Triage prototypisch"],
    tech: ["Voice-Bots", "E-Mail-Routing"],
  },
  {
    year: "2021",
    title: "RAG & Integrationen",
    story:
      "Dokumente, Tickets & E-Mails verknüpfen – weniger Medienbrüche, mehr Tempo, bessere Datenbasis.",
    impact: ["Durchlaufzeiten −35%", "Sauberere Daten, weniger Nachfragen"],
    tech: ["RAG", "API-Orchestrierung", "Webhooks"],
  },
  {
    year: "2022",
    title: "KI in die Fläche",
    story:
      "Telefon, Mail, Chat – ein System. Standardprozesse laufen automatisch, Teams arbeiten fokussiert.",
    impact: ["80% weniger Routineanrufe", "24/7 erreichbar"],
    tech: ["Omnichannel-Bots", "Kalender-Sync", "Call-to-CRM"],
  },
  {
    year: "2023",
    title: "Agenten + KPIs",
    story:
      "Agenten übernehmen Folgeaktionen (Termin, Rückruf, Ticket). Erfolg wird im Dashboard sichtbar.",
    impact: ["Planbarer Vertrieb", "SLA-Einhaltung im Service"],
    tech: ["Agent Orchestration", "KPI-Dashboards", "Function Calls"],
  },
  {
    year: "2024",
    title: "Realtime & Qualität",
    story:
      "Realtime-Voice & bessere Extraktion: Antworten schneller, Qualität höher, Compliance im Blick.",
    impact: ["95% vollständige Meldungen", "Zufriedenheit +30%"],
    tech: ["Realtime-Voice", "Dokumenten-Extraktion", "PII-Guards"],
  },
  {
    year: "2025",
    title: "Blueprints nach Branche",
    story:
      "Vor-konfigurierte Blueprints bringen Dich noch schneller live – mit förderfähiger Roadmap.",
    impact: ["Go-Live ≤ 60–90 Tage", "Schneller ROI"],
    tech: ["Branchen-Blueprints", "Monitoring + Auto-Tuning"],
  },
];

function Timeline() {
  const [index, setIndex] = useState(milestones.length - 1);
  const active = useMemo(() => milestones[index], [index]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
      {/* zarter Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(36rem 20rem at 12% 10%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(24rem 16rem at 92% 0%, hsl(var(--secondary)/0.08), transparent 60%)",
        }}
      />
      {/* Rail + Marker */}
      <div className="mb-6">
        <div className="relative mx-auto max-w-4xl">
          <div className="h-1 w-full rounded-full bg-white/10 dark:bg-white/15" />
          <div className="relative -mt-2 flex justify-between">
            {milestones.map((m, i) => {
              const activeMarker = i === index;
              return (
                <button
                  key={m.year}
                  aria-label={`Jahr ${m.year}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "group grid place-content-center rounded-full transition-transform",
                    activeMarker ? "scale-110" : "scale-100",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-3 w-3 rounded-full ring-2 transition-all",
                      activeMarker
                        ? "bg-[hsl(var(--success))] ring-[hsl(var(--success)/0.45)]"
                        : "bg-white/40 ring-white/30 dark:bg-white/30 dark:ring-white/20",
                    ].join(" ")}
                  />
                  <span className="mt-1 text-[10px] font-medium text-muted-foreground group-hover:text-foreground">
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Range (mobile-freundlich + zugänglich) */}
          <input
            type="range"
            min={0}
            max={milestones.length - 1}
            step={1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="mt-4 block w-full cursor-pointer accent-[hsl(var(--success))]"
            aria-label="Zeitleiste wählen"
          />
        </div>
      </div>

      {/* Inhalt */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-border/60 bg-background/60 p-5 md:p-6 backdrop-blur">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-[hsl(var(--secondary)/0.12)] p-2 ring-1 ring-[hsl(var(--secondary)/0.35)]">
              <Sparkles className="h-5 w-5 text-[hsl(var(--secondary))]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{active.year}</Badge>
                <h3 className="text-lg md:text-xl font-bold">{active.title}</h3>
              </div>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                {active.story}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            {active.impact.map((line) => (
              <div key={line} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-success" />
                <span className="text-sm">{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-background/60 p-5 md:p-6 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="outline">Tech, die’s möglich macht</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {active.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[hsl(var(--success)/0.35)] bg-[hsl(var(--success)/0.10)] px-3 py-1 text-xs font-medium text-success"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Brain className="h-4 w-4" /> KI sinnvoll, nicht fancy
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" /> Go-Lives in 60–90 Tagen
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4" /> KPIs & ROI im Dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===========================================================
   Seite
   =========================================================== */

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* HERO – leise, glaubwürdig, mit kleinem CTA */}
        <section className="relative overflow-hidden bg-gradient-subtle">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(32rem 18rem at 15% 12%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(38rem 22rem at 92% -8%, hsl(var(--secondary)/0.12), transparent 60%)",
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20 relative">
            <div className="mx-auto max-w-5xl text-center">
              <Badge variant="outline" className="mb-4">
                Über PAXUP
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Für den Mittelstand.
                <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Seit 2020 bauen wir KI, die Dein Team wirklich entlastet.
                </span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Wir kommen nicht aus einem Konzern. Wir kommen aus dem Alltag:
                klingelnde Telefone, volle Postfächer, wiederkehrende Fragen.
                Heute automatisieren wir genau das – damit bei Dir wieder Ruhe
                einkehrt und Wachstum planbar wird.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Button
                  size="lg"
                  className="text-lg px-7 py-6 shadow-button"
                  onClick={() => window.open("https://cal.com/paxup", "_blank")}
                >
                  Kostenlos sprechen
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WARUM PAXUP – psychologisch sauber formuliert */}
        <section className="py-18 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Warum es uns gibt
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Kommunikation frisst Zeit. Wir geben sie Dir zurück – mit
                verständlicher KI, die heute Nutzen stiftet.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {whyUs.map((w) => (
                <Card
                  key={w.title}
                  className="border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-elegant"
                >
                  <CardContent className="p-7">
                    <div className="mb-4 inline-flex rounded-xl bg-success/10 p-3 ring-1 ring-success/30">
                      <w.icon className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold">{w.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {w.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UNSER VERSPRECHEN – Sicherheit & Planbarkeit */}
        <section className="py-18 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Badge variant="outline" className="mb-4">
                Unser Versprechen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ruhe im Kopf. Ergebnisse auf dem Konto.
              </h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-3">
              {promises.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-success" />
                  <span className="text-[1.05rem]">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERAKTIVE STORY / TIMELINE */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Badge variant="outline" className="mb-4">
                Unsere Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Von 2020 bis heute – jedes Jahr ein Sprung nach vorn
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                KI-Durchbrüche treffen Mittelstand – wir machen sie nutzbar.
              </p>
            </div>

            <Timeline />
          </div>
        </section>

        {/* WIE WIR ARBEITEN – kurz & klar */}
        <section className="py-18 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Badge variant="outline" className="mb-4">
                Wie wir arbeiten
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Von „Chaos“ zu „läuft“ – in 3 Schritten
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {steps.map((s) => (
                <Card
                  key={s.title}
                  className="border-border/60 bg-background/60 p-7 shadow-soft hover:shadow-card transition-all"
                >
                  <div className="mb-4">
                    <div className="inline-flex rounded-xl bg-success/10 p-3 ring-1 ring-success/30">
                      <s.icon className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="cta"
                size="lg"
                className="px-8 py-6 text-lg shadow-button"
                onClick={() => window.open("https://cal.com/paxup", "_blank")}
              >
                Starte mit Deiner Potenzialanalyse
              </Button>
            </div>
          </div>
        </section>

        {/* SICHERHEIT & VERANTWORTUNG */}
        <section className="py-18 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <Badge variant="outline" className="mb-4">
                  Sicherheit & Verantwortung
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  DSGVO first. Transparenz immer. Kontrolle bei Dir.
                </h3>
                <div className="mt-4 grid gap-2">
                  {[
                    "Hosting & Verarbeitung in Deutschland",
                    "Datensparsamkeit & klare Rollen",
                    "Auditierbare Workflows & Dokumentation",
                    "Kein Black-Box-Gefühl: Du weißt, was wann passiert",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-5 w-5 text-success" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={teamAbout}
                  alt="PAXUP Team"
                  className="w-full rounded-2xl shadow-elegant"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/15 to-transparent" />
                <div className="mt-4 text-sm text-muted-foreground">
                  Kleines Team, große Wirkung: nahbar, schnell, präzise.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KURZER, RUHIGER CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Wenn Du weniger Unterbrechungen willst – lass uns anfangen.
              </h3>
              <p className="mt-3 text-lg text-muted-foreground">
                30 Minuten, kostenfrei. Wir schauen auf Deinen Engpass und
                skizzieren den ersten Schritt.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button
                  variant="default"
                  size="lg"
                  className="shadow-button"
                  onClick={() => window.open("https://cal.com/paxup", "_blank")}
                >
                  Kostenlos sprechen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "/anwendungsfaelle")}
                >
                  Anwendungsfälle ansehen
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
