
import { ArrowRight, Check } from "lucide-react";

const PropositionValeur = () => {
  return (
    <section className="section-uniform bg-gradient-to-r from-brand-orange/10 to-brand-dark/10">
      <div className="container-uniform">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Comment Gagner</span>
            <span className="text-5xl md:text-6xl text-brand-orange">+1000€</span>
            <span className="block">Par Mois avec le Dropshipping Éthique</span>
          </h2>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Créez votre entreprise e-commerce sans stock, sans gros investissement, et sans expérience préalable. 
            Notre méthode éprouvée en 10 modules transforme votre ambition en business rentable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Stratégie Validée par le Marché</h3>
              <p className="text-[#FF9F3F] text-center">
                Approche testée et approuvée par plusieurs entrepreneurs à succès<br />
                [voir témoignages plus bas]
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Premières Ventes en 15 Jours</h3>
              <p className="text-[#FF9F3F] text-center">
                Notre système accélère votre croissance avec des techniques de marketing digital prouvées.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Accompagnement Personnalisé</h3>
              <p className="text-[#FF9F3F] text-center">
                Communauté d'entrepreneurs et experts toujours disponibles pour résoudre vos défis quotidiens.
              </p>
            </div>
          </div>
          
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-brand-orange to-brand-dark text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commencer Votre Business E-commerce Aujourd'hui
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropositionValeur;
