
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const coursSection = document.getElementById("cours");
    if (coursSection) {
      coursSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden pattern-grid">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full filter blur-[60px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full glass-card">
            <span className="text-sm font-medium text-secondary">
              Formation Dropshipping Premium
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez l'art du <span className="gradient-text">Dropshipping</span> pour 
            <br className="hidden md:block" /> créer un revenu en ligne
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Notre approche structurée en 10 modules transformera votre ambition en 
            business rentable et autonome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button className="text-md px-8 py-6 bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B] hover:opacity-90 transition-all button-glow">
              Débuter la formation
            </Button>
            <Button variant="outline" className="text-md px-8 py-6 border-secondary text-secondary hover:bg-secondary/10 transition-all">
              En savoir plus
            </Button>
          </div>

          <div className="mt-20 md:mt-28 flex flex-col items-center animate-bounce">
            <button
              onClick={scrollToNext}
              aria-label="Scroll down"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              <ArrowDown size={24} />
            </button>
            <span className="text-sm text-muted-foreground mt-2">Explorer</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
