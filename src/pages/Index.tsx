
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PropositionValeur from "@/components/PropositionValeur";
import ServiceToolsSection from "@/components/ServiceToolsSection";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import TransparentGuide from "@/components/TransparentGuide";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 py-6">
            Lancez Votre Business Dropshipping Rentable Dès Aujourd'hui
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez notre formation complète et transformez votre ambition en entreprise e-commerce profitable et automatisée.
          </p>
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-white text-brand-dark hover:bg-gray-100 px-10 py-6 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            DÉMARRER VOTRE FORMATION MAINTENANT →
          </a>
          <p className="mt-4 text-white/80">Sans engagement - Accès immédiat à tous les modules et outils</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
