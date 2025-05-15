
import { ArrowRight, Check } from "lucide-react";

const PropositionValeur = () => {
  return (
    <section className="section-uniform bg-gradient-to-r from-brand-orange/10 to-brand-dark/10">
      <div className="container-uniform">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Dépassez la barrière des</span>
            <span className="text-5xl md:text-6xl text-brand-orange">1000€</span>
            <span className="block">par mois en dropshipping</span>
          </h2>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Avec ou sans stock, sans investissement massif, et sans expérience préalable en e-commerce. 
            Notre méthode en 10 modules segmentés transforme votre ambition en business rentable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Stratégie Validée</h3>
              <p className="text-[#FF9F3F] text-center">
                Testée et approuvée par plusieurs membres<br />
                [voir témoignages plus bas]
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Résultats Rapides</h3>
              <p className="text-[#FF9F3F] text-center">
                Première vente possible en moins de 15 jours avec notre méthode.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Support Complet</h3>
              <p className="text-[#FF9F3F] text-center">
                Communauté d'entraide toujours là pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
          
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-brand-orange to-brand-dark text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Je veux démarrer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropositionValeur;
