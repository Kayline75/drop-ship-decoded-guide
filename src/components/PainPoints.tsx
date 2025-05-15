import { motion } from "framer-motion";
const PainPoints = () => {
  const painPoints = [{
    title: "Vous êtes perdu entre tous les avis contradictoires",
    description: "Entre les gourous du dropshipping qui promettent la lune et ceux qui disent que c'est impossible, difficile de savoir à qui faire confiance."
  }, {
    title: "Vous avez déjà essayé sans succès",
    description: "Vous avez peut-être tenté le dropshipping mais sans ventes, avec des problèmes de livraison ou des clients mécontents."
  }, {
    title: "Vous craignez de perdre votre argent",
    description: "L'investissement dans la publicité fait peur et vous ne savez pas comment optimiser vos dépenses marketing."
  }, {
    title: "Vous n'avez pas trouvé le bon produit",
    description: "La recherche de produits gagnants vous semble comme chercher une aiguille dans une botte de foin."
  }, {
    title: "Vous doutez de la fiabilité des fournisseurs",
    description: "Les délais de livraison trop longs et la qualité des produits vous inquiètent."
  }];
  return <div id="problemes" className="py-16 bg-gradient-to-b from-gray-100 to blue dark bg-slate-900 md:py-0">
      <div className="container mx-auto bg-slate-900 px-0 py-[20px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Les <span className="gradient-text">obstacles</span> que vous rencontrez
          </h2>
          <p className="text-lg text-[#7D95F4] max-w-2xl mx-auto">
            Nous comprenons parfaitement les défis auxquels vous êtes confrontés dans votre parcours de dropshipping.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {painPoints.map((point, index) => <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-brand-dark mb-2">{point.title}</h3>
              <p className="text-[#7D95F4]">{point.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default PainPoints;