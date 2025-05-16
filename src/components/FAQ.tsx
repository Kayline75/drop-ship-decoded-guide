
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [{
    question: "Le Dropshipping Est-Il Toujours Rentable en 2025?",
    answer: "Absolument! Le modèle s'est professionnalisé, éliminant les amateurs. C'est le moment idéal pour démarrer avec notre stratégie éprouvée qui s'adapte aux nouvelles réalités du marché et aux exigences des consommateurs modernes."
  }, {
    question: "Quel Budget Initial Est Nécessaire Pour Démarrer?",
    answer: "L'avantage principal du dropshipping reste son faible investissement initial. Avec environ 500€ (couvrant votre boutique, quelques outils essentiels et vos premiers tests publicitaires), vous pouvez lancer une activité viable. Notre formation vous enseigne comment optimiser chaque euro investi."
  }, {
    question: "Comment Résoudre le Problème des Délais de Livraison?",
    answer: "Nous avons développé un système de partenariats avec des fournisseurs garantissant des expéditions en 7-15 jours maximum, et même des options d'entrepôts européens pour des livraisons en 3-5 jours. Notre module sur la gestion logistique vous montre comment communiquer transparemment avec vos clients."
  }, {
    question: "La Saturation du Marché Est-Elle un Obstacle Réel?",
    answer: "Tout marché profitable attire de la concurrence. Notre formation vous révèle des méthodes d'analyse de niches sous-exploitées et des stratégies de différenciation permettant de prospérer même dans des marchés compétitifs grâce à un positionnement unique."
  }, {
    question: "Quel Délai Avant de Générer des Revenus Significatifs?",
    answer: "Les résultats dépendent de votre implication et de l'exécution de la méthode. Certains élèves réalisent leurs premières ventes en 7-14 jours, mais il est réaliste de prévoir 1-2 mois avant d'atteindre un flux régulier de ventes. Notre plan d'action sur 60 jours optimise votre progression."
  }, {
    question: "Peut-On Cibler des Marchés Internationaux Spécifiques?",
    answer: "C'est précisément un avantage majeur de notre approche! Vous pouvez cibler les marchés les plus rentables sans limitation géographique. Nos étudiants réussissent en vendant en France, Europe, États-Unis, et même sur des marchés émergents comme l'Amérique Latine ou certains pays d'Asie."
  }, {
    question: "Comment Gérer Efficacement le Service Après-Vente?",
    answer: "Notre module dédié au service client vous fournit des systèmes d'automatisation, des templates de communication et des procédures claires pour gérer les retours, remboursements et questions. Ces processus optimisés réduisent considérablement votre charge de travail quotidienne."
  }, {
    question: "Quelles Garanties de Réussite Offrez-Vous?",
    answer: "Nous proposons une garantie satisfait ou remboursé de 30 jours, vous permettant d'évaluer la formation sans risque. La réussite dépend ensuite de votre application des méthodes enseignées. Notre taux de satisfaction de 97% démontre l'efficacité de notre système quand il est correctement suivi."
  }];

  return (
    <div id="faq" className="section-uniform bg-gray-900">
      <div className="container-uniform px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold py-6 md:py-8">
            Questions Fréquentes sur le <span className="gradient-text-harmonized">Dropshipping Rentable en 2025</span>
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto">
            Réponses expertes aux interrogations les plus courantes avant de lancer votre business e-commerce sans stock.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 text-left font-medium text-lg py-4 text-white hover:text-[#7BE0FF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7BE0FF] px-6 pb-6 text-center">
                  <div className="py-2 px-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center pt-8">
            <p className="text-white/70 italic mb-4">
              D'autres questions? Notre équipe d'experts est disponible pour vous accompagner personnellement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
