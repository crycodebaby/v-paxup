// src/components/ProblemSolutionSection.tsx

import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  HelpCircle,
  Bot,
  Shield,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";

// 1. Wir definieren Problem-Lösungs-Paare. Das ist die Basis unserer Story.
const problemSolutionPairs = [
  {
    problem: {
      icon: HelpCircle,
      text: "Unsicherheit, wo man überhaupt anfangen soll.",
    },
    solution: {
      icon: Zap,
      text: "Klarer Stufenplan, der sofort umsetzbar ist.",
    },
  },
  {
    problem: {
      icon: TrendingUp,
      text: "Sorge, den Anschluss an den Wettbewerb zu verlieren.",
    },
    solution: {
      icon: Bot,
      text: "Gezielter KI-Einsatz für messbare Effizienzgewinne.",
    },
  },
  {
    problem: {
      icon: Shield,
      text: "Bedenken wegen Datenschutz und Datensicherheit.",
    },
    solution: {
      icon: CheckCircle2,
      text: "100% DSGVO-konforme Lösungen, gehostet in DE.",
    },
  },
];

// Ein starkes, visuelles Kernelement
const CentralVisual = () => (
  <div className="relative flex items-center justify-center p-8 my-8 md:my-0">
    <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20"></div>
    <img
      src="/assets/digital-success.png" // Placeholder - hier das Bild der Transformation einfügen
      alt="Von Komplexität zu Klarheit - PAXUP"
      className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-elegant"
    />
  </div>
);

const ProblemSolutionSection = () => {
  const calendlyUrl = "https://calendly.com/paxup";

  return (
    <section className="py-20 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Die zentrale Botschaft */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vom digitalen Stillstand zum klaren Vorsprung
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sie kennen die Probleme. Wir liefern die passenden Lösungen –
            pragmatisch und direkt auf den Mittelstand zugeschnitten.
          </p>
        </div>

        {/* Das "Brücken"-Layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Spalte 1: Die Probleme (Das "Vorher") */}
          <div className="space-y-6">
            {problemSolutionPairs.map((pair, index) => (
              <div key={index} className="flex items-start gap-4">
                <pair.problem.icon className="w-6 h-6 text-muted-foreground/80 mt-1 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">
                  {pair.problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Spalte 2: Die Brücke (Das visuelle Zentrum) */}
          <div className="hidden md:block">
            <CentralVisual />
          </div>

          {/* Spalte 3: Die Lösungen (Das "Nachher") */}
          <div className="space-y-6 p-8 bg-muted/30 border border-border rounded-2xl">
            {problemSolutionPairs.map((pair, index) => (
              <div key={index} className="flex items-start gap-4">
                <pair.solution.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg font-semibold text-foreground">
                  {pair.solution.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Der finale Call-to-Action */}
        <div className="text-center mt-16 md:mt-24">
          <Button size="lg" onClick={() => window.open(calendlyUrl, "_blank")}>
            Ihren klaren Weg jetzt finden
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
