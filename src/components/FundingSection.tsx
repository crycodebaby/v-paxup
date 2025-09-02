import { Card } from "@/components/ui/card";
import { Euro, Shield, Target } from "lucide-react";

const FundingSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Funding Box */}
          <Card className="p-8 lg:p-12 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Euro className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Bis zu 50% Förderung für Digitalisierung im Mittelstand
                </h3>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Wir zeigen Ihnen, wie Sie staatliche Förderprogramme wie den 
              ERP-Digitalisierungs- und Innovationskredit oder Landesförderungen 
              nutzen können.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">KfW-Förderung "Digitalisierung"</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Länder-Förderprogramme</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">EU-Innovationsförderung</span>
              </div>
            </div>
          </Card>

          {/* BAFA Strategy Funding Box */}
          <Card className="p-8 lg:p-12 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  BAFA-Förderung für Strategieentwicklung
                </h3>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Spezielle BAFA-Förderung für die Entwicklung von Digitalisierungs- und KI-Strategien. 
              Bis zu 80% der Beratungskosten werden übernommen.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Bis zu 80% Förderung</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Digitalisierungsstrategie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">KI-Implementierungsplan</span>
              </div>
            </div>
          </Card>
          
          {/* Security Box */}
          <Card className="p-8 lg:p-12 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  DSGVO-konform und sicher
                </h3>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Gleichzeitig stellen wir sicher: Alles bleibt DSGVO-konform und sicher. 
              Hosting in Deutschland, höchste Sicherheitsstandards.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Hosting in Deutschland</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">ISO 27001 zertifiziert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">DSGVO-Compliance</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;