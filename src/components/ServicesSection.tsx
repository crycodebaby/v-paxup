// src/components/ServicesSection.tsx
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Database,
  Shield,
  Zap,
  Brain,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import UpMark from "@/assets/logo/Up_rot.png";

/* ----------------------------- Types & Data ----------------------------- */

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  benefit: string;
};

const SERVICES: Readonly<Service[]> = [
  {
    icon: Database,
    title: "Digitale Datenbasis",
    description: "Ordnung & Transparenz für bessere, schnelle Entscheidungen.",
    details:
      "Suchen Sie ständig nach E-Mails, Verträgen oder der richtigen Ansprechperson? Diese Zeitverschwendung beenden wir. Wir schaffen ein zentrales System, in dem jede Information sofort griffbereit ist – egal ob auf der Baustelle, im Pflegedienst oder im Vertrieb.",
    benefit: "Ihr Vorteil: Entscheidungen in Sekunden, nicht in Stunden.",
  },
  {
    icon: Shield,
    title: "Datenschutz & Sicherheit",
    description: "DSGVO-konform. Hosting & Verarbeitung in Deutschland.",
    details:
      "Die Sorge vor DSGVO-Abmahnungen und Datenpannen kostet Sie den Schlaf? Wir geben Ihnen rechtliche Sicherheit. Mit Servern ausschließlich in Deutschland ist Ihr Unternehmen geschützt und Sie können sich wieder voll auf Ihr Geschäft konzentrieren.",
    benefit:
      "Ihr Vorteil: Volle Konzentration aufs Wesentliche, ohne Angst vor Strafen.",
  },
  {
    icon: Zap,
    title: "Systemintegration",
    description:
      "Tools verbinden, Workflows automatisieren, Medienbrüche schließen.",
    details:
      "Ihre Mitarbeiter tippen Daten von einem System ins andere? Das ist der teuerste Zeitfresser in Ihrem Betrieb. Wir vernetzen Ihre Insellösungen, damit Aufträge, Kundendaten und Rechnungen automatisch fließen und die Zettelwirtschaft endlich aufhört.",
    benefit:
      "Ihr Vorteil: Weniger Fehler, mehr Tempo und Zeit für wertschöpfende Arbeit.",
  },
  {
    icon: Brain,
    title: "Strategische KI-Beratung",
    description:
      "KI pragmatisch einsetzen – messbar, verständlich, förderfähig.",
    details:
      "Ertrinken Sie in Routineaufgaben, während Ihre Konkurrenz digitalisiert? Wir finden den einen KI-Hebel, der bei Ihnen den größten Gewinn bringt – sei es bei der Angebots-Erstellung, Tourenplanung oder Kundenbetreuung. Pragmatisch, verständlich und oft staatlich gefördert.",
    benefit:
      "Ihr Vorteil: Arbeiten Sie am statt im Unternehmen und sichern Sie Ihre Zukunftsfähigkeit.",
  },
];

/* ----------------------------- Hooks & Utils ---------------------------- */

function useMediaQuery(query: string) {
  const getMatch = () =>
    typeof window !== "undefined" &&
    "matchMedia" in window &&
    window.matchMedia(query).matches;

  const [matches, setMatches] = useState<boolean>(() => getMatch());

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);

    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, [query]);

  return matches;
}

/** < 640px => Single-Open, ≥640px => Multi-Open */
function useAllowsMultiOpen() {
  return useMediaQuery("(min-width: 640px)");
}

/** Ab 640px (sm) → Floating Popover statt Inline-Expand (verhindert Button-Springen) */
function useFloatingDetails() {
  return useMediaQuery("(min-width: 640px)");
}

/**
 * AnimatedDisclosure – sanftes Expand/Collapse (für Mobile <640px)
 */
function AnimatedDisclosure({
  open,
  children,
  onRest,
}: {
  open: boolean;
  children: React.ReactNode;
  onRest?: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);
  const firstMount = useRef(true);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (reduceMotion) {
      el.style.height = open ? "auto" : "0px";
      el.style.opacity = open ? "1" : "0";
      el.style.transform = open ? "translateY(0)" : "translateY(-4px)";
      onRest?.();
      return;
    }

    const startH = el.getBoundingClientRect().height;

    // Zielhöhe messen
    el.style.height = "auto";
    const targetH = open ? el.getBoundingClientRect().height : 0;
    // zurück zum Start
    el.style.height = `${startH}px`;

    const distance = Math.abs(targetH - startH);
    const duration = Math.min(480, Math.max(220, distance));
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let startTs: number | null = null;

    // keine nackten „unused expressions“ mehr – Reflow erzwingen via read-then-animate
    el.style.willChange = "height, opacity, transform, box-shadow";

    const from = startH;
    const to = targetH;

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      const k = ease(p);
      const h = from + (to - from) * k;
      el.style.height = `${h}px`;

      if (open) {
        el.style.opacity = String(0.6 + 0.4 * k);
        el.style.transform = `translateY(${(-6 + 6 * k).toFixed(2)}px)`;
        el.style.boxShadow =
          k > 0.2
            ? `0 18px 36px -18px hsl(var(--secondary)/${0.25 * k})`
            : "none";
      } else {
        el.style.opacity = String(0.6 + 0.4 * (1 - k));
        el.style.transform = `translateY(${(-6 + 6 * (1 - k)).toFixed(2)}px)`;
        el.style.boxShadow =
          k < 0.8
            ? `0 18px 36px -18px hsl(var(--secondary)/${0.25 * (1 - k)})`
            : "none";
      }

      if (p < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        el.style.height = open ? "auto" : "0px";
        el.style.opacity = open ? "1" : "0";
        el.style.transform = open ? "translateY(0)" : "translateY(-4px)";
        el.style.boxShadow = "none";
        el.style.willChange = "auto";
        onRest?.();
      }
    };

    if (firstMount.current) {
      firstMount.current = false;
      el.style.height = open ? "auto" : "0px";
      el.style.opacity = open ? "1" : "0";
      el.style.transform = open ? "translateY(0)" : "translateY(-4px)";
      return;
    }

    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
    }
    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [open, onRest, reduceMotion]);

  return (
    <div
      ref={wrapperRef}
      className="
        overflow-hidden rounded-xl border border-border/70 bg-background/70
        dark:bg-background/60 transition-[height,opacity,transform]
      "
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}

/* ----------------------------- Service Card ----------------------------- */

function ServiceCard({
  idx,
  service,
  open,
  setOpenForIndex,
  toggleInline,
  allowsMultiOpen,
  isFloating,
  autoScrollOnOpen,
}: {
  idx: number;
  service: Service;
  open: boolean;
  setOpenForIndex: (i: number, v: boolean) => void; // für Popover (≥640px)
  toggleInline: (i: number) => void; // für Inline (<640px)
  allowsMultiOpen: boolean;
  isFloating: boolean; // ab 640px
  autoScrollOnOpen: (el: HTMLElement | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && !allowsMultiOpen && !isFloating)
      autoScrollOnOpen(cardRef.current);
  }, [open, allowsMultiOpen, isFloating, autoScrollOnOpen]);

  const Head = (
    <>
      <div
        className="
          mb-5 grid h-16 w-16 place-content-center rounded-2xl
          bg-[hsl(var(--secondary)/0.14)] ring-1 ring-[hsl(var(--secondary)/0.35)]
          dark:bg-[hsl(var(--primary)/0.18)] dark:ring-[hsl(var(--primary)/0.35)]
          shadow-button transition-transform duration-300 group-hover:scale-105
        "
      >
        <service.icon className="h-8 w-8 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
      </div>

      <h3
        id={`service-title-${idx}`}
        className="text-lg md:text-xl font-semibold tracking-tight hyphens-none break-words"
      >
        {service.title}
      </h3>

      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      <div className="mt-6 w-full">
        <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--secondary)/0.55)] to-transparent dark:via-[hsl(var(--primary)/0.55)]" />
      </div>
    </>
  );

  const TriggerButton = ({
    onClick,
    ariaExpanded,
  }: {
    onClick: () => void;
    ariaExpanded?: boolean;
  }) => (
    <button
      type="button"
      className="
        inline-flex items-center gap-2 rounded-full px-3 py-1.5
        text-xs md:text-sm font-medium
        text-[hsl(var(--secondary))] hover:brightness-110
        dark:text-[hsl(var(--primary))] dark:hover:brightness-110
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary))]
        dark:focus-visible:ring-[hsl(var(--primary))]
        transition-colors select-none
      "
      aria-expanded={ariaExpanded}
      aria-controls={`service-panel-${idx}`}
      aria-labelledby={`service-title-${idx}`}
      onClick={onClick}
    >
      Mehr erfahren
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      />
    </button>
  );

  return (
    <Card
      ref={cardRef}
      className="
        group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground
        p-6 md:p-8 shadow-card backdrop-blur supports-[backdrop-filter]:bg-card/95
        transition-all duration-300 hover:shadow-lg h-full
      "
    >
      {/* Ambient Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(20rem 14rem at 50% 0%, hsl(var(--secondary)/0.12), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100 dark:group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(20rem 14rem at 50% 0%, hsl(var(--primary)/0.10), transparent 70%)",
        }}
      />

      {/* 3-Zeilen-Grid: Content (1fr) | Button (auto) | Panel/Overlay (auto) */}
      <div className="relative grid h-full grid-rows-[minmax(0,1fr)_auto_auto] items-stretch text-center">
        {/* Row 1 */}
        <div className="row-start-1 row-end-2 flex flex-col items-center">
          {Head}
        </div>

        {/* Row 2 – Trigger */}
        <div className="row-start-2 row-end-3 pt-3">
          {isFloating ? (
            <Popover.Root
              open={open}
              onOpenChange={(v) => setOpenForIndex(idx, v)}
            >
              <Popover.Trigger asChild>
                <TriggerButton
                  onClick={() => setOpenForIndex(idx, !open)}
                  ariaExpanded={open}
                />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  side="bottom"
                  align="center"
                  collisionPadding={12}
                  className="
                    z-50 w-[min(calc(100vw-2rem),28rem)]
                    rounded-2xl border border-border/60 bg-card/95 backdrop-blur
                    p-5 shadow-elegant animate-fade-in text-left
                  "
                >
                  <p className="text-sm md:text-[0.95rem] leading-relaxed">
                    {service.details}
                  </p>
                  <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed font-semibold">
                    {service.benefit}
                  </p>
                  <Popover.Arrow className="fill-current text-card" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          ) : (
            <TriggerButton
              onClick={() => toggleInline(idx)}
              ariaExpanded={open}
            />
          )}
        </div>

        {/* Row 3 – Inline Panel nur < 640px */}
        {!isFloating && (
          <div
            id={`service-panel-${idx}`}
            role="region"
            className="row-start-3 row-end-4 mt-3 w-full"
          >
            <AnimatedDisclosure open={open}>
              <div className="text-left">
                <p className="text-sm md:text-[0.95rem] leading-relaxed hyphens-none">
                  {service.details}
                </p>
                <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed font-semibold">
                  {service.benefit}
                </p>
              </div>
            </AnimatedDisclosure>
          </div>
        )}
      </div>
    </Card>
  );
}

/* ------------------------------- Section -------------------------------- */

function ServicesSectionBase() {
  const allowsMultiOpen = useAllowsMultiOpen(); // ✅ nur top-level
  const isFloating = useFloatingDetails(); // ✅ Popover ab 640px
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const setOpenForIndex = (i: number, v: boolean) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (v) {
        if (!allowsMultiOpen) next.clear();
        next.add(i);
      } else {
        next.delete(i);
      }
      return next;
    });
  };

  const toggleInline = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (allowsMultiOpen) {
        next.has(i) ? next.delete(i) : next.add(i);
      } else {
        next.clear();
        if (!prev.has(i)) next.add(i);
      }
      return next;
    });
  };

  const autoScrollOnOpen = (el: HTMLElement | null) => {
    if (!el) return;
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "nearest",
      inline: "nearest",
    });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Hintergrund */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
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
      <img
        aria-hidden
        src={UpMark}
        alt=""
        className="pointer-events-none select-none absolute -z-10 right-[-2.5rem] top-[12%] hidden sm:block w-[200px] opacity-[0.08] rotate-[-10deg]"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Leistungen für den&nbsp;Mittelstand
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            Digitalisierung, Prozessautomatisierung &{" "}
            <span className="text-[hsl(var(--secondary))] font-semibold dark:text-[hsl(var(--primary))]">
              KI
            </span>{" "}
            – pragmatisch, sicher, förderfähig.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Analyse", "Strategie", "Umsetzung", "Enablement"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[hsl(var(--secondary)/0.35)] bg-[hsl(var(--secondary)/0.10)] px-3 py-1 text-sm text-[hsl(var(--secondary))] backdrop-blur dark:border-[hsl(var(--primary)/0.35)] dark:bg-[hsl(var(--primary)/0.12)] dark:text-[hsl(var(--primary))]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              idx={i}
              service={service}
              open={openSet.has(i)}
              setOpenForIndex={setOpenForIndex}
              toggleInline={toggleInline}
              allowsMultiOpen={allowsMultiOpen}
              isFloating={isFloating}
              autoScrollOnOpen={autoScrollOnOpen}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-8 md:px-10 md:py-10 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]" />
            <h3 className="text-2xl font-bold text-white">
              Digitalisierung mit Wirkung
            </h3>
            <p className="mt-3 text-white/85">
              Von der sauberen Datenbasis bis zur KI-gestützten Automatisierung
              – wir verbinden{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold dark:text-[hsl(var(--primary))]">
                Strategie
              </span>
              ,{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold dark:text-[hsl(var(--primary))]">
                Umsetzung
              </span>{" "}
              und{" "}
              <span className="text-[hsl(var(--secondary))] font-semibold dark:text-[hsl(var(--primary))]">
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

const ServicesSection = memo(ServicesSectionBase);
export default ServicesSection;
