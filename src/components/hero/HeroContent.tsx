
import { Button } from "@/components/ui/button";
import { ArrowDown, Package } from "lucide-react";
import { AnimatedBadge, GlowButton } from "../CardStyles";
interface HeroContentProps {
  isVisible: boolean;
  scrollToNext: () => void;
}
export const HeroContent = ({
  isVisible,
  scrollToNext
}: HeroContentProps) => {
  return <div className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge animé */}
        <div className="mb-6">
          <div className="flex items-center gap-2 relative justify-center">
            <Package className="h-4 w-4 text-[#FF7E33] animate-twinkle" />
            <span className="text-sm font-medium text-white animate-gradient-text">
              Formation Expert Dropshipping 2025
            </span>
            <Package className="h-4 w-4 text-[#FF7E33] animate-twinkle-delayed" />
          </div>
        </div>

        {/* Titre principal avec gradient animé - optimisé pour le SEO */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
          <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-white bg-size-200 animate-gradient-x">
Maîtrisez le Dropshipping Rentable en 2025</span>
          <br className="hidden md:block" />
          <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-white bg-size-200 animate-gradient-x">
            et Générez <span className="text-[#FF7E33]">1000€+</span> par mois !
          </span>

          {/* Icônes de packages flottantes près du titre */}
          <Package className="absolute -right-4 -top-4 h-6 w-6 text-[#FF7E33] animate-float opacity-75" />
          <Package className="absolute -left-8 bottom-0 h-4 w-4 text-[#FF7E33]/70 animate-float-delayed opacity-75" />
        </h1>

        <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl mx-auto fade-in-up font-medium">
          <span className="underline decoration-[#FF7E33] decoration-2 underline-offset-2">Notre méthode prouvée et structurée</span> transformera votre ambition en business e-commerce profitable avec ou sans stock et à faible investissement.
        </p>

        {/* Boutons interactifs avec effets au survol - optimisés pour mobile */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay">
          <GlowButton>
            <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-md px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 transition-all relative z-10 text-white">
              <span className="relative z-10 text-lg font-bold hidden sm:inline">COMMENCER MAINTENANT →</span>
              <span className="relative z-10 text-lg font-bold sm:hidden">COMMENCER →</span>
            </a>
          </GlowButton>
        </div>
        
        {/* Points clés des avantages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-[#FF7E33]/20">
            <p className="text-sm font-medium text-white">Formation complète à partir de <span className="font-bold text-[#FF7E33]">97€/mois</span></p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-[#FF7E33]/20">
            <p className="text-sm font-medium text-white">+ de <span className="font-bold text-[#FF7E33]">500 entrepreneurs</span> formés</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-[#FF7E33]/20">
            <p className="text-sm font-medium text-white">Support quotidien <span className="font-bold text-[#FF7E33]">7j/7</span></p>
          </div>
        </div>

        {/* Indicateur de défilement animé */}
        <div className="mt-20 md:mt-28 flex flex-col items-center fade-in-up-delay-2">
          <button onClick={scrollToNext} aria-label="Scroll down" className="text-[#FF7E33] hover:text-[#FF7E33]/80 transition-colors relative p-4 group">
            <div className="absolute inset-0 rounded-full bg-[#FF7E33]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <ArrowDown size={24} className="relative animate-bounce-subtle" />
          </button>
          <span className="text-sm text-orange-200 mt-2">
            Explorer
          </span>
        </div>
      </div>
    </div>;
};
