
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Loader2 } from "lucide-react";
import PopupChat from "./components/PopupChat";
import SEOHead from "./components/SEOHead";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DropshippingGuide = lazy(() => import("./pages/DropshippingGuide"));

// Loading component
const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen bg-[#1A1F2C] text-white">
    <div className="flex flex-col items-center">
      <Loader2 className="h-12 w-12 animate-spin text-[#FF7E33]" />
      <p className="mt-4 text-xl">Chargement en cours...</p>
    </div>
  </div>
);

// Initialize QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-[#1A1F2C]">
        {/* SEO par défaut pour la page d'accueil */}
        <SEOHead 
          title="C'est quoi le Dropshipping ? Guide complet 2025 | Le Dropshipping est-il mort ?"
          description="Découvrez c'est quoi le dropshipping exactement et si le dropshipping est mort en 2025. Formation complète avec méthode rentable pour démarrer sans investissement."
          keywords="c'est quoi le dropshipping, dropshipping mort 2025, formation dropshipping, dropshipping rentable"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "C'est quoi le dropshipping exactement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le dropshipping est un modèle de commerce en ligne qui vous permet de vendre des produits sans stock, sans local et sans investir une fortune. Vous créez une boutique e-commerce, choisissez des produits auprès de fournisseurs, et lorsqu'un client commande, c'est le fournisseur qui livre directement à sa place. Vous gagnez la différence entre votre prix de vente et le prix fournisseur."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce que le dropshipping est mort en 2025 ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, le dropshipping n'est pas mort en 2025. Il a évolué et s'est adapté aux nouvelles réalités du marché. Ce qui est mort, ce sont les anciennes méthodes peu fiables : produits de mauvaise qualité, délais de livraison excessifs et marketing trompeur. En 2025, le dropshipping réussi repose sur une sélection rigoureuse des produits, des délais de livraison optimisés et un marketing de qualité."
                }
              }
            ]
          }}
        />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavBar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dropshipping-guide" element={<DropshippingGuide />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          {/* Ajout du popup chat global */}
          <PopupChat />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
