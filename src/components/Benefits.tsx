
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  const benefits = [
    {
      title: "Liberté Financière",
      description: "Générez des revenus automatisés qui vous permettent de vivre selon vos termes.",
      color: "orange"
    },
    {
      title: "Indépendance Géographique",
      description: "Travaillez de n'importe où dans le monde, avec seulement un ordinateur et une connexion internet.",
      color: "dark"
    },
    {
      title: "Risque Minimal",
      description: "Démarrez sans stock ni investissement initial important. Testez des produits sans risque financier majeur.",
      color: "gray"
    },
    {
      title: "Évolutivité Rapide",
      description: "Passez de 0 à 1000€, puis à 5000€ et plus par mois en suivant notre méthode éprouvée.",
      color: "orange"
    },
    {
      title: "Business Automatisé",
      description: "Mettez en place des systèmes qui fonctionnent pendant que vous dormez. Ventes 24h/24, 7j/7.",
      color: "dark"
    },
    {
      title: "Compétences Transférables",
      description: "Apprenez le marketing digital, la publicité payante et l'e-commerce - des compétences valorisées dans tous les secteurs.",
      color: "gray"
    }
  ];

  return (
    <div id="benefices" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des <span className="gradient-text">bénéfices concrets</span> pour votre vie
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto">
            Le dropshipping bien maîtrisé peut transformer radicalement votre quotidien et votre avenir financier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-6 rounded-lg border border-brand-${benefit.color}/20 hover:border-brand-${benefit.color}/50 transition-all duration-300 bg-white hover:shadow-xl`}>
              <Badge className={`mb-4 bg-brand-${benefit.color} hover:bg-brand-${benefit.color}/90`}>
                Bénéfice #{index + 1}
              </Badge>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{benefit.title}</h3>
              <p className="text-[#7BE0FF]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
