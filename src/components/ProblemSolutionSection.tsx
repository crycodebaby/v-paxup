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

// WICHTIG: Benenne deine Bilddatei für eine saubere Projektstruktur bitte um zu "paxup-flow-logo.png"
import PaxupFlowLogo from "@/assets/paxup-flow-logo.png";

const problemSolutionPairs = [
  {
    problem: {
      icon: AlertTriangle,
      text: "Sorge, den Anschluss an den Wettbewerb zu verlieren.",
    },
    solution: {
      icon: TrendingUp,
      text: "Messbare Effizienzgewinne durch gezielten KI-Einsatz.",
    },
  },
  {
    problem: {
      icon: TrendingDown,
      text: "Hoher manueller Aufwand bremst das Wachstum.",
    },
    solution: {
      icon: CheckCircle2,
      text: "Schlanke, automatisierte Prozesse, die mit Ihnen wachsen.",
    },
  },
  {
    problem: {
      icon: Lock,
      text: "Bedenken wegen Datenschutz und Datensicherheit.",
    },
    solution: {
      icon: ShieldCheck,
      text: "100% DSGVO-konforme Lösungen, gehostet in Deutschland.",
    },
  },
];

const ProblemSolutionSection = () => {
  const calendlyUrl = "https://calendly.com/paxup";

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Die zentrale Botschaft */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vom digitalen Chaos zur klaren Ordnung
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sie kennen die Komplexität. Wir schaffen die Synergie. Entdecken Sie
            Ihren direkten Weg zur digitalen Effizienz.
          </p>
        </div>

        {/* Das neue, fließende Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {/* Spalte 1: Die Probleme (Das "Chaos" - links) */}
          <div className="w-full lg:w-1/3 space-y-8 lg:pr-12">
            {problemSolutionPairs.map((pair, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-right lg:text-left"
              >
                <div className="flex-1 lg:order-2">
                  <p className="text-lg text-muted-foreground">
                    {pair.problem.text}
                  </p>
                </div>
                {/* Rote Icons signalisieren die "Pain Points" */}
                <pair.problem.icon className="w-8 h-8 text-secondary flex-shrink-0 lg:order-1" />
              </div>
            ))}
          </div>

          {/* Das Herzstück: Dein Bild, befreit und prominent */}
          <div className="w-full max-w-md lg:w-auto lg:flex-1 px-4 my-8 lg:my-0">
            <img
              src={PaxupFlowLogo}
              alt="PAXUP verwandelt digitales Chaos in klare Ordnung"
              className="w-full h-auto"
            />
          </div>

          {/* Spalte 3: Die Lösungen (Die "Ordnung" - rechts) */}
          <div className="w-full lg:w-1/3 space-y-8 lg:pl-12">
            {problemSolutionPairs.map((pair, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Blaue/Primär-Icons symbolisieren Stabilität und Erfolg */}
                <pair.solution.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground">
                    {pair.solution.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Der finale Call-to-Action */}
        <div className="text-center mt-20 md:mt-24">
          <Button
            size="lg"
            className="px-8 py-6 text-lg group"
            onClick={() => window.open(calendlyUrl, "_blank")}
          >
            Starten Sie Ihre Transformation
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
