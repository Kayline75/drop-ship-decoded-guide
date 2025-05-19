
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [{
    question: "Qu'est-ce que le dropshipping ?",
    answer: "C'est un modèle où tu vends en ligne sans stock : ton fournisseur expédie directement les commandes à tes clients."
  }, {
    question: "Comment lancer une boutique en dropshipping ?",
    answer: "Choisis une niche, crée ta boutique (Shopify, WooCommerce…), trouve des fournisseurs, ajoute tes produits et commence à vendre."
  }, {
    question: "Comment trouver un fournisseur fiable ?",
    answer: "Utilise des plateformes réputées (AliExpress, CJ Dropshipping, 1688) et vérifie les avis, délais de livraison et qualité des produits."
  }, {
    question: "Quel budget faut-il pour débuter ?",
    answer: "Tu peux commencer avec moins de 200 €, mais prévois un budget pour la boutique, les pubs, pour les outils pas de panique c'est inclus dans la formation."
  }, {
    question: "Comment choisir des produits gagnants ?",
    answer: "Analyse les tendances, utilise des outils comme Dropship (disponible également dans la formation) et choisis des produits avec une forte demande et peu de concurrence."
  }, {
    question: "Dois-je créer une société pour faire du dropshipping ?",
    answer: "Ce n'est pas obligatoire pour commencer, mais recommandé dès les premières ventes pour être en règle."
  }, {
    question: "Comment gérer la livraison et les retours ?",
    answer: "Annonce des délais réalistes, communique clairement, et propose une politique de retour transparente."
  }, {
    question: "Comment attirer du trafic sur ma boutique ?",
    answer: "Utilise la publicité (Meta/TikTok Ads), le SEO, et les réseaux sociaux pour attirer des visiteurs qualifiés."
  }, {
    question: "Comment fixer mes prix et marges ?",
    answer: "Calcule tous tes coûts et vise une marge d'au moins 20-30 % pour rester rentable."
  }, {
    question: "Quels outils utiliser pour automatiser mon business ?",
    answer: "Shopify, Oberlo, AutoDS, Klaviyo (email) et Zapier pour automatiser commandes, emails et marketing."
  }];

  return (
    <div id="faq" className="section-uniform bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container-uniform px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold py-6 md:py-8">
            Questions Fréquentes sur le <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Dropshipping Rentable en 2025</span>
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            Réponses expertes aux interrogations les plus courantes avant de lancer votre business e-commerce sans stock.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-white/10 rounded-lg overflow-hidden bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 text-left font-medium text-lg py-4 text-white hover:text-pink-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cyan-200 px-6 pb-6">
                  <div className="py-2 px-4 border-l-2 border-pink-500">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center pt-10 mt-6">
            <a 
              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-5 shadow-lg shadow-purple-700/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              DÉMARREZ VOTRE AVENTURE MAINTENANT →
            </a>
            <p className="mt-4 text-cyan-300">98% de nos étudiants réalisent leur première vente en moins de 30 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
