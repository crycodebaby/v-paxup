// src/components/ProblemSolutionSection.tsx
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Lock,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// Light- & Dark-Variante des Flow-Visuals
import PaxupFlowLogoLight from "@/assets/paxup-flow-logo.png";
import PaxupFlowLogoDark from "@/assets/for-dark-theme-flow-logo.png";

/** Problem → Lösung (Du-Ansprache) */
const problemSolutionPairs = [
  {
    problem: {
      icon: AlertTriangle,
      text: "Sorge, den Anschluss an den Wettbewerb zu verlieren?",
    },
    solution: {
      icon: TrendingUp,
      text: "Messbare Effizienzgewinne durch gezielten KI-Einsatz.",
    },
  },
  {
    problem: {
      icon: TrendingDown,
      text: "Hoher manueller Aufwand bremst dein Wachstum?",
    },
    solution: {
      icon: CheckCircle2,
      text: "Schlanke, automatisierte Prozesse, die mit dir skalieren.",
    },
  },
  {
    problem: {
      icon: Lock,
      text: "Bedenken bei Datenschutz & Datensicherheit?",
    },
    solution: {
      icon: ShieldCheck,
      text: "100% DSGVO-konforme Lösungen, gehostet in Deutschland.",
    },
  },
] as const;

const calendlyUrl = "https://cal.com/paxup";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vom digitalen Chaos zur klaren Ordnung
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Du kennst die Komplexität. Wir schaffen Synergien. Entdecke deinen
            direkten Weg zur digitalen Effizienz.
          </p>
        </div>

        {/* 3-Spalten Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          {/* Spalte 1: Probleme (Icon = Akzent-Rot, Text rechts/links je nach Breakpoint) */}
          <div className="w-full lg:w-1/3 space-y-8 lg:pr-12">
            {problemSolutionPairs.map(({ problem }, i) => (
              <div
                key={`problem-${i}`}
                className="flex items-start gap-4 text-left lg:text-right"
              >
                {/* Icon in roter Kapsel für immer perfekten Kontrast */}
                <span
                  className="
                    grid h-10 w-10 flex-shrink-0 place-content-center rounded-full
                    bg-[hsl(var(--secondary))] text-white
                    dark:bg-[hsl(var(--primary))] dark:text-white
                    shadow-sm ring-1 ring-white/15
                  "
                >
                  <problem.icon className="h-5 w-5" />
                </span>
                <p className="flex-1 text-lg text-muted-foreground">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mitte: Visual (Light/Dark) */}
          <div className="w-full max-w-md lg:w-auto lg:flex-1 px-4 my-8 lg:my-0">
            <img
              src={PaxupFlowLogoLight}
              alt="PAXUP: Vom digitalen Chaos zur Ordnung – Flow Visual"
              className="block dark:hidden w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <img
              src={PaxupFlowLogoDark}
              alt="PAXUP: Vom digitalen Chaos zur Ordnung – Flow Visual (Dark)"
              className="hidden dark:block w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Spalte 3: Lösungen (Icon = Weiß auf roter Kapsel) */}
          <div className="w-full lg:w-1/3 space-y-8 lg:pl-12">
            {problemSolutionPairs.map(({ solution }, i) => (
              <div key={`solution-${i}`} className="flex items-start gap-4">
                <span
                  className="
                    grid h-10 w-10 flex-shrink-0 place-content-center rounded-full
                    bg-[hsl(var(--secondary))] text-white
                    dark:bg-[hsl(var(--primary))] dark:text-white
                    shadow-sm ring-1 ring-white/15
                  "
                >
                  <solution.icon className="h-5 w-5" />
                </span>
                <p className="flex-1 text-lg font-semibold text-foreground">
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-24">
          <Button
            size="lg"
            className="px-8 py-6 text-lg group"
            onClick={() => window.open(calendlyUrl, "_blank")}
          >
            Starte deine Transformation
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
