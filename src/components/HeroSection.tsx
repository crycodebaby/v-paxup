import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Bot, Shield, DollarSign, type LucideIcon } from "lucide-react";
import heroPng from "@/assets/paxup-hero-bg.jpg";
import heroWebp from "@/assets/paxup-fallback-hero.webp";

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
    title: "Strategie, die trägt",
    description:
      "Von Quick Wins zur Roadmap – messbar, machbar, in deiner Sprache.",
    ariaLabel: "Strategische Entwicklung von Quick Wins zur Roadmap",
  },
  {
    icon: Bot,
    title: "KI als Helfer",
    description:
      "Bots & Automatisierung für Tickets, Dokumente und Termine – dort, wo es wirkt.",
    ariaLabel: "Automatisierung für Tickets, Dokumente und Termin-Management",
  },
  {
    icon: Shield,
    title: "DSGVO in Deutschland",
    description:
      "Hosting & Verarbeitung in DE. Nachvollziehbar, auditierbar, sicher.",
    ariaLabel: "DSGVO-konforme Verarbeitung und Hosting in Deutschland",
  },
  {
    icon: DollarSign,
    title: "Förderung ohne Aufwand",
    description:
      "Wir identifizieren Programme, übernehmen Anträge – du erhältst Zuschüsse.",
    ariaLabel: "Staatliche Förderung: Programme & Anträge",
  },
] as const;

/** Viewport-Variablen für saubere Mobile-Höhen */
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
        border border-border bg-card/90 supports-[backdrop-filter]:bg-card/80 backdrop-blur
        p-5 sm:p-6 shadow-soft transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-card
        focus-within:outline-none focus-within:ring-2 focus-within:ring-[hsl(var(--secondary))]
        dark:focus-within:ring-[hsl(var(--primary))]
      "
      aria-label={ariaLabel ?? title}
    >
      <div className="flex items-start gap-4">
        <div
          className="
            grid h-12 w-12 place-content-center shrink-0 rounded-xl
            bg-[hsl(var(--secondary)/0.12)] ring-1 ring-[hsl(var(--secondary)/0.35)]
            text-[hsl(var(--secondary))]
            transition-colors duration-300
            group-hover:bg-[hsl(var(--secondary)/0.16)]
            dark:bg-[hsl(var(--primary)/0.14)] dark:ring-[hsl(var(--primary)/0.35)]
            dark:text-[hsl(var(--primary))] dark:group-hover:bg-[hsl(var(--primary)/0.18)]
          "
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-base leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
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
        relative isolate overflow-hidden font-sans
        bg-background text-foreground
        min-h-[calc(var(--vh,1vh)*100-var(--header-h,80px))]
        supports-[height:100dvh]:min-h-[calc(100dvh-var(--header-h,80px))]
      "
      aria-label="PAXUP – Digitalisierung & KI für den Mittelstand"
    >
      {/* Hintergrundbild */}
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
          bg-[radial-gradient(120%_120%_at_80%_20%,hsl(var(--background)/0.72)_0%,transparent_55%),linear-gradient(180deg,hsl(var(--background)/0.72),hsl(var(--background)/0.78))]
          dark:bg-[radial-gradient(120%_120%_at_80%_20%,rgba(1,7,14,0.55)_0%,transparent_50%),linear-gradient(180deg,rgba(8,12,20,0.55),rgba(10,15,24,0.65))]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute inset-0 -z-10 mix-blend-screen
          bg-[linear-gradient(90deg,hsl(var(--secondary)/0.14)_0%,hsl(var(--secondary)/0.10)_28%,transparent_60%)]
          dark:bg-[linear-gradient(90deg,hsl(var(--primary)/0.16)_0%,hsl(var(--primary)/0.10)_24%,transparent_58%)]
        "
        aria-hidden="true"
      />

      {/* Inhalt */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-5">
          {/* Headline & Copy (links) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="mx-auto lg:mx-0 max-w-3xl">
              <h1 className="font-bold tracking-tight leading-tight text-4xl md:text-5xl xl:text-6xl">
                <span className="block">Dein Unternehmen,</span>
                <span className="block">erfolgreich durch:</span>
                <span
                  className="mt-4 inline-block rounded-2xl border px-4 py-2.5
                  border-[hsl(var(--secondary)/0.45)] text-[hsl(var(--secondary))]
                  bg-[hsl(var(--secondary)/0.12)] backdrop-blur-[2px]
                  shadow-button
                  dark:border-[hsl(var(--primary)/0.45)] dark:text-[hsl(var(--primary))]
                  dark:bg-[hsl(var(--primary)/0.15)]
                "
                >
                  Digitalisierung &amp; KI
                </span>
              </h1>

              <div className="mt-5 md:mt-7 space-y-4 md:space-y-5 max-w-[62ch] mx-auto lg:mx-0">
                <p className="text-lg md:text-xl leading-relaxed">
                  KI & Digitalisierung wirken erst, wenn sie deinen Alltag
                  entlasten.{" "}
                  <strong className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                    Wir bringen beides zusammen
                  </strong>{" "}
                  – pragmatisch, sicher, messbar.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Strategie, Umsetzung und Betreuung aus einer Hand: klare
                  Ziele, schnelle Go-Lives, sichtbarer ROI.
                </p>
              </div>

              <div className="mt-7 md:mt-9">
                <Button
                  size="lg"
                  className="px-7 py-5 text-lg shadow-button transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => window.open(CALENDLY_URL, "_blank")}
                  aria-label="Kostenloses Beratungsgespräch vereinbaren"
                >
                  Kostenloses Beratungsgespräch →
                </Button>
              </div>
            </div>
          </div>

          {/* Service-Karten (rechts) */}
          <div className="lg:col-span-2">
            {/* Auto-fit verhindert Quetschen, skaliert bis 4K */}
            <div
              className="
                grid gap-4 sm:gap-6
                [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
              "
            >
              {SERVICES.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dekorative Glows */}
      <div
        className="pointer-events-none absolute right-6 top-16 h-24 w-24 md:right-20 md:top-20 md:h-32 md:w-32 rounded-full opacity-90
        bg-[radial-gradient(circle_at_30%_30%,hsl(var(--secondary)/0.35)_0%,transparent_60%)]
        dark:bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.45)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-6 bottom-14 h-16 w-16 md:left-20 md:bottom-20 md:h-24 md:w-24 rounded-full opacity-80
        bg-[radial-gradient(circle_at_60%_40%,hsl(var(--accent)/0.30)_0%,transparent_60%)]"
        aria-hidden="true"
      />
    </section>
  );
}

const HeroSection = memo(HeroSectionBase);
export default HeroSection;
