// src/pages/Datenschutz.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Cookie,
  Mail,
  Phone,
  Globe,
  Database,
  CalendarClock,
  Newspaper,
  ExternalLink,
  UserCheck,
  Lock,
} from "lucide-react";
import UpSymbol from "@/assets/logo/Up_rot.png";

export default function Datenschutz() {
  const lastUpdated = "01.10.2025";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main>
        {/* Hero / Intro */}
        <section className="relative overflow-hidden">
          {/* Deko-Hintergrund */}
          <div className="absolute inset-0 pointer-events-none">
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
                  Datenschutz nach DSGVO
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Datenschutz&shy;erklärung
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Auf
                dieser Seite informieren wir Sie transparent über Art, Umfang
                und Zweck der Verarbeitung personenbezogener Daten beim Besuch
                dieser Website.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Letzte Aktualisierung: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Inhalt */}
        <section className="relative py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Linke Spalte: Hauptinfos */}
              <div className="lg:col-span-2 space-y-8">
                {/* Verantwortlicher */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-primary" />
                    Verantwortlicher
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p className="font-medium text-foreground">Till Rudolph</p>
                    <p>
                      Grünberger Straße 143
                      <br />
                      35394 Gießen
                    </p>
                    <p>
                      E-Mail:{" "}
                      <a
                        href="mailto:support@paxup.de"
                        className="text-primary hover:underline"
                      >
                        support@paxup.de
                      </a>
                      <br />
                      Telefon:{" "}
                      <a
                        href="tel:+4964120107130"
                        className="text-primary hover:underline"
                      >
                        +49 641 20107130
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hosting / Server-Logs */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary" />
                    Hosting, Auslieferung & Server-Logfiles (Vercel) /
                    Code-Repository (GitHub)
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Unsere Website wird über die Plattform{" "}
                      <span className="text-foreground font-medium">
                        Vercel
                      </span>{" "}
                      bereitgestellt und über deren Edge-/CDN-Infrastruktur
                      ausgeliefert. Im Rahmen der technischen Bereitstellung
                      fallen serverseitig Protokolldaten (sog. Server-Logfiles)
                      an, z.&nbsp;B. die aufgerufene URL, Datum und Uhrzeit des
                      Zugriffs, übertragene Datenmenge, Meldung über
                      erfolgreichen Abruf, Browsertyp/-version, das
                      Betriebssystem, die Referrer-URL, verkürzte IP-Adresse
                      sowie der anfragende Provider.
                    </p>
                    <p>
                      Die Verarbeitung erfolgt auf Grundlage von Art.&nbsp;6
                      Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse) an
                      einer sicheren, stabilen und effizienten Auslieferung
                      unserer Website. Eine Zusammenführung mit anderen Daten
                      findet nicht statt. Die Logfiles werden nach einer
                      angemessenen Speicherdauer automatisch gelöscht.
                    </p>
                    <p>
                      Vercel kann zur Erbringung seiner Dienste Infrastrukturen
                      in Drittländern (insbesondere USA) einsetzen. In diesen
                      Fällen werden geeignete Garantien gem. Art.&nbsp;44 ff.
                      DSGVO (z.&nbsp;B. EU-Standardvertragsklauseln) genutzt.
                      Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung
                      (DPA).
                    </p>
                    <p>
                      Der Quellcode der Website wird in einem privaten
                      Repository bei{" "}
                      <span className="text-foreground font-medium">
                        GitHub
                      </span>{" "}
                      verwaltet (CI/CD). GitHub verarbeitet hierbei keine
                      personenbezogenen Daten von Website-Besuchern, sofern Sie
                      nicht aktiv GitHub-Inhalte (z.&nbsp;B. externe Embeds)
                      aufrufen.
                    </p>
                  </div>
                </div>

                {/* Cookies / Consent */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-primary" />
                    Cookies & Einwilligungen
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Wir verwenden Cookies, die für die Darstellung und den
                      Betrieb der Website technisch notwendig sind (z.&nbsp;B.
                      Spracheinstellungen, Navigation). Rechtsgrundlage ist
                      Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes
                      Interesse) bzw. §&nbsp;25 Abs.&nbsp;2 TTDSG.
                    </p>
                    <p>
                      Nicht notwendige (komfort- oder marketingbezogene) Cookies
                      setzen wir nur nach Ihrer ausdrücklichen Einwilligung
                      (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO, §&nbsp;25
                      Abs.&nbsp;1 TTDSG). Sofern wir solche Dienste einsetzen,
                      informieren wir hierüber im Consent-Banner und in dieser
                      Erklärung.
                    </p>
                  </div>
                </div>

                {/* Terminvereinbarung / Cal.com */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <CalendarClock className="w-6 h-6 text-primary" />
                    Terminvereinbarung (Cal.com)
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Für die Buchung von Terminen nutzen wir den Dienst{" "}
                      <span className="text-foreground font-medium">
                        Cal.com
                      </span>
                      . Bei der Terminbuchung werden die von Ihnen eingegebenen
                      Daten (z.&nbsp;B. Name, E-Mail, Terminpräferenzen) an
                      Cal.com übermittelt. Die Verarbeitung erfolgt auf
                      Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
                      (zur Durchführung vorvertraglicher Maßnahmen) bzw. —
                      sofern erforderlich — auf Grundlage Ihrer Einwilligung
                      (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO).
                    </p>
                    <p>
                      Weitere Informationen entnehmen Sie der
                      Datenschutzerklärung von Cal.com:{" "}
                      <a
                        href="https://cal.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        cal.com/privacy
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      . Es kann zu einer Datenübermittlung in Drittländer
                      (insbesondere USA) kommen. In diesem Fall treffen wir
                      geeignete Schutzmaßnahmen gem. Art.&nbsp;44 ff. DSGVO
                      (z.&nbsp;B. EU-Standardvertragsklauseln); mit Cal.com
                      besteht ein Vertrag zur Auftragsverarbeitung (DPA).
                    </p>
                  </div>
                </div>

                {/* Newsletter / Mailchimp */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <Newspaper className="w-6 h-6 text-primary" />
                    Newsletter (Mailchimp)
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Wenn Sie unseren Newsletter abonnieren, verarbeiten wir
                      Ihre E-Mail-Adresse und ggf. weitere Angaben zur
                      Personalisierung. Wir verwenden hierfür den Dienst{" "}
                      <span className="text-foreground font-medium">
                        Mailchimp
                      </span>{" "}
                      (Intuit). Rechtsgrundlage ist Ihre Einwilligung
                      (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Sie können
                      diese jederzeit mit Wirkung für die Zukunft widerrufen
                      (z.&nbsp;B. über den Abmeldelink in jeder E-Mail).
                    </p>
                    <p>
                      Informationen zum Datenschutz bei Mailchimp:{" "}
                      <a
                        href="https://mailchimp.com/legal/privacy/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        mailchimp.com/legal/privacy
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      . Es kann zu einer Datenübermittlung in die USA kommen; in
                      diesem Fall werden geeignete Garantien nach Art.&nbsp;46
                      DSGVO (u.&nbsp;a. EU-Standardvertragsklauseln) genutzt.
                    </p>
                  </div>
                </div>

                {/* Ihre Rechte */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Ihre Rechte als betroffene Person
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Sie haben nach DSGVO insbesondere das Recht auf Auskunft,
                      Berichtigung, Löschung, Einschränkung der Verarbeitung,
                      Datenübertragbarkeit sowie Widerspruch gegen die
                      Verarbeitung Ihrer personenbezogenen Daten. Soweit die
                      Verarbeitung auf Ihrer Einwilligung beruht, können Sie
                      diese jederzeit mit Wirkung für die Zukunft widerrufen.
                    </p>
                    <p>
                      Bitte wenden Sie sich hierfür an{" "}
                      <a
                        href="mailto:support@paxup.de"
                        className="text-primary hover:underline"
                      >
                        support@paxup.de
                      </a>
                      . Zudem haben Sie das Recht, sich bei einer
                      Datenschutzaufsichtsbehörde zu beschweren.
                    </p>
                  </div>
                </div>

                {/* Externe Links & Socials */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-primary" />
                    Externe Links & soziale Netzwerke
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Auf unserer Website verlinken wir zu externen Seiten
                      (z.&nbsp;B. LinkedIn, YouTube, Instagram). Beim Aufruf
                      dieser Links verlassen Sie unsere Website; für die
                      Verarbeitung personenbezogener Daten auf den Zielseiten
                      sind die jeweiligen Betreiber verantwortlich. Hinweise
                      hierzu finden Sie in den Datenschutzerklärungen der
                      entsprechenden Anbieter.
                    </p>
                  </div>
                </div>

                {/* Schluss */}
                <p className="text-xs text-muted-foreground">
                  Hinweis: Diese Informationen stellen keine Rechtsberatung dar
                  und erheben keinen Anspruch auf Vollständigkeit. Bitte lassen
                  Sie Ihre finale Fassung rechtlich prüfen.
                </p>
              </div>

              {/* Rechte Spalte: Kontakt/CTA */}
              <aside className="space-y-6">
                <div className="bg-gradient-primary text-white rounded-2xl p-6 md:p-8 shadow-elegant">
                  <h3 className="text-xl font-bold mb-2">
                    Fragen zum Datenschutz?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Schreiben Sie uns – wir kümmern uns schnellstmöglich.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href="mailto:support@paxup.de"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      support@paxup.de
                    </a>
                    <br />
                    <a
                      href="tel:+4964120107130"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      +49 641 20107130
                    </a>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                  <h3 className="text-lg font-semibold mb-3">
                    Kurzübersicht der Rechtsgrundlagen
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
                    <li>Art. 6 Abs. 1 lit. b DSGVO – Vertrag/Anbahnung</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
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
