import { Button } from "@/components/ui/button";

const ComparisonCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Wählen Sie den smarten Weg zur KI-Integration
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Vermeiden Sie teure Fehler und setzen Sie von Anfang an auf die richtige KI-Strategie. 
            Lassen Sie uns gemeinsam Ihren individuellen Digitalisierungsplan entwickeln.
          </p>
          
          <Button 
            variant="default" 
            size="lg" 
            className="text-lg px-8 py-6 shadow-button hover:-translate-y-1 transition-smooth"
            onClick={() => window.open('https://calendly.com/paxup', '_blank')}
          >
            🚀 Jetzt kostenlose Strategieberatung sichern
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            30 Minuten persönliche Beratung • Kostenlos & unverbindlich
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCTA;