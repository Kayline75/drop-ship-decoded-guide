
import { Check, ArrowRight } from "lucide-react";

const TransparentGuide = () => {
  return (
    <section className="section-uniform bg-slate-900">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Dropshipping : Le Guide <span className="gradient-text-harmonized">Transparent</span> pour Démarrer Sans Se Faire Arnaquer
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto mb-10">
            Un guide honnête pour naviguer dans le monde du dropshipping sans tomber dans les pièges courants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Section 1: Comprendre le Dropshipping */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange text-center">Comprendre le Dropshipping</h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Définition et fonctionnement</h4>
                <p className="text-[#7BE0FF] text-center">
                  Le dropshipping est un modèle commercial dans lequel vous vendez des produits sans les stocker. Votre fournisseur expédie directement au client, vous permettant de démarrer avec un investissement minimal.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Avantages pour les débutants</h4>
                <p className="text-[#7BE0FF] text-center">
                  Ce modèle permet de commencer sans stock ni gros budget, offrant une flexibilité et une liberté idéales pour les auto-entrepreneurs et les débutants.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Les pièges courants à éviter</h4>
                <p className="text-[#7BE0FF] text-center">
                  Beaucoup de débutants tombent dans le piège des fournisseurs peu fiables, des délais de livraison trop longs ou des produits de mauvaise qualité. Une recherche approfondie est essentielle.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Pourquoi Éviter les Formations à 1000€ */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange text-center">Pourquoi Éviter les Formations à 1000€</h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Témoignages de débutants déçus</h4>
                <p className="text-[#FF9F3F] text-center">
                  De nombreux témoignages révèlent des déceptions suite à l'achat de formations coûteuses qui n'apportent pas la valeur promise et laissent les apprenants démunis face aux défis réels.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Analyse des promesses irréalistes</h4>
                <p className="text-[#FF9F3F] text-center">
                  Certaines formations vendent du rêve avec des promesses de gains rapides et importants. La réalité est que le dropshipping demande du travail, de la persévérance et une stratégie bien pensée.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Alternatives gratuites et fiables</h4>
                <p className="text-[#FF9F3F] text-center">
                  Voici des ressources fiables et accessibles, comme mes ebooks et guides gratuits qui vous donnent les bases sans vous ruiner et sans fausses promesses.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Des Ressources Accessibles */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange text-center">Des Ressources Accessibles</h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Mes ebooks pratiques sur le dropshipping</h4>
                <p className="text-[#7D95F4] text-center">
                  J'ai conçu une série d'ebooks clairs et concrets qui vous guident pas à pas dans votre parcours de dropshipping, avec des conseils pratiques et des exemples réels.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Accès à une Skool dédiée</h4>
                <p className="text-[#7D95F4] text-center">
                  Grâce à notre communauté Skool Dropshipping, vous accédez à un espace d'échange et d'apprentissage où vous pouvez poser vos questions et bénéficier de l'expérience collective.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center text-white">Avantages pour un apprentissage autonome</h4>
                <p className="text-[#7D95F4] text-center">
                  Vous apprenez à votre rythme, sans pression, avec des outils éprouvés et un support communautaire, tout en évitant les dépenses excessives pour des formations souvent décevantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-brand-orange to-brand-dark text-white px-8 py-6 hover:shadow-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon guide gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransparentGuide;
