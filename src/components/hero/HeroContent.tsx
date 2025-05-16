
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
        {/* Animated badge */}
        <AnimatedBadge className="mb-6">
          <div className="flex items-center gap-2 relative">
            <Package className="h-4 w-4 text-[#33C3F0] animate-twinkle" />
            <span className="text-sm font-medium text-white animate-gradient-text">
              Formation Expert Dropshipping 2025
            </span>
            <Package className="h-4 w-4 text-[#33C3F0] animate-twinkle-delayed" />
          </div>
        </AnimatedBadge>

        {/* Main title with animated gradient - SEO optimized */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
          <span className="hero-text bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#FFFFFF] to-[#33C3F0] bg-size-200 animate-gradient-x">
            Maîtrisez le Dropshipping Rentable en 2025
          </span>
          <br className="hidden md:block" />
          <span className="hero-text-delay bg-clip-text text-transparent bg-gradient-to-r from-[#33C3F0] via-[#FFFFFF] to-[#F97316] bg-size-200 animate-gradient-x">et Générez votre 1er revenu !</span>

          {/* Floating package icons near title */}
          <Package className="absolute -right-4 -top-4 h-6 w-6 text-[#33C3F0]/40 animate-float opacity-75" />
          <Package className="absolute -left-8 bottom-0 h-4 w-4 text-[#F97316]/40 animate-float-delayed opacity-75" />
        </h1>

        <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto fade-in-up">Notre méthode prouvée en plusieurs  modules sectionnés transformera votre ambition en business e-commerce profitable avec ou sans stock et à faible investissement.</p>

        {/* Interactive buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up-delay">
          <GlowButton>
            <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-md px-8 py-6 bg-gradient-to-r from-[#F97316] to-[#FF8D6B] hover:opacity-90 transition-all relative z-10 text-white">
              <span className="relative z-10">Lancer Votre Business Dropshipping</span>
            </a>
          </GlowButton>

          <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-md px-8 py-6 border border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10 transition-all relative overflow-hidden group">
            <span className="relative z-10">Découvrir Notre Méthode Éprouvée</span>
            <div className="absolute h-full w-0 bg-[#33C3F0]/10 top-0 left-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
          </a>
        </div>

        {/* Animated scroll indicator */}
        <div className="mt-20 md:mt-28 flex flex-col items-center fade-in-up-delay-2">
          <button onClick={scrollToNext} aria-label="Scroll down" className="text-[#33C3F0] hover:text-[#33C3F0]/80 transition-colors relative p-4 group">
            <div className="absolute inset-0 rounded-full bg-[#33C3F0]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <ArrowDown size={24} className="relative animate-bounce-subtle" />
          </button>
          <span className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explorer
          </span>
        </div>
      </div>
    </div>;
};
