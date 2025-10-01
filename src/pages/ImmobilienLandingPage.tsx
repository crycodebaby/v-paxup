import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Building2,
  Zap,
  Target,
  Award,
  Star,
} from "lucide-react";

const ImmobilienLandingPage = () => {
  const [checkResults, setCheckResults] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    units: "",
    challenges: "",
  });

  // Digitalization Check Questions
  const checkQuestions = [
    {
      question:
        "Wie viel Zeit verbringen Sie täglich mit Routineanfragen von Mietern?",
      answers: [
        { text: "Mehr als 2 Stunden", points: 0 },
        { text: "1-2 Stunden", points: 1 },
        { text: "30-60 Minuten", points: 2 },
        { text: "Weniger als 30 Minuten", points: 3 },
      ],
    },
    {
      question: "Wie lange dauert durchschnittlich Ihr Vermietungsprozess?",
      answers: [
        { text: "Mehr als 8 Wochen", points: 0 },
        { text: "4-8 Wochen", points: 1 },
        { text: "2-4 Wochen", points: 2 },
        { text: "Weniger als 2 Wochen", points: 3 },
      ],
    },
    {
      question: "Wie handhaben Sie derzeit Schadensmeldungen?",
      answers: [
        { text: "Telefon und E-Mail", points: 0 },
        { text: "Einfache Online-Formulare", points: 1 },
        { text: "Digitale Plattform mit Foto-Upload", points: 2 },
        { text: "Vollautomatisierte Lösung mit KI-Unterstützung", points: 3 },
      ],
    },
    {
      question: "Wie organisieren Sie Besichtigungstermine?",
      answers: [
        { text: "Telefonisch oder per E-Mail", points: 0 },
        { text: "Online-Kalender zum Anschauen", points: 1 },
        { text: "Selbstbuchung durch Interessenten", points: 2 },
        { text: "KI-gestützte automatische Terminplanung", points: 3 },
      ],
    },
    {
      question: "Haben Sie bereits KI oder Automatisierung im Einsatz?",
      answers: [
        { text: "Nein, noch gar nicht", points: 0 },
        { text: "Erste Überlegungen", points: 1 },
        { text: "Pilotprojekte gestartet", points: 2 },
        { text: "Bereits produktiv im Einsatz", points: 3 },
      ],
    },
  ];

  const [currentAnswers, setCurrentAnswers] = useState<(number | null)[]>(
    new Array(checkQuestions.length).fill(null)
  );

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCurrentAnswers(newAnswers);

    // Calculate results if all questions answered
    if (newAnswers.every((answer) => answer !== null)) {
      const totalPoints = newAnswers.reduce(
        (sum, answerIndex, qIndex) =>
          sum +
          (answerIndex !== null
            ? checkQuestions[qIndex].answers[answerIndex].points
            : 0),
        0
      );
      setCheckResults(totalPoints);
    }
  };

  const getCheckResultText = (score: number) => {
    if (score <= 5)
      return {
        level: "Starker Handlungsbedarf",
        description:
          "Ihr Digitalisierungsgrad ist noch sehr niedrig. Sie verlieren täglich wertvolle Zeit durch manuelle Prozesse.",
        color: "text-red-600",
        bgColor: "bg-red-50 border-red-200",
      };
    if (score <= 10)
      return {
        level: "Guter Start, aber Potenzial da",
        description:
          "Sie haben erste Schritte gemacht, aber es gibt noch viel Raum für Verbesserungen.",
        color: "text-orange-600",
        bgColor: "bg-orange-50 border-orange-200",
      };
    return {
      level: "Sehr gut aufgestellt",
      description:
        "Sie sind bereits digital gut aufgestellt, aber auch hier gibt es noch Optimierungsmöglichkeiten.",
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
    };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the form submission logic
    console.log("Form submitted:", formData);
    alert("Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
  };

  const problems = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Bewerberflut effizient managen",
      description:
        "150 Bewerbungen für eine Wohnung? Mit KI automatisieren Sie Absagen und Kommunikation – professionell und zeitsparend.",
      result: "Weniger Arbeitsaufwand, zufriedene Bewerber",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Schäden automatisch erfassen",
      description:
        "Digitale Formulare und automatisierte Abläufe übernehmen Dokumentation, Handwerkeranfragen und Versicherungsunterlagen.",
      result: "Schnellere Reaktionszeiten, weniger Fehler",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Vermietungsprozesse beschleunigen",
      description:
        "90% der Vermietungsprozesse laufen gleich ab. Automatisierung reduziert Leerstand und beschleunigt Neuvermietungen.",
      result: "Mehr Rendite, weniger Routinearbeit",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Anfragen automatisch beantworten",
      description:
        "KI beantwortet Standardfragen 24/7: Nebenkostenabrechnung, Vermietungsstand, Ansprechpartner.",
      result: "Weniger Unterbrechungen, mehr Fokus",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Terminplanung stressfrei gestalten",
      description:
        "KI-gestützte Terminbuchung: Interessenten planen selbst – fehlerfrei und effizient.",
      result: "Minuten statt Stunden für Organisation",
    },
  ];

  const testimonials = [
    {
      name: "Michael Schmidt",
      company: "Schmidt Immobilien GmbH",
      text: "Dank PAXUP sparen wir täglich 3 Stunden bei der Mieterkommunikation. Unser Team kann sich endlich auf strategische Aufgaben konzentrieren.",
      rating: 5,
    },
    {
      name: "Andrea Müller",
      company: "Hausverwaltung Müller",
      text: "Die Automatisierung der Vermietungsprozesse hat unseren Leerstand um 40% reduziert. ROI bereits nach 6 Monaten erreicht.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 animate-fade-in">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary/10 text-primary border-primary/20"
                >
                  🚀 Digitalisierung & KI für Immobilienverwaltung
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Sparen Sie{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    täglich 3+ Stunden
                  </span>{" "}
                  durch intelligente Automatisierung
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Schluss mit Bewerberflut, Terminchaos und endlosen
                  Routineanfragen. Entdecken Sie, wie Hausverwaltungen bereits
                  heute KI nutzen, um effizienter zu arbeiten und nachhaltig zu
                  wachsen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="cta"
                    size="lg"
                    className="text-lg px-8 py-6"
                    onClick={() =>
                      window.open("https://cal.com/paxup", "_blank")
                    }
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Kostenloses Erstgespräch (30 Min)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6"
                    asChild
                  >
                    <a href="#digitalisierungs-check">
                      <Target className="w-5 h-5 mr-2" />
                      Digitalisierungs-Check starten
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    30 Min kostenlose Beratung
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Individuelle Lösung
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Sofort umsetzbar
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 scale-105"></div>
                  <img
                    src="/lovable-uploads/b6154235-92ef-4609-8331-93cbfe6ae4dd.png"
                    alt="KI & Digitalisierung für Immobilienverwaltung"
                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-border/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              Vertraut von führenden Hausverwaltungen
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8 items-center opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-12 bg-muted rounded-lg flex items-center justify-center"
                >
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                5 Probleme, die Sie{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  heute
                </span>{" "}
                lösen können
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jeden Tag verlieren Sie wertvolle Stunden durch manuelle
                Prozesse. Hier sind die 5 häufigsten Zeitfresser – und wie Sie
                sie eliminieren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">{problem.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 text-sm font-medium">
                        ✅ <strong>Ergebnis:</strong> {problem.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* CTA Card */}
              <Card className="md:col-span-2 lg:col-span-1 bg-gradient-primary text-white border-0">
                <CardContent className="p-8 flex flex-col justify-center h-full text-center">
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">
                    Bereit für den nächsten Schritt?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Lassen Sie uns gemeinsam Ihre größten Zeitfresser
                    identifizieren und sofort lösbare Maßnahmen entwickeln.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt Termin buchen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digitalization Check Section */}
      <section id="digitalisierungs-check" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                🎯 Digitalisierungs-Check: Wo stehen Sie heute?
              </h2>
              <p className="text-xl text-muted-foreground">
                Finden Sie in 2 Minuten heraus, wie viel Potenzial in Ihrer
                Hausverwaltung steckt
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  {checkQuestions.map((question, qIndex) => (
                    <div key={qIndex} className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {qIndex + 1}. {question.question}
                      </h3>
                      <div className="grid gap-3">
                        {question.answers.map((answer, aIndex) => (
                          <Button
                            key={aIndex}
                            variant={
                              currentAnswers[qIndex] === aIndex
                                ? "default"
                                : "outline"
                            }
                            className="text-left justify-start h-auto p-4"
                            onClick={() => handleAnswerSelect(qIndex, aIndex)}
                          >
                            {answer.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {checkResults !== null && (
                    <div className="mt-8 animate-fade-in">
                      <Separator className="mb-6" />
                      {(() => {
                        const result = getCheckResultText(checkResults);
                        return (
                          <div
                            className={`p-6 rounded-lg border ${result.bgColor}`}
                          >
                            <h4
                              className={`text-xl font-bold mb-3 ${result.color}`}
                            >
                              Ihr Ergebnis: {result.level}
                            </h4>
                            <p className="text-muted-foreground mb-6">
                              {result.description}
                            </p>
                            <div className="bg-white p-6 rounded-lg border border-border">
                              <h5 className="font-semibold text-foreground mb-3">
                                💡 Ihre nächsten Schritte mit PAXUP:
                              </h5>
                              <ul className="space-y-2 text-muted-foreground mb-6">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Kostenlose 30-Min-Analyse Ihrer aktuellen
                                  Prozesse
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  3 sofort umsetzbare Maßnahmen für mehr
                                  Effizienz
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Roadmap für Ihre digitale Transformation
                                </li>
                              </ul>
                              <Button
                                variant="cta"
                                size="lg"
                                className="w-full"
                                onClick={() =>
                                  window.open("https://cal.com/paxup", "_blank")
                                }
                              >
                                <Calendar className="w-5 h-5 mr-2" />
                                Kostenloses Erstgespräch vereinbaren
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Das sagen unsere Kunden
              </h2>
              <p className="text-xl text-muted-foreground">
                Über 500 Hausverwaltungen vertrauen bereits auf PAXUP
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Starten Sie jetzt Ihre digitale Transformation
              </h2>
              <p className="text-xl opacity-90">
                Buchen Sie Ihr kostenloses 30-Minuten-Erstgespräch und erhalten
                Sie sofort umsetzbare Lösungen
              </p>
            </div>

            <Card className="border-0 bg-white text-foreground">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ihr vollständiger Name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        E-Mail *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="ihre.email@unternehmen.de"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Unternehmen
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Ihr Unternehmen"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+49 123 456789"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Anzahl verwaltete Einheiten
                    </label>
                    <Input
                      value={formData.units}
                      onChange={(e) =>
                        setFormData({ ...formData, units: e.target.value })
                      }
                      placeholder="z.B. 150 Wohneinheiten"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ihre größte Herausforderung
                    </label>
                    <textarea
                      value={formData.challenges}
                      onChange={(e) =>
                        setFormData({ ...formData, challenges: e.target.value })
                      }
                      placeholder="Beschreiben Sie kurz, womit Sie täglich am meisten Zeit verbringen..."
                      className="w-full h-24 px-3 py-2 border border-border rounded-lg resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="button"
                      variant="cta"
                      size="lg"
                      className="text-lg px-12 py-6"
                      onClick={() =>
                        window.open("https://cal.com/paxup", "_blank")
                      }
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Kostenloses Erstgespräch vereinbaren
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen. 100%
                      unverbindlich.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bereit für mehr Effizienz in Ihrer Hausverwaltung?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Schließen Sie sich 500+ Hausverwaltungen an, die bereits täglich
              Zeit und Kosten durch intelligente Automatisierung sparen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => window.open("https://cal.com/paxup", "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt kostenloses Gespräch buchen
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                E-Mail schreiben
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImmobilienLandingPage;
