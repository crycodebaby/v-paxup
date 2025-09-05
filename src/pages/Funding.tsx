import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, Shield, Target, CheckCircle, FileText, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Funding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Förderungen für </span>
              <span className="text-primary">Digitalisierung</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Nutzen Sie staatliche Förderprogramme und sparen Sie bis zu 80% der Kosten 
              für Ihre KI- und Digitalisierungsprojekte
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://calendly.com/paxup', '_blank')}
            >
              🎯 Kostenlose Förderberatung
            </Button>
          </div>
        </div>
      </section>

      {/* Main Funding Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Die wichtigsten Förderprogramme im Überblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Von KfW-Krediten bis hin zu BAFA-Zuschüssen – wir zeigen Ihnen den Weg 
              zur optimalen Förderung für Ihr Digitalisierungsprojekt
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* KfW Funding */}
            <Card className="p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Euro className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">KfW-Förderung</h3>
                  <p className="text-sm text-muted-foreground">Bis zu 50% Förderung</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Der KfW-Digitalisierungs- und Innovationskredit bietet günstige 
                Finanzierung für Digitalisierungsprojekte im Mittelstand.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Bis zu 25 Mio. € Fördervolumen</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Zinssätze ab 1,03% p.a.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Tilgungsfreie Anlaufjahre möglich</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            {/* BAFA Strategy Funding */}
            <Card className="p-8 shadow-card hover:shadow-lg transition-shadow border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BAFA-Förderung</h3>
                  <p className="text-sm text-muted-foreground">Bis zu 80% Zuschuss</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Spezielle Förderung für Unternehmensberatung zur Entwicklung 
                von Digitalisierungs- und KI-Strategien.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Bis zu 16.800€ Zuschuss</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Keine Rückzahlung erforderlich</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Schnelle Antragstellung</span>
                </div>
              </div>
              
              <Button variant="default" className="w-full">
                Jetzt beantragen
              </Button>
            </Card>

            {/* Regional Funding */}
            <Card className="p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Länderförderung</h3>
                  <p className="text-sm text-muted-foreground">Regional variabel</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Zusätzliche Fördermöglichkeiten durch Bundesländer und EU-Programme 
                für innovative Digitalisierungsprojekte.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Kombinierbar mit anderen Förderungen</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Branchen-spezifische Programme</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">EU-Innovationsförderung</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Regionale Förderung prüfen
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              So einfach kommen Sie zur Förderung
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir begleiten Sie durch den gesamten Förderprozess – von der Beratung bis zur Bewilligung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Erstberatung</h3>
              <p className="text-muted-foreground">
                Kostenlose Analyse Ihres Projekts und Identifikation der passenden Förderungen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Antragstellung</h3>
              <p className="text-muted-foreground">
                Wir erstellen alle erforderlichen Unterlagen und reichen den Antrag für Sie ein
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Bewilligung</h3>
              <p className="text-muted-foreground">
                Nach der Bewilligung können Sie sofort mit der Umsetzung Ihres Projekts beginnen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Umsetzung</h3>
              <p className="text-muted-foreground">
                Wir begleiten die komplette Projektumsetzung und sorgen für die ordnungsgemäße Verwendung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Erfolgreiche Förderungen
            </h2>
            <p className="text-lg text-muted-foreground">
              Unsere Kunden haben bereits über 2 Millionen Euro an Förderungen erhalten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">€847.000</div>
              <div className="text-sm font-medium mb-2">Mittelständisches Handwerksunternehmen</div>
              <p className="text-sm text-muted-foreground">
                KfW-Förderung für digitale Transformation und KI-Implementierung
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">€312.000</div>
              <div className="text-sm font-medium mb-2">Immobilienverwaltung</div>
              <p className="text-sm text-muted-foreground">
                BAFA-Zuschuss + Länderförderung für Automatisierung der Verwaltungsprozesse
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">€156.000</div>
              <div className="text-sm font-medium mb-2">Beratungsunternehmen</div>
              <p className="text-sm text-muted-foreground">
                EU-Innovationsförderung für KI-basierte Datenanalyse-Tools
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sichern Sie sich jetzt Ihre Förderung
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verpassen Sie nicht die Chance auf bis zu 80% Förderung für Ihr Digitalisierungsprojekt. 
              Unsere Experten beraten Sie kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://calendly.com/paxup', '_blank')}
              >
                🎯 Jetzt Förderberatung buchen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('http://eepurl.com/jlQLmA', '_blank')}
              >
                📧 Newsletter abonnieren
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Kostenlose Erstberatung • Keine versteckten Kosten • Erfolgsgarantie
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Funding;