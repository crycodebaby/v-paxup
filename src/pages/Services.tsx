import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Database,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const processSteps = [
    {
      icon: Database,
      title: "1. Intensive Unternehmensanalyse",
      subtitle: "Tiefgreifende Analyse Ihrer Prozesse und Strukturen",
      description:
        "Wir analysieren Ihr Unternehmen ganzheitlich – von den Geschäftsprozessen über die IT-Landschaft bis hin zu den Arbeitsabläufen Ihrer Teams.",
      features: [
        "Detaillierte Prozessaufnahme und -dokumentation",
        "Analyse der bestehenden IT-Infrastruktur",
        "Bewertung der aktuellen Arbeitsabläufe",
        "Stakeholder-Interviews mit Ihren Teams",
        "Erfassung von Schmerzpunkten und Ineffizienzen",
      ],
      benefits: [
        "Vollständige Transparenz über Ihre aktuellen Prozesse",
        "Identifikation versteckter Problemfelder",
        "Fundament für strategische Entscheidungen",
        "Basis für messbare Verbesserungen",
      ],
    },
    {
      icon: Shield,
      title: "2. Stärken-Schwächen-Analyse",
      subtitle: "Potenziale erkennen und Chancen ableiten",
      description:
        "Basierend auf der Analyse ermitteln wir systematisch Ihre Stärken, decken Schwächen auf und leiten konkrete Digitalisierungspotenziale ab.",
      features: [
        "SWOT-Analyse speziell für Digitalisierung",
        "Benchmarking mit Branchenstandards",
        "Identifikation von Automatisierungspotenzialen",
        "KI-Einsatzmöglichkeiten bewerten",
        "ROI-Potenziale für verschiedene Maßnahmen",
      ],
      benefits: [
        "Klare Priorisierung der wichtigsten Handlungsfelder",
        "Realistische Einschätzung des Verbesserungspotenzials",
        "Fundierte Basis für Investitionsentscheidungen",
        "Fokus auf die wirkungsvollsten Maßnahmen",
      ],
    },
    {
      icon: Zap,
      title: "3. Strategischer Fahrplan",
      subtitle: "90-180-360 Tage Roadmap mit klaren Meilensteinen",
      description:
        "Wir entwickeln einen präzisen Umsetzungsplan mit drei Phasen, der Ihnen schrittweise und planbar zur digitalen Transformation verhilft.",
      features: [
        "90-Tage-Plan: Quick Wins und Sofortmaßnahmen",
        "180-Tage-Plan: Kern-Digitalisierungsprojekte",
        "360-Tage-Plan: Strategische KI-Integration",
        "Klare Meilensteine und Erfolgsmessung",
        "Budget- und Ressourcenplanung",
      ],
      benefits: [
        "Planbare und kontrollierte Transformation",
        "Schnelle erste Erfolge durch Quick Wins",
        "Kontinuierliche Verbesserung ohne Betriebsunterbrechung",
        "Transparente Kosten und Zeitpläne",
      ],
    },
    {
      icon: Brain,
      title: "4. Professionelle Umsetzung",
      subtitle: "Realisierung durch unser erfahrenes Entwicklerteam",
      description:
        "Unser spezialisiertes Entwicklerteam setzt die geplanten Maßnahmen professionell um und begleitet Sie während der gesamten Transformation.",
      features: [
        "Agile Entwicklung mit regelmäßigen Updates",
        "Nahtlose Integration in bestehende Systeme",
        "Umfassendes Testing und Qualitätssicherung",
        "Schulungen und Change Management",
        "Kontinuierlicher Support und Optimierung",
      ],
      benefits: [
        "Professionelle Umsetzung ohne interne Ressourcenbindung",
        "Bewährte Technologien und Best Practices",
        "Minimale Ausfallzeiten durch erfahrene Umsetzung",
        "Langfristige Partnerschaft für Ihren digitalen Erfolg",
      ],
    },
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
                Strategieentwicklung für Ihre Digitalisierung
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Wir entwickeln maßgeschneiderte Digitalisierungsstrategien unter
                Nutzung von KI und Automatisierung. Unser bewährter
                4-Stufen-Prozess führt Sie planbar und messbar zur erfolgreichen
                digitalen Transformation.
              </p>
              <Button
                variant="default"
                size="lg"
                className="shadow-button hover:-translate-y-1 transition-smooth"
                onClick={() => window.open("https://cal.com/paxup", "_blank")}
              >
                Kostenlose Beratung vereinbaren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unser bewährter 4-Stufen-Prozess
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Das ist unser USP: Systematische Herangehensweise mit klaren
                Phasen, messbaren Ergebnissen und garantiertem Erfolg.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-8 shadow-soft hover:shadow-card transition-smooth"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-button">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-lg text-primary font-medium mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Process Steps */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                So führen wir Sie zum Erfolg
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Detaillierte Einblicke in unseren bewährten Prozess und was Sie
                in jeder Phase erwarten können.
              </p>
            </div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 lg:p-12 shadow-card"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-button">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-primary font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>

                      <h4 className="text-xl font-bold mb-4">
                        Was wir für Sie tun:
                      </h4>
                      <ul className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-6">Ihr Nutzen:</h4>
                      <div className="space-y-4">
                        {step.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="bg-gradient-subtle p-4 rounded-lg"
                          >
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
                Starten Sie Ihre strategische Digitalisierung
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Lassen Sie uns Ihr Unternehmen analysieren und eine
                maßgeschneiderte Digitalisierungsstrategie entwickeln. Unser
                bewährter Prozess garantiert messbaren Erfolg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  onClick={() => window.open("https://cal.com/paxup", "_blank")}
                >
                  Kostenlose Erstberatung
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/foerderung")}
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
