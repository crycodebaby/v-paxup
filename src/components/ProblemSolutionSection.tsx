import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, Shield, TrendingDown } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Wie kann ich KI sinnvoll einsetzen?",
      description: ""
    },
    {
      icon: TrendingDown,
      title: "Ist mein Wettbewerb schon weiter als ich?",
      description: ""
    },
    {
      icon: Clock,
      title: "Geht das auch ohne eigene IT-Abteilung?",
      description: ""
    },
    {
      icon: Shield,
      title: "Was passiert mit unseren Daten?",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-muted/20 border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Das Hauptproblem im Mittelstand
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            "Wo fange ich überhaupt an?"
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-card transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Solution */}
          <div className="bg-gradient-subtle p-8 lg:p-12 rounded-2xl shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Ihre Lösung: PAXUP
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mit PAXUP erhält Ihr Unternehmen eine klare Digitalstrategie. Wir verbinden 
              Prozessautomatisierung, KI-Beratung und Fördermittelberatung – speziell für 
              den Mittelstand. DSGVO-konform, praxisnah und sofort spürbar.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
              👉 Digitalisierung starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;