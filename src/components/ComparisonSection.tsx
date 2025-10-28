// src/components/ComparisonSection.tsx
import type { ComponentType, SVGProps } from "react";
import {
  X,
  Check,
  Clock,
  Shield,
  TrendingUp,
  Settings,
  Link as LinkIcon,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import UpMark from "@/assets/logo/Up_rot.png";
import { cn } from "@/lib/utils";

/* Datentypen & Daten */
type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type Row = { icon: IconType; title: string; without: string; with: string };

const rows: Readonly<Row[]> = [
  {
    icon: Clock,
    title: "Zeitaufwand",
    without: "Stundenlanges Recherchieren und Testen",
    with: "60 Min Strategiemeeting pro Monat",
  },
  {
    icon: Shield,
    title: "Datenschutzrisiken",
    without: "Hohe Unsicherheit bei rechtlicher Lage",
    with: "DSGVO-Check und rechtssichere Umsetzung",
  },
  {
    icon: TrendingUp,
    title: "Erfolg",
    without: "Keine messbare Wirkung im Alltag",
    with: "Klare KPIs: Kosten, Durchlaufzeiten, Fehlerquote",
  },
  {
    icon: Settings,
    title: "Komplexität",
    without: "Technisches Chaos und Tool-Überforderung",
    with: "Verständliche Umsetzung ohne Vorwissen",
  },
  {
    icon: LinkIcon,
    title: "Integration",
    without: "Einzelne Tools ohne Zusammenhang",
    with: "Voll integrierte Lösung in bestehende Prozesse",
  },
  {
    icon: Target,
    title: "Strategie",
    without: "Keine klare Zieldefinition und Stillstand",
    with: "Individuelle KI-Roadmap mit konkreten Schritten",
  },
];

export default function ComparisonSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 font-sans"
      aria-labelledby="comparison-heading"
    >
      {/* Hintergrund */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(221 45% 13%) 0%, hsl(220 19% 16%) 60%, hsl(221 45% 13%) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 140px 140px, 160px 160px",
        }}
      />
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none absolute right-3 top-6 -z-10 h-16 w-auto opacity-10 sm:right-6 sm:top-8 sm:h-24 md:right-12 md:top-10 md:h-28"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center text-white">
          <h2
            id="comparison-heading"
            className="text-balance text-3xl md:text-4xl 2xl:text-5xl font-bold"
          >
            Der Unterschied auf einen Blick
          </h2>
          <p className="mt-3 text-base md:text-lg text-white/80">
            Ohne Buzzwords, mit klaren Ergebnissen.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1500px] 2xl:max-w-[1800px] gap-6 lg:grid-cols-2 2xl:gap-8">
          {/* NEGATIV: Light=--secondary (Rot), Dark=--primary (Rot) */}
          <TableBlock
            tone="negative"
            title="Ohne Begleitung"
            lead="Was dich bremst, wenn KI ohne Strategie und Umsetzung eingeführt wird."
            rows={rows.map(({ icon, title, without: text }) => ({
              icon,
              title,
              text,
            }))}
            HeaderIcon={X}
          />
          {/* POSITIV: immer --success (Grün) */}
          <TableBlock
            tone="positive"
            title="Mit PAXUP"
            lead="Was du mit uns bekommst: klare Roadmap, messbare Wirkung und Ruhe im Kopf."
            rows={rows.map(({ icon, title, with: text }) => ({
              icon,
              title,
              text,
            }))}
            HeaderIcon={Check}
          />
        </div>
      </div>
    </section>
  );
}

function TableBlock({
  tone,
  title,
  lead,
  rows,
  HeaderIcon,
}: {
  tone: "negative" | "positive";
  title: string;
  lead: string;
  rows: { icon: IconType; title: string; text: string }[];
  HeaderIcon: IconType;
}) {
  const isNeg = tone === "negative";

  // Chips / Ringe (light & dark getrennt, damit Rot korrekt wechselt)
  const chipBg = isNeg
    ? "bg-[hsl(var(--secondary)/0.16)] dark:bg-[hsl(var(--primary)/0.16)]"
    : "bg-[hsl(var(--success)/0.16)] dark:bg-[hsl(var(--success)/0.16)]";
  const chipRing = isNeg
    ? "ring-[hsl(var(--secondary)/0.22)] dark:ring-[hsl(var(--primary)/0.22)]"
    : "ring-[hsl(var(--success)/0.22)] dark:ring-[hsl(var(--success)/0.22)]";
  const iconColor = isNeg
    ? "text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]"
    : "text-[hsl(var(--success))] dark:text-[hsl(var(--success))]";

  // Seitenleisten: wir rendern je Seite separate light/dark-Layer für sauberen Verlauf
  const sideLight = isNeg
    ? "bg-[linear-gradient(180deg,hsl(var(--secondary)),hsl(var(--secondary)/0.65))]"
    : "bg-[linear-gradient(180deg,hsl(var(--success)),hsl(var(--success)/0.65))]";
  const sideDark = isNeg
    ? "bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--primary)/0.65))]"
    : "bg-[linear-gradient(180deg,hsl(var(--success)),hsl(var(--success)/0.65))]";

  return (
    <Card
      className={cn(
        "relative overflow-hidden shadow-soft transform-gpu transition-transform duration-300",
        "bg-black/10 backdrop-blur-[2px]"
      )}
      aria-label={title}
    >
      {/* Linke & rechte farbige Seitenleiste (Light & Dark getrennt) */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-[7px] blur-[0.4px] block dark:hidden",
          sideLight
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-[7px] blur-[0.4px] hidden dark:block",
          sideDark
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 right-0 w-[7px] blur-[0.4px] block dark:hidden",
          sideLight
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 right-0 w-[7px] blur-[0.4px] hidden dark:block",
          sideDark
        )}
      />

      <div className="px-5 py-5 sm:px-7 sm:py-7">
        <div className="mx-auto max-w-[75ch] text-center">
          <div
            className={cn(
              "mx-auto mb-3 grid h-14 w-14 place-content-center rounded-full ring-1",
              chipBg,
              chipRing
            )}
          >
            <HeaderIcon className={cn("h-7 w-7", iconColor)} />
          </div>
          <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-white/85 text-sm md:text-base">{lead}</p>
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-7 sm:pb-7">
        <ul className="mx-auto grid max-w-[1100px] rounded-lg">
          {rows.map(({ icon: Icon, title, text }, i) => (
            <li key={`${title}-${i}`}>
              <div className="flex items-start gap-4 p-4">
                <div
                  className={cn(
                    "grid h-11 w-11 flex-shrink-0 place-content-center rounded-lg ring-1 transform-gpu",
                    chipBg,
                    chipRing
                  )}
                >
                  <Icon className={cn("h-5 w-5", iconColor)} />
                </div>

                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base leading-snug">
                    {title}
                  </div>
                  <div className="mt-1 text-white/85 text-sm leading-relaxed break-words">
                    {text}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
