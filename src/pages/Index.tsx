
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PartCard from "@/components/PartCard";
import ContentSection, { FeatureItem } from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Globe, Store } from "lucide-react";
import PropositionValeur from "@/components/PropositionValeur";
import ServiceToolsSection from "@/components/ServiceToolsSection";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import TransparentGuide from "@/components/TransparentGuide";

const Index = () => {
  return <div className="min-h-screen">
      <NavBar />
      <Hero />
      
      <PropositionValeur />

      <PainPoints />
      <Benefits />
      <TransparentGuide />
      <ServiceToolsSection />
      <SocialProof />
      <PricingSection />
      <FAQ />

      <div className="bg-gradient-to-r from-brand-orange to-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre business en dropshipping?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Rejoignez notre formation complète et commencez 
VOTRE aventure entrepreneuriale dès aujourd'hui.</p>
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white text-brand-dark hover:bg-gray-100 text-md px-8 py-6"
          >
            Oui .. Je le veux !
          </a>
        </div>
      </div>

      <Footer />
    </div>;
};

export default Index;
