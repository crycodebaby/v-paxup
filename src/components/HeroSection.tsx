// src/components/HeroSection.tsx
import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Bot, Shield, DollarSign } from "lucide-react";

import heroPng from "@/assets/paxup-hero-bg.jpg";
import heroWebp from "@/assets/paxup-fallback-hero.webp";

const CALENDLY_URL = "https://calendly.com/paxup";

const SERVICES = [
  {
    icon: <Target className="h-6 w-6" aria-hidden="true" />,
    title: "Strategie-Entwicklung",
    description:
      "Schritt für Schritt zu messbaren KI-Ergebnissen – von Quick Wins bis Roadmap.",
  },
  {
    icon: <Bot className="h-6 w-6" aria-hidden="true" />,
    title: "Automatisierung durch KI",
    description:
      "Manuelle Routinearbeiten reduzieren: Tickets, Dokumente, Termine & mehr.",
  },
  {
    icon: <Shield className="h-6 w-6" aria-hidden="true" />,
    title: "DSGVO-konform in DE",
    description:
      "Hosting & Verarbeitung in Deutschland – mit klaren Richtlinien & Audit-Trails.",
  },
  {
    icon: <DollarSign className="h-6 w-6" aria-hidden="true" />,
    title: "Staatliche Förderung",
    description:
      "Wir lotsen durch passende Programme & Anträge – für maximale Zuschüsse.",
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

    // Kein "any": nutze die echte DOM-Typisierung (ist in lib.dom.d.ts enthalten)
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
        bg-[#0E1622] text-white
        min-h-[calc(var(--vh,1vh)*100-var(--header-h,80px))]
        supports-[height:100dvh]:min-h-[calc(100dvh-var(--header-h,80px))]
      "
      aria-label="PAXUP – Digitalisierung & KI für den Mittelstand"
    >
      {/* Background */}
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

      {/* Overlays — Kontrast & Rot-Akzent */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(120%_120%_at_80%_20%,rgba(1,7,14,0.55)_0%,transparent_50%),
              linear-gradient(180deg,rgba(8,12,20,0.55),rgba(10,15,24,0.65))]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(90deg,rgba(226,63,59,0.11)_0%,rgba(226,63,59,0.07)_24%,transparent_58%)]
          mix-blend-screen
        "
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-12">
          {/* Textblock */}
          <div className="max-w-3xl animate-fade-in [animation-fill-mode:both] [animation-delay:60ms]">
            <h1
              className="
                font-bold tracking-tight leading-[1.14]
                text-[clamp(2.05rem,5vw,3.7rem)]
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]
            "
            >
              <span className="block">Dein Unternehmen,</span>
              <span className="block">erfolgreich durch:</span>
              <span
                className="
                  mt-4 inline-block rounded-2xl border px-4 py-2.5
                  border-[#e23f3b]/50 text-[#e23f3b]
                  bg-[#e23f3b]/15 backdrop-blur-[2px]
                  shadow-[0_12px_30px_-10px_rgba(226,63,59,0.45)]
                "
              >
                Digitalisierung &amp; KI
              </span>
            </h1>

            <div className="mt-5 space-y-4 md:mt-7 md:space-y-5">
              <p className="text-white/95 leading-[1.5] text-[clamp(1rem,2.9vw,1.25rem)] break-words [hyphens:auto] [text-wrap:balance] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                KI und Digitalisierung fühlen sich kompliziert an?
                <span className="font-semibold text-[#e23f3b]">
                  {" "}
                  Wir machen es dir einfach.
                </span>
              </p>

              <p className="text-white/90 leading-[1.55] text-[clamp(0.95rem,2.7vw,1.125rem)] break-words [hyphens:auto] [text-wrap:balance] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                Als dein Partner für KI, Digitalisierung und Automatisierung
                bekommst du{" "}
                <strong className="text-[#e23f3b]">
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
                  bg-[#e23f3b] text-white hover:bg-[#d43a36]
                  px-7 py-5 text-[clamp(1rem,2.8vw,1.125rem)]
                  shadow-[0_12px_28px_-10px_rgba(226,63,59,0.55)]
                  transition-all duration-300 hover:scale-[1.02]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e23f3b]
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
            {/* 1 col <380px, 2 cols ab 380px, 4 cols ab md */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className="
          group flex h-full flex-col
          rounded-2xl border border-white/10
          bg-white/10 backdrop-blur-sm
          p-5 sm:p-6
          transition-all duration-300
          hover:-translate-y-1 hover:scale-[1.02]
          hover:border-white/20 hover:shadow-lg
          focus-within:ring-2 focus-within:ring-[#e23f3b]/50
        "
                  style={{ animationDelay: `${320 + i * 80}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
              shrink-0 rounded-xl bg-[#e23f3b]/20 text-[#e23f3b]
              p-3 transition-colors duration-300
              group-hover:bg-[#e23f3b]/25
            "
                      aria-hidden="true"
                    >
                      {s.icon}
                    </div>
                    <h3
                      className="
              text-white font-semibold
              text-[clamp(1rem,2.2vw,1.125rem)]
              leading-snug tracking-tight
              break-words [overflow-wrap:anywhere] [hyphens:auto] [text-wrap:balance]
              group-hover:text-[#e23f3b] transition-colors
            "
                    >
                      {s.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <p
                    className="
            mt-3 text-white/85
            text-[clamp(0.9rem,1.8vw,1rem)]
            leading-relaxed flex-1
            break-words [overflow-wrap:anywhere] [hyphens:auto] [text-wrap:pretty]
          "
                  >
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* dezente Glows */}
      <div
        className="
          pointer-events-none absolute right-6 top-16 h-20 w-20 md:right-20 md:top-20 md:h-28 md:w-28
          rounded-full opacity-90
          bg-[radial-gradient(circle_at_30%_30%,rgba(226,63,59,0.45)_0%,transparent_60%)]
        "
        aria-hidden="true"
      />
      <div
        className="
          pointer-events-none absolute left-6 bottom-14 h-16 w-16 md:left-20 md:bottom-20 md:h-20 md:w-20
          rounded-full opacity-80
          bg-[radial-gradient(circle_at_60%_40%,rgba(33,49,68,0.45)_0%,transparent_60%)]
        "
        aria-hidden="true"
      />
    </section>
  );
}

const HeroSection = memo(HeroSectionBase);
export default HeroSection;
