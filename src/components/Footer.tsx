import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">PAXUP</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ihr Partner für Digitalisierung und KI im Mittelstand. 
                Alles aus einer Hand - von der Strategie bis zur Umsetzung.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">kontakt@paxup.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Deutschland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Unsere Leistungen</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Digitalisierungsstrategie
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                KI-Beratung & Implementierung
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Prozessautomatisierung
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Systemintegration
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Fördermittelberatung
              </a>
            </nav>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Branchen</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Immobilienverwaltung
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Großhandel
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dienstleistung
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Pflege
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Handwerk
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Bleiben Sie informiert über neue Digitalisierungstrends und KI-Entwicklungen.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse"
                className="bg-muted/30"
              />
              <Button variant="cta" className="w-full" onClick={() => window.open('http://eepurl.com/jlQLmA', '_blank')}>
                Anmelden
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold">Folgen Sie uns</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors group"
                >
                  <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 text-sm text-muted-foreground">
            <span>© 2024 PAXUP. Alle Rechte vorbehalten.</span>
          </div>
          
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              AGB
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie-Einstellungen
            </a>
          </nav>
        </div>

        {/* Trust Badges */}
        <div className="pb-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xs text-muted-foreground font-medium">
              🔒 DSGVO-konform
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              🇩🇪 Hosting in Deutschland
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              ✓ ISO 27001 zertifiziert
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              💰 Förderfähig bis 80%
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;