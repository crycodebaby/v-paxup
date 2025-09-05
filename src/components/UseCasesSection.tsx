import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building, 
  Package, 
  Users, 
  Heart, 
  Wrench,
  TrendingUp,
  Clock,
  Euro,
  BarChart3
} from "lucide-react";

const UseCasesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState("immobilien");

  const industries = [
    {
      id: "immobilien",
      name: "Immobilien",
      icon: Building,
      shortDesc: "Verwaltung & Makler"
    },
    {
      id: "grosshandel", 
      name: "Großhandel",
      icon: Package,
      shortDesc: "B2B & Distribution"
    },
    {
      id: "dienstleistung",
      name: "Dienstleistung", 
      icon: Users,
      shortDesc: "Beratung & Services"
    },
    {
      id: "pflege",
      name: "Pflege",
      icon: Heart,
      shortDesc: "Pflegeheime & Dienste"
    },
    {
      id: "handwerk",
      name: "Handwerk",
      icon: Wrench,
      shortDesc: "Handwerksbetriebe"
    }
  ];

  const useCases = {
    immobilien: {
      title: "Digitalisierung in der Immobilienverwaltung",
      subtitle: "Verwaltungsprozesse automatisieren und Mieterservice verbessern",
      cases: [
        {
          title: "Automatische Mieterkommunikation 24/7",
          description: "Chatbot und KI-Telefonassistenz für rund-um-die-Uhr Mieterbetreuung",
          benefits: ["24/7 Verfügbarkeit", "Sofortige Antworten", "Entlastung der Mitarbeiter"],
          icon: Clock
        },
        {
          title: "Vermietungsprozess automatisieren",
          description: "Automatische Absagen und Terminplanung für effiziente Vermietung",
          benefits: ["Automatische Absagen versenden", "Termine automatisch planen", "50% schnellere Vermietung"],
          icon: BarChart3
        },
        {
          title: "Versicherungsschäden automatisiert melden",
          description: "Automatische Schadensmeldung und Dokumentation an Versicherungen",
          benefits: ["Schnellere Schadensabwicklung", "Lückenlose Dokumentation", "Weniger Verwaltungsaufwand"],
          icon: TrendingUp
        }
      ]
    },
    grosshandel: {
      title: "Digitalisierung im Großhandel",
      subtitle: "B2B-Prozesse optimieren und Lieferketten automatisieren",
      cases: [
        {
          title: "Automatisierte Angebots- und Rechnungserstellung",
          description: "KI-gestützte Workflows wandeln Bestellungen automatisch in Angebote und Rechnungen um",
          benefits: ["Weniger Verwaltungsaufwand", "Schnellere Abwicklung", "95% weniger Fehler"],
          icon: Clock
        },
        {
          title: "Intelligente Bestands- und Nachbestellprognosen",
          description: "KI-basierte Prognosen aus Absatz- und Lagerdaten für optimale Bestellmengen",
          benefits: ["Reduzierte Lagerkosten", "Höhere Lieferfähigkeit", "Weniger gebundenes Kapital"],
          icon: BarChart3
        },
        {
          title: "Kundenkommunikation & Support automatisieren",
          description: "KI-Chatbot beantwortet Standardfragen zu Lieferzeiten und Verfügbarkeiten sofort",
          benefits: ["Entlastung des Innendienstes", "24/7 Kundenservice", "Höhere Kundenzufriedenheit"],
          icon: TrendingUp
        }
      ]
    },
    dienstleistung: {
      title: "Digitalisierung in der Dienstleistung",
      subtitle: "Beratungsqualität steigern und Prozesse verschlanken",
      cases: [
        {
          title: "KI gestützte Bericht und Präsentationserstellung",
          description: "Automatische Erstellung von Reports und Präsentationen basierend auf Unternehmensdaten und KI-Analyse",
          benefits: ["Professionelle Präsentationen in Minuten", "Datenbasierte Insights", "Konsistente Corporate Identity"],
          icon: Clock
        },
        {
          title: "Automatisierte Angebotserstellung & Vertragsdokumente",
          description: "KI-gestützte Vorlagen befüllen sich automatisch aus Kundendaten und CRM-Systemen",
          benefits: ["Schnellere Angebote", "Weniger Fehler", "Professioneller Auftritt"],
          icon: Euro
        },
        {
          title: "Automatisierter Sales-Prozess",
          description: "KI-gestützte Lead-Qualifizierung und automatisierte Follow-ups für systematischen Vertrieb",
          benefits: ["Systematische Lead-Bearbeitung", "Keine verlorenen Chancen", "Mehr Umsatz mit weniger Aufwand"],
          icon: TrendingUp
        }
      ]
    },
    pflege: {
      title: "Digitalisierung in der Pflege",
      subtitle: "Pflegequalität steigern und Dokumentation vereinfachen",
      cases: [
        {
          title: "Digitale Dokumentation per Sprachaufnahme",
          description: "Sprachbasierte Pflegedokumentation mit automatischer Einbindung in das eigene System",
          benefits: ["70% weniger Dokumentationszeit", "Hands-free Bedienung", "Nahtlose Systemintegration"],
          icon: BarChart3
        },
        {
          title: "Automatische Beantwortung von Standardfragen",
          description: "KI-Assistent beantwortet Standardanfragen per Mail und Telefon automatisch",
          benefits: ["24/7 Erreichbarkeit", "Entlastung der Mitarbeiter", "Schnellere Antwortzeiten"],
          icon: Clock
        },
        {
          title: "Einsatzplanung mit KI und Effizienzoptimierung",
          description: "KI-optimierte Personalplanung schafft mehr Zeit für die wichtige Pflegearbeit",
          benefits: ["Optimale Personalauslastung", "Mehr Zeit für Patienten", "Höhere Effizienz"],
          icon: TrendingUp
        }
      ]
    },
    handwerk: {
      title: "Digitalisierung im Handwerk",
      subtitle: "Auftragsabwicklung modernisieren und Kundenbindung stärken",
      cases: [
        {
          title: "Automatische Angebotserstellung für 60% der Kundenfälle",
          description: "KI-gestützte Angebotserstellung für Standardaufträge reduziert Bearbeitungszeit erheblich",
          benefits: ["60% weniger Aufwand", "Schnellere Angebote", "Standardisierte Qualität"],
          icon: Clock
        },
        {
          title: "Monteur Aufzeichnung für Nachberechnung",
          description: "Sprachbasierte Erfassung von Arbeitsleistungen und Materialien direkt beim Kunden",
          benefits: ["Lückenlose Leistungserfassung", "Direkte Rechnungsstellung", "Präzise Nachkalkulation"],
          icon: Euro
        },
        {
          title: "Angebotsvergleich von Materialien",
          description: "Automatischer Preisvergleich bei verschiedenen Lieferanten für optimale Materialkosten",
          benefits: ["Beste Preise finden", "Transparente Kostenstruktur", "Höhere Gewinnmargen"],
          icon: TrendingUp
        }
      ]
    }
  };

  const activeData = useCases[activeIndustry as keyof typeof useCases];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Anwendungsfälle aus der Praxis
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Entdecken Sie konkrete Digitalisierungslösungen für Ihre Branche und 
            erfahren Sie, wie andere Unternehmen bereits profitieren.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const isActive = activeIndustry === industry.id;
              
              return (
                <Button
                  key={industry.id}
                  variant={isActive ? "cta" : "outline"}
                  className={`p-6 h-auto flex-col gap-3 transition-all duration-300 ${
                    isActive 
                      ? "transform scale-105 shadow-card" 
                      : "hover:shadow-soft hover:scale-102"
                  }`}
                  onClick={() => setActiveIndustry(industry.id)}
                >
                  <Icon className={`w-8 h-8 ${isActive ? "text-white" : "text-primary"}`} />
                  <div className="text-center">
                    <div className={`font-bold text-sm ${isActive ? "text-white" : "text-foreground"}`}>
                      {industry.name}
                    </div>
                    <div className={`text-xs ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                      {industry.shortDesc}
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Content */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {activeData.title}
            </h3>
            <p className="text-lg text-muted-foreground">
              {activeData.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {activeData.cases.map((useCase, index) => {
              const Icon = useCase.icon;
              
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth shadow-button">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-4 text-center">
                    {useCase.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-center text-primary">Ihre Vorteile:</h5>
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle p-8 lg:p-12 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Ihre Branche nicht dabei?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Wir entwickeln maßgeschneiderte Digitalisierungslösungen für jede Branche. 
              Lassen Sie uns über Ihre spezifischen Anforderungen sprechen.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
              👉 Individuelle Beratung anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;