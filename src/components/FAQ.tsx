
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Est-ce que le dropshipping fonctionne encore en 2025?",
      answer: "Absolument! Le modèle a évolué et s'est professionnalisé, ce qui a éliminé les amateurs. C'est maintenant un excellent moment pour démarrer avec les bonnes stratégies et une approche professionnelle que nous enseignons."
    },
    {
      question: "Ai-je besoin d'un gros capital pour commencer?",
      answer: "Non, c'est justement l'avantage du dropshipping. Vous pouvez commencer avec un budget modeste (environ 500€ pour couvrir votre boutique, quelques outils et vos premiers tests publicitaires). Nous vous montrons comment optimiser chaque euro investi."
    },
    {
      question: "Les délais de livraison ne sont-ils pas problématiques?",
      answer: "C'était un problème dans le passé, mais nous vous montrons comment travailler avec des fournisseurs qui expédient en 7-15 jours maximum, ou même comment utiliser des entrepôts européens pour des livraisons en 3-5 jours. La transparence avec vos clients sur les délais est également enseignée."
    },
    {
      question: "N'y a-t-il pas trop de concurrence aujourd'hui?",
      answer: "Il y a de la concurrence dans tous les business profitables. Notre formation vous montre précisément comment trouver des niches moins saturées et comment vous démarquer même dans des marchés compétitifs grâce à des stratégies de différenciation."
    },
    {
      question: "Combien de temps avant de voir des résultats?",
      answer: "Cela dépend de votre implication et de votre exécution. Certains élèves réalisent leur première vente dans les 7-14 jours, mais il est plus réaliste de viser 1-2 mois avant d'avoir un flux régulier de ventes. La formation contient un plan d'action sur 60 jours pour maximiser vos chances."
    },
    {
      question: "Est-ce que ça marche dans tous les pays?",
      answer: "Oui, et c'est justement un des avantages majeurs! Vous pouvez cibler les pays que vous souhaitez. Nous avons des étudiants qui réussissent en vendant en France, en Europe, aux États-Unis, et même dans des marchés moins évidents comme l'Amérique du Sud ou l'Asie."
    },
    {
      question: "Comment gérer les retours et les remboursements?",
      answer: "Nous avons un module entier dédié à ce sujet. Vous apprendrez à mettre en place des politiques claires, à gérer les attentes des clients, et à automatiser une grande partie du processus de service client pour minimiser les problèmes."
    },
    {
      question: "Quelle est la garantie que ça marchera pour moi?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours, ce qui vous permet de tester la formation sans risque. Cependant, la réussite dépend de votre mise en application des connaissances acquises. Nous fournissons tous les outils et connaissances, mais c'est à vous de les mettre en œuvre."
    }
  ];

  return (
    <div id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de vous lancer dans l'aventure du dropshipping.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 p-8 bg-brand-orange/10 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Vous avez d'autres questions?</h3>
          <p className="mb-6">Notre équipe se fera un plaisir d'y répondre personnellement</p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
