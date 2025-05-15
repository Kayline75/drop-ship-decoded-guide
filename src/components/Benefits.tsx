
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Simplicité d'apprentissage",
      description: "Une formation structurée en modules progressifs, accessibles même pour les débutants sans expérience"
    },
    {
      title: "Soutien personnalisé",
      description: "Accès à notre communauté privée et support quotidien pour répondre à toutes vos questions"
    },
    {
      title: "Outils professionnels",
      description: "Accès aux outils premium pour l'analyse de marché, l'automatisation et la gestion de stock virtuel"
    },
    {
      title: "Méthode prouvée",
      description: "Une approche testée et validée par des centaines d'entrepreneurs qui génèrent des revenus stables"
    },
    {
      title: "Mises à jour régulières",
      description: "Formation constamment mise à jour pour s'adapter aux dernières tendances et algorithmes"
    },
    {
      title: "Autonomie financière",
      description: "Développez une source de revenus complémentaire ou principale selon vos objectifs"
    }
  ];

  return (
    <section className="section-uniform bg-[#1A1F2C]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Les <span className="gradient-text-harmonized">avantages</span> de notre formation
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto mb-10">
            Voici pourquoi notre approche du dropshipping est différente et efficace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg transition duration-300 h-full flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </span>
              </div>
              <div className="text-center flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-white mb-3 text-xl">{benefit.title}</h3>
                <p className="text-[#7BE0FF]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
