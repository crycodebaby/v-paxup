import {
  X,
  Check,
  Clock,
  Shield,
  TrendingUp,
  Settings,
  Link,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const ComparisonSection = () => {
  const comparisonData = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Zeitaufwand",
      without: "Stundenlanges Recherchieren und Testen",
      with: "1x pro Monat 60 Minuten Strategiemeeting",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Datenschutzrisiken",
      without: "Hohe Unsicherheit bei rechtlicher Lage",
      with: "DSGVO-Check und rechtssichere Umsetzung",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Erfolg",
      without: "Keine messbare Wirkung im Alltag",
      with: "Klare KPIs: Messbare Kosteneinsparungen & Prozessnutzen",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Komplexität",
      without: "Technisches Chaos und Tool-Überforderung",
      with: "Verständliche Umsetzung ohne Vorwissen",
    },
    {
      icon: <Link className="w-5 h-5" />,
      title: "Integration",
      without: "Einzelne Tools ohne Zusammenhang",
      with: "Voll integrierte Lösung in bestehende Prozesse",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Strategie",
      without: "Keine klare Zieldefinition und Stillstand",
      with: "Individuelle KI-Roadmap mit konkreten Schritten",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Der Unterschied ist klar erkennbar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Während andere im KI-Chaos versinken, führen wir Sie sicher zum
              Erfolg
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Without Guidance Column */}
            <Card className="p-8 border-destructive/20 bg-destructive/5 animate-scale-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-destructive mb-2">
                  Wenn du KI ohne Begleitung einsetzt
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <div
                    key={`without-${index}`}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <div className="text-destructive">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.without}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* With PAXUP Column */}
            <Card
              className="p-8 border-primary/20 bg-primary/5 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Wenn PAXUP deine KI-Strategie übernimmt
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <div
                    key={`with-${index}`}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.with}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
