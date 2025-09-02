import { Card } from "@/components/ui/card";
import { Database, Shield, Zap, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Digitale Datenbasis",
      description: "Ordnung und Transparenz für effiziente Entscheidungen"
    },
    {
      icon: Shield,
      title: "Datenschutz & Sicherheit", 
      description: "DSGVO-konform, Hosting in Deutschland"
    },
    {
      icon: Zap,
      title: "Systemintegration",
      description: "Passende digitale Tools und Automatisierungen"
    },
    {
      icon: Brain,
      title: "Strategische KI-Beratung",
      description: "Künstliche Intelligenz nutzen – praxisnah und verständlich"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unsere Leistungen für den Mittelstand
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            PAXUP ist spezialisiert auf Digitalisierung im Mittelstand, Prozessautomatisierung 
            und KI-Beratung. Unsere Lösungen sind förderfähig und machen Ihr Unternehmen zukunftssicher.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center shadow-soft hover:shadow-card transition-smooth group">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth shadow-button">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
        
        {/* SEO Content Box */}
        <div className="mt-16 bg-gradient-subtle p-8 lg:p-12 rounded-2xl shadow-card text-center">
          <h3 className="text-2xl font-bold mb-4">Digitalisierung im Mittelstand</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Als spezialisierte Digitalagentur verstehen wir die besonderen Herausforderungen 
            mittelständischer Unternehmen. Unsere maßgeschneiderten Lösungen für 
            Prozessautomatisierung, KI-Integration und digitale Transformation sind 
            praxiserprobt und sofort umsetzbar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;