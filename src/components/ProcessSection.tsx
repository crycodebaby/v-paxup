import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Target, Cog, ChevronDown, ChevronRight, Clock, Users, Zap } from "lucide-react";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analyse",
      description: "Wir prüfen Ihre aktuellen Prozesse und Potenziale.",
      detailedDescription: "In der ersten Phase analysieren wir gemeinsam mit Ihnen Ihre bestehenden Geschäftsprozesse und identifizieren konkrete Digitalisierungspotenziale.",
      duration: "1-2 Wochen",
      examples: [
        "Prozessanalyse und Schwachstellenidentifikation",
        "Potenzialanalyse für KI-Einsatz",
        "Bewertung der aktuellen IT-Infrastruktur",
        "Ermittlung von schnellen Erfolgen"
      ],
      deliverables: "Detaillierte Analyse mit Handlungsempfehlungen"
    },
    {
      number: "02", 
      icon: Target,
      title: "Strategie",
      description: "Wir entwickeln Ihren individuellen Fahrplan zur Digitalisierung und KI-Umsetzung.",
      detailedDescription: "Basierend auf der Analyse erstellen wir eine maßgeschneiderte Digitalisierungsstrategie mit konkreten Umsetzungsschritten und Zeitplan.",
      duration: "1 Woche",
      examples: [
        "Individueller Digitalisierungsfahrplan",
        "KI-Implementierungsplan mit Prioritäten",
        "Technologie-Auswahl und -Bewertung",
        "ROI-Kalkulation und Budgetplanung"
      ],
      deliverables: "Strategiedokument mit Umsetzungsfahrplan"
    },
    {
      number: "03",
      icon: Cog,
      title: "Umsetzung", 
      description: "Wir automatisieren Prozesse, implementieren Systeme und sorgen für reibungslose Einführung.",
      detailedDescription: "In der Umsetzungsphase implementieren wir die definierten Lösungen schrittweise und stellen durch umfassende Schulungen den nachhaltigen Erfolg sicher.",
      duration: "4-12 Wochen",
      examples: [
        "Schrittweise Implementierung der Lösungen",
        "Mitarbeiterschulungen und Change Management",
        "Testing und Qualitätssicherung",
        "Go-Live Support und Nachbetreuung"
      ],
      deliverables: "Vollständig implementierte und getestete Lösung"
    }
  ];

  return (
    <section className="py-20 bg-muted/40 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            So digitalisieren wir Ihr Unternehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unser bewährter 3-Schritte-Prozess für erfolgreiche Digitalisierung
          </p>
        </div>
        
        {/* Interactive Tabs */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <Card 
                key={index} 
                className={`transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive 
                    ? "shadow-card border-primary/20 bg-gradient-subtle" 
                    : "shadow-soft hover:shadow-card border-border"
                }`}
                onClick={() => setActiveStep(isActive ? -1 : index)}
              >
                {/* Tab Header */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-6">
                    {/* Step Number */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-button transition-all duration-300 ${
                      isActive ? "bg-gradient-primary scale-110" : "bg-gradient-primary"
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-primary/20" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-6 h-6 transition-all duration-300 ${
                        isActive ? "text-primary scale-110" : "text-primary"
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    
                    {/* Expand Icon */}
                    <div className="flex-shrink-0">
                      {isActive ? (
                        <ChevronDown className="w-6 h-6 text-primary transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-muted-foreground transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {isActive && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 animate-fade-in">
                    <div className="ml-22 space-y-6">
                      {/* Detailed Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.detailedDescription}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Duration & Deliverables */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent" />
                            <div>
                              <h5 className="font-semibold">Dauer</h5>
                              <p className="text-sm text-muted-foreground">{step.duration}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-primary mt-1" />
                            <div>
                              <h5 className="font-semibold mb-2">Ergebnis</h5>
                              <p className="text-sm text-muted-foreground">{step.deliverables}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Examples */}
                        <div>
                          <div className="flex items-start gap-3 mb-3">
                            <Users className="w-5 h-5 text-accent mt-1" />
                            <h5 className="font-semibold">Was wir konkret machen</h5>
                          </div>
                          <ul className="space-y-2">
                            {step.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
            Jetzt mit KI in deinem Unternehmen starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;