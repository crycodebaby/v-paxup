// src/components/layouts/BlogLayout.tsx
import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/sonner"; // Sonner ist global in Providers gemountet

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
}

async function handleShare(title: string, text: string) {
  const url = window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return;
    } catch {
      // ignore cancel
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    toast("Link kopiert", {
      description: "Die URL wurde in die Zwischenablage kopiert.",
    });
  } catch {
    toast("Konnte Link nicht kopieren");
  }
}

export function BlogLayout({
  children,
  ...meta
}: PropsWithChildren<BlogLayoutProps>) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>

              <Badge variant="outline" className="mb-4">
                {meta.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {meta.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {meta.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {meta.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {meta.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {meta.readingTime}
                </div>
              </div>

              <Button
                variant="outline"
                className="gap-2"
                onClick={() => handleShare(meta.title, meta.excerpt)}
              >
                <Share2 className="w-4 h-4" />
                Artikel teilen
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 -mt-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img
                src={meta.imageUrl}
                alt={meta.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-card"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
