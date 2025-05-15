import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const ServiceToolsSection = () => {
  const tools = [{
    name: "Minea",
    description: "Outil d'automatisation pour gérer vos commandes et suivi des colis",
    benefits: ["Gain de temps", "Automatisation complète", "Notifications clients"]
  }, {
    name: "Dropship",
    description: "Trouvez des produits gagnants et des fournisseurs fiables",
    benefits: ["Base de données de produits", "Analyse de la concurrence", "Vérification des fournisseurs"]
  }, {
    name: "Copify",
    description: "Créez des descriptions produits qui convertissent avec l'IA",
    benefits: ["Fiches produits optimisées", "Gain de temps en rédaction", "Textes orientés conversion"]
  }, {
    name: "Thème Premium",
    description: "Thème Shopify à plus de 300€ inclus dans la formation",
    benefits: ["Design professionnel", "Optimisé pour les conversions", "Mises à jour incluses"]
  }];
  return <div id="outils" className="py-16 bg-white md:py-0">
      <div className="container mx-auto px-4 bg-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tous les outils</span> dont vous avez besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre formation inclut un accès exclusif aux meilleurs outils du marché pour assurer votre succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-brand-dark">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tool.benefits.map((benefit, i) => <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span>{benefit}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 text-center">
          <p className="font-medium mb-6 text-brand-dark px-0 text-xl">Et de nombreux autres outils et ressources inclus !</p>
        </div>
      </div>
    </div>;
};
export default ServiceToolsSection;