// src/components/LeadPopup.tsx
import { useState, useEffect, useCallback, useRef } from "react";
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

const STORAGE_KEYS = {
  closedUntil: "leadPopup.closedUntil", // ISO-Date
  successUntil: "leadPopup.successUntil", // ISO-Date
  lastOpenAt: "leadPopup.lastOpenAt", // ISO-Date (optional)
} as const;

const COOLDOWN_DAYS_CLOSE = 7;
const COOLDOWN_DAYS_SUCCESS = 30;
const GRACE_DELAY_MS = 12000; // 12 s
const SCROLL_THRESHOLD = 0.6; // 60%

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function isBeforeNow(iso?: string | null) {
  return !iso || new Date(iso) <= new Date();
}

export default function LeadPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedThisSession, setHasOpenedThisSession] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [branche, setBranche] = useState("");

  const timers = useRef<number[]>([]);
  const listenersAttached = useRef(false);

  // --- safe localStorage helpers (SSR/Privacy robust) ---
  const getLS = useCallback((k: string): string | null => {
    try {
      if (typeof window === "undefined") return null;
      return window.localStorage.getItem(k);
    } catch (err) {
      console.debug("[LeadPopup] getLS failed:", err);
      return null;
    }
  }, []);

  const setLS = useCallback((k: string, v: string): void => {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(k, v);
    } catch (err) {
      console.debug("[LeadPopup] setLS failed:", err);
    }
  }, []);

  // --- frequency capping ---
  const suppressedByCooldown = useCallback((): boolean => {
    const closedUntil = getLS(STORAGE_KEYS.closedUntil);
    const successUntil = getLS(STORAGE_KEYS.successUntil);
    if (!isBeforeNow(successUntil)) return true;
    if (!isBeforeNow(closedUntil)) return true;
    return false;
  }, [getLS]);

  // --- scroll lock while open ---
  const lockBodyScroll = useCallback((lock: boolean) => {
    if (typeof document === "undefined") return;
    const body = document.body;
    body.style.overflow = lock ? "hidden" : "";
  }, []);

  // --- triggers cleanup (no 'any' casts) ---
  const onScroll = useCallback(() => {
    if (hasOpenedThisSession || suppressedByCooldown()) return;
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight || 1;
    const percent = scrolled / total;
    if (percent >= SCROLL_THRESHOLD) openPopup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOpenedThisSession, suppressedByCooldown]);

  const onMouseMoveExit = useCallback(
    (e: MouseEvent) => {
      if (hasOpenedThisSession || suppressedByCooldown()) return;
      if (e.clientY <= 10) openPopup();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [hasOpenedThisSession, suppressedByCooldown]
  );

  const cleanupTriggers = useCallback(() => {
    timers.current.forEach((tId) => window.clearTimeout(tId));
    timers.current = [];
    if (listenersAttached.current) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMoveExit);
      listenersAttached.current = false;
    }
  }, [onMouseMoveExit, onScroll]);

  // --- open/close ---
  const openPopup = useCallback(() => {
    if (hasOpenedThisSession || suppressedByCooldown()) return;
    setHasOpenedThisSession(true);
    setIsOpen(true);
    setLS(STORAGE_KEYS.lastOpenAt, new Date().toISOString());
    lockBodyScroll(true);
    cleanupTriggers(); // disable all triggers after first open
  }, [
    cleanupTriggers,
    hasOpenedThisSession,
    lockBodyScroll,
    setLS,
    suppressedByCooldown,
  ]);

  const closeWithCooldown = useCallback(
    (days: number) => {
      setIsOpen(false);
      lockBodyScroll(false);
      const until = addDays(new Date(), days).toISOString();
      setLS(STORAGE_KEYS.closedUntil, until);
    },
    [lockBodyScroll, setLS]
  );

  const markSuccessAndClose = useCallback(() => {
    setIsOpen(false);
    lockBodyScroll(false);
    const until = addDays(new Date(), COOLDOWN_DAYS_SUCCESS).toISOString();
    setLS(STORAGE_KEYS.successUntil, until);
  }, [lockBodyScroll, setLS]);

  // --- mount: install triggers if not suppressed ---
  useEffect(() => {
    setMounted(true);
    if (suppressedByCooldown()) return;

    // time trigger
    const tId = window.setTimeout(openPopup, GRACE_DELAY_MS);
    timers.current.push(tId);

    // scroll
    window.addEventListener("scroll", onScroll, { passive: true });

    // exit intent on desktop/fine pointer
    if (window.matchMedia?.("(pointer:fine)").matches) {
      window.addEventListener("mousemove", onMouseMoveExit);
    }
    listenersAttached.current = true;

    return () => {
      cleanupTriggers();
      lockBodyScroll(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // --- ESC close ---
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWithCooldown(COOLDOWN_DAYS_CLOSE);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeWithCooldown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call
    markSuccessAndClose();
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Kostenloses Gespräch vereinbaren"
      onClick={(e) => {
        if (e.target === e.currentTarget)
          closeWithCooldown(COOLDOWN_DAYS_CLOSE);
      }}
    >
      {/* Mobile close (always visible) */}
      <button
        onClick={() => closeWithCooldown(COOLDOWN_DAYS_CLOSE)}
        aria-label="Popup schließen"
        className="md:hidden fixed right-4 top-[max(env(safe-area-inset-top),1rem)] z-[110] grid h-10 w-10 place-content-center rounded-full
                   bg-background/90 shadow-md ring-1 ring-border hover:bg-muted transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Sheet mobile / centered modal desktop */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-t-2xl md:rounded-2xl bg-background text-foreground shadow-2xl">
        {/* Sticky close bar on mobile */}
        <div className="sticky top-0 z-10 flex items-center justify-end px-4 py-3 md:hidden bg-background/95 backdrop-blur border-b border-border/50">
          <button
            onClick={() => closeWithCooldown(COOLDOWN_DAYS_CLOSE)}
            className="grid h-9 w-9 place-content-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Popup schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-5">
          {/* Visual side */}
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
                Starte mit deiner{" "}
                <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                  Potenzialanalyse
                </span>
              </h3>

              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                In 30 Minuten zeigen wir dir die drei wirksamsten Schritte für
                deinen Einstieg: klar, messbar und auf deine Branche
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

          {/* Form side */}
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

              {/* Primäre Aktion – CI-Rot Light/Dark */}
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full h-12"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Kostenloses Gespräch sichern
              </Button>

              {/* Alternative: Direkt Termin buchen */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-11"
                onClick={markSuccessAndClose}
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
