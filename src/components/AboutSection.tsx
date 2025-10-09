// src/components/AboutSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Handshake, Gem, ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-about.jpg";

type ValueProp = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const VALUE_PROPS: Readonly<ValueProp[]> = [
  {
    icon: ShieldCheck,
    title: "DSGVO-Konformität",
    description: "Sicherheit und Vertrauen nach deutschen Standards.",
  },
  {
    icon: Zap,
    title: "Praxisnahe Umsetzung",
    description: "Wir reden nicht – wir liefern spürbare Ergebnisse.",
  },
  {
    icon: Handshake,
    title: "Persönliche Betreuung",
    description: "Ein fester Ansprechpartner begleitet dich auf Augenhöhe.",
  },
  {
    icon: Gem,
    title: "Fördermittel-Expertise",
    description: "Wir maximieren Zuschüsse für deine Vorhaben.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden border-y bg-gradient-subtle py-16 xs:py-20 md:py-28 lg:py-32 font-sans"
      aria-labelledby="about-heading"
    >
      {/* Akzentwolken – Light: secondary, Dark: primary */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(38rem 24rem at 18% 25%, hsl(var(--secondary)/0.10), transparent 65%), radial-gradient(26rem 18rem at 85% 15%, hsl(var(--secondary)/0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-80 dark:block"
        style={{
          background:
            "radial-gradient(38rem 24rem at 18% 25%, hsl(var(--primary)/0.10), transparent 65%), radial-gradient(26rem 18rem at 85% 15%, hsl(var(--primary)/0.12), transparent 60%)",
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bild */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--secondary)/0.15)] blur-3xl dark:bg-[hsl(var(--primary)/0.15)] motion-reduce:hidden" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-elegant backdrop-blur-sm">
              <img
                src={teamImage}
                alt="PAXUP Team – Partner für Digitalisierung im Mittelstand"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Top-Kante: Light=secondary, Dark=primary */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]"
              />
            </div>
          </div>

          {/* Text & Value-Props */}
          <div className="order-1 space-y-8 lg:order-2">
            <header>
              <h2
                id="about-heading"
                className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              >
                Dein Partner auf Augenhöhe für den{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  digitalen Mittelstand
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Strategie, Umsetzung und persönliche Betreuung aus einer Hand –
                pragmatisch, messbar und auf deine Organisation zugeschnitten.
              </p>
            </header>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <div className="group relative grid h-full grid-cols-[auto,1fr] gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--secondary))] hover:shadow-card dark:hover:border-[hsl(var(--primary))]">
                    <div className="grid h-12 w-12 place-content-center rounded-lg bg-[hsl(var(--secondary)/0.10)] ring-1 ring-[hsl(var(--secondary)/0.35)] transition-transform duration-300 group-hover:scale-105 dark:bg-[hsl(var(--primary)/0.10)] dark:ring-[hsl(var(--primary)/0.35)]">
                      <Icon className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[hsl(var(--secondary))] ring-offset-0 group-focus-within:ring-2 dark:ring-[hsl(var(--primary))]" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button size="lg" asChild className="group">
                <Link to="/ueber-uns">
                  Lerne uns kennen
                  <ArrowRight className="ml-3 h-5 w-5 text-[hsl(var(--secondary))] transition-transform duration-200 group-hover:translate-x-1 dark:text-[hsl(var(--primary))]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
