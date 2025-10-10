// src/pages/UseCases.tsx
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneOff,
  Clock,
  UserPlus,
  ArrowRight,
  Building2,
  Wrench,
  Stethoscope,
  Car,
  ShoppingCart,
  Scale,
  CheckCircle2,
  Info,
  Phone,
  Mail,
  MessagesSquare,
  X,
  Minus,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

// === DATENSTRUKTUR ===
type CaseItem = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  branch: string;
  painPoint: string;
  intro: string;
  before: string[];
  after: string[];
  result: string;
};

const CAL_URL = "https://cal.com/paxup";
const METRICS = [
  { icon: PhoneOff, label: "80% weniger Routineanrufe" },
  { icon: Clock, label: "24/7 erreichbar" },
  { icon: UserPlus, label: "5+ Std/MA pro Woche gespart" },
] as const;

const CASES: Readonly<CaseItem[]> = [
  {
    id: "handwerk",
    icon: Wrench,
    branch: "Handwerk",
    painPoint: "Ständig am Telefon statt auf der Baustelle?",
    intro:
      "Der Meister ist auf der Baustelle, im Büro klingelt das Telefon Sturm. Wertvolle Aufträge gehen verloren.",
    before: [
      "Daueranrufe mit Standardfragen.",
      "Anfragen gehen verloren, weil niemand erreichbar ist.",
      "Ständige Unterbrechungen bei der Angebotskalkulation.",
    ],
    after: [
      "KI-Bot nimmt 100% der Anrufe an & bucht Termine.",
      "Wichtige Anrufe werden gezielt durchgestellt.",
      "Team arbeitet fokussiert an Angeboten & Planung.",
    ],
    result: "70% weniger Störungen, 25% mehr qualifizierte Anfragen.",
  },
  {
    id: "immobilien",
    icon: Building2,
    branch: "Immobilien",
    painPoint: "Dein Team ertrinkt in Mieter-Anfragen?",
    intro:
      "Mieter und Eigentümer melden sich rund um die Uhr – E-Mails & Anrufe fluten das Team.",
    before: [
      "Postfach übervoll mit Standardfragen.",
      "Unvollständige telefonische Schadensmeldungen.",
      "Notfälle außerhalb der Geschäftszeiten werden spät bemerkt.",
    ],
    after: [
      "KI-Chatbot führt durch die Schadensmeldung inkl. Foto-Upload.",
      "KI-Mail-Manager beantwortet Standardmails automatisch.",
      "KI-Telefonbot nimmt 24/7 Notfälle strukturiert auf.",
    ],
    result:
      "95% der Schadensmeldungen vollständig, Antwortzeit von 24h auf 1 Sekunde.",
  },
  {
    id: "kfz",
    icon: Car,
    branch: "KFZ-Werkstatt",
    painPoint: "Mehr in der Hotline als am Fahrzeug?",
    intro:
      "Ständige Telefonate für Termine & Statusupdates blockieren Meister und Service.",
    before: [
      "Telefon klingelt ununterbrochen.",
      "Mehrfachanrufe: „Ist mein Auto schon fertig?“",
      "Serviceberater telefoniert mehr als er berät.",
    ],
    after: [
      "KI-Telefonbot erledigt 90% der Terminvereinbarungen.",
      "Automatische SMS bei Abholbereitschaft.",
      "Team ist wieder bei Fahrzeug & Kunde.",
    ],
    result:
      "80% der Termine ohne Mitarbeitereingriff, +30% Kundenzufriedenheit.",
  },
  {
    id: "praxis",
    icon: Stethoscope,
    branch: "Arztpraxis",
    painPoint: "Warteschlange am Empfang und am Telefon?",
    intro:
      "MFA am Empfang zwischen Patienten und Dauertelefon – chaotisch und stressig.",
    before: [
      "Warteschlange vor Ort & in der Leitung.",
      "Rezeptwünsche blockieren die Leitungen.",
      "Team dauerhaft überlastet.",
    ],
    after: [
      "KI-Bot vergibt Termine & nimmt Rezeptwünsche auf.",
      "Leitung frei für dringliche Anliegen.",
      "MFA hat Zeit für anwesende Patienten.",
    ],
    result: "90% der Terminabläufe vollautomatisch, keine Warteschleife.",
  },
  {
    id: "kanzlei",
    icon: Scale,
    branch: "Anwaltskanzlei",
    painPoint: "Wertvolle Fachzeit durch Telefon-Triage verloren?",
    intro:
      "Wertvolle Fachzeit versandet in Telefon-Triage und FAQ-Beantwortung.",
    before: [
      "Viele Erstberatungstermine per Telefon.",
      "„Stand der Dinge?“-Anrufe blockieren den Ablauf.",
      "Falsche Anfragen (falsches Rechtsgebiet) fressen Zeit.",
    ],
    after: [
      "KI-Bot qualifiziert & terminiert Erstgespräche.",
      "Web-FAQ via Chatbot.",
      "Team arbeitet fokussiert an Fällen.",
    ],
    result: "+40% Fachzeit, perfekte Vorkalifizierung.",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    branch: "E-Commerce",
    painPoint: "Dein Support explodiert mit den Bestellungen?",
    intro:
      "Mehr Bestellungen → Support explodiert → Marge leidet durch reinen Reaktiv-Modus.",
    before: [
      "Postfach überflutet: „Wo ist meine Bestellung?“",
      "Anrufe/Chats zu Retouren binden das Team.",
      "Service nur 9–17 Uhr erreichbar.",
    ],
    after: [
      "Chatbot checkt Live-Bestellstatus 24/7.",
      "Bot startet Retouren automatisch.",
      "KI-Mail-Manager beantwortet 70% der Mails.",
    ],
    result: "75% des Supports automatisiert, Fokus auf Umsatz.",
  },
];

export default function UseCases() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  return (
    <Dialog.Root
      open={!!selectedCase}
      onOpenChange={(isOpen) => !isOpen && setSelectedCase(null)}
    >
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-subtle">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-80"
              style={{
                background:
                  "radial-gradient(36rem 20rem at 18% 14%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(30rem 20rem at 84% 8%, hsl(var(--secondary)/0.12), transparent 60%)",
              }}
            />
            <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
              <div className="mx-auto max-w-5xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                  Weniger Chaos, mehr Geschäft:{" "}
                  <span className="text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]">
                    Deine Kommunikationsprobleme, von KI gelöst.
                  </span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  Unsere Kommunikations-KI automatisiert Anrufe, E-Mails und
                  Chats, damit sich dein Team auf das Wesentliche konzentrieren
                  kann. Sieh selbst, wie wir den Alltag in deiner Branche
                  verändern.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {METRICS.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-border bg-card/80 p-4 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/70"
                    >
                      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                        <Icon className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                        <span>{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="shadow-button hover:-translate-y-0.5 transition-all bg-[hsl(var(--secondary))] text-white dark:bg-[hsl(var(--primary))]"
                    onClick={() => window.open(CAL_URL, "_blank")}
                  >
                    Kostenloses Strategiegespräch buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto mb-10 md:mb-14 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Erkennst du dich wieder?
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Wähle deine Branche und sieh die direkte Transformation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CASES.map((useCase) => (
                  <Card
                    key={useCase.id}
                    onClick={() => setSelectedCase(useCase)}
                    className="group relative flex flex-col items-center justify-center text-center p-8 rounded-2xl border bg-card/80 backdrop-blur cursor-pointer 
                               transition-all duration-300 hover:shadow-elegant hover:border-primary hover:-translate-y-2"
                  >
                    <div className="mb-4 rounded-xl bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                      <useCase.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {useCase.branch}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {useCase.painPoint}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[hsl(var(--secondary))] dark:bg-[hsl(var(--primary))] text-white">
            <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Dein Unternehmen kann das auch. Lass uns sprechen.
                </h2>
                <p className="mt-3 text-lg opacity-90">
                  Im kostenlosen Strategiegespräch analysieren wir dein
                  Anfragevolumen, identifizieren Zeitfresser und zeigen dir das
                  konkrete Potenzial deiner Kommunikations-KI.
                </p>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => window.open(CAL_URL, "_blank")}
                  >
                    Dein kostenloses Strategiegespräch buchen
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-card shadow-lg duration-200 
                                  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                                  data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 
                                  data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
                                  rounded-2xl max-h-[90vh] overflow-y-auto"
        >
          {selectedCase && (
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 flex-shrink-0 place-content-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <selectedCase.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Dialog.Title className="text-xl md:text-2xl font-bold tracking-tight">
                    {selectedCase.branch}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-sm md:text-base text-muted-foreground">
                    {selectedCase.intro}
                  </Dialog.Description>
                </div>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="flex items-center text-sm font-semibold text-destructive mb-2">
                    <Minus className="w-4 h-4 mr-2" />
                    Vorher – das tägliche Chaos
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.before.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-destructive/50" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center text-sm font-semibold text-primary mb-2">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Nachher – mit PAXUP KI
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.after.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary/50" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* === HIER IST DIE ÄNDERUNG === */}
              <div className="mt-6 rounded-lg border border-success/30 bg-success/10 p-4 text-sm font-semibold text-success-foreground">
                <strong>Konkrete Ergebnisse:</strong> {selectedCase.result}
              </div>
            </div>
          )}
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Schließen</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
