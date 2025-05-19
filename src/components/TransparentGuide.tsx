
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const TransparentGuide = () => {
  const [activeTab, setActiveTab] = useState("selection");
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Tab content data
  const tabsData = [
    {
      id: "selection",
      title: "Sélection Produit",
      description: "Les Fondamentaux du Dropshipping Profitable",
      content: [
        {
          title: "Modèle e-commerce sans stock optimisé",
          description: "Le dropshipping évolué permet de vendre des produits sans les stocker. Votre fournisseur expédie directement au client, vous offrant liberté géographique et investissement minimal."
        },
        {
          title: "Avantages stratégiques pour entrepreneurs",
          description: "Ce modèle business offre flexibilité financière, évolutivité rapide et liberté totale de localisation - idéal pour les entrepreneurs cherchant l'indépendance."
        },
        {
          title: "Erreurs critiques à éviter absolument",
          description: "La majorité des échecs résultent de fournisseurs non fiables, délais logistiques mal gérés ou produits inadaptés au marché cible. Notre méthode élimine ces risques."
        }
      ]
    },
    {
      id: "creation",
      title: "Création Boutique",
      description: "Pourquoi les Formations Coûteuses Échouent Systématiquement",
      content: [
        {
          title: "Témoignages d'entrepreneurs désillusionnés",
          description: "Les formations premium à prix excessif laissent souvent les apprenants sans accompagnement face aux défis réels du marché digital concurrentiel."
        },
        {
          title: "Déconstruction des promesses marketing trompeuses",
          description: "Nous démystifions les promesses de gains rapides et révélons la réalité: le dropshipping exige stratégie, persévérance et méthodologie rigoureuse pour réussir."
        },
        {
          title: "Ressources fiables et accessibles garanties",
          description: "Notre approche combine ebooks stratégiques gratuits et formation structurée pour vous offrir un parcours d'apprentissage complet sans marketing manipulateur."
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing Efficace",
      description: "Ressources Exclusives pour Réussir en 2025",
      content: [
        {
          title: "Guides stratégiques dropshipping optimisés",
          description: "Notre collection de guides pratiques vous accompagne pas à pas avec des études de cas réelles, des exemples concrets et des stratégies immédiatement applicables."
        },
        {
          title: "Communauté d'entrepreneurs Skool intégrée",
          description: "Rejoignez notre plateforme collaborative où des centaines d'entrepreneurs partagent leurs expériences, stratégies et solutions aux défis quotidiens du e-commerce."
        },
        {
          title: "Système d'apprentissage autonome optimisé",
          description: "Notre méthodologie flexible vous permet d'avancer à votre rythme avec des supports variés (vidéos, PDF, études de cas) adaptés à votre style d'apprentissage personnel."
        }
      ]
    },
    {
      id: "logistique",
      title: "Logistique Simple",
      description: "Automatisation et Gestion des Livraisons",
      content: [
        {
          title: "Automatisation des commandes",
          description: "Simplifiez votre flux de travail en automatisant le processus de commande du début à la fin, réduisant ainsi les erreurs manuelles et libérant votre temps."
        },
        {
          title: "Suivi optimisé des livraisons",
          description: "Accédez à des outils de suivi avancés permettant à vos clients de suivre leurs colis en temps réel, améliorant ainsi leur expérience d'achat."
        },
        {
          title: "Gestion professionnelle du SAV",
          description: "Mettez en place un système de service après-vente efficace qui fidélise vos acheteurs et transforme les problèmes potentiels en opportunités de satisfaction client."
        }
      ]
    }
  ];

  return (
    <section id="guide-expert" className="section-uniform bg-[#121212]">
      <div className="container-uniform">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Guide Expert du Dropshipping Rentable 2025 : <span className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent">
              Évitez les Arnaques et Maximisez vos Profits
            </span>
          </h2>
          <p className="text-lg text-[#FF9F3F] max-w-2xl mx-auto mb-6">
            Les stratégies éprouvées pour transformer votre passion e-commerce en business florissant sans tomber dans les pièges courants.
          </p>
        </div>

        <div className="mb-12">
          <Tabs 
            defaultValue="selection" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Custom styled tabs list */}
            <div className={`w-full ${isMobile ? 'bg-[#331200]' : 'bg-[#331200]/80'} rounded-lg p-2 mb-6`}>
              <TabsList className={`w-full grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4'} bg-transparent`}>
                {tabsData.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`
                      ${activeTab === tab.id 
                        ? 'bg-[#FF7E33] text-white' 
                        : 'bg-[#22110A] text-[#FF9F3F]/70 hover:bg-[#22110A]/70'
                      }
                      rounded-md px-4 py-3 text-base transition-all duration-300 font-medium
                      ${isMobile ? 'my-1' : ''}
                    `}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab contents with animations */}
            {tabsData.map((tab) => (
              <TabsContent 
                key={tab.id}
                value={tab.id}
                className="mt-0 outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Card className="border-none bg-transparent shadow-none">
                    <CardContent className="p-0">
                      <div className="p-6 bg-[#22110A] rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-[#FF7E33] text-center">
                          {tab.description}
                        </h3>
                        
                        <div className="space-y-6">
                          {tab.content.map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3">
                              <div className="min-w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                <p className="text-[#FF9F3F] mt-1">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Call to action */}
                        {activeTab === "logistique" && (
                          <div className="mt-8 flex justify-center">
                            <a 
                              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                              className="inline-flex items-center justify-center gap-2 rounded-md text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] text-white px-6 py-4 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,87,51,0.4)]"
                            >
                              <span className="hidden md:inline">ACCÉDER À LA FORMATION →</span>
                              <span className="md:hidden">COMMENCER →</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TransparentGuide;
