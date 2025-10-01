import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [branche, setBranche] = useState("");

  useEffect(() => {
    // Check if popup was already closed
    const wasPopupClosed = localStorage.getItem("leadPopupClosed");
    if (wasPopupClosed) {
      return;
    }

    // Show popup after 10 seconds or on scroll
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    const handleScroll = () => {
      if (window.scrollY > 1000 && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, name, branche });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={() => {
            localStorage.setItem("leadPopupClosed", "true");
            setIsOpen(false);
          }}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid lg:grid-cols-5 gap-0">
          {/* Image Section - Now 3/5 width */}
          <div className="lg:col-span-3 p-4 lg:p-8 flex items-center justify-center bg-gradient-subtle">
            <img
              src="/lovable-uploads/f972f7e7-b6c7-47b8-861d-aadaae465c6b.png"
              alt="Kostenloser PDF-Report: Potenzialanalyse"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Form Section - Now 2/5 width */}
          <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  📅 KOSTENLOSES BERATUNGSGESPRÄCH
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Kostenloses Beratungsgespräch
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {" "}
                    vereinbaren
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vereinbaren Sie ein Termin für Ihren{" "}
                  <strong>individuellen Maßnahmenplan</strong>
                  mit 3 sofort umsetzbaren KI-Lösungen für Ihre Branche.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      3 konkrete KI-Implementierungen
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">
                      Branchenspezifische Empfehlungen
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">
                      Sofort umsetzbare Maßnahmen
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ihr Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Select value={branche} onValueChange={setBranche} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Ihre Branche" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immobilien">
                        Immobilienverwaltung
                      </SelectItem>
                      <SelectItem value="grosshandel">Großhandel</SelectItem>
                      <SelectItem value="dienstleistung">
                        Dienstleistung
                      </SelectItem>
                      <SelectItem value="pflege">Pflege</SelectItem>
                      <SelectItem value="handwerk">Handwerk</SelectItem>
                      <SelectItem value="andere">Andere Branche</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  variant="cta"
                  size="lg"
                  className="w-full h-12"
                  onClick={() => window.open("https://cal.com/paxup", "_blank")}
                >
                  📅 Termin vereinbaren
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                Kein Spam. Ihre Daten sind bei uns sicher.
                <br />
                Sie können sich jederzeit abmelden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
