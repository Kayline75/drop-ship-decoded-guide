
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

  // Gérer le mouvement de la souris pour les effets interactifs
  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Gérer le défilement pour les effets parallaxes
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation au montage
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
      {/* Fond de dégradé spectaculaire avec inspiration du design référence */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#331200] to-[#FF7E33]/20 z-0"></div>
      
      {/* Superposition de motif subtil */}
      <div className="absolute inset-0 opacity-10 pattern-grid z-0"></div>

      {/* Effet de lumière interactive qui suit la souris */}
      <GlowEffect mousePosition={mousePosition} containerRef={bannerRef} />

      {/* Icônes de package et d'avion flottantes */}
      <FloatingIcons mousePosition={mousePosition} />

      {/* Contenu principal du hero */}
      <HeroContent isVisible={isVisible} scrollToNext={scrollToNext} />

      {/* Transition décorative vers la section suivante */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
