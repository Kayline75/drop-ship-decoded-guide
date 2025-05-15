
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
const PropositionValeur = () => {
  return <div className="bg-gradient-to-r from-brand-orange/10 to-brand-dark/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Dépassez la barrière des</span>
            <span className="text-5xl md:text-6xl text-brand-orange">1000€</span>
            <span className="block">par mois en dropshipping</span>
          </h2>
          
          <p className="text-xl mb-10">Avec ou sans stock, sans investissement massif, et sans expérience préalable en e-commerce. Notre méthode en 10 modules segmentés transforme votre ambition en business rentable.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Stratégie Validée</h3>
              <p className="text-[#FF9F3F]">Testée et approuvée par plusieurs membres  
[voir témoignages plus bas]</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Résultats Rapides</h3>
              <p className="text-[#FF9F3F]">Première vente possible en moins de 15 jours avec notre méthode .</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Support Complet</h3>
              <p className="text-[#FF9F3F]"> Communauté d'entraide
toujours la pour répondre 
à toute vos questions</p>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-brand-orange to-brand-dark text-md px-8 py-6 shadow-lg">
            Je veux démarrer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>;
};
export default PropositionValeur;
