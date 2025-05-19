
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Package, Zap } from "lucide-react";

const FAQ = () => {
  const faqs = [{
    question: "Qu'est-ce que le dropshipping ?",
    answer: "C'est un modèle où tu vends en ligne sans stock : ton fournisseur expédie directement les commandes à tes clients.",
    icon: <Package className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment lancer une boutique en dropshipping ?",
    answer: "Choisis une niche, crée ta boutique (Shopify, WooCommerce…), trouve des fournisseurs, ajoute tes produits et commence à vendre.",
    icon: <Zap className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment trouver un fournisseur fiable ?",
    answer: "Utilise des plateformes réputées (AliExpress, CJ Dropshipping, 1688) et vérifie les avis, délais de livraison et qualité des produits.",
    icon: <Check className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Quel budget faut-il pour débuter ?",
    answer: "Tu peux commencer avec moins de 200 €, mais prévois un budget pour la boutique, les pubs, pour les outils pas de panique c'est inclus dans la formation.",
    icon: <Package className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment choisir des produits gagnants ?",
    answer: "Analyse les tendances, utilise des outils comme Dropship (disponible également dans la formation) et choisis des produits avec une forte demande et peu de concurrence.",
    icon: <Zap className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Dois-je créer une société pour faire du dropshipping ?",
    answer: "Ce n'est pas obligatoire pour commencer, mais recommandé dès les premières ventes pour être en règle.",
    icon: <Check className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment gérer la livraison et les retours ?",
    answer: "Annonce des délais réalistes, communique clairement, et propose une politique de retour transparente.",
    icon: <Package className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment attirer du trafic sur ma boutique ?",
    answer: "Utilise la publicité (Meta/TikTok Ads), le SEO, et les réseaux sociaux pour attirer des visiteurs qualifiés.",
    icon: <Zap className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Comment fixer mes prix et marges ?",
    answer: "Calcule tous tes coûts et vise une marge d'au moins 20-30 % pour rester rentable.",
    icon: <Check className="h-5 w-5 text-[#FF7E33]" />
  }, {
    question: "Quels outils utiliser pour automatiser mon business ?",
    answer: "Shopify, Oberlo, AutoDS, Klaviyo (email) et Zapier pour automatiser commandes, emails et marketing.",
    icon: <Package className="h-5 w-5 text-[#FF7E33]" />
  }];

  return (
    <div id="faq" className="section-uniform bg-gradient-to-b from-black/40 via-[#331200] to-black/80">
      <div className="container-uniform px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold py-6 md:py-8">
            Questions Fréquentes sur le <span className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent">Dropshipping Rentable en 2025</span>
          </h2>
          <p className="text-lg text-orange-200 max-w-2xl mx-auto">
            Réponses expertes aux interrogations les plus courantes avant de lancer votre business e-commerce sans stock.
          </p>
        </div>

        {/* Nouveau badge de confiance */}
        <div className="max-w-3xl mx-auto mb-10 bg-black/30 backdrop-blur-sm border border-[#FF7E33]/30 rounded-lg p-4 text-center">
          <p className="text-white text-lg">
            <span className="text-[#FF7E33] font-bold">98% des questions</span> que se posent nos étudiants avant de démarrer
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-[#FF7E33]/20 rounded-lg overflow-hidden bg-gradient-to-r from-black/80 to-[#331200]/80 backdrop-blur-sm hover:border-[#FF7E33]/40 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
              >
                <AccordionTrigger className="px-6 text-left font-medium text-lg py-4 text-white hover:text-[#FF7E33] flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-black/30 p-2 flex-shrink-0">
                      {faq.icon}
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-orange-200 px-6 pb-6">
                  <div className="py-2 px-4 border-l-2 border-[#FF7E33] bg-black/20 rounded-r-lg">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center pt-10 mt-6">
            <div className="mb-8 bg-black/30 backdrop-blur-sm border border-[#FF7E33]/30 rounded-lg p-4">
              <p className="text-white text-lg mb-2">
                <span className="text-[#FF7E33] font-bold">Une question spécifique ?</span>
              </p>
              <p className="text-orange-200">Notre équipe répond à toutes vos interrogations dans notre communauté privée</p>
            </div>
            
            <a 
              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 text-white px-8 py-5 shadow-[0_0_25px_rgba(255,126,51,0.4)] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              DÉMARREZ VOTRE AVENTURE MAINTENANT →
            </a>
            <p className="mt-4 text-orange-200">98% de nos étudiants réalisent leur première vente en moins de 30 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
