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
  return <div className="min-h-screen bg-background overflow-hidden">
      <NavBar />
      <Hero />
      
      <div className="section-transition section-dark">
        <PropositionValeur />
      </div>
      
      <div className="section-transition section-orange">
        <PainPoints />
      </div>
      
      <div className="section-transition section-dark">
        <Benefits />
      </div>
      
      <div className="section-transition section-orange">
        <TransparentGuide />
      </div>
      
      <div className="section-transition section-dark">
        <ServiceToolsSection />
      </div>
      
      <div className="section-transition section-orange">
        <SocialProof />
      </div>
      
      <div className="section-transition section-dark">
        <PricingSection />
      </div>
      
      <div className="section-transition section-orange">
        <FAQ />
      </div>

      <div className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] text-white py-16 relative overflow-hidden shadow-[0_0_50px_rgba(255,126,51,0.4)]">
        {/* Formes géométriques abstraites pour effet WOW */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          
          <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-black/10 rounded-full blur-2xl transform -rotate-12"></div>
          
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 py-6">
            Rejoignez Nos Élèves Qui Génèrent Des Résultats Concrets
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transformez vos ambitions en entreprise e-commerce rentable dès aujourd'hui - comme l'ont fait des centaines d'autres avant vous.
          </p>
          <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-black text-white hover:bg-black/90 px-10 py-6 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/20" target="_blank" rel="noopener noreferrer">
            DÉMARRER VOTRE FORMATION MAINTENANT →
          </a>
          <p className="mt-4 text-white/80">Objectif: Votre première vente en moins de 30 jours</p>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Index;