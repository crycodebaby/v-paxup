// src/pages/Impressum.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import UpSymbol from "@/assets/logo/Up_rot.png";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main>
        {/* Hero / Intro */}
        <section className="relative overflow-hidden">
          {/* Dekorativer Hintergrund */}
          <div className="absolute inset-0 pointer-events-none">
            {/* sanfter Verlauf + Partikel-Glow */}
            <div className="absolute inset-0 bg-gradient-subtle" />
            <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-secondary/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-[460px] h-[460px] bg-primary/15 blur-3xl rounded-full" />
            <img
              src={UpSymbol}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 right-6 w-[220px] opacity-[0.06] rotate-12 select-none pointer-events-none hidden md:block"
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 text-secondary px-4 py-1.5 mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wide">
                  Rechtliche Angaben
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Impressum
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Angaben gemäß § 5 TMG und verantwortliche Stelle für den Inhalt
                dieser Website.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Ansprechpartner & Adresse */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Verantwortlicher für den Inhalt
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Theodore Rudolph
                    </p>
                    <p className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <span>
                        Grünberger Straße 143
                        <br />
                        35394 Gießen
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        className="hover:underline"
                        href="mailto:support@paxup.de"
                      >
                        support@paxup.de
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a className="hover:underline" href="tel:+4964120107130">
                        +49 641 20107130
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Haftungsausschluss
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
                    keine Haftung für die Inhalte externer Links. Für den Inhalt
                    der verlinkten Seiten sind ausschließlich deren Betreiber
                    verantwortlich. Alle Informationen auf dieser Website wurden
                    mit größtmöglicher Sorgfalt erstellt; eine Gewähr für die
                    Richtigkeit, Vollständigkeit und Aktualität können wir
                    jedoch nicht übernehmen.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    EU-Streitschlichtung
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                      <ExternalLink className="w-4 h-4" />
                    </a>{" "}
                    finden. Wir sind nicht verpflichtet und grundsätzlich nicht
                    bereit, an einem Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Kontakt/CTA-Karte rechts */}
              <aside className="space-y-6">
                <div className="bg-gradient-primary text-white rounded-2xl p-6 md:p-8 shadow-elegant">
                  <h3 className="text-xl font-bold mb-2">Haben Sie Fragen?</h3>
                  <p className="text-white/90 mb-4">
                    Unser Team hilft Ihnen gerne weiter. Wir melden uns in der
                    Regel innerhalb von 24 Stunden.
                  </p>
                  <a
                    href="https://calendly.com/paxup"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-white text-primary px-4 py-2 font-medium hover:bg-white/90 transition-colors"
                  >
                    Termin vereinbaren
                  </a>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h3 className="text-lg font-semibold mb-3">Schnellkontakt</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-secondary" />
                      <a
                        className="hover:underline"
                        href="mailto:support@paxup.de"
                      >
                        support@paxup.de
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-secondary" />
                      <a className="hover:underline" href="tel:+4964120107130">
                        +49 641 20107130
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
