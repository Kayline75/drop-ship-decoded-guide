
import { Button } from "@/components/ui/button";
import { ArrowDown, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientBackground from "./GradientBackground";
import { AnimatedBadge, GlowButton } from "./CardStyles";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
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

  // Generate package icons and their positions
  const packageIcons = [
    { x: "10%", y: "30%", delay: "1.5s", size: 18, rotation: "5deg" },
    { x: "85%", y: "25%", delay: "2s", size: 22, rotation: "-8deg" },
    { x: "30%", y: "85%", delay: "2.5s", size: 16, rotation: "12deg" },
    { x: "70%", y: "70%", delay: "3s", size: 20, rotation: "-15deg" },
    { x: "45%", y: "15%", delay: "3.5s", size: 24, rotation: "0deg" }
  ];

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

      {/* Package icons */}
      {packageIcons.map((item, i) => (
        <div
          key={`package-${i}`}
          className={`package-icon fade-in-up`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            transform: `rotate(${item.rotation})`
          }}
        >
          <Package 
            size={item.size} 
            className="text-accent" 
          />
        </div>
      ))}

      <GradientBackground scrollY={scrollY}>
        {/* Content with fade-in animation */}
        <div 
          className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated badge */}
            <AnimatedBadge className="mb-6">
              <div className="flex items-center gap-2 relative">
                <Package className="h-4 w-4 text-secondary animate-twinkle" />
                <span className="text-sm font-medium text-secondary animate-gradient-text">
                  Formation Dropshipping Premium
                </span>
                <Package className="h-4 w-4 text-secondary animate-twinkle-delayed" />
              </div>
            </AnimatedBadge>
            
            {/* Main title with animated gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B95] via-[#FFFFFF] to-[#7BE0FF] bg-size-200 animate-gradient-x">
                Découvrez l'art du Dropshipping
              </span>
              <br className="hidden md:block" />
              <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-[#7BE0FF] via-[#FFFFFF] to-[#FF6B95] bg-size-200 animate-gradient-x">
                pour créer un revenu en ligne
              </span>
              
              {/* Floating package icons near title */}
              <Package className="absolute -right-4 -top-4 h-6 w-6 text-secondary/40 animate-float opacity-75" />
              <Package className="absolute -left-8 bottom-0 h-4 w-4 text-primary/40 animate-float-delayed opacity-75" />
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto fade-in-up">
              Notre approche structurée en 10 modules transformera votre ambition en 
              business rentable et autonome.
            </p>
            
            {/* Interactive buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay">
              <GlowButton>
                <Button 
                  className="text-md px-8 py-6 bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B] hover:opacity-90 transition-all relative z-10"
                  onClick={() => console.log("Formation démarrée")}
                >
                  <span className="relative z-10">Débuter la formation</span>
                </Button>
              </GlowButton>
              
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
      </GradientBackground>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
