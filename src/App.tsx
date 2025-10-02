// src/App.tsx

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Providers } from "./Providers";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import ScrollToTop from "@/components/ScrollToTop";

// --- Code-Splitting: Seiten werden bei Bedarf nachgeladen ---
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ImmobilienLandingPage = lazy(
  () => import("./pages/ImmobilienLandingPage")
);
const Funding = lazy(() => import("./pages/Funding"));
const Services = lazy(() => import("./pages/Services"));
const UseCases = lazy(() => import("./pages/UseCases"));
const ImageGenerator = lazy(() => import("./components/ImageGenerator"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));

// Eine einfache Ladeanzeige, während die Seiten-Komponenten laden
function LoadingFallback() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Lade V-PAXUP...</p>
    </div>
  );
}

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ueber-uns" element={<AboutUs />} />

            {/* Die NEUE dynamische Route für alle Blog-Posts */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            <Route
              path="/immobilienverwaltung"
              element={<ImmobilienLandingPage />}
            />
            <Route path="/foerderung" element={<Funding />} />
            <Route path="/leistungen" element={<Services />} />
            <Route path="/anwendungsfaelle" element={<UseCases />} />
            <Route path="/generate-images" element={<ImageGenerator />} />

            {/* Die Catch-All Route für 404-Fehler */}
            <Route path="*" element={<NotFound />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
