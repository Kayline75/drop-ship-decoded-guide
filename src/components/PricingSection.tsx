
import { Button } from "@/components/ui/button";
import { Check, ArrowDown, MessageSquareX, Wrench, Flag, Euro, UserX, X } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Premium",
      price: "97",
      priceUnit: "mois",
      description: "La formation complète pour maximiser vos chances de succès",
      features: [
        "Formation complète avec mises à jour mensuelles. On t'apprend tout de A à Z !",
        "Suivi quotidien 7j/7 par notre équipe.",
        "Études de cas détaillées et audit de tes boutiques et campagnes.",
        "Accès aux outils premium : Minea, et bien d'autres (+3000 € de valeur).",
        "Promotion spéciale sur la création de ta propre boutique par nos experts.",
        "Thème sur mesure offert à l'inscription.",
        "Sans engagement !"
      ],
      recommended: true,
      buttonText: "Obtenir la formation complète",
      buttonLink: "https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
    }, 
    {
      name: "Concurrent",
      price: "1497",
      priceUnit: "une seule fois",
      strikethrough: true,
      description: "Ce que les autres proposent pour le même prix",
      features: [
        "Contenu rarement mis à jour",
        "Support limité ou inexistant",
        "Pas d'accès aux outils premium",
        "Stratégies génériques",
        "Prix excessif pour la valeur",
        "Aucune personnalisation",
        "Aucun accompagnement"
      ],
      recommended: false,
      buttonText: "Ne pas choisir",
      buttonLink: "https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
    }
  ];

  return (
    <section id="tarifs" className="section-uniform bg-[#1A1F2C]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Un <span className="gradient-text-harmonized">investissement</span> dans votre avenir
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto mb-10">
            Choisissez la formule qui correspond à vos ambitions et à votre budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${
                plan.recommended 
                  ? 'border-4 border-brand-orange transform md:-translate-y-4 shadow-xl' 
                  : 'border border-white/10 hover:shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="bg-brand-orange text-white text-center py-2 font-bold">
                  RECOMMANDÉ
                </div>
              )}
              
              <div className="p-6 bg-white/5 backdrop-blur-sm flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-center text-white">{plan.name}</h3>
                <div className="text-center mb-4">
                  {plan.strikethrough 
                    ? <span className="text-5xl line-through font-thin text-red-500">{plan.price}€</span> 
                    : <span className="text-5xl font-bold text-emerald-500">{plan.price}€</span>
                  }
                  <span className="text-white"> / {plan.priceUnit}</span>
                </div>
                <p className="text-[#7BE0FF] mb-6 py-[20px] text-center">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {plan.recommended 
                        ? <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </span> 
                        : <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                            <X className="w-3 h-3 text-white" />
                          </span>
                      }
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={plan.buttonLink}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full py-6 mt-auto ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-brand-orange to-brand-dark text-white' 
                      : 'bg-white text-brand-dark border border-brand-dark hover:bg-gray-50'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Ce que les autres ne te diront pas */}
      <div className="mt-16 container-uniform">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 py-6">
          ❌ Ce que les autres ne te diront pas
        </h2>
        <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto text-center mb-12">
          Voici pourquoi la plupart des formations échouent à vraiment t'aider :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <ArrowDown className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Mises à jour lentes</strong> : des formations inchangées depuis des mois, voire des années.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageSquareX className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Aucun vrai accompagnement</strong> : tu poses une question, personne ne répond.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Outils payants non inclus</strong> : tu te retrouves avec plus de 300€/mois de frais supplémentaires.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 space-y-4 rounded-lg border border-white/10 text-center">
            <div className="flex items-center justify-center mb-4">
              <Flag className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Pas de vraie stratégie de lancement</strong> : juste des généralités recyclées.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Euro className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Tarifs excessifs</strong> : tu paies 500€, parfois 1000€, pour finir seul et bloqué.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 space-y-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <UserX className="w-10 h-10 text-brand-orange" />
            </div>
            <p className="text-white font-semibold">
              <strong>Tu es livré à toi-même</strong> : aucune analyse personnalisée, aucun plan d'action sur mesure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
