// src/pages/BlogPostPage.tsx
import { Suspense, lazy, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { BlogLayout } from "@/components/layouts/BlogLayout";
import { getPostMetaBySlug } from "@/data/blogMeta";
import NotFound from "@/pages/NotFound";

// 1) Vite baut eine Map aller TSX-Dateien im Ordner.
//    Wichtig: absoluter Pfad ab /src, KEIN Alias in der Glob-Expression!
type Loader = () => Promise<{ default: React.ComponentType<unknown> }>;
const contentModules = import.meta.glob("/src/blog-content/*.tsx") as Record<
  string,
  Loader
>;

function ContentFallback() {
  return <div className="p-8 text-muted-foreground">Lade Artikel…</div>;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll immer nach oben bei Slug-Wechsel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const meta = slug ? getPostMetaBySlug(slug) : undefined;

  // 2) ALLE Hooks VOR einem möglichen return ausführen.
  //    Wir bauen hier direkt den Lazy-Component (oder null), ohne später noch einen Hook zu rufen.
  const ContentComponent = useMemo(() => {
    if (!meta) return null;
    const key = `/src/blog-content/${meta.contentComponent}`; // z.B. "Post3Content.tsx"
    const loader = contentModules[key];
    return loader ? lazy(loader) : null;
  }, [meta?.contentComponent, meta ? 1 : 0]); // stabilisiert die deps bei undefined

  // 3) Jetzt erst entscheiden: 404 wenn Post unbekannt ODER Content-Datei fehlt.
  if (!meta || !ContentComponent) {
    return <NotFound />;
  }

  return (
    <BlogLayout
      title={meta.title}
      excerpt={meta.excerpt}
      imageUrl={meta.image}
      author={meta.author}
      date={meta.date}
      readingTime={meta.readingTime}
      category={meta.category}
    >
      <Suspense fallback={<ContentFallback />}>
        <ContentComponent />
      </Suspense>
    </BlogLayout>
  );
}
