import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Wasserzeichen (hell/dunkel)
import UpRed from "@/assets/logo/Up_rot.png";
import UpWhite from "@/assets/logo/Up_weiss.png";

export default function Impressum() {
  // Seitentitel setzen (ohne neue Abhängigkeiten)
  useEffect(() => {
    const prev = document.title;
    document.title = "Impressum | PAXUP";
    return () => {
      document.title = prev;
    };
  }, []);

  const orgName = "PAXUP";
  const email = "support@paxup.de";
  const phone = "+49 641 20107130";
  const addressStreet = "Musteradresse 123";
  const addressCity = "27472 Cuxhaven";
  const country = "Deutschland";

  // SEO: Strukturierte Daten
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: orgName,
    url: "https://paxup.support",
    email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressStreet,
      addressLocality: "Cuxhaven",
      postalCode: "27472",
      addressCountry: "DE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email,
        telephone: phone,
        areaServed: "DE",
        availableLanguage: ["de"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero / Intro mit subtiler Bühne */}
      <div className="relative overflow-hidden">
        {/* sanfter Verlauf */}
        <div
          className="absolute inset-0 bg-gradient-subtle"
          aria-hidden="true"
        />
        {/* Akzent-Blobs */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-secondary/10 blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-24 w-[46rem] h-[46rem] rounded-full bg-primary/10 blur-3xl animate-pulse"
          aria-hidden="true"
          style={{ animationDelay: "0.8s" }}
        />
        {/* Wasserzeichen: rot im Light, weiß im Dark */}
        <picture aria-hidden="true">
          <source srcSet={UpWhite} media="(prefers-color-scheme: dark)" />
          <img
            src={UpRed}
            alt=""
            className="pointer-events-none select-none absolute right-[-12%] top-1/2 -translate-y-1/2 w-[54rem] max-w-none opacity-[0.06] dark:opacity-[0.08]"
          />
        </picture>

        {/* Headline */}
        <section className="relative container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <header className="max-w-3xl animate-fade-in">
            <p className="text-sm uppercase tracking-wide text-secondary font-semibold">
              Rechtliche Angaben
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Impressum
            </h1>
            <p className="text-lg text-muted-foreground mt-3">
              Rechtssicher. Übersichtlich. In deinem Markenlook.
            </p>
          </header>
        </section>
      </div>

      {/* Hauptinhalt */}
      <main className="relative container mx-auto px-4 lg:px-8 pb-20 md:pb-28 flex-1">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Linke Spalte */}
          <section
            className="lg:col-span-7 space-y-8 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            {/* Anbieter/Verantwortliche */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-4">
                Anbieter & Verantwortlich i.S.d. § 5 TMG
              </h2>
              <div className="space-y-1">
                <div className="font-semibold">{orgName}</div>
                <div>Verantwortlich für Inhalte:</div>
                <div>H. Fernandez &amp; H. Rudolph</div>
                <div>{addressStreet}</div>
                <div>{addressCity}</div>
                <div>{country}</div>
              </div>
              <div className="mt-4 space-y-1">
                <a
                  className="text-primary hover:underline"
                  href={`mailto:${email}`}
                  rel="nofollow"
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

            {/* Haftung für Inhalte */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir sind gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet und als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>
            </div>

            {/* EU-Streitschlichtung */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle im Sinne des VSBG teilzunehmen.
              </p>
            </div>
          </section>

          {/* Rechte Spalte (Info / Quicklinks) */}
          <aside
            className="lg:col-span-5 space-y-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Kontakt
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  E-Mail:{" "}
                  <a
                    className="text-primary hover:underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
                <li>
                  Telefon:{" "}
                  <a
                    className="hover:underline"
                    href={`tel:${phone.replace(/\s/g, "")}`}
                  >
                    {phone}
                  </a>
                </li>
                <li>
                  Anschrift: {addressStreet}, {addressCity}
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/datenschutz"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Datenschutzhinweise ansehen →
                </Link>
              </div>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-xl p-6 shadow-elegant">
              <h3 className="text-lg font-semibold mb-2">Schneller Termin</h3>
              <p className="text-secondary-foreground/85">
                Sie benötigen Unterstützung oder haben eine rechtliche Frage zu
                Inhalten?
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
          </aside>
        </div>
      </main>

      <Footer />

      {/* JSON-LD für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
