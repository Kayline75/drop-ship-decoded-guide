import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const ServiceToolsSection = () => {
  const tools = [{
    name: "Minea",
    description: "Automatisation complète de la gestion des commandes et du suivi colis",
    benefits: ["Gain de temps quotidien", "Notifications clients automatisées", "Réduction des litiges clients"]
  }, {
    name: "Dropship",
    description: "Système d'identification des produits à fort potentiel commercial",
    benefits: ["Base de données exclusive", "Analyse concurrentielle avancée", "Vérification fiabilité fournisseurs"]
  }, {
    name: "Copify",
    description: "Générateur IA de fiches produits optimisées pour la conversion",
    benefits: ["Descriptions persuasives", "Optimisation SEO intégrée", "Personnalisation multilingue"]
  }, {
    name: "Thème Premium",
    description: "Template Shopify professionnel valorisé à plus de 300€",
    benefits: ["Design optimisé conversion", "Vitesse de chargement optimale", "Mises à jour gratuites"]
  }];
  return <section id="outils" className="section-uniform bg-[#121212] py-0">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            <span className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent">Outils Professionnels</span> pour Automatiser Votre Business
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-[#FF5733]/20 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl font-bold text-[#FF7E33]">{tool.name}</CardTitle>
                <CardDescription className="text-center text-[#FF9F3F]">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <ul className="space-y-3 flex-grow">
                  {tool.benefits.map((benefit, i) => <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF7E33] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-white">{benefit}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 text-center">
          <p className="font-medium text-xl text-[#FF7E33]">Et ressources exclusifs inclus dans votre formation dont un théme à + de 300 euros ! un fournisseur et bien d autres choses qui vont arriver !



        </p>
        </div>
      </div>
    </section>;
};
export default ServiceToolsSection;