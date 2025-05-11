
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const coursSection = document.getElementById("cours");
    if (coursSection) {
      coursSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate dynamic styles based on mouse position
  const getGlowStyle = () => {
    if (bannerRef.current) {
      const { width, height } = bannerRef.current.getBoundingClientRect();
      const x = mousePosition.x / width * 100;
      const y = mousePosition.y / height * 100;
      return {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(255, 107, 149, 0.15) 0%, transparent 50%)`,
      };
    }
    return {};
  };

  return (
    <section 
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Interactive glow effect that follows mouse */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-out" 
        style={getGlowStyle()}
      ></div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/5 rounded-full blur-sm animate-float-custom`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient background elements */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px]"
        style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
      ></div>
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px]"
        style={{ transform: `translateY(${-scrollY * 0.05}px) rotate(${-scrollY * 0.01}deg)` }}
      ></div>
      <div 
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      ></div>

      {/* Content with fade-in animation */}
      <div 
        className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-block mb-6 px-5 py-2 rounded-full glass-card-premium animate-pulse-slow relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B95]/20 to-[#7BE0FF]/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
            <div className="flex items-center gap-2 relative">
              <Sparkles className="h-4 w-4 text-secondary animate-twinkle" />
              <span className="text-sm font-medium text-secondary animate-gradient-text">
                Formation Dropshipping Premium
              </span>
              <Sparkles className="h-4 w-4 text-secondary animate-twinkle-delayed" />
            </div>
          </div>
          
          {/* Main title with animated gradient */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B95] via-[#FFFFFF] to-[#7BE0FF] bg-size-200 animate-gradient-x">
              Découvrez l'art du Dropshipping
            </span>
            <br className="hidden md:block" />
            <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-[#7BE0FF] via-[#FFFFFF] to-[#FF6B95] bg-size-200 animate-gradient-x">
              pour créer un revenu en ligne
            </span>
            
            {/* Floating stars */}
            <Star className="absolute -right-4 -top-4 h-6 w-6 text-secondary/40 animate-float opacity-75" />
            <Star className="absolute -left-8 bottom-0 h-4 w-4 text-primary/40 animate-float-delayed opacity-75" />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto fade-in-up">
            Notre approche structurée en 10 modules transformera votre ambition en 
            business rentable et autonome.
          </p>
          
          {/* Interactive buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay">
            <Button 
              className="text-md px-8 py-6 bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B] hover:opacity-90 transition-all button-glow relative group overflow-hidden"
              onClick={() => console.log("Formation démarrée")}
            >
              <span className="relative z-10">Débuter la formation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-md px-8 py-6 border-secondary text-secondary hover:bg-secondary/10 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">En savoir plus</span>
              <div className="absolute h-full w-0 bg-secondary/10 top-0 left-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </Button>
          </div>

          {/* Animated scroll indicator */}
          <div className="mt-20 md:mt-28 flex flex-col items-center fade-in-up-delay-2">
            <button
              onClick={scrollToNext}
              aria-label="Scroll down"
              className="text-secondary hover:text-secondary/80 transition-colors relative p-4 group"
            >
              <div className="absolute inset-0 rounded-full bg-secondary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <ArrowDown size={24} className="relative animate-bounce-subtle" />
            </button>
            <span className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorer</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
