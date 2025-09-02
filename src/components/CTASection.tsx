import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Starten Sie jetzt in die digitale Zukunft
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Unternehmen digitalisieren und 
            zukunftssicher aufstellen.
          </p>
          
          <div className="space-y-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-button transform hover:-translate-y-1 transition-smooth font-bold"
            >
              👉 Kostenloses 30-Minuten-Erstgespräch buchen
            </Button>
            
            <p className="text-lg opacity-80">
              <span className="font-semibold">Begrenzte Plätze für Beratungsgespräche</span> – 
              sichern Sie sich jetzt Ihren Termin.
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Kostenlos & unverbindlich</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>30 Minuten persönliche Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Sofortige Terminbestätigung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;