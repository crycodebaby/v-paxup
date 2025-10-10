// src/components/LeadPopup.tsx
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, ShieldCheck, CheckCircle2, CalendarDays } from "lucide-react";

const STORAGE_KEY = "leadPopupClosedUntil"; // ISO-Date bis wann nicht mehr zeigen

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [branche, setBranche] = useState("");

  // --- Popup-Frequenz: nur alle 7 Tage erneut anzeigen ---
  useEffect(() => {
    const until = localStorage.getItem(STORAGE_KEY);
    if (until && new Date(until) > new Date()) return;

    // zeigen nach 12s oder bei 60% Scroll
    const timer = setTimeout(() => setIsOpen(true), 12000);

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const percent = scrolled / document.documentElement.scrollHeight;
      if (percent > 0.6) setIsOpen(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ESC zum Schließen
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const closeAndCooldown = useCallback(() => {
    const in7days = new Date();
    in7days.setDate(in7days.getDate() + 7);
    localStorage.setItem(STORAGE_KEY, in7days.toISOString());
    setIsOpen(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: An dein Backend / Form-Service anbinden
    console.log("Lead:", { email, name, branche });
    closeAndCooldown();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Kostenloses Gespräch vereinbaren"
      onClick={(e) => {
        // Klick auf Overlay schließt
        if (e.target === e.currentTarget) closeAndCooldown();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background text-foreground shadow-2xl">
        {/* Close */}
        <button
          onClick={closeAndCooldown}
          aria-label="Popup schließen"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-content-center rounded-full bg-background/90 shadow-md ring-1 ring-border hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid gap-0 lg:grid-cols-5">
          {/* Visuelle Seite (3/5) */}
          <div className="lg:col-span-3 bg-gradient-subtle p-5 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-xl text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold
                  text-secondary-foreground bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))]"
              >
                <CalendarDays className="h-4 w-4" />
                Kostenloses Gespräch
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Starte mit Deiner{" "}
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  Potenzialanalyse
                </span>
              </h3>

              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                In 30 Minuten zeigen wir Dir die drei wirksamsten Schritte für
                Deinen Einstieg: klar, messbar und auf Deine Branche
                zugeschnitten.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Konkrete Umsetzungsvorschläge statt Theorie",
                  "Branchenfokus und schnelle Ergebnisse",
                  "Start in 60 bis 90 Tagen – planbar und sicher",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    <span className="text-sm sm:text-base">{line}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Datenschutzkonform. Keine Weitergabe an Dritte.</span>
              </div>
            </div>
          </div>

          {/* Formular (2/5) */}
          <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Dein Name
                </label>
                <Input
                  type="text"
                  placeholder="Max Mustermann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Deine E-Mail
                </label>
                <Input
                  type="email"
                  placeholder="max@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Deine Branche
                </label>
                <Select value={branche} onValueChange={setBranche} required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Auswählen" />
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

              {/* Primäre Aktion: Rot in Light & Dark (nutzt Deinen CTA-Variant) */}
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full h-12"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Kostenloses Gespräch sichern
              </Button>

              {/* Alternative: Direkt Termin buchen (ohne Formular) */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-11"
                onClick={() => window.open("https://cal.com/paxup", "_blank")}
              >
                Direkt Termin buchen
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Du bekommst eine Bestätigung per E-Mail. Abmeldung jederzeit
                möglich.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
