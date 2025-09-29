// src/components/ComparisonSection.tsx
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
import { cn } from "@/lib/utils"; // falls du kein cn util hast, kannst du die Funktion weglassen und string joinen.

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

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
      className="relative overflow-hidden py-20"
      aria-labelledby="comparison-heading"
    >
      {/* Dark, layered background with subtle particles + red glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            // dunkelblauer Grundverlauf
            "linear-gradient(180deg, hsl(222 30% 10%) 0%, hsl(222 40% 8%) 60%, hsl(222 50% 7%) 100%)",
        }}
      />
      {/* zarte Partikel (repeating radial gradients) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.10) 1px, transparent 1px), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 140px 140px, 160px 160px",
        }}
      />
      {/* roter Akzentschimmer (secondary) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.25), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10rem] bottom-[-8rem] h-[24rem] w-[24rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.18), transparent 70%)",
        }}
      />
      {/* Wasserzeichen */}
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none absolute right-6 top-8 -z-10 h-24 w-auto opacity-10 md:right-12 md:top-10 md:h-28"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center text-white">
          <h2
            id="comparison-heading"
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Der Unterschied ist{" "}
            <span className="bg-[linear-gradient(90deg,hsl(var(--secondary)),#ff6b5f)] bg-clip-text text-transparent">
              klar erkennbar
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Während andere im KI-Chaos versinken, führen wir Sie sicher zum
            Erfolg.
          </p>
        </div>

        {/* Zwei Spalten – „ohne“ vs. „mit PAXUP“ */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Ohne Begleitung */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 shadow-soft">
            {/* linke rote Kante */}
            <span className="absolute inset-y-0 left-0 w-1 bg-[hsl(var(--secondary))]" />
            <ColumnHeader
              tone="negative"
              title="Wenn du KI ohne Begleitung einsetzt"
              Icon={X}
            />
            <div className="space-y-6">
              {rows.map(({ icon: Icon, title, without }) => (
                <RowItem
                  key={`wout-${title}`}
                  Icon={Icon}
                  title={title}
                  text={without}
                  tone="negative"
                />
              ))}
            </div>
          </Card>

          {/* Mit PAXUP */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-8 shadow-soft">
            {/* dezente rote Oberkante */}
            <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent, hsl(var(--secondary)), transparent)]" />
            <ColumnHeader
              tone="positive"
              title="Wenn PAXUP deine KI-Strategie übernimmt"
              Icon={Check}
            />
            <div className="space-y-6">
              {rows.map(({ icon: Icon, title, with: withText }) => (
                <RowItem
                  key={`with-${title}`}
                  Icon={Icon}
                  title={title}
                  text={withText}
                  tone="positive"
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
    <div className="mb-8 text-center">
      <div
        className={cn(
          "mx-auto mb-4 grid h-16 w-16 place-content-center rounded-full",
          isPositive
            ? "bg-[hsl(var(--secondary)/0.18)]"
            : "bg-[hsl(var(--secondary)/0.10)]"
        )}
      >
        <Icon
          className={cn(
            "h-8 w-8",
            isPositive
              ? "text-[hsl(var(--secondary))]"
              : "text-[hsl(var(--secondary))]"
          )}
        />
      </div>
      <h3
        className={cn(
          "text-xl font-bold",
          isPositive ? "text-white" : "text-white"
        )}
      >
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
}: {
  Icon: IconType;
  title: string;
  text: string;
  tone: "negative" | "positive";
}) {
  const isPositive = tone === "positive";
  return (
    <div className="flex items-start gap-4">
      <div
        className={cn(
          "grid h-10 w-10 flex-shrink-0 place-content-center rounded-lg ring-1",
          isPositive
            ? "bg-white/5 ring-white/15"
            : "bg-[hsl(var(--secondary)/0.06)] ring-[hsl(var(--secondary)/0.25)]"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5",
            isPositive ? "text-white" : "text-[hsl(var(--secondary))]"
          )}
        />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p>
      </div>
    </div>
  );
}
