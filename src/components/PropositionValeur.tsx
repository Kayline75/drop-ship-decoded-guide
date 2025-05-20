
import { Check, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PropositionValeur = () => {
  // Optimize external link handling
  const handleExternalLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Pre-load link in background
    const href = (event.currentTarget as HTMLAnchorElement).href;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  const steps = [
    {
      id: "selection",
      title: "Sélection Produit",
      content: "Apprenez à trouver des produits gagnants avec notre méthode validée par plus de 500 entrepreneurs.",
      features: [
        "Technique de recherche produit rentables",
        "Analyse de tendances et marchés",
        "Validation par données concrètes"
      ]
    },
    {
      id: "boutique",
      title: "Création Boutique",
      content: "Créez une boutique professionnelle optimisée pour les conversions sans connaissances techniques.",
      features: [
        "Templates haute conversion",
        "Optimisation mobile avancée",
        "Installation simplifiée en moins d'1 heure"
      ]
    },
    {
      id: "marketing",
      title: "Marketing Efficace",
      content: "Maîtrisez les campagnes publicitaires qui génèrent des ventes dès les premiers jours.",
      features: [
        "Création de publicités qui convertissent",
        "Ciblage précis des clients potentiels",
        "Optimisation pour maximiser le ROI"
      ]
    },
    {
      id: "logistique",
      title: "Logistique Simple",
      content: "Gérez facilement les commandes, livraisons et service client pour fidéliser vos acheteurs.",
      features: [
        "Automatisation des commandes",
        "Suivi optimisé des livraisons",
        "Gestion professionnelle du SAV"
      ]
    }
  ];

  return (
    <section id="cours" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Notre Méthode <span className="text-[#FF7E33]">Étape par Étape</span>
        </h2>
        
        <p className="text-lg text-center max-w-2xl mx-auto mb-10 text-[#FF9F3F]">
          Une approche structurée et prouvée pour créer votre business e-commerce rentable en 2025
        </p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="selection" className="w-full">
            <TabsList className="w-full mb-6 flex flex-wrap justify-center">
              {steps.map(step => (
                <TabsTrigger 
                  key={step.id} 
                  value={step.id}
                  className="data-[state=active]:bg-[#FF7E33] data-[state=active]:text-white"
                >
                  {step.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map(step => (
              <TabsContent key={step.id} value={step.id}>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-[#FF9F3F] mb-6">{step.content}</p>
                  
                  <ul className="space-y-3">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF7E33] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 transition-all relative z-10 text-white px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto max-w-[320px] mx-auto shadow-[0_0_20px_rgba(255,87,51,0.4)]"
            target="_blank"
            rel="preconnect"
            onClick={handleExternalLink}
          >
            <span className="hidden sm:inline">ACCÉDER À LA FORMATION</span>
            <span className="sm:hidden">COMMENCER</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-[#FF9F3F] text-sm">Sans engagement - 97€/mois</p>
        </div>
      </div>
    </section>
  );
};

export default PropositionValeur;
