
import { Button } from "@/components/ui/button";
import { ArrowDown, Package, Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedBadge, GlowButton } from "./CardStyles";
import { FloatingIcons } from "./hero/FloatingIcons";
import { HeroContent } from "./hero/HeroContent";
import { GlowEffect } from "./hero/GlowEffect";

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

  return (
    <section
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Warm gradient background with soft transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEF7CD] via-[#FDE1D3] to-[#FEC6A1] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pattern-grid z-0"></div>

      {/* Interactive glow effect that follows mouse */}
      <GlowEffect mousePosition={mousePosition} containerRef={bannerRef} />

      {/* Floating package and airplane icons */}
      <FloatingIcons mousePosition={mousePosition} />

      {/* Main hero content */}
      <HeroContent isVisible={isVisible} scrollToNext={scrollToNext} />

      {/* Decorative transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
