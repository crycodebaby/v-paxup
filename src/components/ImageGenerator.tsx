import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RunwareService, GeneratedImage } from "@/services/runware";
import { toast } from "sonner";
import { Loader2, Download, ExternalLink, Key, Sparkles } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  prompt: string;
}

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedImages, setGeneratedImages] = useState<Record<number, string>>({});
  const [currentlyGenerating, setCurrentlyGenerating] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "KI-gestützte Prozessoptimierung",
      category: "KI & Machine Learning",
      prompt: "Professional business scene showing AI and machine learning concepts, modern office with holographic data visualization, charts and graphs floating in the air, businesspeople analyzing data on futuristic screens, blue and orange color scheme, high-tech atmosphere, photorealistic, ultra high resolution"
    },
    {
      id: 2,
      title: "Digitale Transformation im Handwerk",
      category: "Digitalisierung",
      prompt: "Modern craftsman using digital tablet and smart tools in a contemporary workshop, traditional tools combined with high-tech devices, person wearing work clothes using augmented reality glasses, warm lighting, professional photography, ultra high resolution"
    },
    {
      id: 3,
      title: "Fördermittel für Digitalisierung",
      category: "Fördermittel",
      prompt: "Professional business meeting discussing funding and investment, documents and charts on table, handshake between businesspeople, modern office environment, calculator and financial documents, euro symbols subtly integrated, bright professional lighting, ultra high resolution"
    },
    {
      id: 4,
      title: "Automatisierung in der Immobilienverwaltung",
      category: "Branchenlösungen",
      prompt: "Modern real estate office with automated systems, property management software on multiple screens, building blueprints, keys and property documents, professional real estate agent using tablet, contemporary office design, ultra high resolution"
    },
    {
      id: 5,
      title: "Cloud vs. On-Premise IT-Strategie",
      category: "Technologie-Trends",
      prompt: "Split scene comparing cloud computing and on-premise servers, left side showing cloud icons and wireless connections, right side showing physical server racks, IT professional in the middle analyzing both options, blue and gray color scheme, ultra high resolution"
    },
    {
      id: 6,
      title: "Workflow-Automatisierung",
      category: "Prozessautomatisierung",
      prompt: "Futuristic office workflow visualization, automated processes shown as flowing light streams connecting different workstations, people working efficiently with digital interfaces, productivity charts in the background, modern minimalist design, ultra high resolution"
    }
  ];

  const generateAllImages = async () => {
    if (!apiKey.trim()) {
      toast.error("Bitte geben Sie Ihren Runware API-Schlüssel ein");
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      const runwareService = new RunwareService(apiKey);
      const totalImages = blogPosts.length;
      
      for (let i = 0; i < totalImages; i++) {
        const post = blogPosts[i];
        setCurrentlyGenerating(post.id);
        
        try {
          toast.info(`Generiere Bild für: ${post.title}`);
          
          const result: GeneratedImage = await runwareService.generateImage({
            positivePrompt: post.prompt,
            width: 800,
            height: 600,
            model: "runware:100@1",
            outputFormat: "WEBP",
            CFGScale: 1,
            numberResults: 1
          });

          setGeneratedImages(prev => ({
            ...prev,
            [post.id]: result.imageURL
          }));

          toast.success(`Bild für "${post.title}" erfolgreich generiert!`);
          
        } catch (error) {
          console.error(`Error generating image for post ${post.id}:`, error);
          toast.error(`Fehler beim Generieren des Bildes für "${post.title}"`);
        }
        
        setProgress(((i + 1) / totalImages) * 100);
      }
      
      toast.success("Alle Bilder erfolgreich generiert!");
      
    } catch (error) {
      console.error("Error in image generation process:", error);
      toast.error("Fehler beim Generieren der Bilder");
    } finally {
      setIsGenerating(false);
      setCurrentlyGenerating(null);
      setProgress(0);
    }
  };

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${filename}.webp`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success(`Bild "${filename}" heruntergeladen!`);
    } catch (error) {
      toast.error("Fehler beim Herunterladen des Bildes");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <Sparkles className="inline-block w-8 h-8 mr-3 text-primary" />
              Blog-Bilder Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Erstellen Sie professionelle Bilder für alle Blog-Artikel mit KI
            </p>
          </div>

          {/* API Key Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-primary" />
                Runware API-Schlüssel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  Um Bilder zu generieren, benötigen Sie einen Runware API-Schlüssel. 
                  Besuchen Sie <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">runware.ai</a> und 
                  finden Sie Ihren API-Schlüssel im Dashboard unter "API Keys".
                </AlertDescription>
              </Alert>
              
              <div className="flex gap-4">
                <Input
                  type="password"
                  placeholder="Ihren Runware API-Schlüssel eingeben..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={generateAllImages}
                  disabled={isGenerating || !apiKey.trim()}
                  variant="cta"
                  className="whitespace-nowrap"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generiere...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Alle Bilder generieren
                    </>
                  )}
                </Button>
              </div>

              {isGenerating && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Fortschritt: {Math.round(progress)}%</span>
                    {currentlyGenerating && (
                      <span className="text-primary">
                        Generiere: {blogPosts.find(p => p.id === currentlyGenerating)?.title}
                      </span>
                    )}
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generated Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="relative h-48 bg-muted/30">
                  {generatedImages[post.id] ? (
                    <img 
                      src={generatedImages[post.id]} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {currentlyGenerating === post.id ? (
                        <div className="text-center">
                          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Generiere...</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Sparkles className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Warten auf Generierung</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold mb-2 text-foreground">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.prompt}
                  </p>
                  
                  {generatedImages[post.id] && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => downloadImage(generatedImages[post.id], `blog-${post.id}-${post.title.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(generatedImages[post.id], '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instructions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Anweisungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">1. API-Schlüssel eingeben</h4>
                  <p className="text-sm text-muted-foreground">
                    Besuchen Sie runware.ai, erstellen Sie ein Konto und kopieren Sie Ihren API-Schlüssel aus dem Dashboard.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Bilder generieren</h4>
                  <p className="text-sm text-muted-foreground">
                    Klicken Sie auf "Alle Bilder generieren" und warten Sie, bis alle 6 Bilder erstellt wurden.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Bilder herunterladen</h4>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie die generierten Bilder herunter und speichern Sie sie im public-Ordner Ihres Projekts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Code aktualisieren</h4>
                  <p className="text-sm text-muted-foreground">
                    Aktualisieren Sie die Bildpfade in der Blog-Komponente, um die neuen Bilder zu verwenden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;