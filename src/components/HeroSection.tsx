// src/components/HeroSection.tsx
import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Bot, Shield, DollarSign, type LucideIcon } from "lucide-react";

import heroPng from "@/assets/paxup-hero-bg.jpg";
import heroWebp from "@/assets/paxup-fallback-hero.webp";

// Terminbuchung via Cal.com (korrekt)
const CALENDLY_URL = "https://cal.com/paxup";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  ariaLabel?: string;
};

const SERVICES: Readonly<ServiceItem[]> = [
  {
    icon: Target,
    title: "Strategie-Entwicklung",
    description:
      "Schritt für Schritt zu messbaren KI-Ergebnissen  von Quick Wins bis Roadmap.",
    ariaLabel: "Strategie-Entwicklung: Von Quick Wins zur Roadmap",
  },
  {
    icon: Bot,
    title: "KI als Helfer",
    description: "Automatisierung durch KI: Tickets, Dokumente, Termine",
    ariaLabel: "Automatisierung durch KI: Tickets, Dokumente, Termine",
  },
  {
    icon: Shield,
    title: "DSGVO Konform in DE",
    description:
      "Hosting & Verarbeitung in Deutschland  mit klaren Richtlinien & Audit-Trails.",
    ariaLabel: "DSGVO-konforme Verarbeitung in Deutschland",
  },
  {
    icon: DollarSign,
    title: "Staatliche Förderung",
    description:
      "Wir lotsen durch passende Programme & Anträge  für maximale Zuschüsse.",
    ariaLabel: "Staatliche Förderung und Zuschüsse",
  },
] as const;

/** Setzt CSS-Variablen für 1vh & Header-Höhe (verhindert weiße Balken auf Mobile) */
function useViewportVars() {
  useLayoutEffect(() => {
    const setVars = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      const header = document.querySelector<HTMLElement>("[data-site-header]");
      const h = header?.getBoundingClientRect().height ?? 80;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    setVars();

    window.addEventListener("resize", setVars);
    window.addEventListener("orientationchange", setVars);

    if ("visualViewport" in window && window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVars);
    }

    return () => {
      window.removeEventListener("resize", setVars);
      window.removeEventListener("orientationchange", setVars);
      if ("visualViewport" in window && window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVars);
      }
    };
  }, []);
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  ariaLabel,
}: ServiceItem) {
  return (
    <article
      className="
        group relative flex h-full min-w-0 flex-col rounded-2xl
        border border-border bg-card text-card-foreground
        backdrop-blur-[2px]
        p-5 sm:p-6
        shadow-card transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-lg
        focus-within:outline-none focus-within:ring-2 focus-within:ring-[hsl(var(--secondary))]
        dark:focus-within:ring-[hsl(var(--primary))]
      "
      aria-label={ariaLabel ?? title}
      tabIndex={-1}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className="
            shrink-0 rounded-xl p-3
            text-secondary bg-[hsl(var(--secondary)/0.12)]
            transition-colors duration-300
            group-hover:bg-[hsl(var(--secondary)/0.16)]
            dark:text-primary dark:bg-[hsl(var(--primary)/0.18)]
            dark:group-hover:bg-[hsl(var(--primary)/0.22)]
          "
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3
          className="
            font-semibold
            text-[clamp(1rem,2.2vw,1.125rem)]
            leading-tight tracking-tight
            hyphens-none break-normal
          "
        >
          {title}
        </h3>
      </div>

      {/* Body */}
      <p
        className="
          mt-3
          text-[clamp(0.95rem,1.9vw,1rem)]
          leading-relaxed
          hyphens-none break-words [text-wrap:pretty]
          text-muted-foreground
        "
      >
        {description}
      </p>

      {/* Fokus-Overlay für Tastatur-Nutzer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 focus-within:ring-2 focus-within:ring-[hsl(var(--secondary))] dark:focus-within:ring-[hsl(var(--primary))]"
        aria-hidden="true"
      />
    </article>
  );
}

function HeroSectionBase() {
  useViewportVars();
  const picRef = useRef<HTMLPictureElement | null>(null);

  useEffect(() => {
    const onError = () => picRef.current?.classList.add("opacity-0");
    const img = picRef.current?.querySelector("img");
    img?.addEventListener("error", onError);
    return () => img?.removeEventListener("error", onError);
  }, []);

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-background text-foreground
        min-h-[calc(var(--vh,1vh)*100-var(--header-h,80px))]
        supports-[height:100dvh]:min-h-[calc(100dvh-var(--header-h,80px))]
      "
      aria-label="PAXUP  Digitalisierung & KI für den Mittelstand"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <picture ref={picRef} className="block h-full w-full">
          <source srcSet={heroWebp} type="image/webp" />
          <img
            src={heroPng}
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover object-center [image-rendering:-webkit-optimize-contrast]"
          />
        </picture>
      </div>

      {/* Overlays */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(120%_120%_at_80%_20%,hsl(var(--background)/0.72)_0%,transparent_55%),
              linear-gradient(180deg,hsl(var(--background)/0.72),hsl(var(--background)/0.78))]
          dark:bg-[radial-gradient(120%_120%_at_80%_20%,rgba(1,7,14,0.55)_0%,transparent_50%),linear-gradient(180deg,rgba(8,12,20,0.55),rgba(10,15,24,0.65))]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(90deg,hsl(var(--secondary)/0.14)_0%,hsl(var(--secondary)/0.10)_28%,transparent_60%)]
          mix-blend-screen
          dark:bg-[linear-gradient(90deg,hsl(var(--primary)/0.16)_0%,hsl(var(--primary)/0.10)_24%,transparent_58%)]
        "
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-12">
          {/* Headline & Copy */}
          <div className="max-w-3xl animate-fade-in [animation-fill-mode:both] [animation-delay:60ms] text-white">
            <h1
              className="
                font-bold tracking-tight leading-[1.14]
                text-[clamp(2.05rem,5vw,3.7rem)]
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]
                hyphens-none
                text-white
              "
            >
              <span className="block">Dein Unternehmen,</span>
              <span className="block">erfolgreich durch:</span>
              <span
                className="
                  mt-4 inline-block rounded-2xl border px-4 py-2.5
                  border-[hsl(var(--secondary)/0.45)] text-[hsl(var(--secondary))]
                  bg-[hsl(var(--secondary)/0.12)] backdrop-blur-[2px]
                  shadow-[0_12px_30px_-10px_hsl(var(--secondary)/0.45)]
                  dark:border-[hsl(var(--primary)/0.45)] dark:text-[hsl(var(--primary))]
                  dark:bg-[hsl(var(--primary)/0.15)] dark:shadow-[0_12px_30px_-10px_hsl(var(--primary)/0.45)]
                "
              >
                Digitalisierung &amp; KI
              </span>
            </h1>

            <div className="mt-5 space-y-4 md:mt-7 md:space-y-5">
              <p className="text-white/95 leading-[1.5] text-[clamp(1rem,2.9vw,1.25rem)] break-normal hyphens-none [text-wrap:balance] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                KI und Digitalisierung fühlen sich kompliziert an?
                <span className="font-semibold text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  {" "}
                  Wir machen es dir einfach.
                </span>
              </p>

              <p className="text-white/90 leading-[1.55] text-[clamp(0.95rem,2.7vw,1.125rem)] break-normal hyphens-none [text-wrap:pretty] drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]">
                Als dein Partner für KI, Digitalisierung und Automatisierung
                bekommst du{" "}
                <strong className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  Strategie &amp; Umsetzung
                </strong>{" "}
                aus einer Hand damit dein Unternehmen effizient und
                zukunftsfähig vorankommt.
              </p>
            </div>

            <div className="mt-7 md:mt-9 animate-fade-in [animation-fill-mode:both] [animation-delay:160ms]">
              <Button
                size="lg"
                className="
                  bg-[hsl(var(--secondary))] text-white hover:brightness-95
                  dark:bg-[hsl(var(--primary))] dark:hover:brightness-95
                  px-7 py-5 text-[clamp(1rem,2.8vw,1.125rem)]
                  shadow-[0_12px_28px_-10px_hsl(var(--secondary)/0.55)]
                  dark:shadow-[0_12px_28px_-10px_hsl(var(--primary)/0.55)]
                  transition-all duration-300 hover:scale-[1.02]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  focus-visible:ring-[hsl(var(--secondary))]
                  dark:focus-visible:ring-[hsl(var(--primary))]
                "
                onClick={() => window.open(CALENDLY_URL, "_blank")}
                aria-label="Kostenloses Beratungsgespräch vereinbaren"
              >
                Kostenloses Beratungsgespräch →
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="mt-auto animate-fade-in [animation-fill-mode:both] [animation-delay:260ms]">
            {/* 1 col <400px, 2 cols ~400px+, 4 cols ab lg */}
            <div className="grid grid-cols-1 [@media(min-width:400px)]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SERVICES.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* subtile Glows  adaptiv auf Tokens */}
      <div
        className="
          pointer-events-none absolute right-6 top-16 h-20 w-20 md:right-20 md:top-20 md:h-28 md:w-28
          rounded-full opacity-90
          bg-[radial-gradient(circle_at_30%_30%,hsl(var(--secondary)/0.42)_0%,transparent_60%)]
          dark:bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.45)_0%,transparent_60%)]
        "
        aria-hidden="true"
      />
      <div
        className="
          pointer-events-none absolute left-6 bottom-14 h-16 w-16 md:left-20 md:bottom-20 md:h-20 md:w-20
          rounded-full opacity-80
          bg-[radial-gradient(circle_at_60%_40%,hsl(var(--accent)/0.40)_0%,transparent_60%)]
        "
        aria-hidden="true"
      />
    </section>
  );
}

const HeroSection = memo(HeroSectionBase);
export default HeroSection;
