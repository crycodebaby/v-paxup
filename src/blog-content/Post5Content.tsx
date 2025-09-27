// src/blog-content/Post5Content.tsx
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Post5Content = () => {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-foreground mb-6">
        Die Entscheidung für die richtige IT-Infrastruktur
      </h2>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        Für kleine und mittlere Unternehmen ist die Wahl der IT-Infrastruktur
        eine strategische Entscheidung mit langfristigen Auswirkungen auf
        Kosten, Skalierbarkeit und Sicherheit.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-background/50 p-6 rounded-lg border border-border">
          <h4 className="text-xl font-semibold text-foreground mb-4">
            ☁️ Cloud-Computing
          </h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-foreground mb-2">Vorteile:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Niedrige Anfangsinvestitionen</li>
                <li>• Flexible Skalierung</li>
                <li>• Automatische Updates</li>
                <li>• Weltweiter Zugriff</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">Nachteile:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Laufende Kosten</li>
                <li>• Internetabhängigkeit</li>
                <li>• Weniger Kontrolle</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-background/50 p-6 rounded-lg border border-border">
          <h4 className="text-xl font-semibold text-foreground mb-4">
            🏢 On-Premise
          </h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-foreground mb-2">Vorteile:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vollständige Kontrolle</li>
                <li>• Einmalige Investition</li>
                <li>• Keine Internetabhängigkeit</li>
                <li>• Compliance-konform</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">Nachteile:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hohe Anfangskosten</li>
                <li>• IT-Wartung erforderlich</li>
                <li>• Begrenzte Skalierung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-4">
        Entscheidungshilfe für Ihr Unternehmen
      </h3>

      <div className="space-y-4 mb-8">
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">
            Cloud ist ideal für Sie, wenn:
          </h5>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• Sie schnell wachsen oder saisonale Schwankungen haben</li>
            <li>• Remote-Arbeit wichtig ist</li>
            <li>• IT-Budget begrenzt ist</li>
            <li>• Keine eigene IT-Abteilung vorhanden ist</li>
          </ul>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-2">
            On-Premise passt besser, wenn:
          </h5>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Strenge Compliance-Anforderungen bestehen</li>
            <li>• Sensible Daten verarbeitet werden</li>
            <li>• Stabile, vorhersagbare Arbeitslasten vorliegen</li>
            <li>• Eigene IT-Kompetenz vorhanden ist</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
        <h4 className="text-xl font-semibold text-foreground mb-4">
          Hybrid-Ansatz: Das Beste aus beiden Welten
        </h4>
        <p className="text-muted-foreground leading-relaxed">
          Viele Unternehmen wählen heute eine Hybrid-Strategie: Kritische Daten
          bleiben on-premise, während flexible Anwendungen in die Cloud wandern.
          Dies ermöglicht optimale Balance zwischen Sicherheit und Agilität.
        </p>
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
          Strategiegespräch vereinbaren
        </Button>
      </div>
    </article>
  );
};

export default Post5Content;
