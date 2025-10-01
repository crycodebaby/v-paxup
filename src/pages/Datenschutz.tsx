import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Cookie as CookieIcon,
  Mail,
  ExternalLink,
} from "lucide-react";

// Wasserzeichen (hell/dunkel)
import UpRed from "@/assets/logo/Up_rot.png";
import UpWhite from "@/assets/logo/Up_weiss.png";

export default function Datenschutz() {
  // Seitentitel setzen
  useEffect(() => {
    const prev = document.title;
    document.title = "Datenschutz | PAXUP";
    return () => {
      document.title = prev;
    };
  }, []);

  // Grunddaten für Kontakt + JSON-LD
  const orgName = "PAXUP";
  const email = "support@paxup.de";
  const phone = "+49 641 20107130";
  const addressStreet = "Musteradresse 123";
  const addressCity = "27472 Cuxhaven";
  const country = "Deutschland";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Datenschutzerklärung",
    description:
      "Informationen zur Verarbeitung personenbezogener Daten bei Nutzung der Website PAXUP.",
    url: "https://paxup.support/datenschutz",
    publisher: {
      "@type": "Organization",
      name: orgName,
      email,
      telephone: phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: addressStreet,
        addressLocality: "Cuxhaven",
        postalCode: "27472",
        addressCountry: "DE",
      },
    },
  };

  // Kleine, performante Partikel ohne externe Libs
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.6 ? 8 : 5,
    delay: `${(i % 6) * 0.35}s`,
    opacity: Math.random() > 0.5 ? 0.12 : 0.08,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* HERO / Bühne */}
      <div className="relative overflow-hidden">
        {/* sanfter Grundverlauf */}
        <div
          className="absolute inset-0 bg-gradient-subtle"
          aria-hidden="true"
        />

        {/* Akzent-Blobs für Tiefe */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-secondary/10 blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-20 w-[48rem] h-[48rem] rounded-full bg-primary/10 blur-3xl animate-pulse"
          aria-hidden="true"
          style={{ animationDelay: "0.7s" }}
        />

        {/* Wasserzeichen – rot in Light, weiß in Dark */}
        <picture aria-hidden="true">
          <source srcSet={UpWhite} media="(prefers-color-scheme: dark)" />
          <img
            src={UpRed}
            alt=""
            className="pointer-events-none select-none absolute right-[-12%] top-1/2 -translate-y-1/2 w-[58rem] max-w-none opacity-[0.06] dark:opacity-[0.08]"
          />
        </picture>

        {/* Partikel-Grid (leicht, rein CSS) */}
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-secondary"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animation: `pulse 3.2s ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Headline */}
        <section className="relative container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <header className="max-w-3xl animate-fade-in">
            <p className="text-sm uppercase tracking-wide text-secondary font-semibold">
              Recht & Transparenz
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground mt-3">
              Wir nehmen den Schutz Ihrer Daten ernst. Nachfolgend informieren
              wir Sie über Art, Umfang und Zweck der Verarbeitung
              personenbezogener Daten auf dieser Website.
            </p>
          </header>
        </section>
      </div>

      {/* INHALT */}
      <main className="relative container mx-auto px-4 lg:px-8 pb-20 md:pb-28 flex-1">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Linke Spalte – Inhalte */}
          <section className="lg:col-span-8 space-y-8 animate-fade-in">
            {/* Verantwortliche Stelle */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Verantwortliche Stelle
                </h2>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <div className="font-medium text-foreground">{orgName}</div>
                <div>H. Fernandez &amp; H. Rudolph</div>
                <div>{addressStreet}</div>
                <div>{addressCity}</div>
                <div>{country}</div>
              </div>
              <div className="mt-4 space-y-1">
                <a
                  className="text-primary hover:underline"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                <div>
                  Tel.:{" "}
                  <a
                    className="hover:underline"
                    href={`tel:${phone.replace(/\s/g, "")}`}
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Allgemeine Hinweise */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Allgemeine Hinweise zur Datenverarbeitung
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen
                der geltenden Datenschutzgesetze (insb. DSGVO und BDSG). Die
                Verarbeitung erfolgt nur, soweit sie zur Bereitstellung einer
                funktionsfähigen Website, zur Erbringung unserer Leistungen
                sowie zur Beantwortung von Anfragen erforderlich ist.
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Rechtsgrundlagen: Art. 6 Abs. 1 lit. a, b, f DSGVO</li>
                <li>Bereitstellung der Website (berechtigtes Interesse)</li>
                <li>Vertragserfüllung und vorvertragliche Maßnahmen</li>
                <li>Einwilligung, sofern erforderlich (z. B. Newsletter)</li>
              </ul>
            </div>

            {/* Server-Logfiles */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Server-Logfiles (Hosting)
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Beim Aufruf unserer Seiten erhebt und speichert der Server
                automatisch Informationen in sogenannten Server-Logfiles, die
                Ihr Browser übermittelt. Dazu gehören insbesondere IP-Adresse
                (gekürzt oder pseudonymisiert), Datum und Uhrzeit der Anfrage,
                Zeitzonendifferenz, Inhalt der Anforderung (konkrete Seite),
                Zugriffsstatus/HTTP-Statuscode, jeweils übertragene Datenmenge,
                Referrer-URL, Browsertyp nebst Version, Betriebssystem und
                dessen Oberfläche.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Die Speicherung erfolgt zur Sicherstellung des Betriebs, der
                Sicherheit und Stabilität der Systeme (Art. 6 Abs. 1 lit. f
                DSGVO). Eine Zusammenführung dieser Daten mit anderen
                Datenquellen erfolgt nicht. Logfiles werden in der Regel binnen
                14–30 Tagen gelöscht.
              </p>
            </div>

            {/* Cookies / Einwilligung */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <CookieIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Cookies & Einwilligung
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Website verwendet — sofern aktiv — Cookies und ähnliche
                Technologien, die für den Betrieb technisch erforderlich sind
                (z. B. Session-Cookies). Soweit optionale Cookies/Tools
                eingesetzt werden (z. B. Statistik/Marketing), geschieht dies
                ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Die Einwilligung kann jederzeit mit Wirkung für
                die Zukunft widerrufen werden.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Hinweis: In der aktuellen Konfiguration setzen wir keine
                Tracking-Cookies ohne Ihre Einwilligung ein. Falls Sie ein
                Consent-Banner integrieren, ergänzen Sie hier bitte die
                konkreten Tools und Speicher­dauern.
              </p>
            </div>

            {/* Kontaktanfragen */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Kontaktaufnahme</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bei Kontaktaufnahme per E-Mail oder Formular verarbeiten wir die
                von Ihnen übermittelten Angaben (z. B. Name, E-Mail, Nachricht)
                zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs.
                1 lit. b DSGVO (vorvertragliche Maßnahmen/Vertragserfüllung)
                bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                effizienter Kommunikation).
              </p>
            </div>

            {/* Betroffenenrechte */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-3">Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
                (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
                Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
                DSGVO) und Widerspruch (Art. 21 DSGVO). Außerdem besteht ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde.
              </p>
            </div>

            {/* Löschfristen / Speicherdauer */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-3">Speicherdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personenbezogene Daten werden gelöscht, sobald der Zweck der
                Speicherung entfällt und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen. Bestehen
                Aufbewahrungsfristen, wird die Verarbeitung auf das notwendige
                Maß beschränkt.
              </p>
            </div>

            {/* Datensicherheit */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-3">Datensicherheit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir treffen angemessene technische und organisatorische
                Maßnahmen (TOM), um Ihre Daten gegen Verlust, Zerstörung,
                Zugriff, Veränderung oder Verbreitung durch unbefugte Personen
                zu schützen (u. a. TLS-Verschlüsselung).
              </p>
            </div>

            {/* Änderungen */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-3">Änderungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um
                sie stets den aktuellen rechtlichen Anforderungen sowie
                Änderungen unserer Leistungen anzupassen.
              </p>
            </div>
          </section>

          {/* Rechte Spalte – Quick Cards / CTA */}
          <aside
            className="lg:col-span-4 space-y-6 animate-fade-in"
            style={{ animationDelay: "0.06s" }}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Schnellzugriff
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <Link
                    to="/impressum"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Impressum ansehen →
                  </Link>
                </li>
                <li>
                  <a
                    className="text-foreground hover:text-primary transition-colors"
                    href={`mailto:${email}`}
                  >
                    Datenschutz-Kontakt →
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-xl p-6 shadow-elegant">
              <h3 className="text-lg font-semibold mb-2">Beratung anfragen</h3>
              <p className="text-secondary-foreground/85">
                Sie möchten sichere Digitalisierung mit klaren Standards? Wir
                unterstützen Sie gerne.
              </p>
              <a
                href="https://calendly.com/paxup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-secondary hover:bg-white/90 transition-colors"
              >
                Termin buchen
              </a>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                {orgName} · {addressStreet}, {addressCity}, {country}
              </p>
              <div className="mt-2 text-sm">
                <a
                  className="text-primary hover:underline"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                <div>
                  Tel.:{" "}
                  <a
                    className="hover:underline"
                    href={`tel:${phone.replace(/\s/g, "")}`}
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 border border-border bg-gradient-subtle shadow-soft">
              <h3 className="text-lg font-semibold mb-2">Ihre Privatsphäre</h3>
              <p className="text-sm text-muted-foreground">
                Wir setzen nur notwendige Technologien ein. Optionales Tracking
                nur mit Einwilligung.
              </p>
              <Button asChild className="mt-3">
                <a href="#top">Nach oben</a>
              </Button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

/* 
Hinweis: Die Partikel verwenden die native Tailwind-Animation "pulse". 
Für noch sanftere Bewegungen kannst du in deiner tailwind.config.ts 
eigene Keyframes ergänzen (optional).
*/
