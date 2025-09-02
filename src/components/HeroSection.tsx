import { Button } from "@/components/ui/button";
import { Target, Bot, Shield, DollarSign } from "lucide-react";
// Using uploaded network background image

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/0f034a48-ad79-4548-99b9-fe42330d0806.png)` }}
      />
      {/* Professional overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-overlay/30 backdrop-blur-[0.5px]" />
      
      {/* Main content container */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            
            {/* Left column - Main content */}
            <div className="lg:col-span-7 space-y-10">
              {/* Hero text section */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                    <span className="block text-white mb-4">
                      Dein Unternehmen,
                    </span>
                    <span className="block text-white mb-6">
                      erfolgreich durch:
                    </span>
                    <span className="inline-block bg-gradient-primary bg-clip-text text-transparent border-2 border-white/30 px-8 py-4 rounded-2xl backdrop-blur-sm bg-white/10 shadow-glow">
                      Digitalisierung & KI
                    </span>
                  </h1>
                  
                  <div className="space-y-6 max-w-3xl">
                    <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                      KI und Digitalisierung fühlen sich kompliziert an? 
                      <span className="text-primary"> Wir machen es dir einfach.</span>
                    </p>
                    
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      Wir krempeln die Ärmel hoch: Als dein Partner für KI, Digitalisierung und Automatisierung bekommst 
                      du bei uns <strong className="text-primary">Strategie & Umsetzung</strong> aus einer Hand. So bringst du dein Unternehmen effizient und 
                      zukunftsfähig voran.
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button variant="cta" size="lg" className="text-lg px-10 py-6 shadow-button hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    Kostenloses Beratungsgespräch →
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right column - Service cards */}
            <div className="lg:col-span-5 lg:pl-8">
              <div className="grid grid-cols-1 gap-6 animate-scale-in" style={{animationDelay: '0.3s'}}>
                {[
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Strategie Entwicklung",
                    description: "Schritt für Schritt zum Einsatz von KI in deinem Unternehmen"
                  },
                  {
                    icon: <Bot className="w-6 h-6" />,
                    title: "Automatisierung durch KI",
                    description: "Die KI übernimmt deine Prozesse und spart dir Kosten und Zeit"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Datenschutz konform in DE",
                    description: "Sensible Daten bleiben in Deutschland"
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: "Staatliche Förderung",
                    description: "Förderung & Zuschüsse vom Bund für Digitalisierung nutzen"
                  }
                ].map((service, index) => (
                  <div 
                    key={service.title} 
                    className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:scale-105 hover:border-primary/30"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-hero rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
};

export default HeroSection;