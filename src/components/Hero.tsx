
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-brand-gray/20 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-brand-dark/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100">
            <span className="text-sm font-medium text-brand-dark">
              Formation Dropshipping Complète
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Apprenez le <span className="gradient-text">Dropshipping</span> de A à Z
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
            Transformez votre passion en business rentable avec notre formation 
            structurée en 10 parties pour maîtriser le dropshipping efficacement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-md px-8 py-6 bg-gradient-to-r from-brand-orange to-brand-dark hover:opacity-90 transition-opacity">
              Commencer la formation gratuite
            </Button>
            <Button variant="outline" className="text-md px-8 py-6 text-brand-dark border-brand-dark hover:bg-brand-dark hover:text-white">
              En savoir plus
            </Button>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col items-center animate-bounce">
            <button
              onClick={scrollToNext}
              aria-label="Scroll down"
              className="text-brand-dark hover:text-brand-orange transition-colors"
            >
              <ArrowDown size={24} />
            </button>
            <span className="text-sm text-gray-500 mt-2">Découvrir</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
