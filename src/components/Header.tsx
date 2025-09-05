import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Leistungen", href: "#services" },
    { name: "Anwendungsfälle", href: "#use-cases" },
    { name: "Blog", href: "/blog" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Förderung", href: "#funding" },
    { name: "Kontakt", href: "#contact" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-foreground">PAX</span>
                <span className="relative text-foreground">
                  U
                  <ArrowUp className="absolute -top-1 -right-1 w-3 h-3 text-primary transform rotate-45" />
                </span>
                <span className="text-foreground">P</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
              Erstberatung
            </Button>
            <Button variant="cta" size="sm" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
              👉 Jetzt starten
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
                  Erstberatung
                </Button>
                <Button variant="cta" className="w-full" onClick={() => window.open('https://calendly.com/paxup', '_blank')}>
                  👉 Jetzt starten
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;