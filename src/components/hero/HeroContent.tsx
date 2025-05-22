
import { Button } from "@/components/ui/button";
import { ArrowDown, Package } from "lucide-react";
import { AnimatedBadge, GlowButton } from "../CardStyles";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroContentProps {
  isVisible: boolean;
  scrollToNext: () => void;
}

export const HeroContent = ({
  isVisible,
  scrollToNext
}: HeroContentProps) => {
  const isMobile = useIsMobile();
  
  // Optimize external link handling
  const handleExternalLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Open link in new tab without prefetching to reduce initial load
    event.preventDefault();
    const href = (event.currentTarget as HTMLAnchorElement).href;
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 50);
  };
  
  // Simplify animations for mobile
  const animationClass = isMobile 
    ? "opacity-100 translate-y-0" 
    : isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  
  return (
    <div className={`container mx-auto px-4 py-12 md:py-16 relative z-10 transition-all ${animationClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge animé - simplifié pour mobile */}
        <div className="mb-4 md:mb-6">
          <div className="flex items-center gap-2 relative justify-center">
            <Package className="h-4 w-4 text-[#FF7E33]" />
            <span className="text-sm font-medium text-white">
              Formation Expert Dropshipping 2025
            </span>
            <Package className="h-4 w-4 text-[#FF7E33]" />
          </div>
        </div>

        {/* Titre optimisé avec moins d'animations */}
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 relative">
          <span className={isMobile ? "text-white" : "hero-text bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-white"}>
            C'est quoi le Dropshipping ?
          </span>
          <br className="hidden md:block" />
          <span className={isMobile ? "text-white" : "hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-white"}>
            est-ce que le dropshipping est <span className="text-[#FF7E33]">mort</span> en 2025 ?
          </span>

          {/* Réduit les icônes flottantes sur mobile */}
          {!isMobile && <Package className="absolute -right-4 -top-4 h-6 w-6 text-[#FF7E33] opacity-75" />}
        </h1>

        <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-10 max-w-2xl mx-auto font-medium">
          <span className="underline decoration-[#FF7E33] decoration-2 underline-offset-2">Non, le dropshipping n'est pas mort !</span> Notre méthode prouvée transformera votre ambition en business e-commerce profitable avec ou sans stock et à faible investissement.
        </p>

        {/* Bouton amélioré et optimisé pour mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton>
            <a 
              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base md:text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 transition-all relative z-10 text-white px-6 md:px-8 py-3 md:py-4 shadow-[0_0_20px_rgba(255,87,51,0.4)]" 
              onClick={handleExternalLink}
              aria-label="Accéder à la formation"
            >
              <span className="relative z-10 font-bold hidden sm:inline">ACCÉDER À LA FORMATION →</span>
              <span className="relative z-10 font-bold sm:hidden">COMMENCER →</span>
            </a>
          </GlowButton>
        </div>
        
        {/* Points clés des avantages - optimisés pour mobile */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
          <div className="bg-black/30 rounded-lg p-3 border border-[#FF7E33]/20">
            <p className="text-xs md:text-sm font-medium text-white">Formation complète à partir de <span className="font-bold text-[#FF7E33]">97€/mois</span></p>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-[#FF7E33]/20">
            <p className="text-xs md:text-sm font-medium text-white">Support quotidien <span className="font-bold text-[#FF7E33]">7j/7</span></p>
          </div>
        </div>

        {/* Indicateur de défilement simplifié */}
        <div className="mt-12 md:mt-28 flex flex-col items-center">
          <button 
            onClick={scrollToNext} 
            aria-label="Scroll down" 
            className="text-[#FF7E33] hover:text-[#FF7E33]/80 transition-colors relative p-4 group"
          >
            <ArrowDown size={isMobile ? 20 : 24} className="relative" />
          </button>
          <span className="text-xs md:text-sm text-orange-200 mt-2">
            Découvrir c'est quoi le dropshipping
          </span>
        </div>
      </div>
    </div>
  );
};
