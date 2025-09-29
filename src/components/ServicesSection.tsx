// src/components/ServicesSection.tsx
import { Card } from "@/components/ui/card";
import { Database, Shield, Zap, Brain, type LucideIcon } from "lucide-react";
import UpMark from "@/assets/logo/Up_rot.png";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Readonly<Service[]> = [
  {
    icon: Database,
    title: "Digitale Datenbasis",
    description: "Ordnung & Transparenz für bessere, schnelle Entscheidungen.",
  },
  {
    icon: Shield,
    title: "Datenschutz & Sicherheit",
    description: "DSGVO-konform. Hosting & Verarbeitung in Deutschland.",
  },
  {
    icon: Zap,
    title: "System­integration",
    description:
      "Tools verbinden, Workflows automatisieren, Medienbrüche schließen.",
  },
  {
    icon: Brain,
    title: "Strategische KI-Beratung",
    description:
      "KI pragmatisch einsetzen – messbar, verständlich, förderfähig.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* ---- CI-Background: Navy mit rotem Akzent-Gradient ---- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        // navy base + red accent glows aus deiner secondary
        style={{
          background:
            "linear-gradient(180deg, hsl(215 28% 12%) 0%, hsl(215 28% 10%) 60%, hsl(215 28% 10%) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          background:
            "radial-gradient(40rem 40rem at 8% 8%, hsl(var(--secondary)/0.45) 0%, transparent 55%), radial-gradient(26rem 26rem at 90% 0%, hsl(var(--secondary)/0.35) 0%, transparent 60%)",
        }}
      />
      {/* dezentes rotes „Up“ Watermark */}
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none select-none absolute -z-10 right-[-2.5rem] top-[12%] hidden sm:block w-[200px] opacity-[0.08] rotate-[-10deg]"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Leistungen für den&nbsp;Mittelstand
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            Digitalisierung, Prozessautomatisierung &{" "}
            <span className="text-[hsl(var(--secondary))] font-semibold">
              KI
            </span>{" "}
            – pragmatisch, sicher, förderfähig.
          </p>

          {/* CI-Chips: zeigen den roten Akzent bewusst */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Analyse", "Strategie", "Umsetzung", "Enablement"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[hsl(var(--secondary)/0.35)] bg-[hsl(var(--secondary)/0.08)] px-3 py-1 text-sm text-[hsl(var(--secondary))] backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((item) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur supports-[backdrop-filter]:bg-white/[0.06] transition-all duration-300 hover:shadow-card hover:border-[hsl(var(--secondary)/0.5)]"
            >
              {/* red glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(18rem 12rem at 50% 0%, hsl(var(--secondary)/0.18), transparent 65%)",
                }}
              />

              <div className="relative flex min-h-[240px] flex-col items-center text-center">
                {/* Icon-Token in CI-Rot */}
                <div className="mb-5 grid h-16 w-16 place-content-center rounded-2xl bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)] shadow-button transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="h-8 w-8 text-[hsl(var(--secondary))]" />
                </div>

                {/* Title – 2 Zeilen clamp, hyphenation gegen Überlauf */}
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight hyphens-auto break-words">
                  <span className="line-clamp-2">{item.title}</span>
                </h3>

                {/* Kurzbeschreibung – 3 Zeilen clamp */}
                <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* zarter Divider + affordance */}
                <div className="mt-auto pt-6 w-full">
                  <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--secondary)/0.5)] to-transparent" />
                  <div className="mt-3 text-xs uppercase tracking-wide text-white/70">
                    Mehr erfahren
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* kompakter Bottom-Block mit roter Kante */}
        <div className="mt-14 md:mt-16 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 md:px-10 md:py-10 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[hsl(var(--secondary))]" />
            <h3 className="text-2xl font-bold text-white">
              Digitalisierung mit Wirkung
            </h3>
            <p className="mt-3 text-white/85">
              Von der sauberen Datenbasis bis zur KI-gestützten Automatisierung
              – wir verbinden{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold">
                Strategie
              </span>
              ,{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold">
                Umsetzung
              </span>{" "}
              und{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold">
                Enablement
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
