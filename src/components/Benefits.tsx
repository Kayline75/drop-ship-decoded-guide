
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Méthode d'apprentissage étape par étape",
      description: "Formation structurée en 10 modules progressifs, accessibles même pour les débutants sans expérience en e-commerce"
    },
    {
      title: "Accompagnement individuel garanti",
      description: "Accès privilégié à notre communauté d'experts et support quotidien pour résoudre vos défis spécifiques"
    },
    {
      title: "Suite d'outils professionnels incluse",
      description: "Accès aux solutions premium d'analyse de marché, d'automatisation et de gestion logistique sans frais supplémentaires"
    },
    {
      title: "Stratégie éprouvée par des centaines d'entrepreneurs",
      description: "Approche testée et validée par notre communauté qui génère collectivement des revenus mensuels récurrents"
    },
    {
      title: "Contenu actualisé aux tendances 2025",
      description: "Formation constamment mise à jour pour intégrer les dernières stratégies marketing et algorithmes des plateformes"
    },
    {
      title: "Système de revenu e-commerce automatisé",
      description: "Développez une source de revenus complémentaire ou principale avec des processus d'automatisation avancés"
    }
  ];

  return (
    <section className="section-uniform bg-[#1A1F2C]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            6 Avantages Exclusifs de Notre <span className="gradient-text-harmonized">Méthode Dropshipping 2025</span>
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto mb-10">
            Découvrez pourquoi notre approche transforme des débutants en entrepreneurs e-commerce prospères.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg transition duration-300 h-full flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </span>
              </div>
              <div className="text-center flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-white mb-3 text-xl">{benefit.title}</h3>
                <p className="text-[#7BE0FF]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
