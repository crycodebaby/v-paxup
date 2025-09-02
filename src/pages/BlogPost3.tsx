import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost3 = () => {
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
              
              <Badge variant="outline" className="mb-4">Fördermittel</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Fördermittel für Digitalisierung: Der komplette Leitfaden 2024
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Alle wichtigen staatlichen Förderungen für Ihre Digitalisierungsprojekte - mit Antragsstellung und Praxistipps.
              </p>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Lisa Müller
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  10. März 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  12 Min. Lesezeit
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Staatliche Förderung für die digitale Transformation</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Die Bundesregierung und die Länder bieten umfangreiche Förderprogramme für die Digitalisierung von Unternehmen. Bis zu 50% der Investitionskosten können übernommen werden.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-semibold text-foreground mb-3">Digital Jetzt (BMWi)</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>Förderung:</strong> Bis zu 50.000€ (50% der Kosten)
                    </p>
                    <p className="text-muted-foreground">
                      Fördert Investitionen in digitale Technologien und Qualifizierung der Mitarbeiter. Besonders geeignet für KMU mit 3-499 Beschäftigten.
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-semibold text-foreground mb-3">go-digital (BMWi)</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>Förderung:</strong> Bis zu 16.500€ (50% der Beratungskosten)
                    </p>
                    <p className="text-muted-foreground">
                      Beratungsförderung für IT-Sicherheit, digitale Markterschließung und digitalisierte Geschäftsprozesse.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Schritt-für-Schritt zur erfolgreichen Antragstellung</h3>
                
                <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-8">
                  <li><strong>Projektplanung:</strong> Definieren Sie konkrete Ziele und Maßnahmen</li>
                  <li><strong>Kostenplanung:</strong> Erstellen Sie eine detaillierte Kostenschätzung</li>
                  <li><strong>Antragsstellung:</strong> Reichen Sie den Antrag VOR Projektbeginn ein</li>
                  <li><strong>Bewilligung abwarten:</strong> Starten Sie erst nach positiver Rückmeldung</li>
                  <li><strong>Dokumentation:</strong> Sammeln Sie alle Belege und Nachweise</li>
                </ol>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Wichtiger Hinweis</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Fördermittel müssen immer VOR Projektbeginn beantragt werden. Ein vorzeitiger Maßnahmenbeginn führt zum Förderausschluss.
                  </p>
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

export default BlogPost3;