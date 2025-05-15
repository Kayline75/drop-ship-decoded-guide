
import { motion } from "framer-motion";

const PainPoints = () => {
  const painPoints = [
    {
      title: "Vous êtes perdu entre tous les avis contradictoires",
      description: "Entre les gourous du dropshipping qui promettent la lune et ceux qui disent que c'est impossible, difficile de savoir à qui faire confiance."
    }, 
    {
      title: "Vous avez déjà essayé sans succès",
      description: "Vous avez peut-être tenté le dropshipping mais sans ventes, avec des problèmes de livraison ou des clients mécontents."
    }, 
    {
      title: "Vous craignez de perdre votre argent",
      description: "L'investissement dans la publicité fait peur et vous ne savez pas comment optimiser vos dépenses marketing."
    }, 
    {
      title: "Vous n'avez pas trouvé le bon produit",
      description: "La recherche de produits gagnants vous semble comme chercher une aiguille dans une botte de foin."
    }, 
    {
      title: "Vous doutez de la fiabilité des fournisseurs",
      description: "Les délais de livraison trop longs et la qualité des produits vous inquiètent."
    }
  ];

  return (
    <section id="problemes" className="section-uniform bg-slate-900">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Les <span className="gradient-text-harmonized">obstacles</span> que vous rencontrez
          </h2>
          <p className="text-lg text-[#7D95F4] max-w-2xl mx-auto mb-10">
            Nous comprenons parfaitement les défis auxquels vous êtes confrontés dans votre parcours de dropshipping.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] h-full flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-bold text-brand-orange mb-3 text-center">{point.title}</h3>
              <p className="text-[#7D95F4] text-center">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
