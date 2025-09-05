import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Shield, Zap, Brain, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Digitale Datenbasis",
      subtitle: "Ordnung und Transparenz für effiziente Entscheidungen",
      description: "Wir schaffen eine solide digitale Grundlage für Ihr Unternehmen durch strukturierte Datenerfassung, -organisation und -analyse.",
      features: [
        "Datenmodellierung und -strukturierung",
        "Implementierung von Datenbanksystemen",
        "Business Intelligence und Reporting",
        "Datenqualitätsmanagement",
        "APIs und Schnittstellen-Integration"
      ],
      benefits: [
        "Bessere Entscheidungsfindung durch datenbasierte Insights",
        "Reduzierte manuelle Arbeit durch Automatisierung",
        "Erhöhte Transparenz und Nachvollziehbarkeit",
        "Skalierbare Datenarchitektur für zukünftiges Wachstum"
      ]
    },
    {
      icon: Shield,
      title: "Datenschutz & Sicherheit",
      subtitle: "DSGVO-konform, Hosting in Deutschland",
      description: "Höchste Sicherheitsstandards und vollständige DSGVO-Konformität für Ihre digitalen Lösungen mit deutschen Hosting-Partnern.",
      features: [
        "DSGVO-konforme Systemarchitektur",
        "Deutsches Cloud-Hosting",
        "Verschlüsselung und Zugriffskontrollen",
        "Sicherheitsaudits und Penetrationstests",
        "Backup und Disaster Recovery"
      ],
      benefits: [
        "Rechtssicherheit durch DSGVO-Konformität",
        "Schutz vor Cyber-Bedrohungen und Datenverlust",
        "Vertrauen der Kunden durch Datenschutz",
        "Compliance mit branchenspezifischen Anforderungen"
      ]
    },
    {
      icon: Zap,
      title: "Systemintegration",
      subtitle: "Passende digitale Tools und Automatisierungen",
      description: "Nahtlose Integration bestehender Systeme mit modernen digitalen Lösungen für optimierte Arbeitsabläufe.",
      features: [
        "ERP und CRM System-Integration",
        "API-Entwicklung und Schnittstellenanbindung",
        "Workflow-Automatisierung",
        "Legacy-System Modernisierung",
        "Cloud-Migration und Hybrid-Lösungen"
      ],
      benefits: [
        "Eliminierung von Datensilos und Medienbrüchen",
        "Automatisierte Prozesse sparen Zeit und Kosten",
        "Einheitliche Benutzeroberflächen",
        "Verbesserte Datenqualität und -konsistenz"
      ]
    },
    {
      icon: Brain,
      title: "Strategische KI-Beratung",
      subtitle: "Künstliche Intelligenz nutzen – praxisnah und verständlich",
      description: "Maßgeschneiderte KI-Strategien und -Implementierungen, die echten Geschäftswert für mittelständische Unternehmen schaffen.",
      features: [
        "KI-Potentialanalyse und Roadmap-Entwicklung",
        "Custom AI-Lösungen und Chatbot-Entwicklung",
        "Machine Learning für Prozessoptimierung",
        "Automatisierte Dokumentenverarbeitung",
        "KI-Training und Change Management"
      ],
      benefits: [
        "Wettbewerbsvorteile durch innovative KI-Anwendungen",
        "Kostenreduktion durch intelligente Automatisierung",
        "Neue Geschäftsmodelle und Umsatzquellen",
        "Zukunftssichere Technologieposition"
      ]
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
                Unsere Leistungen für den Mittelstand
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                PAXUP ist spezialisiert auf Digitalisierung im Mittelstand, 
                Prozessautomatisierung und KI-Beratung. Unsere Lösungen sind 
                förderfähig und machen Ihr Unternehmen zukunftssicher.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-button hover:-translate-y-1 transition-smooth"
                onClick={() => window.open('https://calendly.com/paxup', '_blank')}
              >
                Kostenlose Beratung vereinbaren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="p-8 shadow-soft hover:shadow-card transition-smooth">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-button">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-lg text-primary font-medium mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Detaillierte Leistungsbeschreibung
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Erfahren Sie mehr über unsere spezialisierten Services und wie sie 
                Ihrem Unternehmen konkreten Mehrwert bieten.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="bg-background rounded-2xl p-8 lg:p-12 shadow-card">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-button">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-primary font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <h4 className="text-xl font-bold mb-4">Unsere Leistungen im Detail:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-6">Ihre Vorteile:</h4>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="bg-gradient-subtle p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="font-medium">{benefit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit für die digitale Transformation?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns gemeinsam die passende Lösung für Ihr Unternehmen entwickeln. 
                Profitieren Sie von unserer Expertise und verfügbaren Fördermitteln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  onClick={() => window.open('https://calendly.com/paxup', '_blank')}
                >
                  Kostenlose Erstberatung
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/foerderung'}
                >
                  Fördermöglichkeiten entdecken
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

export default Services;