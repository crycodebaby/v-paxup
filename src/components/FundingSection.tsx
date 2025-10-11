// src/components/FundingSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  ShieldCheck,
  Percent,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import UpWeiss from "@/assets/logo/Up_weiss.png";
import UpRot from "@/assets/logo/Up_rot.png";
import UpBlau from "@/assets/logo/Up_blau.png";

const CAL_URL = "https://cal.com/paxup";

export default function FundingSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-border/40 bg-gradient-subtle py-14 xs:py-16 sm:py-20 lg:py-24"
      aria-labelledby="bafa-heading"
    >
      {/* Partikel / Aura – Light: secondary, Dark: primary */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(36rem 20rem at 20% 16%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(30rem 20rem at 84% 8%, hsl(var(--secondary)/0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block opacity-90"
        style={{
          background:
            "radial-gradient(36rem 20rem at 20% 16%, hsl(var(--primary)/0.10), transparent 60%), radial-gradient(30rem 20rem at 84% 8%, hsl(var(--primary)/0.12), transparent 60%)",
        }}
      />

      {/* Eigener, breiter Wrapper (unabhängig vom Tailwind-Container) */}
      <div className="mx-auto w-full max-w-[96rem] px-3 xs:px-4 lg:px-8">
        <Card
          className="
            group relative mx-auto w-full overflow-hidden rounded-3xl
            border border-border bg-card/95 supports-[backdrop-filter]:bg-card/85 backdrop-blur
            px-4 py-6 xs:px-6 xs:py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14
            shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-card
          "
        >
          {/* Dekorative Glows */}
          <div
            aria-hidden
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--secondary)/0.30), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full blur-3xl opacity-50 dark:opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--accent)/0.28), transparent 68%)",
            }}
          />

          {/* Zarte „Up“-Logos als Watermarks */}
          <img
            aria-hidden
            src={UpBlau}
            alt=""
            className="pointer-events-none absolute -right-6 top-6 hidden h-20 w-auto opacity-10 sm:block lg:h-24"
          />
          <img
            aria-hidden
            src={UpRot}
            alt=""
            className="pointer-events-none absolute left-6 -bottom-4 hidden h-16 w-auto opacity-10 sm:block lg:h-20"
          />
          <img
            aria-hidden
            src={UpWeiss}
            alt=""
            className="pointer-events-none absolute right-24 bottom-8 hidden h-10 w-auto opacity-10 md:block lg:h-12"
          />

          {/* Head */}
          <div className="mx-auto max-w-3xl text-balance text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--secondary)/0.4)] bg-[hsl(var(--secondary)/0.08)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--secondary))] dark:border-[hsl(var(--primary)/0.45)] dark:bg-[hsl(var(--primary)/0.12)] dark:text-[hsl(var(--primary))]">
              <BadgeCheck className="h-3.5 w-3.5" />
              BAFA-Förderung
            </span>

            <h2
              id="bafa-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl 2xl:text-6xl"
            >
              Bis zu{" "}
              <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                80 % Zuschuss
              </span>{" "}
              für Strategie & Umsetzung
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Wir prüfen die Förderfähigkeit, bereiten die Unterlagen vor und
              setzen dein Vorhaben förderkonform um:{" "}
              <span className="font-medium">schnell, sicher, messbar</span>.
            </p>
          </div>

          {/* Inhalt */}
          <div className="mx-auto mt-8 grid w-full max-w-[80rem] gap-5 sm:gap-6 lg:grid-cols-3">
            {/* Kachel: Konditionen */}
            <div
              className="
                relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 sm:p-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                transition-transform duration-300 hover:-translate-y-0.5
              "
            >
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
                    Bis zu <strong>80 %</strong> Zuschuss (Beratung/Strategie)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                  <span>
                    Förderfähig: <strong>KMU</strong> & Mittelstand
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                  <span>Regionale Sätze & Bedingungen möglich</span>
                </li>
              </ul>
            </div>

            {/* Kachel: Unser Beitrag */}
            <div
              className="
                relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 sm:p-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                transition-transform duration-300 hover:-translate-y-0.5
              "
            >
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
                  <span>Fördercheck & Antragvorbereitung</span>
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

            {/* Kachel: Sicher & konform */}
            <div
              className="
                relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 sm:p-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                transition-transform duration-300 hover:-translate-y-0.5
              "
            >
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
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                  <span>
                    <strong>DSGVO</strong> & <strong>Audit-Trails</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                  <span>Hosting & Verarbeitung in Deutschland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
                  <span>
                    <strong>Nachweisführung</strong> für die{" "}
                    <strong>Förderstelle</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-8 flex w-full max-w-[56rem] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              size="lg"
              className="
                w-full sm:w-auto
                bg-[hsl(var(--secondary))] text-white hover:brightness-95
                dark:bg-[hsl(var(--primary))] dark:hover:brightness-95
                shadow-button transition-transform duration-300 hover:-translate-y-0.5
              "
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

          {/* Fußnote */}
          <p className="mx-auto mt-4 max-w-3xl text-center text-balance text-xs text-muted-foreground">
            Hinweis: Förderkonditionen variieren je nach Unternehmensgröße,
            Region und Programmstand. Die endgültige Bewilligung und Auszahlung
            von Fördermitteln erfolgt ausschließlich durch die jeweilige
            Förderstelle (z. B. BAFA). Wir übernehmen keine Garantie für
            Förderfähigkeit oder Bewilligung, unterstützen dich jedoch
            bestmöglich bei Antrag und Umsetzung.
          </p>
        </Card>
      </div>
    </section>
  );
}
