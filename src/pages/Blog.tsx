import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Search, Tag } from "lucide-react";

const Blog = () => {
  // Updated category system - two-level categories
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGeneralCategory, setSelectedGeneralCategory] = useState("Alle");
  const [selectedIndustryCategory, setSelectedIndustryCategory] = useState("Alle");

  // URL mapping for blog posts
  const getPostUrl = (id: number) => {
    const urlMap: { [key: number]: string } = {
      1: "/blog/ki-prozessoptimierung",
      2: "/blog/digitale-transformation-handwerk",
      3: "/blog/foerdermittel-digitalisierung",
      4: "/blog/automatisierung-immobilienverwaltung",
      5: "/blog/cloud-vs-onpremise",
      6: "/blog/workflow-automatisierung"
    };
    return urlMap[id] || "/blog";
  };

  const generalCategories = [
    "Alle",
    "Digitalisierung im Mittelstand",
    "Fördermittel", 
    "Prozessautomatisierung",
    "Technologie Trends"
  ];

  const industryCategories = [
    "Alle",
    "Immobilienverwaltung",
    "Pflege",
    "Industrie", 
    "Dienstleistung",
    "Handwerk",
    "Handel"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "KI-gestützte Prozessoptimierung: Wie Mittelständler ihre Effizienz steigern",
      excerpt: "Erfahren Sie, wie künstliche Intelligenz dabei hilft, Geschäftsprozesse zu automatisieren und die Produktivität um bis zu 40% zu steigern.",
      generalCategory: "Prozessautomatisierung",
      industryCategory: "Industrie",
      author: "Dr. Sarah Weber",
      date: "15. März 2024",
      readTime: "8 Min.",
      image: "/src/assets/ki-prozessoptimierung-blog.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Digitale Transformation im Handwerk: Erfolgreich in die Zukunft",
      excerpt: "Von der Terminplanung bis zur Rechnungsstellung - wie digitale Tools Handwerksbetriebe revolutionieren.",
      generalCategory: "Digitalisierung im Mittelstand",
      industryCategory: "Handwerk",
      author: "Marcus Klein",
      date: "12. März 2024",
      readTime: "6 Min.",
      image: "/src/assets/handwerk-digitalisierung-blog.jpg"
    },
    {
      id: 3,
      title: "Fördermittel für Digitalisierung: Der komplette Leitfaden 2024",
      excerpt: "Alle wichtigen staatlichen Förderungen für Ihre Digitalisierungsprojekte - mit Antragsstellung und Praxistipps.",
      generalCategory: "Fördermittel",
      industryCategory: "Alle",
      author: "Lisa Müller",
      date: "10. März 2024",
      readTime: "12 Min.",
      image: "/src/assets/foerdermittel-blog.jpg"
    },
    {
      id: 4,
      title: "Automatisierung in der Immobilienverwaltung: 5 Game-Changer",
      excerpt: "Wie moderne Software-Lösungen die Verwaltung von Immobilienportfolios vereinfachen und Kosten senken.",
      generalCategory: "Prozessautomatisierung",
      industryCategory: "Immobilienverwaltung",
      author: "Thomas Berg",
      date: "8. März 2024",
      readTime: "10 Min.",
      image: "/src/assets/immobilien-digitalisierung-hero.jpg"
    },
    {
      id: 5,
      title: "Cloud vs. On-Premise: Die richtige IT-Strategie für KMU",
      excerpt: "Vor- und Nachteile verschiedener IT-Infrastrukturen im Vergleich - mit Entscheidungshilfe für Ihr Unternehmen.",
      generalCategory: "Technologie Trends",
      industryCategory: "Dienstleistung",
      author: "Dr. Anna Fischer",
      date: "5. März 2024",
      readTime: "9 Min.",
      image: "/src/assets/cloud-onpremise-blog.jpg"
    },
    {
      id: 6,
      title: "Workflow-Automatisierung: 10 Prozesse, die Sie sofort optimieren können",
      excerpt: "Praktische Beispiele für Automatisierung im Büroalltag - von E-Mail-Marketing bis zur Rechnungsverarbeitung.",
      generalCategory: "Prozessautomatisierung",
      industryCategory: "Handel",
      author: "Michael Hoffmann",
      date: "2. März 2024",
      readTime: "7 Min.",
      image: "/src/assets/workflow-automatisierung-blog.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGeneralCategory = selectedGeneralCategory === "Alle" || post.generalCategory === selectedGeneralCategory;
    const matchesIndustryCategory = selectedIndustryCategory === "Alle" || post.industryCategory === selectedIndustryCategory;
    return matchesSearch && matchesGeneralCategory && matchesIndustryCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                PAXUP <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Entdecken Sie die neuesten Trends in Digitalisierung und KI. 
                Praktische Insights für erfolgreiche Transformation im Mittelstand.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Blog durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/80 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-6">
              {/* General Categories */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Allgemein</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {generalCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedGeneralCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGeneralCategory(category)}
                      className="rounded-full"
                    >
                      <Tag className="w-4 h-4 mr-2" />
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Industry Categories */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Branchenspezifisch</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {industryCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedIndustryCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedIndustryCategory(category)}
                      className="rounded-full"
                    >
                      <Tag className="w-4 h-4 mr-2" />
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedGeneralCategory === "Alle" && selectedIndustryCategory === "Alle" && !searchTerm && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                    ⭐ Featured
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
                </div>
                
                <Card className="overflow-hidden hover:shadow-card transition-all duration-300 border-primary/20">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-overlay" />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge variant="outline" className="mb-4 w-fit">
                        {featuredPost.generalCategory}
                      </Badge>
                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 text-foreground leading-tight">
                        {featuredPost.title}
                      </CardTitle>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Button variant="cta" className="w-fit">
                        <Link to="/blog/ki-prozessoptimierung">
                          Artikel lesen →
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {searchTerm ? `Suchergebnisse für "${searchTerm}"` : 
                   (selectedGeneralCategory === "Alle" && selectedIndustryCategory === "Alle") ? "Alle Artikel" : 
                   `${selectedGeneralCategory !== "Alle" ? selectedGeneralCategory : ""} ${selectedIndustryCategory !== "Alle" ? `- ${selectedIndustryCategory}` : ""}`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'Artikel gefunden' : 'Artikel gefunden'}
                </p>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Keine Artikel gefunden
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedGeneralCategory("Alle");
                      setSelectedIndustryCategory("Alle");
                    }}
                  >
                    Filter zurücksetzen
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <Card key={post.id} className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {post.generalCategory}
                        </Badge>
                        <CardTitle className="text-lg font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <Link to={getPostUrl(post.id)}>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                              Lesen →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Bleiben Sie auf dem Laufenden
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Erhalten Sie die neuesten Artikel und Insights direkt in Ihr Postfach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1"
                />
                <Button variant="cta">
                  Newsletter abonnieren
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Kostenlos, jederzeit kündbar. Ihre Daten sind bei uns sicher.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;