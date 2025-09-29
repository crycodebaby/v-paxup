// src/components/Footer.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

// Import der Logo-Assets
import FullLogo from "@/assets/logo/Logo_weiss_rot.png";
import UpSymbol from "@/assets/logo/Up_weiss.png"; // Das weiße UP-Symbol für den Hintergrund

// === DATENSTRUKTUREN ===
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

// === Die Haupt-Footer-Komponente ===
const Footer = () => {
  const mailchimpUrl = "http://eepurl.com/jlQLmA";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121b2f] text-white pt-24 md:pt-32 overflow-hidden">
      {/* Diagonaler Einstieg in den Footer */}
      <div className="absolute top-0 left-0 w-full h-32 bg-background transform -skew-y-2 origin-top-left"></div>

      <div className="relative container mx-auto px-4 lg:px-8 z-10">
        {/* Wasserzeichen-Logo im Hintergrund */}
        <img
          src={UpSymbol}
          alt=""
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-auto opacity-5 pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Linke Seite: Logo und Links */}
          <div className="lg:col-span-7">
            <Link to="/">
              <img
                src={FullLogo}
                alt="PAXUP Logo"
                className="h-12 w-auto mb-8"
              />
            </Link>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="font-semibold text-white">{section.title}</h4>
                  <nav className="space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="block text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Kontakt</h4>
                <div className="space-y-2 text-sm text-white/70">
                  <p>kontakt@paxup.de</p>
                  <p>+49 (0) 123 456 789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Der dekonstruierte CTA-Block */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div
              className="bg-secondary p-8 rounded-2xl shadow-elegant w-full max-w-md 
                            transform lg:rotate-2 lg:-translate-y-16 hover:rotate-0 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Bleiben Sie am Puls der Zeit.
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Unser Newsletter liefert Ihnen die neuesten Insights zu KI &
                Digitalisierung direkt ins Postfach.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button
                  variant="default"
                  className="bg-white text-secondary hover:bg-white/90"
                  onClick={() => window.open(mailchimpUrl, "_blank")}
                >
                  Anmelden
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer-Leiste */}
        <div className="mt-24 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <span className="text-white/50">
            © {currentYear} PAXUP. Alle Rechte vorbehalten.
          </span>
          <div className="flex items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/50 transition-colors hover:text-white"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-white"
                  aria-label={name}
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
