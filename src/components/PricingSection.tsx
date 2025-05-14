import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essentiels",
      price: "197",
      priceUnit: "une seule fois",
      description: "Pour démarrer rapidement avec les bases du dropshipping",
      features: [
        "Accès aux 5 premiers modules",
        "Support par email",
        "Mises à jour gratuites pendant 6 mois",
        "1 thème Shopify basique",
        "Accès à la communauté privée"
      ],
      recommended: false,
      buttonText: "Commencer maintenant"
    },
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
      buttonText: "Obtenir la formation complète"
    },
    {
      name: "VIP",
      price: "997",
      priceUnit: "une seule fois",
      description: "Pour ceux qui veulent des résultats accélérés",
      features: [
        "Tout ce qui est inclus dans Premium",
        "Mentorat personnel hebdomadaire pendant 3 mois",
        "Audit complet de votre boutique",
        "Aide au lancement de vos premières campagnes",
        "Accès à notre réseau de fournisseurs premium",
        "Analyse de vos concurrents par nos experts",
        "Stratégie marketing personnalisée"
      ],
      recommended: false,
      buttonText: "Devenir VIP"
    }
  ];

  return (
    <div id="tarifs" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un <span className="gradient-text">investissement</span> dans votre avenir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos ambitions et à votre budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                plan.recommended 
                  ? 'border-4 border-brand-orange transform md:-translate-y-4 shadow-xl' 
                  : 'border border-gray-200 hover:shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="bg-brand-orange text-white text-center py-2 font-bold">
                  RECOMMANDÉ
                </div>
              )}
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}€</span>
                  <span className="text-black"> / {plan.priceUnit}</span>
                </div>
                <p className="text-black mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-brand-orange to-brand-dark text-white' 
                      : 'bg-white text-brand-dark border border-brand-dark hover:bg-gray-50'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">Des questions? Contactez-nous à <a href="mailto:contact@dropshipping-formation.com" className="text-brand-orange hover:underline">contact@dropshipping-formation.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
