// src/data/blogPosts.ts

// Wir importieren die Bilder direkt, damit Vite sie korrekt verarbeitet.
import kiProzessoptimierungImg from "@/assets/ki-prozessoptimierung-blog.jpg";
import handwerkDigitalisierungImg from "@/assets/handwerk-digitalisierung-blog.jpg";
import foerdermittelImg from "@/assets/foerdermittel-blog.jpg";
import immobilienVerwaltungImg from "@/assets/workflow-automatisierung-blog.jpg"; // Annahme, dass dies das richtige Bild ist
import cloudVsOnpremiseImg from "@/assets/cloud-onpremise-blog.jpg";
import workflowAutomatisierungImg from "@/assets/workflow-automatisierung-blog.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string; // In einer echten App wäre das Markdown oder HTML aus einem CMS
}

export const posts: BlogPost[] = [
  {
    slug: "ki-prozessoptimierung",
    title: "KI-gestützte Prozessoptimierung: Ein Game-Changer",
    excerpt:
      "Entdecken Sie, wie künstliche Intelligenz Ihre betrieblichen Abläufe revolutionieren kann.",
    image: kiProzessoptimierungImg,
    content: `
      <h2>Die Revolution der Arbeitswelt</h2>
      <p>KI ist mehr als nur ein Buzzword. Hier erklären wir die Grundlagen...</p>
      <p>Weitere Inhalte zum Thema Prozessoptimierung folgen hier.</p>
    `,
  },
  {
    slug: "digitale-transformation-handwerk",
    title: "Digitale Transformation im Handwerk",
    excerpt:
      "So meistern Handwerksbetriebe den Sprung in die digitale Zukunft und sichern sich Wettbewerbsvorteile.",
    image: handwerkDigitalisierungImg,
    content: `
      <h2>Vom Meisterbrief zum digitalen Workflow</h2>
      <p>Das Handwerk steht vor großen Herausforderungen, aber auch enormen Chancen...</p>
      <p>Weitere Inhalte zum Thema Digitalisierung im Handwerk folgen hier.</p>
    `,
  },
  {
    slug: "foerdermittel-digitalisierung",
    title: "Fördermittel für die Digitalisierung clever nutzen",
    excerpt:
      "Welche Töpfe gibt es und wie sichern Sie sich die maximale Förderung für Ihr Projekt?",
    image: foerdermittelImg,
    content: `
      <h2>Geld vom Staat für Ihre IT</h2>
      <p>Die Digitalisierung kostet Geld, aber der Staat hilft. Wir zeigen Ihnen, wie...</p>
      <p>Weitere Inhalte zum Thema Fördermittel folgen hier.</p>
    `,
  },
  {
    slug: "automatisierung-immobilienverwaltung",
    title: "Automatisierung in der Immobilienverwaltung",
    excerpt:
      "Effizienz steigern, Kosten senken und Mieter glücklich machen – durch smarte Automatisierung.",
    image: immobilienVerwaltungImg,
    content: `
      <h2>Schluss mit Papierkram</h2>
      <p>Die Immobilienbranche ist reif für eine digitale Revolution. Hier sind die ersten Schritte...</p>
      <p>Weitere Inhalte zum Thema Immobilienverwaltung folgen hier.</p>
    `,
  },
  {
    slug: "cloud-vs-onpremise",
    title: "Cloud vs. On-Premise: Was ist die richtige Wahl?",
    excerpt:
      "Eine fundierte Entscheidungshilfe für Ihre IT-Infrastruktur. Wir beleuchten die Vor- und Nachteile.",
    image: cloudVsOnpremiseImg,
    content: `
      <h2>Ihre Daten, Ihre Entscheidung</h2>
      <p>Die Frage nach dem "Wo" ist entscheidend für Sicherheit, Skalierbarkeit und Kosten...</p>
      <p>Weitere Inhalte zum Thema Infrastruktur folgen hier.</p>
    `,
  },
  {
    slug: "workflow-automatisierung",
    title: "Workflow-Automatisierung: Mehr Zeit für das Wesentliche",
    excerpt:
      "Befreien Sie Ihre Mitarbeiter von repetitiven Aufgaben und entfesseln Sie neue Produktivität.",
    image: workflowAutomatisierungImg,
    content: `
      <h2>Lassen Sie die Roboter arbeiten</h2>
      <p>Jede Minute, die Sie nicht mit manuellen, wiederkehrenden Aufgaben verbringen, ist eine gewonnene Minute...</p>
      <p>Weitere Inhalte zum Thema Workflow-Automatisierung folgen hier.</p>
    `,
  },
];
