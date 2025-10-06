// src/components/ComparisonSection.tsx
import type { ComponentType, SVGProps, CSSProperties } from "react";
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

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Row = {
  icon: IconType;
  title: string;
  without: string;
  with: string;
};

const rows: Readonly<Row[]> = [
  {
    icon: Clock,
    title: "Zeitaufwand",
    without: "Stundenlanges Recherchieren und Testen",
    with: "1× pro Monat 60 Minuten Strategiemeeting",
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
    with: "Klare KPIs: Kosteneinsparungen & Prozessnutzen",
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
      // Lokale Farbtokens – Pro: Grün, Contra: Amber (kein CI-Rot in der negativen Spalte)
      style={
        {
          // Grün (good)
          "--good": "142 70% 45%",
          "--good-ink": "142 75% 28%",
          // Amber (bad)
          "--bad": "38 92% 50%",
          "--bad-ink": "28 90% 28%",
        } as CSSProperties
      }
    >
      {/* Hintergrund */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(222 30% 10%) 0%, hsl(222 40% 8%) 60%, hsl(222 50% 7%) 100%)",
        }}
      />
      {/* feine Partikel */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.16) 1px, transparent 1px), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.12) 1px, transparent 1px), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 140px 140px, 160px 160px",
        }}
      />
      {/* CI-Glows: auf Mobile kleiner, Section clipt via overflow-hidden */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.22), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8rem] bottom-[-6rem] h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.16), transparent 70%)",
        }}
      />
      {/* Watermark (skaliert & gecappt für Mobile) */}
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none absolute right-3 top-6 -z-10 h-16 w-auto opacity-10 sm:right-6 sm:top-8 sm:h-24 md:right-12 md:top-10 md:h-28"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center text-white">
          <h2
            id="comparison-heading"
            className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Der Unterschied ist {/* Light-Mode Gradient */}
            <span className="bg-[linear-gradient(90deg,hsl(var(--secondary)),#ff7a6f)] bg-clip-text text-transparent dark:hidden">
              klar erkennbar
            </span>
            {/* Dark-Mode Gradient: kräftiger, warmes Rot → helle Koralle */}
            <span className="hidden dark:inline bg-[linear-gradient(90deg,hsl(var(--primary)),#ffb3a6)] bg-clip-text text-transparent">
              klar erkennbar
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80">
            Während andere im KI-Chaos versinken, führen wir dich sicher zum
            Erfolg.
          </p>
        </div>

        {/* Zwei Spalten */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {/* CONTRA – Amber */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-soft">
            {/* linke Kante: amber */}
            <span
              className="absolute inset-y-0 left-0 w-1"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--bad)), hsl(var(--bad)/0.6))",
              }}
              aria-hidden
            />
            <ColumnHeader
              tone="negative"
              title="Wenn du KI ohne Begleitung einsetzt"
              Icon={X}
            />
            <div className="rounded-xl">
              {rows.map(({ icon: Icon, title, without }, i) => (
                <RowItem
                  key={`wout-${title}`}
                  Icon={Icon}
                  title={title}
                  text={without}
                  tone="negative"
                  striped={i % 2 === 1}
                />
              ))}
            </div>
          </Card>

          {/* PRO – Grün ONLY */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.06] p-6 sm:p-8 shadow-soft">
            {/* reine grüne Oberkante */}
            <span
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--good)), hsl(var(--good)), transparent)",
              }}
              aria-hidden
            />
            <ColumnHeader
              tone="positive"
              title="Wenn PAXUP deine KI-Strategie übernimmt"
              Icon={Check}
            />
            <div className="rounded-xl">
              {rows.map(({ icon: Icon, title, with: withText }, i) => (
                <RowItem
                  key={`with-${title}`}
                  Icon={Icon}
                  title={title}
                  text={withText}
                  tone="positive"
                  striped={i % 2 === 1}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ================= helpers ================= */

function ColumnHeader({
  tone,
  title,
  Icon,
}: {
  tone: "negative" | "positive";
  title: string;
  Icon: IconType;
}) {
  const isPositive = tone === "positive";
  return (
    <div className="mb-6 sm:mb-8 text-center">
      <div
        className={cn(
          "mx-auto mb-3 sm:mb-4 grid h-14 w-14 sm:h-16 sm:w-16 place-content-center rounded-full ring-1",
          isPositive
            ? "bg-[hsl(var(--good)/0.15)] ring-[hsl(var(--good)/0.35)]"
            : "bg-[hsl(var(--bad)/0.12)] ring-[hsl(var(--bad)/0.35)]"
        )}
      >
        <Icon
          className={cn(
            "h-7 w-7 sm:h-8 sm:w-8",
            isPositive ? "text-[hsl(var(--good))]" : "text-[hsl(var(--bad))]"
          )}
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white text-balance">
        {title}
      </h3>
    </div>
  );
}

function RowItem({
  Icon,
  title,
  text,
  tone,
  striped,
}: {
  Icon: IconType;
  title: string;
  text: string;
  tone: "negative" | "positive";
  striped?: boolean;
}) {
  const isPositive = tone === "positive";
  return (
    <div
      className={cn(
        "flex items-start gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 transition-colors rounded-lg",
        striped
          ? isPositive
            ? "bg-[hsl(var(--good)/0.06)]"
            : "bg-[hsl(var(--bad)/0.06)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "grid h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 place-content-center rounded-lg ring-1",
          isPositive
            ? "bg-[hsl(var(--good)/0.12)] ring-[hsl(var(--good)/0.35)]"
            : "bg-[hsl(var(--bad)/0.10)] ring-[hsl(var(--bad)/0.35)]"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5",
            isPositive ? "text-[hsl(var(--good))]" : "text-[hsl(var(--bad))]"
          )}
        />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
          {title}
        </h4>
        <p className="mt-1 text-sm sm:text-[0.95rem] leading-relaxed text-white/80 break-words">
          {text}
        </p>
      </div>
    </div>
  );
}
