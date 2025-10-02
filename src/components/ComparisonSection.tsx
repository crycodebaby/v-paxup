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
import { cn } from "@/lib/utils";

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
      // Lokale Farbtokens: bewusst KEIN Rot für die negative Seite
      style={
        {
          // Good = Emerald 500
          // Bad = Amber 500
          // Wir arbeiten mit HSL für konsistente Alphas
          "--good": "142 70% 45%",
          "--good-ink": "142 75% 28%",
          "--bad": "38 92% 50%",
          "--bad-ink": "28 90% 28%",
        } as React.CSSProperties
      }
    >
      {/* Background */}
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
      {/* CI-Rot Glows (dezent, neutral) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.22), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10rem] bottom-[-8rem] h-[24rem] w-[24rem] -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--secondary)/0.16), transparent 70%)",
        }}
      />
      {/* Watermark */}
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
          <p className="mt-4 text-lg text-white/75">
            Während andere im KI-Chaos versinken, führen wir Sie sicher zum
            Erfolg.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Ohne Begleitung – neutral/amber, nicht CI-rot */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 shadow-soft">
            {/* linke Kante: amber Verlauf */}
            <span
              className="absolute inset-y-0 left-0 w-1"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--bad)/0.9), hsl(var(--bad)/0.5))",
              }}
              aria-hidden
            />
            <ColumnHeader
              tone="negative"
              title="Wenn du KI ohne Begleitung einsetzt"
              Icon={X}
            />
            <div className="divide-y divide-white/5 rounded-xl bg-white/2">
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

          {/* Mit PAXUP – Good/Green + CI-rot als subtiler Co-Akzent */}
          <Card className="relative overflow-hidden border border-white/10 bg-white/[0.05] p-8 shadow-soft">
            {/* Top Kante: green + red blend */}
            <span
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--good)), hsl(var(--secondary)), hsl(var(--good)), transparent)",
              }}
              aria-hidden
            />
            <ColumnHeader
              tone="positive"
              title="Wenn PAXUP deine KI-Strategie übernimmt"
              Icon={Check}
            />
            <div className="divide-y divide-white/8 rounded-xl bg-white/[0.03]">
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
    <div className="mb-8 text-center">
      <div
        className={cn(
          "mx-auto mb-4 grid h-16 w-16 place-content-center rounded-full ring-1",
          isPositive
            ? "bg-[hsl(var(--good)/0.15)] ring-[hsl(var(--good)/0.35)]"
            : "bg-[hsl(var(--bad)/0.12)] ring-[hsl(var(--bad)/0.35)]"
        )}
      >
        <Icon
          className={cn(
            "h-8 w-8",
            isPositive ? "text-[hsl(var(--good))]" : "text-[hsl(var(--bad))]"
          )}
        />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
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
        "flex items-start gap-4 px-5 py-4",
        striped ? "bg-white/[0.03]" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "grid h-10 w-10 flex-shrink-0 place-content-center rounded-lg ring-1",
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
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{text}</p>
      </div>
    </div>
  );
}
