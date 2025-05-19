import { Check } from "lucide-react";
const Benefits = () => {
  const benefits = [{
    title: "Méthode d'apprentissage étape par étape",
    description: "Formation structurée en 10 modules progressifs, accessibles même pour les débutants sans expérience en e-commerce"
  }, {
    title: "Accompagnement individuel garanti",
    description: "Accès privilégié à notre communauté d'experts et support quotidien pour résoudre vos défis spécifiques"
  }, {
    title: "Suite d'outils professionnels incluse",
    description: "Accès aux solutions premium d'analyse de marché, d'automatisation et de gestion logistique sans frais supplémentaires"
  }, {
    title: "Stratégie éprouvée par des centaines d'entrepreneurs",
    description: "Approche testée et validée par notre communauté qui génère collectivement des revenus mensuels récurrents"
  }, {
    title: "Contenu actualisé aux tendances 2025",
    description: "Formation constamment mise à jour pour intégrer les dernières stratégies marketing et algorithmes des plateformes"
  }, {
    title: "Système de revenu e-commerce automatisé",
    description: "Développez une source de revenus complémentaire ou principale avec des processus d'automatisation avancés"
  }];
  return <section id="benefices" className="section-uniform bg-gradient-to-b from-[#121212] to-[#331200]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            6 Avantages Exclusifs de Notre <span className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent">Méthode Dropshipping 2025</span>
          </h2>
          <p className="text-lg text-[#FF9F3F] max-w-2xl mx-auto mb-10">
            Découvrez pourquoi notre approche transforme des débutants en entrepreneurs e-commerce prospères.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg hover:border-white/20 hover:bg-white/8 transition duration-300 transform hover:translate-y-[-5px] h-full flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF7E33] to-[#FF5733] flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-white" />
                </span>
              </div>
              <div className="text-center flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-white mb-3 text-xl">{benefit.title}</h3>
                <p className="text-[#FF9F3F]">{benefit.description}</p>
              </div>
            </div>)}
        </div>
        
        {/* Additional CTA */}
        <div className="mt-16 text-center">
          
          <p className="mt-4 font-medium text-xl text-amber-300">Sans engagement - Commencez dès aujourd'hui pour seulement 97€/mois</p>
        </div>
      </div>
    </section>;
};
export default Benefits;