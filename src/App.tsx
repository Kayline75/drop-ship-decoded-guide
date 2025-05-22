
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Loader2 } from "lucide-react";

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
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
