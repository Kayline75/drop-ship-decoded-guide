import { Button } from "@/components/ui/button";
import { ArrowDown, Package, Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientBackground from "./GradientBackground";
import { AnimatedBadge, GlowButton } from "./CardStyles";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
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
      coursSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Calculate dynamic styles based on mouse position
  const getGlowStyle = () => {
    if (bannerRef.current) {
      const {
        width,
        height
      } = bannerRef.current.getBoundingClientRect();
      const x = mousePosition.x / width * 100;
      const y = mousePosition.y / height * 100;
      return {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(51, 195, 240, 0.15) 0%, transparent 50%)`
      };
    }
    return {};
  };

  // Generate package icons with more varied positions and animations
  const packageIcons = [{
    x: "10%",
    y: "30%",
    delay: "1.5s",
    size: 18,
    rotation: "5deg",
    duration: "6s"
  }, {
    x: "85%",
    y: "25%",
    delay: "2s",
    size: 22,
    rotation: "-8deg",
    duration: "7s"
  }, {
    x: "30%",
    y: "85%",
    delay: "2.5s",
    size: 16,
    rotation: "12deg",
    duration: "8s"
  }, {
    x: "70%",
    y: "70%",
    delay: "3s",
    size: 20,
    rotation: "-15deg",
    duration: "5s"
  }, {
    x: "45%",
    y: "15%",
    delay: "3.5s",
    size: 24,
    rotation: "0deg",
    duration: "9s"
  }, {
    x: "15%",
    y: "50%",
    delay: "2.8s",
    size: 19,
    rotation: "20deg",
    duration: "6.5s"
  }, {
    x: "55%",
    y: "65%",
    delay: "1.8s",
    size: 17,
    rotation: "-10deg",
    duration: "7.5s"
  }, {
    x: "78%",
    y: "42%",
    delay: "3.2s",
    size: 21,
    rotation: "8deg",
    duration: "8.5s"
  }, {
    x: "25%",
    y: "10%",
    delay: "2.2s",
    size: 23,
    rotation: "-3deg",
    duration: "7.2s"
  }, {
    x: "60%",
    y: "30%",
    delay: "1.2s",
    size: 18,
    rotation: "15deg",
    duration: "5.8s"
  }, {
    x: "90%",
    y: "60%",
    delay: "2.7s",
    size: 16,
    rotation: "-18deg",
    duration: "6.3s"
  }, {
    x: "5%",
    y: "75%",
    delay: "3.7s",
    size: 20,
    rotation: "7deg",
    duration: "8.2s"
  }];

  // Generate airplane icons with custom animations
  const airplaneIcons = [{
    x: "20%",
    y: "40%",
    delay: "1s",
    size: 28,
    rotation: "25deg",
    duration: "12s",
    direction: "right"
  }, {
    x: "75%",
    y: "20%",
    delay: "5s",
    size: 24,
    rotation: "-15deg",
    duration: "15s",
    direction: "left"
  }];
  return <section ref={bannerRef} onMouseMove={handleMouseMove} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Solid blue background */}
      <div className="absolute inset-0 bg-blue-900/90 z-0"></div>
      
      {/* Interactive glow effect that follows mouse */}
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-out" style={getGlowStyle()}></div>

      {/* Package icons with enhanced floating animations */}
      {packageIcons.map((item, i) => <div key={`package-${i}`} className="floating-element package-icon hover:scale-110 transition-transform" style={{
      left: item.x,
      top: item.y,
      animationDelay: item.delay,
      transform: `rotate(${item.rotation})`,
      animationDuration: item.duration
    }}>
          <Package size={item.size} className="text-[#33C3F0] hover:text-[#7BE0FF] transition-colors" />
        </div>)}

      {/* Airplane icons with custom floating animations */}
      {airplaneIcons.map((item, i) => <div key={`airplane-${i}`} className={`floating-element airplane-icon hover:scale-125 transition-transform duration-300 cursor-pointer`} style={{
      left: item.x,
      top: item.y,
      animationDelay: item.delay,
      transform: `rotate(${item.rotation})`,
      animationDuration: item.duration
    }}>
          <Plane size={item.size} className={`text-white hover:text-[#F97316] transition-colors ${item.direction === 'left' ? 'flip-horizontal' : ''}`} />
        </div>)}

      {/* Content with fade-in animation */}
      <div className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-4xl text-center mx-[30px]">
          {/* Animated badge */}
          <AnimatedBadge className="mb-6">
            <div className="flex items-center gap-2 relative">
              <Package className="h-4 w-4 text-[#33C3F0] animate-twinkle" />
              <span className="text-sm font-medium text-white animate-gradient-text">
                Formation Dropshipping Premium
              </span>
              <Package className="h-4 w-4 text-[#33C3F0] animate-twinkle-delayed" />
            </div>
          </AnimatedBadge>
          
          {/* Main title with animated gradient */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#FFFFFF] to-[#33C3F0] bg-size-200 animate-gradient-x">
              Découvrez l'art du Dropshipping
            </span>
            <br className="hidden md:block" />
            <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-[#33C3F0] via-[#FFFFFF] to-[#F97316] bg-size-200 animate-gradient-x">
              pour créer un revenu en ligne
            </span>
            
            {/* Floating package icons near title */}
            <Package className="absolute -right-4 -top-4 h-6 w-6 text-[#33C3F0]/40 animate-float opacity-75" />
            <Package className="absolute -left-8 bottom-0 h-4 w-4 text-[#F97316]/40 animate-float-delayed opacity-75" />
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto fade-in-up">
            Notre approche structurée en 10 modules transformera votre ambition en 
            business rentable et autonome.
          </p>
          
          {/* Interactive buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay mx-[30px]">
            <GlowButton>
              <Button asChild className="text-md px-8 py-6 bg-gradient-to-r from-[#F97316] to-[#FF8D6B] hover:opacity-90 transition-all relative z-10">
                <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c">
                  <span className="relative z-10">Débuter la formation</span>
                </a>
              </Button>
            </GlowButton>
            
            <Button asChild variant="outline" className="text-md px-8 py-6 border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10 transition-all relative overflow-hidden group">
              <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c">
                <span className="relative z-10">En savoir plus</span>
                <div className="absolute h-full w-0 bg-[#33C3F0]/10 top-0 left-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
              </a>
            </Button>
          </div>

          {/* Animated scroll indicator */}
          <div className="mt-20 md:mt-28 flex flex-col items-center fade-in-up-delay-2">
            <button onClick={scrollToNext} aria-label="Scroll down" className="text-[#33C3F0] hover:text-[#33C3F0]/80 transition-colors relative p-4 group">
              <div className="absolute inset-0 rounded-full bg-[#33C3F0]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <ArrowDown size={24} className="relative animate-bounce-subtle" />
            </button>
            <span className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorer</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>;
};
export default Hero;
