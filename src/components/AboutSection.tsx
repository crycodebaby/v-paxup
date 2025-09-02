import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/10 border-y border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamImage}
                alt="PAXUP Team - Experten für Digitalisierung im Mittelstand"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full opacity-20"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                PAXUP – Ihr Partner für 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Digitalisierung und KI</span>
              </h2>
              
               <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Wir sind eine spezialisierte Digitalagentur für den Mittelstand. 
                  <strong className="text-foreground"> Unser größter USP: Alles aus einer Hand - von der Strategie bis zur Umsetzung. Nicht nur leere Worte.</strong>
                </p>
                
                <p>
                  Unser Ansatz: klare Kommunikation, praxisnahe Beratung und direkte Umsetzung.
                  Wir begleiten Sie von der ersten Analyse bis zur erfolgreichen Digitalisierung 
                  und entwickeln maßgeschneiderte Lösungen für mittelständische Unternehmen.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-semibold">DSGVO-konforme Lösungen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Förderfähige Projekte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-semibold">Praxisnahe Umsetzung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Persönliche Betreuung</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button variant="cta" size="lg">
              👉 Jetzt Team kennenlernen & Beratung buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;