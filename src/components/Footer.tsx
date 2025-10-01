// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Youtube, Instagram } from "lucide-react";

// Logos
import FullLogo from "@/assets/logo/Logo_weiss_rot.png";
import UpSymbol from "@/assets/logo/Up_weiss.png"; // Wasserzeichen

const footerLinks = [
  {
    title: "Leistungen",
    links: [
      { label: "Digitalisierungsstrategie", href: "/leistungen" },
      { label: "KI-Beratung & Implementierung", href: "/leistungen" },
      { label: "Prozessautomatisierung", href: "/leistungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Blog", href: "/blog" },
      { label: "Anwendungsfälle", href: "/anwendungsfaelle" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Instagram, href: "#", name: "Instagram" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const Footer = () => {
  const mailchimpUrl = "http://eepurl.com/jlQLmA";
  const calendlyUrl = "https://cal.com/paxup";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121b2f] text-white pt-24 md:pt-32 overflow-hidden">
      {/* sanfter Übergang in den Footer */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-32 bg-background -skew-y-2 origin-top-left"
      />

      <div className="relative container mx-auto px-4 lg:px-8 z-10">
        {/* Wasserzeichen */}
        <img
          src={UpSymbol}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-auto opacity-5 pointer-events-none select-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Linke Spalte: Logo + Linklisten + Kontakt */}
          <div className="lg:col-span-7">
            <Link to="/" aria-label="Zur Startseite">
              <img
                src={FullLogo}
                alt="PAXUP Logo"
                className="h-12 w-auto mb-8"
              />
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="font-semibold">{section.title}</h4>
                  <nav className="space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="block text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}

              <div className="space-y-4">
                <h4 className="font-semibold">Kontakt</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <a
                    href="mailto:support@paxup.de"
                    className="hover:text-white transition-colors"
                  >
                    support@paxup.de
                  </a>
                  <div className="flex flex-col">
                    <a
                      href="tel:+4964120107130"
                      className="hover:text-white transition-colors"
                    >
                      +49 641 20107130
                    </a>
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Termin vereinbaren →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: CTA-Block Newsletter / Termin */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div
              className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-elegant 
                         lg:rotate-2 lg:-translate-y-16 transform transition-transform duration-300
                         hover:rotate-0 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-secondary-foreground mb-3">
                Bleiben Sie am Puls der Zeit
              </h3>
              <p className="text-secondary-foreground/85 mb-6">
                Aktuelle Insights zu KI, Digitalisierung & Fördermitteln.
              </p>

              {/* Hinweis: Der Input ist rein visuell – Button öffnet Mailchimp. */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  inputMode="email"
                  placeholder="Ihre E-Mail"
                  aria-label="E-Mail für Newsletter"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button
                  type="button"
                  className="bg-white text-secondary hover:bg-white/90"
                  onClick={() => window.open(mailchimpUrl, "_blank")}
                >
                  Anmelden
                </Button>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open(calendlyUrl, "_blank")}
                >
                  Kostenlosen Termin buchen
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-24 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <span className="text-white/60">
            © {currentYear} PAXUP. Alle Rechte vorbehalten.
          </span>

          <div className="flex items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden sm:flex gap-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
