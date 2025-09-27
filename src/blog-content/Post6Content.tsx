// src/blog-content/Post6Content.tsx
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Post6Content = () => {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-foreground mb-6">
        10 sofort umsetzbare Automatisierungen
      </h2>

      <div className="grid gap-4 mb-8">
        {[
          {
            title: "1. E-Mail-Antworten automatisieren",
            description:
              "Vorgefertigte Antworten für häufige Anfragen sparen bis zu 2 Stunden täglich.",
            savings: "Zeit: 40%",
          },
          {
            title: "2. Rechnungsverarbeitung digitalisieren",
            description:
              "OCR-Software erkennt Rechnungsdaten automatisch und bucht sie vor.",
            savings: "Fehler: -90%",
          },
          {
            title: "3. Social Media Posts planen",
            description:
              "Content-Kalender mit automatischer Veröffentlichung zur optimalen Zeit.",
            savings: "Zeit: 60%",
          },
          {
            title: "4. Terminbuchungen automatisieren",
            description:
              "Online-Buchungssysteme reduzieren Telefonate und No-Shows.",
            savings: "No-Shows: -70%",
          },
          {
            title: "5. Datenbackup automatisieren",
            description:
              "Regelmäßige, automatische Backups ohne manuellen Aufwand.",
            savings: "Risiko: -95%",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-background/50 p-4 rounded-lg border border-border"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-foreground">
                {item.title}
              </h4>
              <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs">
                {item.savings}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-4">
        ROI der Workflow-Automatisierung
      </h3>

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">73%</div>
            <div className="text-sm text-muted-foreground">
              Weniger manuelle Aufgaben
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">45%</div>
            <div className="text-sm text-muted-foreground">
              Kosteneinsparung
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">300%</div>
            <div className="text-sm text-muted-foreground">
              ROI im ersten Jahr
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
        <h4 className="text-xl font-semibold text-foreground mb-4">
          Erste Schritte zur Automatisierung
        </h4>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>Identifizieren Sie repetitive, zeitaufwändige Aufgaben</li>
          <li>Dokumentieren Sie die aktuellen Prozesse</li>
          <li>Wählen Sie das passende Automatisierungstool</li>
          <li>Starten Sie mit einem einfachen Pilotprojekt</li>
          <li>Messen Sie die Ergebnisse und optimieren Sie</li>
        </ol>
      </div>

      <Separator className="my-8" />

      <div className="flex gap-4 mt-12">
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Blog
          </Button>
        </Link>
        <Button
          onClick={() => window.open("https://calendly.com/paxup", "_blank")}
        >
          Kostenlose Beratung anfragen
        </Button>
      </div>
    </article>
  );
};

export default Post6Content;
