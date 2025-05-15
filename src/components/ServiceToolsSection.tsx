
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceToolsSection = () => {
  const tools = [
    {
      name: "Minea",
      description: "Outil d'automatisation pour gérer vos commandes et suivi des colis",
      benefits: ["Gain de temps", "Automatisation complète", "Notifications clients"]
    }, 
    {
      name: "Dropship",
      description: "Trouvez des produits gagnants et des fournisseurs fiables",
      benefits: ["Base de données de produits", "Analyse de la concurrence", "Vérification des fournisseurs"]
    }, 
    {
      name: "Copify",
      description: "Créez des descriptions produits qui convertissent avec l'IA",
      benefits: ["Fiches produits optimisées", "Gain de temps en rédaction", "Textes orientés conversion"]
    }, 
    {
      name: "Thème Premium",
      description: "Thème Shopify à plus de 300€ inclus dans la formation",
      benefits: ["Design professionnel", "Optimisé pour les conversions", "Mises à jour incluses"]
    }
  ];

  return (
    <section id="outils" className="section-uniform bg-slate-900">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            <span className="gradient-text-harmonized">Tous les outils</span> dont vous avez besoin
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto mb-10">
            Notre formation inclut un accès exclusif aux meilleurs outils du marché pour assurer votre succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl font-bold text-brand-orange">{tool.name}</CardTitle>
                <CardDescription className="text-center text-[#7BE0FF]">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <ul className="space-y-3 flex-grow">
                  {tool.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-white">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-medium text-xl text-orange-300">Et de nombreux autres outils et ressources inclus !</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceToolsSection;
