import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/immobilien-digitalisierung-hero.jpg";

const BlogPost4 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>
              
              <Badge variant="outline" className="mb-4">Digitalisierung & KI</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Digitalisierung & KI in der Immobilienverwaltung: 5 Probleme, die du heute lösen kannst
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Die Immobilienverwaltung steht unter Druck: steigende Kosten, Fachkräftemangel und immer höhere Erwartungen. Erfahre, wie Digitalisierung und KI dir heute konkret helfen können.
              </p>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Thomas Berg
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  8. März 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  10 Min. Lesezeit
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img 
                src={heroImage} 
                alt="Digitalisierung in der Immobilienverwaltung"
                className="w-full h-96 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="text-center mb-12">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Die Immobilienverwaltung steht unter Druck: steigende Kosten, Fachkräftemangel und immer höhere Erwartungen von Mietern und Eigentümern. Viele Hausverwaltungen kämpfen täglich mit wiederkehrenden Aufgaben, die wertvolle Zeit binden – Zeit, die eigentlich für strategische Arbeit und Wachstum gebraucht wird.
                  </p>
                  <p className="text-lg text-primary font-semibold">
                    Die gute Nachricht: Digitalisierung und KI sind heute keine Zukunftsmusik mehr, sondern ein konkreter Hebel, um spürbar Zeit, Kosten und Nerven zu sparen.
                  </p>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="bg-background/50 p-8 rounded-lg border border-border hover:shadow-card transition-shadow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">1. Bewerberflut effizient managen</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      150 Bewerbungen für eine Wohnung? Kein Problem. Mit KI lassen sich Absagen und Kommunikation automatisieren – professionell, wertschätzend und zeitsparend.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        👉 <strong>Ergebnis:</strong> Weniger Arbeitsaufwand, zufriedene Bewerber und ein starkes Image.
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/50 p-8 rounded-lg border border-border hover:shadow-card transition-shadow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">2. Schäden automatisch erfassen & melden</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Schadensmeldungen bedeuten oft Papierchaos und Telefonketten. Digitale Formulare und automatisierte Abläufe übernehmen Dokumentation, Handwerkeranfragen und Versicherungsunterlagen.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        👉 <strong>Ergebnis:</strong> Schnellere Reaktionszeiten, weniger Fehler, zufriedenere Mieter.
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/50 p-8 rounded-lg border border-border hover:shadow-card transition-shadow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">3. Vermietungsprozesse beschleunigen</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Exposés, Besichtigungen, Verträge – 90 % davon laufen immer gleich. Mit Automatisierung reduzierst du Leerstand und sorgst für eine schnelle Neuvermietung.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        👉 <strong>Ergebnis:</strong> Mehr Rendite und deutlich weniger Routinearbeit.
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/50 p-8 rounded-lg border border-border hover:shadow-card transition-shadow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">4. Standardanfragen automatisch beantworten</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "Wann kommt die Nebenkostenabrechnung?" oder "Sind alle Wohnungen vermietet?" – diese Fragen kosten täglich Stunden. KI kann 24/7 Antworten liefern.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        👉 <strong>Ergebnis:</strong> Weniger Unterbrechungen, mehr Fokus für dein Team.
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/50 p-8 rounded-lg border border-border hover:shadow-card transition-shadow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">5. Terminplanung stressfrei gestalten</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      E-Mail-Ping-Pong bei Besichtigungen kostet Zeit und Nerven. Mit KI-gestützter Terminbuchung planen Interessenten selbst – fehlerfrei und effizient.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        👉 <strong>Ergebnis:</strong> Minuten statt Stunden für Terminorganisation.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-12" />

                {/* PDF Download Section */}
                <div className="bg-gradient-subtle border border-border rounded-xl p-8 mb-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">📄 Leitfaden als PDF herunterladen</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Lade dir den kompletten Leitfaden "5 Probleme, die du heute lösen kannst" als PDF herunter. Perfekt zum Ausdrucken, Weiterleiten oder als Nachschlagewerk für dein Team.
                      </p>
                      <ul className="text-muted-foreground space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          Alle 5 Lösungen im Überblick
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          Praktische Umsetzungstipps
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          Kostenloser Bonus: Checkliste für den ersten Schritt
                        </li>
                      </ul>
                      <Button variant="cta" size="lg" className="w-full md:w-auto">
                        <Download className="w-5 h-5 mr-2" />
                        PDF kostenlos herunterladen
                      </Button>
                    </div>
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/b6154235-92ef-4609-8331-93cbfe6ae4dd.png"
                        alt="Digitalisierung & KI in der Immobilienverwaltung - PDF Vorschau"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-card border border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Warum jetzt handeln?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Die Branche verändert sich. Wer jetzt in Digitalisierung investiert, spart nicht nur Kosten, sondern macht den Beruf des Verwalters wieder attraktiver und sichert die Zukunftsfähigkeit seines Unternehmens.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-primary p-8 rounded-lg text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">🚀 Dein nächster Schritt mit PAXUP</h3>
                  <p className="mb-6 leading-relaxed">
                    Wir begleiten dich von der Strategie bis zur Umsetzung. In einem kostenlosen 30-Minuten-Gespräch zeigen wir dir drei sofort umsetzbare Maßnahmen, die dich spürbar entlasten.
                  </p>
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    👉 Jetzt Gespräch vereinbaren
                  </Button>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-background/50 border border-border p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">📩 Immer einen Schritt voraus bleiben</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Melde dich zu unserem Newsletter an und erhalte regelmäßig Tipps, Praxisbeispiele und Fördermöglichkeiten für Digitalisierung & KI im Mittelstand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <input 
                      type="email" 
                      placeholder="Deine E-Mail-Adresse"
                      className="flex-1 px-4 py-2 border border-border rounded-lg"
                    />
                    <Button variant="cta">
                      👉 Zum Newsletter anmelden
                    </Button>
                  </div>
                </div>

                {/* Fazit */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">✨ Fazit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digitalisierung und KI sind nicht "nice to have" – sie sind die Basis für nachhaltiges Wachstum in der Immobilienverwaltung. Mit PAXUP hast du einen Partner, der dich versteht, Lösungen umsetzt und dir Freiräume für das Wesentliche schafft.
                  </p>
                </div>

                <div className="flex gap-4 mt-12">
                  <Link to="/blog">
                    <Button variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Zurück zum Blog
                    </Button>
                  </Link>
                  <Button variant="cta">
                    Kostenlose Beratung starten
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost4;