import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import teamAbout from "@/assets/team-about.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Kundenfokus",
      description:
        "Wir stellen die individuellen Bedürfnisse unserer Kunden in den Mittelpunkt und entwickeln maßgeschneiderte Digitalisierungslösungen.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Wir bleiben am Puls der Zeit und bringen die neuesten KI- und Automatisierungstechnologien in den Mittelstand.",
    },
    {
      icon: CheckCircle,
      title: "Qualität",
      description:
        "Höchste Standards in Beratung und Umsetzung – DSGVO-konform, sicher und nachhaltig.",
    },
    {
      icon: Users,
      title: "Partnerschaft",
      description:
        "Langfristige Zusammenarbeit auf Augenhöhe – wir begleiten Sie von der Strategie bis zur erfolgreichen Umsetzung.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Gründung",
      description:
        "PAXUP wurde mit der Vision gegründet, KI und Automatisierung für den Mittelstand zugänglich zu machen.",
    },
    {
      year: "2021",
      title: "Erste Erfolge",
      description:
        "Erste erfolgreiche Digitalisierungsprojekte in Handwerk und Immobilienwirtschaft umgesetzt.",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Erweiterung des Teams und der Serviceangebote. Fokus auf KI-gestützte Prozessoptimierung.",
    },
    {
      year: "2023",
      title: "Marktführer",
      description:
        "Über 200+ erfolgreich digitalisierte Unternehmen. Auszeichnung als 'Digitalisierungspartner des Jahres'.",
    },
    {
      year: "2024",
      title: "Heute",
      description:
        "Führender Anbieter für KI-Integration und Prozessautomatisierung im deutschsprachigen Mittelstand.",
    },
  ];

  const stats = [
    { number: "200+", label: "Digitalisierte Unternehmen" },
    { number: "4.9/5", label: "Kundenzufriedenheit" },
    { number: "95%", label: "Erfolgsrate bei Projekten" },
    { number: "24/7", label: "Support für Kunden" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/10 text-white border-white/20"
              >
                Über PAXUP
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Ihr Partner für die
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  digitale Transformation
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Wir machen KI und Automatisierung für mittelständische
                Unternehmen greifbar, umsetzbar und profitabel – seit 2020 mit
                über 200 erfolgreichen Projekten.
              </p>

              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                onClick={() => window.open("https://cal.com/paxup", "_blank")}
              >
                👋 Lernen Sie uns kennen
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge variant="outline" className="mb-6">
                    Unsere Mission
                  </Badge>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Digitalisierung, die wirklich funktioniert
                  </h2>

                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">
                        Der Mittelstand ist das Rückgrat der deutschen
                        Wirtschaft.
                      </strong>
                      Aber bei der Digitalisierung hinken viele Unternehmen noch
                      hinterher – nicht aus mangelndem Willen, sondern weil
                      ihnen die richtige Strategie und Unterstützung fehlt.
                    </p>

                    <p>
                      Genau hier setzen wir an: PAXUP macht aus komplexer
                      Technologie einfache, praktische Lösungen. Wir verbinden
                      KI-Beratung, Prozessautomatisierung und konkrete Umsetzung
                      – alles aus einer Hand.
                    </p>

                    <p>
                      <strong className="text-foreground">Unser Ziel:</strong>{" "}
                      Jedes mittelständische Unternehmen soll die Vorteile der
                      Digitalisierung nutzen können – ohne IT-Kopfschmerzen,
                      ohne Risiko, aber mit spürbaren Ergebnissen ab dem ersten
                      Tag.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={teamAbout}
                    alt="PAXUP Team bei der Arbeit"
                    className="rounded-2xl shadow-elegant w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6">
                  Unsere Werte
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Was uns antreibt
                </h2>

                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Unsere Werte sind nicht nur Worte – sie sind die Grundlage für
                  jede Entscheidung, jedes Projekt und jede Kundenbeziehung.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6">
                  Unsere Geschichte
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Von der Vision zur Realität
                </h2>

                <p className="text-lg text-muted-foreground">
                  Seit 2020 entwickeln wir uns kontinuierlich weiter – immer mit
                  dem Ziel, die beste Digitalisierungsberatung für den
                  Mittelstand zu bieten.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative md:ml-16">
                      {/* Timeline dot */}
                      <div className="absolute -left-20 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm hidden md:block"></div>

                      <Card
                        className={`border-border/50 ${
                          index === timeline.length - 1
                            ? "bg-primary/5 border-primary/20"
                            : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                            <Badge
                              variant={
                                index === timeline.length - 1
                                  ? "default"
                                  : "secondary"
                              }
                              className="w-fit"
                            >
                              {item.year}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6">
                  Kontakt
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Lernen Sie uns persönlich kennen
                </h2>

                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Haben Sie Fragen zu unseren Leistungen oder möchten Sie mehr
                  über PAXUP erfahren? Wir freuen uns auf das Gespräch mit
                  Ihnen.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Standort
                    </h3>
                    <p className="text-muted-foreground">
                      Deutschland
                      <br />
                      (Remote & vor Ort)
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Verfügbarkeit
                    </h3>
                    <p className="text-muted-foreground">
                      Mo-Fr: 9:00 - 18:00
                      <br />
                      Notfall-Support 24/7
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Auszeichnung
                    </h3>
                    <p className="text-muted-foreground">
                      Digitalisierungspartner
                      <br />
                      des Jahres 2023
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  variant="cta"
                  size="lg"
                  className="text-lg px-8 py-6 mb-6"
                  onClick={() => window.open("https://cal.com/paxup", "_blank")}
                >
                  👋 Kostenloses Kennenlerngespräch vereinbaren
                </Button>

                <p className="text-sm text-muted-foreground">
                  30 Minuten persönliche Beratung • Kostenlos & unverbindlich
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
