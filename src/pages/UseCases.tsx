import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wrench, 
  Stethoscope, 
  Truck, 
  ShoppingCart, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Users
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Immobilienverwaltung",
      industry: "Immobilien",
      challenge: "Manueller Aufwand bei Mieterverwaltung, Instandhaltung und Abrechnungen",
      solution: "Automatisierte Verwaltungsprozesse mit KI-gestützter Dokumentenerkennung",
      results: [
        "75% weniger Zeitaufwand bei Nebenkostenabrechnungen",
        "Automatische Mietvertragsverarbeitung",
        "Predictive Maintenance für Immobilien",
        "Digitales Mieterportal mit Self-Service"
      ],
      timeframe: "180 Tage",
      roi: "300%",
      employees: "15-50"
    },
    {
      icon: Wrench,
      title: "Handwerksbetrieb Digital",
      industry: "Handwerk",
      challenge: "Papierbasierte Prozesse, ineffiziente Terminplanung und Materialbeschaffung",
      solution: "Digitale Auftragsabwicklung mit automatisierter Ressourcenplanung",
      results: [
        "50% schnellere Angebotserstellung",
        "Automatische Terminoptimierung nach Standort",
        "Digitale Zeiterfassung und Abrechnung",
        "Lagerbestandsmanagement mit Warnsystem"
      ],
      timeframe: "120 Tage",
      roi: "250%",
      employees: "5-25"
    },
    {
      icon: Stethoscope,
      title: "Arztpraxis Optimierung",
      industry: "Gesundheitswesen",
      challenge: "Terminmanagement, Patientendokumentation und Abrechnungsprozesse",
      solution: "Intelligentes Praxismanagementsystem mit KI-Unterstützung",
      results: [
        "40% Reduktion der Wartezeiten",
        "Automatische ICD-Code-Erkennung",
        "Digitale Patientenakte mit Suchfunktion",
        "Automatisierte Terminbestätigungen"
      ],
      timeframe: "90 Tage",
      roi: "200%",
      employees: "3-15"
    },
    {
      icon: Truck,
      title: "Logistik & Transport",
      industry: "Logistik",
      challenge: "Routenoptimierung, Fahrzeugverfolgung und Kundenbenachrichtigungen",
      solution: "KI-basierte Routenplanung mit Real-Time-Tracking",
      results: [
        "30% Kraftstoffeinsparung durch optimierte Routen",
        "Automatische Kundenbenchrichtigungen",
        "Predictive Analytics für Wartungszyklen",
        "Live-Dashboard für Disponenten"
      ],
      timeframe: "150 Tage",
      roi: "400%",
      employees: "20-100"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Automatisierung",
      industry: "Handel",
      challenge: "Bestellabwicklung, Lagerbestand und Kundenservice",
      solution: "Vollautomatisierte E-Commerce-Pipeline mit KI-Chatbot",
      results: [
        "80% automatisierte Bestellabwicklung",
        "KI-Chatbot beantwortet 70% der Kundenanfragen",
        "Automatische Preisoptimierung",
        "Predictive Inventory Management"
      ],
      timeframe: "200 Tage",
      roi: "350%",
      employees: "10-50"
    },
    {
      icon: GraduationCap,
      title: "Bildungseinrichtung",
      industry: "Bildung",
      challenge: "Schülerverwaltung, Noteneingabe und Kommunikation mit Eltern",
      solution: "Digitales Schulverwaltungssystem mit automatisierten Workflows",
      results: [
        "90% weniger Verwaltungsaufwand",
        "Automatische Zeugniserstellung",
        "Digitale Eltern-Kommunikation",
        "KI-gestützte Lernfortschrittsanalyse"
      ],
      timeframe: "160 Tage",
      roi: "180%",
      employees: "25-150"
    }
  ];

  const processHighlights = [
    {
      icon: Clock,
      title: "Schnelle Erfolge",
      description: "Erste Automatisierungen bereits nach 30 Tagen sichtbar"
    },
    {
      icon: TrendingUp,
      title: "Messbare ROI",
      description: "Durchschnittlich 250% Return on Investment nach 12 Monaten"
    },
    {
      icon: Users,
      title: "Team Entlastung",
      description: "50-80% weniger Routine-Aufgaben für Ihre Mitarbeiter"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Erfolgreiche Anwendungsfälle aus der Praxis
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Erfahren Sie, wie andere Mittelstandsunternehmen durch unsere 
                Digitalisierungsstrategien ihre Effizienz gesteigert und Kosten 
                gesenkt haben. Konkrete Beispiele, messbare Ergebnisse.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-button hover:-translate-y-1 transition-smooth"
                onClick={() => window.open('https://calendly.com/paxup', '_blank')}
              >
                Ihr Anwendungsfall besprechen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {processHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-button">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Branchenspezifische Erfolgsgeschichten
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von der ersten Analyse bis zur erfolgreichen Umsetzung - 
                sehen Sie konkrete Beispiele aus verschiedenen Branchen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 shadow-soft hover:shadow-card transition-smooth bg-background">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-button">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{useCase.title}</h3>
                        <Badge variant="secondary" className="mt-1">{useCase.industry}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{useCase.employees} Mitarbeiter</div>
                      <div className="font-bold text-primary">{useCase.timeframe}</div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-red-600 mb-2">Herausforderung:</h4>
                      <p className="text-muted-foreground">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Unsere Lösung:</h4>
                      <p className="text-muted-foreground">{useCase.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-4">Messbare Ergebnisse:</h4>
                    <div className="space-y-2">
                      {useCase.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI Badge */}
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      ROI: {useCase.roi} nach 12 Monaten
                    </Badge>
                    <Button variant="outline" size="sm">
                      Ähnliches Projekt starten
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unsere Erfolge in Zahlen
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Erfolgreiche Projekte</div>
              </div>
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">280%</div>
                <div className="text-muted-foreground">Durchschnittlicher ROI</div>
              </div>
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">65%</div>
                <div className="text-muted-foreground">Effizienzsteigerung</div>
              </div>
              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ihr Anwendungsfall wartet auf Umsetzung
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam analysieren, welche Automatisierungs- und 
                KI-Potenziale in Ihrem Unternehmen schlummern. Kostenloses Erstgespräch, 
                konkrete Roadmap, messbare Ergebnisse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  onClick={() => window.open('https://calendly.com/paxup', '_blank')}
                >
                  Kostenloses Strategiegespräch
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/foerderung'}
                >
                  Fördermöglichkeiten prüfen
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;