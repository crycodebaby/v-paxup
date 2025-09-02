import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>
              
              <Badge variant="outline" className="mb-4">
                Digitalisierung im Mittelstand
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Digitale Transformation im Handwerk: Erfolgreich in die Zukunft
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Von der Terminplanung bis zur Rechnungsstellung - wie digitale Tools Handwerksbetriebe revolutionieren.
              </p>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Marcus Klein
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  12. März 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  6 Min. Lesezeit
                </div>
              </div>
              
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Artikel teilen
              </Button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Das Handwerk im digitalen Wandel</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Das deutsche Handwerk steht vor einem Wendepunkt. Während traditionelle Fertigkeiten und Qualitätsstandards das Fundament bilden, eröffnet die Digitalisierung völlig neue Möglichkeiten für Effizienz, Kundenservice und Wachstum.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Warum Digitalisierung im Handwerk essentiell ist</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Der Fachkräftemangel, steigende Kundenerwartungen und verschärfter Wettbewerb machen Digitalisierung zu einer Notwendigkeit. Handwerksbetriebe, die digitale Tools klug einsetzen, können ihre Produktivität um bis zu 30% steigern.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-semibold text-foreground mb-3">1. Digitale Terminplanung</h4>
                    <p className="text-muted-foreground">
                      Online-Buchungssysteme reduzieren Telefonzeiten um 70% und ermöglichen Kunden 24/7-Terminbuchung. Automatische Erinnerungen verringern No-Shows drastisch.
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-semibold text-foreground mb-3">2. Mobile Auftragsbearbeitung</h4>
                    <p className="text-muted-foreground">
                      Tablets und Smartphones ermöglichen Auftragserfassung direkt vor Ort, Foto-Dokumentation und sofortige Kostenvoranschläge.
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-semibold text-foreground mb-3">3. Automatisierte Rechnungsstellung</h4>
                    <p className="text-muted-foreground">
                      Digitale Rechnungssysteme reduzieren Verwaltungsaufwand um 60% und verkürzen Zahlungszyklen erheblich.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Erfolgsfaktoren der digitalen Transformation</h3>
                
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                  <li>Mitarbeiter von Anfang an einbeziehen und schulen</li>
                  <li>Mit einfachen Tools beginnen, schrittweise erweitern</li>
                  <li>Prozesse vor der Digitalisierung optimieren</li>
                  <li>Auf benutzerfreundliche, branchenspezifische Lösungen setzen</li>
                  <li>Datenschutz und -sicherheit von Beginn an mitdenken</li>
                </ul>

                <Separator className="my-8" />

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Praxisbeispiel: Elektrobetrieb Schmidt</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Nach der Einführung digitaler Tools konnte Elektrobetrieb Schmidt seine Verwaltungszeiten um 40% reduzieren, die Kundenzufriedenheit um 25% steigern und gleichzeitig 15% mehr Aufträge bearbeiten - bei gleicher Mitarbeiterzahl.
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
                    Digitalisierung starten
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

export default BlogPost2;