// src/pages/Funding.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Percent,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

import UpWeiss from "@/assets/logo/Up_weiss.png";
import UpRot from "@/assets/logo/Up_rot.png";
import UpBlau from "@/assets/logo/Up_blau.png";

const CAL_URL = "https://cal.com/paxup";

export default function Funding() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-subtle">
          {/* Auren/Partikel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-85"
            style={{
              background:
                "radial-gradient(36rem 22rem at 18% 14%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(32rem 22rem at 84% 8%, hsl(var(--secondary)/0.12), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden dark:block opacity-95"
            style={{
              background:
                "radial-gradient(36rem 22rem at 18% 14%, hsl(var(--primary)/0.10), transparent 60%), radial-gradient(32rem 22rem at 84% 8%, hsl(var(--primary)/0.12), transparent 60%)",
            }}
          />
          {/* Logos dezent */}
          <img
            aria-hidden
            src={UpBlau}
            alt=""
            className="pointer-events-none absolute right-4 top-6 -z-10 hidden h-24 w-auto opacity-10 sm:block md:right-12 md:top-10 md:h-28"
          />
          <img
            aria-hidden
            src={UpRot}
            alt=""
            className="pointer-events-none absolute left-6 bottom-6 -z-10 hidden h-20 w-auto opacity-10 sm:block"
          />

          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span>Bis zu </span>
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  80&nbsp;% Zuschuss
                </span>
                <span> für KI- & Digitalisierungsvorhaben</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Wir machen Ihre **BAFA-Förderung** einfach: Fördercheck,
                Antragstellung, förderkonforme Roadmap – und Umsetzung mit
                Nachweisführung.
              </p>

              {/* USP-Band */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { Icon: Percent, text: "Bis zu 80 % Zuschuss" },
                  { Icon: FileText, text: "Antrag & Nachweise aus einer Hand" },
                  { Icon: ShieldCheck, text: "DSGVO & Audit-Trails" },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="rounded-xl border border-border bg-card/80 p-4 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/70"
                  >
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                      <Icon className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="shadow-button hover:-translate-y-0.5 transition-all bg-[hsl(var(--secondary))] text-white dark:bg-[hsl(var(--primary))]"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  Kostenlose Förderberatung buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BAFA – Premium Feature Card */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card
              className="
                group relative mx-auto max-w-6xl overflow-hidden rounded-3xl
                border border-border bg-card/95 supports-[backdrop-filter]:bg-card/85 backdrop-blur
                px-6 py-8 sm:px-10 sm:py-12 shadow-soft transition-all duration-500
                hover:shadow-card hover:-translate-y-0.5
              "
            >
              {/* Glows */}
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--secondary)/0.30), transparent 65%)",
                }}
              />
              <div
                aria-hidden
                className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full blur-3xl opacity-50 dark:opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--accent)/0.28), transparent 68%)",
                }}
              />
              {/* weiteres Logo-Wasserzeichen */}
              <img
                aria-hidden
                src={UpWeiss}
                alt=""
                className="pointer-events-none absolute right-24 bottom-8 hidden h-12 w-auto opacity-10 md:block"
              />

              {/* Head */}
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--secondary)/0.4)] bg-[hsl(var(--secondary)/0.08)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--secondary))] dark:border-[hsl(var(--primary)/0.45)] dark:bg-[hsl(var(--primary)/0.12)] dark:text-[hsl(var(--primary))]">
                  BAFA-Programm • Unternehmensberatung
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Förderung für **Strategie & Umsetzung** deiner Digitalisierung
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-muted-foreground">
                  Förderfähig für KMU & Mittelstand. Wir prüfen die
                  Förderfähigkeit, erstellen Anträge, liefern förderkonforme
                  Unterlagen – und setzen dein Vorhaben messbar um.
                </p>
              </div>

              {/* Inhalt – drei kompakte Kacheln */}
              <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:gap-7 lg:grid-cols-3">
                {/* Förderhöhe */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <Percent className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      Förderhöhe
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>
                        Bis zu <strong>80&nbsp;% Zuschuss</strong>{" "}
                        (Beratung/Strategie)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>
                        Förderfähig: <strong>KMU & Mittelstand</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>Regionale Sätze & Bedingungen möglich</span>
                    </li>
                  </ul>
                </div>

                {/* Unser Beitrag */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <Target className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      Unser Beitrag
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>
                        Fördercheck & <strong>Antragserstellung</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>
                        Förderkonforme <strong>Roadmap & Nachweise</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                      <span>
                        Umsetzung & <strong>Verwendungsnachweis</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sicher & konform */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <ShieldCheck className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      Sicher & konform
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>DSGVO, Audit-Trails, Löschregeln</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>Hosting & Verarbeitung in Deutschland</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                      <span>Nachweisführung für die Förderstelle</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Row */}
              <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[hsl(var(--secondary))] text-white hover:brightness-95 dark:bg-[hsl(var(--primary))] dark:hover:brightness-95 shadow-button transition-transform duration-300 hover:-translate-y-0.5"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  BAFA-Fördercheck starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border shadow-soft hover:bg-white/60 dark:hover:bg-white/10"
                  onClick={() => (window.location.href = "/foerderung")}
                >
                  Details & Richtlinien
                </Button>
              </div>

              {/* Rechtlicher Hinweis (Advokat des Teufels) */}
              <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-muted-foreground">
                Hinweis: Förderkonditionen variieren je nach Unternehmensgröße,
                Region und Programmstand. Die endgültige Bewilligung und
                Auszahlung von Fördermitteln erfolgt ausschließlich durch die
                jeweilige Förderstelle (z. B. BAFA). Wir übernehmen keine
                Garantie für Förderfähigkeit oder Bewilligung, unterstützen Sie
                jedoch bestmöglich bei der Antragsvorbereitung und Umsetzung.
              </p>
            </Card>
          </div>
        </section>

        {/* Prozess (3 klare Schritte) */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-10 md:mb-14 max-w-4xl text-center">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                So kommen Sie zur Förderung – einfach & planbar
              </h3>
              <p className="mt-3 text-lg text-muted-foreground">
                Wir reduzieren Komplexität: vom ersten Check bis zum
                Verwendungsnachweis.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  Icon: Calendar,
                  title: "1) Fördercheck & Beratung",
                  points: [
                    "Kostenlose Ersteinschätzung",
                    "Förderfähigkeit & Quote",
                    "Zeitleiste & To-dos",
                  ],
                },
                {
                  Icon: FileText,
                  title: "2) Antrag & Roadmap",
                  points: [
                    "Antragsunterlagen fertig",
                    "Förderkonforme Roadmap",
                    "Nachweisstruktur definiert",
                  ],
                },
                {
                  Icon: ShieldCheck,
                  title: "3) Umsetzung & Nachweis",
                  points: [
                    "Umsetzung mit Audit-Trails",
                    "KPI-Tracking/Dashboard",
                    "Verwendungsnachweis inkl.",
                  ],
                },
              ].map(({ Icon, title, points }) => (
                <Card
                  key={title}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 supports-[backdrop-filter]:bg-card/80 backdrop-blur"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <Icon className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight">
                      {title}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                size="lg"
                className="shadow-button hover:-translate-y-0.5 transition-all bg-[hsl(var(--secondary))] text-white dark:bg-[hsl(var(--primary))]"
                onClick={() => window.open(CAL_URL, "_blank")}
              >
                Unverbindlichen Fördercheck buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Micro-FAQ (Optional, kurz & hilfreich) */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h4 className="text-2xl font-bold tracking-tight text-center">
                Häufige Fragen – kurz beantwortet
              </h4>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    q: "Wie schnell geht das?",
                    a: "Erstgespräch sofort. Antrag i. d. R. in 3–10 Tagen vorbereitet. Umsetzung nach Bewilligung unmittelbar.",
                  },
                  {
                    q: "Für wen ist BAFA geeignet?",
                    a: "Für KMU/Mittelstand. Wir prüfen im Fördercheck Voraussetzungen & mögliche Förderquote.",
                  },
                  {
                    q: "Was genau macht PAXUP?",
                    a: "Fördercheck, Antrag, förderkonforme Roadmap, Umsetzung mit Audit-Trails und Verwendungsnachweis.",
                  },
                ].map(({ q, a }) => (
                  <Card
                    key={q}
                    className="rounded-2xl border border-border bg-card/90 p-5 shadow-soft supports-[backdrop-filter]:bg-card/80 backdrop-blur"
                  >
                    <div className="text-sm">
                      <p className="font-semibold">{q}</p>
                      <p className="mt-1 text-muted-foreground">{a}</p>
                    </div>
                  </Card>
                ))}
              </div>
              {/* Zusatz-Disclaimer unten nochmal klein */}
              <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] text-muted-foreground">
                Hinweis: Die Entscheidung über Bewilligung und Auszahlung trifft
                ausschließlich die Förderstelle (z. B. BAFA). Eine Garantie ist
                ausgeschlossen.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
