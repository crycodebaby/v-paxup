import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PAXUP hat uns eine KI-Strategie mit Sinn und Verstand entwickelt. Wir implementieren schrittweise und sehen bereits konkrete Erfolge.",
      company: "Mittelständisches Beratungsunternehmen",
      industry: "Dienstleistung",
      rating: 5
    },
    {
      quote: "120 Angebote pro Tag zu prüfen war aufwendig. PAXUP hat das Problem mit KI gelöst - wir bekommen direkt eine präzise Auswertung.",
      company: "Großhändler", 
      industry: "B2B Handel",
      rating: 5
    },
    {
      quote: "Automatische Angebotserstellung für Handwerker - es geht nicht alles, aber 40% aller Fälle laufen jetzt vollautomatisch ab.",
      company: "Handwerksbetrieb",
      industry: "Handwerk",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Über 150 erfolgreiche Projekte im Mittelstand
          </h2>
          <p className="text-xl text-muted-foreground">
            Das sagen unsere Kunden über ihre Digitalisierung mit PAXUP
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-card transition-smooth">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Attribution */}
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">{testimonial.company}</p>
                <p>{testimonial.industry}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-primary px-8 py-4 rounded-full text-white font-bold text-lg shadow-button">
            <span>✓ 150+ erfolgreiche Projekte</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>✓ 100% Kundenzufriedenheit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;