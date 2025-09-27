import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Target, Bot, Shield, DollarSign } from "lucide-react";
import heroBg from "@/assets/paxup-hero-bg.png";

const CALENDLY_URL = "https://calendly.com/paxup";

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: <Target className="h-6 w-6" aria-hidden="true" />,
    title: "Strategie-Entwicklung",
    description:
      "Schritt für Schritt zum Einsatz von KI in deinem Unternehmen.",
  },
  {
    icon: <Bot className="h-6 w-6" aria-hidden="true" />,
    title: "Automatisierung durch KI",
    description: "Die KI übernimmt Prozesse und spart dir Kosten und Zeit.",
  },
  {
    icon: <Shield className="h-6 w-6" aria-hidden="true" />,
    title: "DSGVO-konform in DE",
    description:
      "Sensible Daten bleiben in Deutschland – rechtssicher umgesetzt.",
  },
  {
    icon: <DollarSign className="h-6 w-6" aria-hidden="true" />,
    title: "Staatliche Förderung",
    description: "Zuschüsse vom Bund für Digitalisierung gezielt nutzen.",
  },
];

function HeroSectionBase() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-80px)] flex-col overflow-hidden"
      aria-label="PAXUP – Digitalisierung & KI für den Mittelstand"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      {/* Dark vignette + left scrim for contrast */}
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_20%,hsl(0_0%_0%/_0.35)_0%,transparent_40%),linear-gradient(to_bottom,hsl(0_0%_0%/_0.25),hsl(0_0%_0%/_0.35))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,hsl(0_0%_100%/_0.18)_0%,hsl(0_0%_100%/_0.12)_22%,transparent_52%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex-1 px-4 py-14 md:py-20 lg:px-8">
        <div className="mx-auto flex h-full max-w-6xl flex-1 flex-col gap-8 md:gap-12">
          {/* Text */}
          <div className="max-w-3xl animate-fade-in [animation-fill-mode:both] [animation-delay:60ms]">
            <h1
              className="
                text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]
                font-bold tracking-tight leading-[1.15]
                text-[clamp(2rem,5vw,3.75rem)]  /* ~32–60px */
              "
            >
              <span className="block">Dein Unternehmen,</span>
              <span className="block">erfolgreich durch:</span>
              <span
                className="
                  mt-4 inline-block rounded-2xl border-2 px-5 py-2.5
                  bg-secondary/15 border-secondary/40 text-secondary
                  backdrop-blur-[2px] shadow-[0_10px_30px_-10px_hsl(var(--secondary)/0.45)]
                "
              >
                Digitalisierung &amp; KI
              </span>
            </h1>

            <div className="mt-5 space-y-4 md:mt-7 md:space-y-5">
              <p
                className="
                  text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                  leading-[1.5]
                  text-[clamp(1rem,2.8vw,1.25rem)]  /* 16–20px */
                  break-words break-anywhere [hyphens:auto]
                "
              >
                KI und Digitalisierung fühlen sich kompliziert an?
                <span className="font-semibold text-secondary">
                  {" "}
                  Wir machen es dir einfach.
                </span>
              </p>

              <p
                className="
                  text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]
                  leading-[1.55]
                  text-[clamp(0.95rem,2.6vw,1.125rem)]  /* 15–18px */
                  break-words break-anywhere [hyphens:auto]
                "
              >
                Als dein Partner für KI, Digitalisierung und Automatisierung
                bekommst du{" "}
                <strong className="text-secondary">
                  Strategie &amp; Umsetzung
                </strong>{" "}
                aus einer Hand – damit dein Unternehmen effizient und
                zukunftsfähig vorankommt.
              </p>
            </div>

            <div className="mt-7 md:mt-9 animate-fade-in [animation-fill-mode:both] [animation-delay:160ms]">
              <Button
                size="lg"
                className="
                  bg-secondary text-secondary-foreground hover:bg-secondary/90
                  px-7 py-5 text-[clamp(1rem,2.8vw,1.125rem)]
                  shadow-button transition-all duration-300
                  hover:scale-[1.02] hover:shadow-elegant
                "
                onClick={() => window.open(CALENDLY_URL, "_blank")}
                aria-label="Kostenloses Beratungsgespräch vereinbaren"
              >
                Kostenloses Beratungsgespräch →
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-auto animate-fade-in [animation-fill-mode:both] [animation-delay:260ms]">
            {/* 1 col <380px, 2 cols ab 380px (xs), 4 cols ab md */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className="
                    group rounded-xl border border-border/50 bg-card/90
                    p-4 xs:p-5
                    backdrop-blur-sm transition-all duration-300
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:border-secondary/40 hover:shadow-card
                    focus-within:-translate-y-1
                  "
                  style={{ animationDelay: `${320 + i * 80}ms` }}
                >
                  <div
                    className="
                      flex items-start gap-3 xs:gap-4
                      flex-col xs:flex-row
                    "
                  >
                    <div
                      className="
                        rounded-xl bg-secondary/15 p-2.5 xs:p-3 text-secondary
                        transition-colors duration-300 group-hover:bg-secondary/25
                        shrink-0
                      "
                      aria-hidden="true"
                    >
                      {s.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className="
                          text-[clamp(0.95rem,2.6vw,1rem)]  /* 15–16px */
                          font-semibold text-foreground
                          transition-colors duration-300 group-hover:text-secondary
                        "
                      >
                        {s.title}
                      </h3>
                      <p
                        className="
                          mt-1
                          text-[clamp(0.85rem,2.4vw,0.95rem)]  /* 13.6–15.2px */
                          leading-[1.55] text-muted-foreground
                          break-words break-anywhere [hyphens:auto]
                        "
                      >
                        {s.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs (dezent) */}
      <div
        className="
          pointer-events-none absolute right-6 top-16 h-20 w-20
          rounded-full
          bg-[radial-gradient(circle_at_30%_30%,hsl(var(--secondary)/0.45)_0%,transparent_60%)]
          opacity-90 md:right-20 md:top-20 md:h-28 md:w-28
        "
        aria-hidden="true"
      />
      <div
        className="
          pointer-events-none absolute bottom-14 left-6 h-16 w-16
          rounded-full
          bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary)/0.35)_0%,transparent_60%)]
          opacity-80 md:bottom-20 md:left-20 md:h-20 md:w-20
        "
        aria-hidden="true"
      />
    </section>
  );
}

const HeroSection = memo(HeroSectionBase);
export default HeroSection;
