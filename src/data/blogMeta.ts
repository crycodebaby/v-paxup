// src/data/blogMeta.ts
import kiProzessoptimierungImg from "@/assets/ki-prozessoptimierung-blog.jpg";
import handwerkDigitalisierungImg from "@/assets/handwerk-digitalisierung-blog.jpg";
import foerdermittelImg from "@/assets/foerdermittel-blog.jpg";
import cloudVsOnpremiseImg from "@/assets/cloud-onpremise-blog.jpg";
import workflowAutomatisierungImg from "@/assets/workflow-automatisierung-blog.jpg";
import immobilienHeroImg from "@/assets/immobilien-digitalisierung-hero.jpg";

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  /** Dateiname der Content-Komponente in src/blog-content */
  contentComponent: string;
}

const posts: BlogMeta[] = [
  {
    slug: "ki-prozessoptimierung",
    title:
      "KI-gestützte Prozessoptimierung: Wie Mittelständler ihre Effizienz steigern",
    excerpt:
      "Erfahren Sie, wie künstliche Intelligenz dabei hilft, Geschäftsprozesse zu automatisieren und die Produktivität um bis zu 40% zu steigern.",
    image: kiProzessoptimierungImg,
    author: "Dr. Sarah Weber",
    date: "15. März 2024",
    readingTime: "8 Min. Lesezeit",
    category: "Prozessautomatisierung",
    contentComponent: "Post1Content.tsx",
  },
  {
    slug: "digitale-transformation-handwerk",
    title: "Digitale Transformation im Handwerk: Erfolgreich in die Zukunft",
    excerpt:
      "Von der Terminplanung bis zur Rechnungsstellung – wie digitale Tools Handwerksbetriebe revolutionieren.",
    image: handwerkDigitalisierungImg,
    author: "Marcus Klein",
    date: "12. März 2024",
    readingTime: "6 Min. Lesezeit",
    category: "Digitalisierung im Mittelstand",
    contentComponent: "Post2Content.tsx",
  },
  {
    slug: "foerdermittel-digitalisierung",
    title: "Fördermittel für Digitalisierung: Der komplette Leitfaden 2024",
    excerpt:
      "Alle wichtigen staatlichen Förderungen für Ihre Digitalisierungsprojekte – mit Antragsstellung und Praxistipps.",
    image: foerdermittelImg,
    author: "Lisa Müller",
    date: "10. März 2024",
    readingTime: "12 Min. Lesezeit",
    category: "Fördermittel",
    contentComponent: "Post3Content.tsx",
  },
  {
    slug: "automatisierung-immobilienverwaltung",
    title:
      "Digitalisierung & KI in der Immobilienverwaltung: 5 Probleme, die du heute lösen kannst",
    excerpt:
      "Wie Hausverwaltungen mit Automatisierung und KI Kosten senken, Prozesse beschleunigen und Mieter zufriedener machen.",
    image: immobilienHeroImg,
    author: "Thomas Berg",
    date: "8. März 2024",
    readingTime: "10 Min. Lesezeit",
    category: "Digitalisierung & KI",
    contentComponent: "Post4Content.tsx",
  },
  {
    slug: "cloud-vs-onpremise",
    title: "Cloud vs. On-Premise: Die richtige IT-Strategie für KMU",
    excerpt:
      "Vor- und Nachteile verschiedener IT-Infrastrukturen im Vergleich – mit Entscheidungshilfe für Ihr Unternehmen.",
    image: cloudVsOnpremiseImg,
    author: "Dr. Anna Fischer",
    date: "5. März 2024",
    readingTime: "9 Min. Lesezeit",
    category: "Technologie Trends",
    contentComponent: "Post5Content.tsx",
  },
  {
    slug: "workflow-automatisierung",
    title:
      "Workflow-Automatisierung: 10 Prozesse, die Sie sofort optimieren können",
    excerpt:
      "Praktische Beispiele für Automatisierung im Büroalltag – von E-Mail-Marketing bis zur Rechnungsverarbeitung.",
    image: workflowAutomatisierungImg,
    author: "Michael Hoffmann",
    date: "2. März 2024",
    readingTime: "7 Min. Lesezeit",
    category: "Prozessautomatisierung",
    contentComponent: "Post6Content.tsx",
  },
];

export function getAllPostMeta(): BlogMeta[] {
  return posts;
}

export function getPostMetaBySlug(slug: string): BlogMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
