
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
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)`,
      };
    }
    return {};
  };

  // Generate package icons and their positions with improved floating animations
  const packageIcons = [
    { x: "10%", y: "30%", delay: "0s", size: 22, rotation: "5deg", duration: "6s", float: "15px" },
    { x: "85%", y: "25%", delay: "0.5s", size: 26, rotation: "-8deg", duration: "7s", float: "20px" },
    { x: "30%", y: "85%", delay: "1s", size: 18, rotation: "12deg", duration: "8s", float: "12px" },
    { x: "70%", y: "70%", delay: "1.5s", size: 24, rotation: "-15deg", duration: "9s", float: "18px" },
    { x: "45%", y: "15%", delay: "2s", size: 28, rotation: "0deg", duration: "7.5s", float: "25px" },
    { x: "20%", y: "50%", delay: "2.5s", size: 20, rotation: "10deg", duration: "6.5s", float: "16px" },
    { x: "60%", y: "40%", delay: "3s", size: 16, rotation: "-5deg", duration: "8.5s", float: "14px" }
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

      {/* Package icons with enhanced floating animation */}
      {packageIcons.map((item, i) => (
        <div
          key={`package-${i}`}
          className="package-icon"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            transform: `rotate(${item.rotation})`,
            animation: `float-custom ${item.duration} ease-in-out infinite`,
            '--float-amplitude': item.float,
            '--float-duration': item.duration,
          } as React.CSSProperties}
        >
          <Package 
            size={item.size} 
            className="text-[#33C3F0] hover:text-[#F97316] transition-colors duration-300"
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
            {/* Animated badge without enclosing frame */}
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-[#33C3F0] animate-twinkle" />
                <span className="text-sm font-medium animate-gradient-text">
                  Formation Dropshipping Premium
                </span>
                <Package className="h-5 w-5 text-[#33C3F0] animate-twinkle-delayed" />
              </div>
            </div>
            
            {/* Main title with animated gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#FFFFFF] to-[#33C3F0] bg-size-200 animate-gradient-x">
                Découvrez l'art du Dropshipping
              </span>
              <br className="hidden md:block" />
              <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-[#33C3F0] via-[#FFFFFF] to-[#F97316] bg-size-200 animate-gradient-x">
                pour créer un revenu en ligne
              </span>
              
              {/* Floating package icons near title - removed as they're now more visible elsewhere */}
            </h1>
            
            <p className="text-lg md:text-xl animate-gradient-text mb-10 max-w-2xl mx-auto fade-in-up">
              Notre approche structurée en 10 modules transformera votre ambition en 
              business rentable et autonome.
            </p>
            
            {/* Interactive buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay">
              <GlowButton>
                <Button 
                  className="text-md px-8 py-6 bg-gradient-to-r from-[#F97316] to-[#FF8D6B] hover:opacity-90 transition-all relative z-10"
                  onClick={() => console.log("Formation démarrée")}
                >
                  <span className="relative z-10">Débuter la formation</span>
                </Button>
              </GlowButton>
              
              <Button 
                variant="outline" 
                className="text-md px-8 py-6 border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">En savoir plus</span>
                <div className="absolute h-full w-0 bg-[#33C3F0]/10 top-0 left-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
              </Button>
            </div>

            {/* Animated scroll indicator */}
            <div className="mt-20 md:mt-28 flex flex-col items-center fade-in-up-delay-2">
              <button
                onClick={scrollToNext}
                aria-label="Scroll down"
                className="text-[#33C3F0] hover:text-[#33C3F0]/80 transition-colors relative p-4 group"
              >
                <div className="absolute inset-0 rounded-full bg-[#33C3F0]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <ArrowDown size={24} className="relative animate-bounce-subtle" />
              </button>
              <span className="text-sm animate-gradient-text mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorer</span>
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
