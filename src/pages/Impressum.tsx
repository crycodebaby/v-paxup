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
            <div
              className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl
                            bg-[hsl(var(--secondary)/0.12)] dark:bg-[hsl(var(--primary)/0.12)]"
            />
            <div
              className="absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full blur-3xl
                            bg-[hsl(var(--secondary)/0.10)] dark:bg-[hsl(var(--primary)/0.14)]"
            />
            <img
              src={UpSymbol}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 right-6 w-[220px] opacity-[0.06] rotate-12 select-none pointer-events-none hidden md:block"
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              {/* Kontraststarke Pill – Light: secondary, Dark: primary */}
              <div
                className="
                  inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                  text-secondary-foreground hover:opacity-90 transition-all duration-300
                  bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]
                "
              >
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
                      <MapPin
                        className="w-5 h-5 mt-0.5
                                         text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]"
                      />
                      <span>
                        Grünberger Straße 143
                        <br />
                        35394 Gießen
                      </span>
                    </p>

                    <p className="flex items-center gap-3">
                      <Mail
                        className="w-5 h-5
                                       text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]"
                      />
                      <a
                        className="hover:underline"
                        href="mailto:support@paxup.de"
                      >
                        support@paxup.de
                      </a>
                    </p>

                    <p className="flex items-center gap-3">
                      <Phone
                        className="w-5 h-5
                                        text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]"
                      />
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
                      className="inline-flex items-center gap-1 hover:underline
                                 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]"
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
                <div
                  className="
                    rounded-2xl p-6 md:p-8 text-secondary-foreground shadow-elegant
                    bg-[linear-gradient(135deg,hsl(var(--secondary))_0%,hsl(var(--secondary)/0.92)_50%,hsl(var(--secondary)/0.85)_100%)]
                    dark:bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(var(--primary)/0.95)_40%,hsl(var(--primary)/0.88)_100%)]
                  "
                >
                  <h3 className="text-xl font-bold mb-2">Haben Sie Fragen?</h3>
                  <p className="text-white/90 mb-4">
                    Unser Team hilft Ihnen gerne weiter. Wir melden uns in der
                    Regel innerhalb von 24 Stunden.
                  </p>

                  {/* Weißer Button auf roter Fläche, CI-konform; Fokus sichtbar */}
                  <a
                    href="https://cal.com/paxup"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center rounded-md
                      bg-white text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]
                      hover:bg-white/90
                      px-4 py-2 font-semibold transition-colors
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                      focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--secondary))]
                      dark:focus-visible:ring-offset-[hsl(var(--primary))]
                    "
                  >
                    Termin vereinbaren
                  </a>
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
