import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import ImmobilienLandingPage from "./pages/ImmobilienLandingPage";
import ImageGenerator from "./components/ImageGenerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ueber-uns" element={<AboutUs />} />
          <Route path="/blog/ki-prozessoptimierung" element={<BlogPost1 />} />
          <Route path="/blog/digitale-transformation-handwerk" element={<BlogPost2 />} />
          <Route path="/blog/foerdermittel-digitalisierung" element={<BlogPost3 />} />
          <Route path="/blog/automatisierung-immobilienverwaltung" element={<BlogPost4 />} />
          <Route path="/blog/cloud-vs-onpremise" element={<BlogPost5 />} />
          <Route path="/blog/workflow-automatisierung" element={<BlogPost6 />} />
          <Route path="/immobilienverwaltung" element={<ImmobilienLandingPage />} />
          <Route path="/generate-images" element={<ImageGenerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
