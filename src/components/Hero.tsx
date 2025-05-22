
import { Button } from "@/components/ui/button";
import { ArrowDown, Package, Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedBadge, GlowButton } from "./CardStyles";
import { FloatingIcons } from "./hero/FloatingIcons";
import { HeroContent } from "./hero/HeroContent";
import { GlowEffect } from "./hero/GlowEffect";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Gérer le mouvement de la souris pour les effets interactifs
  // Désactiver pour mobile pour économiser les ressources
  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (bannerRef.current && !isMobile) {
      const rect = bannerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Gérer le défilement pour les effets parallaxes
  useEffect(() => {
    // Éviter d'ajouter un écouteur d'événement inutile sur mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Animation au montage
  useEffect(() => {
    // Retarder légèrement l'animation sur mobile pour un rendu initial plus rapide
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 100 : 0);
    
    return () => clearTimeout(timer);
  }, [isMobile]);
  
  const scrollToNext = () => {
    const coursSection = document.getElementById("cours");
    if (coursSection) {
      coursSection.scrollIntoView({
        behavior: isMobile ? "auto" : "smooth" // Éviter les animations smooth sur mobile
      });
    }
  };
  
  return (
    <section 
      ref={bannerRef} 
      onMouseMove={isMobile ? undefined : handleMouseMove} 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Fond de dégradé spectaculaire avec inspiration du design référence */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#331200] to-[#FF7E33]/20 z-0"></div>
      
      {/* Superposition de motif subtil - désactivé sur mobile */}
      {!isMobile && <div className="absolute inset-0 opacity-10 pattern-grid z-0"></div>}

      {/* Effet de lumière interactive qui suit la souris - désactivé sur mobile */}
      {!isMobile && <GlowEffect mousePosition={mousePosition} containerRef={bannerRef} />}

      {/* Icônes de package et d'avion flottantes - réduites sur mobile */}
      {!isMobile && <FloatingIcons mousePosition={mousePosition} />}

      {/* Contenu principal du hero */}
      <HeroContent isVisible={isVisible} scrollToNext={scrollToNext} />
    </section>
  );
};

export default Hero;
