import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Search, Tag, TrendingUp, BookOpen } from "lucide-react";
const Blog = () => {
  // Updated category system - two-level categories
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGeneralCategory, setSelectedGeneralCategory] = useState("Alle");
  const [selectedIndustryCategory, setSelectedIndustryCategory] = useState("Alle");

  // URL mapping for blog posts
  const getPostUrl = (id: number) => {
    const urlMap: {
      [key: number]: string;
    } = {
      1: "/blog/ki-prozessoptimierung",
      2: "/blog/digitale-transformation-handwerk",
      3: "/blog/foerdermittel-digitalisierung",
      4: "/blog/automatisierung-immobilienverwaltung",
      5: "/blog/cloud-vs-onpremise",
      6: "/blog/workflow-automatisierung"
    };
    return urlMap[id] || "/blog";
  };
  const generalCategories = ["Alle", "Digitalisierung im Mittelstand", "Fördermittel", "Prozessautomatisierung", "Technologie Trends"];
  const industryCategories = ["Alle", "Immobilienverwaltung", "Pflege", "Industrie", "Dienstleistung", "Handwerk", "Handel"];
  const blogPosts = [{
    id: 1,
    title: "KI-gestützte Prozessoptimierung: Wie Mittelständler ihre Effizienz steigern",
    excerpt: "Erfahren Sie, wie künstliche Intelligenz dabei hilft, Geschäftsprozesse zu automatisieren und die Produktivität um bis zu 40% zu steigern.",
    generalCategory: "Prozessautomatisierung",
    industryCategory: "Industrie",
    author: "Dr. Sarah Weber",
    date: "15. März 2024",
    readTime: "8 Min.",
    image: "/src/assets/ki-prozessoptimierung-blog.jpg"
  }, {
    id: 2,
    title: "Digitale Transformation im Handwerk: Erfolgreich in die Zukunft",
    excerpt: "Von der Terminplanung bis zur Rechnungsstellung - wie digitale Tools Handwerksbetriebe revolutionieren.",
    generalCategory: "Digitalisierung im Mittelstand",
    industryCategory: "Handwerk",
    author: "Marcus Klein",
    date: "12. März 2024",
    readTime: "6 Min.",
    image: "/src/assets/handwerk-digitalisierung-blog.jpg"
  }, {
    id: 3,
    title: "Fördermittel für Digitalisierung: Der komplette Leitfaden 2024",
    excerpt: "Alle wichtigen staatlichen Förderungen für Ihre Digitalisierungsprojekte - mit Antragsstellung und Praxistipps.",
    generalCategory: "Fördermittel",
    industryCategory: "Alle",
    author: "Lisa Müller",
    date: "10. März 2024",
    readTime: "12 Min.",
    image: "/src/assets/foerdermittel-blog.jpg"
  }, {
    id: 4,
    title: "Digitalisierung & KI in der Immobilienverwaltung: 5 Probleme, die du heute lösen kannst",
    excerpt: "Entdecke, wie du 5 akute Herausforderungen meistern und nachhaltig wachsen kannst. Von der Strategie bis zur Umsetzung - Dein Digitalisierungs- und KI Berater.",
    generalCategory: "Prozessautomatisierung",
    industryCategory: "Immobilienverwaltung",
    author: "PAXUP Team",
    date: "22. März 2024",
    readTime: "10 Min.",
    image: "/lovable-uploads/b6154235-92ef-4609-8331-93cbfe6ae4dd.png",
    featured: true
  }, {
    id: 5,
    title: "Cloud vs. On-Premise: Die richtige IT-Strategie für KMU",
    excerpt: "Vor- und Nachteile verschiedener IT-Infrastrukturen im Vergleich - mit Entscheidungshilfe für Ihr Unternehmen.",
    generalCategory: "Technologie Trends",
    industryCategory: "Dienstleistung",
    author: "Dr. Anna Fischer",
    date: "5. März 2024",
    readTime: "9 Min.",
    image: "/src/assets/cloud-onpremise-blog.jpg"
  }, {
    id: 6,
    title: "Workflow-Automatisierung: 10 Prozesse, die Sie sofort optimieren können",
    excerpt: "Praktische Beispiele für Automatisierung im Büroalltag - von E-Mail-Marketing bis zur Rechnungsverarbeitung.",
    generalCategory: "Prozessautomatisierung",
    industryCategory: "Handel",
    author: "Michael Hoffmann",
    date: "2. März 2024",
    readTime: "7 Min.",
    image: "/src/assets/workflow-automatisierung-blog.jpg"
  }];

  // Placeholder posts for topic categories
  const kiPraxisPosts = [{
    id: 101,
    title: "KI-Chatbots im Kundenservice: Implementierung und Best Practices",
    excerpt: "Wie Unternehmen intelligente Chatbots erfolgreich einsetzen und dabei die Kundenzufriedenheit steigern.",
    author: "Sophie Hartmann",
    date: "18. März 2024",
    readTime: "7 Min.",
    image: "/src/assets/ki-prozessoptimierung-blog.jpg"
  }, {
    id: 102,
    title: "Predictive Analytics in der Logistik: Effizienz durch Vorhersagen",
    excerpt: "Datengetriebene Prognosen revolutionieren die Lieferkette und reduzieren Kosten um bis zu 25%.",
    author: "Robert Fischer",
    date: "16. März 2024",
    readTime: "9 Min.",
    image: "/src/assets/workflow-automatisierung-blog.jpg"
  }, {
    id: 103,
    title: "Machine Learning in der Qualitätskontrolle",
    excerpt: "Automatisierte Fehlererkennung in der Produktion steigert Qualität und senkt Ausschuss.",
    author: "Maria Gonzalez",
    date: "14. März 2024",
    readTime: "6 Min.",
    image: "/src/assets/ki-prozessoptimierung-blog.jpg"
  }, {
    id: 104,
    title: "KI-gestützte Personalauswahl: Objektiver und effizienter rekrutieren",
    excerpt: "Wie intelligente Systeme bei der Kandidatenauswahl helfen und Bias reduzieren.",
    author: "Jan Schneider",
    date: "11. März 2024",
    readTime: "8 Min.",
    image: "/src/assets/handwerk-digitalisierung-blog.jpg"
  }];
  const allgemeinPosts = [{
    id: 201,
    title: "Was ist Künstliche Intelligenz? Ein Leitfaden für Einsteiger",
    excerpt: "Grundlagen, Begriffe und praktische Anwendungen von KI einfach erklärt.",
    author: "Dr. Elena Wegner",
    date: "20. März 2024",
    readTime: "10 Min.",
    image: "/src/assets/foerdermittel-blog.jpg"
  }, {
    id: 202,
    title: "Digitalisierung vs. Digitale Transformation: Der Unterschied",
    excerpt: "Warum die Begriffe nicht synonym sind und was das für Ihr Unternehmen bedeutet.",
    author: "Alexander Kruse",
    date: "17. März 2024",
    readTime: "5 Min.",
    image: "/src/assets/cloud-onpremise-blog.jpg"
  }, {
    id: 203,
    title: "Die 5 größten Mythen über KI im Mittelstand",
    excerpt: "Aufklärung über weit verbreitete Irrtümer und realistische Erwartungen an KI-Technologie.",
    author: "Christina Weber",
    date: "13. März 2024",
    readTime: "7 Min.",
    image: "/src/assets/workflow-automatisierung-blog.jpg"
  }, {
    id: 204,
    title: "Datenschutz und KI: Was Unternehmen beachten müssen",
    excerpt: "DSGVO-konforme Implementierung von KI-Systemen und rechtliche Fallstricke.",
    author: "Dr. Michael Richter",
    date: "9. März 2024",
    readTime: "11 Min.",
    image: "/src/assets/foerdermittel-blog.jpg"
  }];
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGeneralCategory = selectedGeneralCategory === "Alle" || post.generalCategory === selectedGeneralCategory;
    const matchesIndustryCategory = selectedIndustryCategory === "Alle" || post.industryCategory === selectedIndustryCategory;
    return matchesSearch && matchesGeneralCategory && matchesIndustryCategory;
  });
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  return <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  PAXUP <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Erstklassige Inhalte, die Ihnen helfen, Ihre Digitalisierungsbemühungen zu verbessern
                </p>
                
                {/* Newsletter Signup */}
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Weltweit anerkannte Digitalisierungs-Inhalte, die Ihnen helfen, Ihre Zielgruppe zu vergrößern.
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Input type="email" placeholder="Ihre E-Mail-Adresse" className="flex-1 bg-background" />
                    <Button variant="cta" size="lg">
                      Abonnieren
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                
                {/* Main Content Area */}
                <div className="lg:col-span-3">
                  
                  {/* Category Filter */}
                  <div className="mb-12">
                    <div className="space-y-6">
                      {/* General Categories */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Allgemein</h3>
                        <div className="flex flex-wrap gap-2">
                          {generalCategories.map(category => <Button key={category} variant={selectedGeneralCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedGeneralCategory(category)} className="rounded-full text-xs">
                              {category}
                            </Button>)}
                        </div>
                      </div>
                      
                      {/* Industry Categories */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Branchenspezifisch</h3>
                        <div className="flex flex-wrap gap-2">
                          {industryCategories.map(category => <Button key={category} variant={selectedIndustryCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedIndustryCategory(category)} className="rounded-full text-xs">
                              {category}
                            </Button>)}
                        </div>
                      </div>
                    </div>
                    <Separator className="mt-8" />
                  </div>

                  {/* PAXUP Empfehlung - Featured Article */}
                  {featuredPost && selectedGeneralCategory === "Alle" && selectedIndustryCategory === "Alle" && !searchTerm && <div className="mb-16">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-foreground mb-2">PAXUP Empfehlung</h2>
                        <p className="text-muted-foreground">Unser Highlight für Sie – besonders relevant und aktuell</p>
                        <Separator className="mt-4" />
                      </div>
                      
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-gradient-subtle">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-80 md:h-auto">
                            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-contain md:object-cover" />
                          </div>
                          <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                            <Badge variant="secondary" className="mb-4 w-fit bg-primary/10 text-primary border-primary/20">
                              {featuredPost.generalCategory}
                            </Badge>
                            <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 text-foreground leading-tight hover:text-primary transition-colors">
                              <Link to="/blog/ki-prozessoptimierung">
                                {featuredPost.title}
                              </Link>
                            </CardTitle>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                              {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {featuredPost.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {featuredPost.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {featuredPost.readTime}
                              </div>
                            </div>
                            <Separator className="mb-4" />
                            <Link to={getPostUrl(featuredPost.id)}>
                              <Button variant="cta" size="lg" className="w-full">
                                Zum Artikel
                              </Button>
                            </Link>
                          </CardContent>
                        </div>
                      </Card>
                    </div>}

                  {/* Latest Articles */}
                  <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                          {searchTerm ? `Suchergebnisse für "${searchTerm}"` : "Latest articles"}
                        </h2>
                        <p className="text-muted-foreground">Die neuesten Beiträge zu Digitalisierung und KI</p>
                        <Separator className="mt-4" />
                      </div>
                      <div className="relative max-w-xs">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input type="text" placeholder="Suchen..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-9 text-sm" />
                      </div>
                    </div>

                    {filteredPosts.length === 0 ? <div className="text-center py-12">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Keine Artikel gefunden
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
                        </p>
                        <Button variant="outline" onClick={() => {
                      setSearchTerm("");
                      setSelectedGeneralCategory("Alle");
                      setSelectedIndustryCategory("Alle");
                    }}>
                          Filter zurücksetzen
                        </Button>
                      </div> : <div className="grid md:grid-cols-2 gap-6">
                        {regularPosts.map(post => <Card key={post.id} className="group overflow-hidden hover:shadow-md transition-all duration-300 border-border/50">
                            <div className="flex gap-4 p-4">
                              <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <Badge variant="outline" className="mb-2 text-xs">
                                  {post.generalCategory}
                                </Badge>
                                <Link to={getPostUrl(post.id)} className="group-hover:text-primary transition-colors">
                                  <h3 className="font-semibold text-sm text-foreground mb-2 leading-tight line-clamp-2">
                                    {post.title}
                                  </h3>
                                </Link>
                                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {post.author}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                  </div>
                                </div>
                                <Separator className="mb-3" />
                                <Link to={getPostUrl(post.id)} className="block">
                                  <Button variant="outline" size="sm" className="w-full text-xs">
                                    Zum Artikel
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </Card>)}
                      </div>}
                  </div>

                  {/* Topic Categories */}
                  {selectedGeneralCategory === "Alle" && selectedIndustryCategory === "Alle" && !searchTerm && <div className="space-y-16">
                      {/* KI in der Praxis */}
                      <div>
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-foreground mb-2">KI in der Praxis</h2>
                          <p className="text-muted-foreground">Branchenübergreifende Anwendungen und Erfolgsgeschichten</p>
                          <Separator className="mt-4" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {kiPraxisPosts.map(post => <Card key={post.id} className="group overflow-hidden hover:shadow-md transition-all duration-300">
                              <div className="relative h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                  {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                      <User className="w-3 h-3" />
                                      {post.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {post.readTime}
                                    </div>
                                  </div>
                                  <span>{post.date}</span>
                                </div>
                                <Separator className="mb-3" />
                                <Button variant="outline" size="sm" className="w-full text-xs">
                                  Zum Artikel
                                </Button>
                              </CardContent>
                            </Card>)}
                        </div>
                      </div>

                      {/* Allgemeines zu KI und Digitalisierung */}
                      <div>
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-foreground mb-2">Allgemeines zu KI & Digitalisierung im Mittelstand</h2>
                          <p className="text-muted-foreground">Grundlagen, Trends und Zukunftsperspektiven</p>
                          <Separator className="mt-4" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {allgemeinPosts.map(post => <Card key={post.id} className="group overflow-hidden hover:shadow-md transition-all duration-300">
                              <div className="relative h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                  {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                      <User className="w-3 h-3" />
                                      {post.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {post.readTime}
                                    </div>
                                  </div>
                                  <span>{post.date}</span>
                                </div>
                                <Separator className="mb-3" />
                                <Button variant="outline" size="sm" className="w-full text-xs">
                                  Zum Artikel
                                </Button>
                              </CardContent>
                            </Card>)}
                        </div>
                      </div>
                    </div>}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    
                    {/* Von PAXUP empfohlen */}
                    <Card className="border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">Von PAXUP empfohlen</CardTitle>
                        </div>
                        <Separator className="mt-2" />
                      </CardHeader>
                      <CardContent className="space-y-6 p-4">
                        {blogPosts.slice(0, 3).map(post => <div key={post.id} className="group">
                            <Link to={getPostUrl(post.id)} className="block">
                              <div className="space-y-3">
                                <div className="relative h-24 w-full overflow-hidden rounded-lg">
                                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  <div className="absolute top-2 right-2">
                                    <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                                      {post.readTime}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                  </p>
                                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                                    <div className="flex items-center gap-1">
                                      <User className="w-3 h-3" />
                                      <span className="truncate">{post.author}</span>
                                    </div>
                                    <span>{post.date}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>)}
                        
                        <div className="pt-2 border-t border-border">
                          <Button variant="outline" size="sm" className="w-full text-xs">
                            Alle Artikel ansehen
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Categories Quick Access */}
                    <Card>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">Kategorien</CardTitle>
                        <Separator />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {generalCategories.slice(1).map(category => <Button key={category} variant="ghost" size="sm" onClick={() => setSelectedGeneralCategory(category)} className="w-full justify-start text-left h-auto p-2">
                            <Tag className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm">{category}</span>
                          </Button>)}
                      </CardContent>
                    </Card>

                    {/* Newsletter CTA */}
                    <Card className="bg-gradient-subtle border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-2">
                          Newsletter abonnieren
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Erhalten Sie die neuesten Artikel direkt in Ihr Postfach.
                        </p>
                        <div className="space-y-3">
                          <Input type="email" placeholder="E-Mail-Adresse" className="text-sm" />
                          <Button variant="cta" size="sm" className="w-full">
                            Abonnieren
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Blog;