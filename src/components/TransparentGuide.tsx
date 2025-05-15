
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransparentGuide = () => {
  return <div className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dropshipping : Le Guide <span className="gradient-text">Transparent</span> pour Démarrer Sans Se Faire Arnaquer
          </h2>
          <p className="text-lg text-[#7BE0FF] max-w-2xl mx-auto">
            Un guide honnête pour naviguer dans le monde du dropshipping sans tomber dans les pièges courants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Section 1: Comprendre le Dropshipping */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange">Comprendre le Dropshipping</h3>
            <h4 className="text-lg font-semibold mb-3">Définition et fonctionnement</h4>
            <p className="text-[#7BE0FF] mb-4">
              Le dropshipping est un modèle commercial dans lequel vous vendez des produits sans les stocker. Votre fournisseur expédie directement au client, vous permettant de démarrer avec un investissement minimal.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Avantages pour les débutants</h4>
            <p className="text-[#7BE0FF] mb-4">
              Ce modèle permet de commencer sans stock ni gros budget, offrant une flexibilité et une liberté idéales pour les auto-entrepreneurs et les débutants.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Les pièges courants à éviter</h4>
            <p className="text-[#7BE0FF]">
              Beaucoup de débutants tombent dans le piège des fournisseurs peu fiables, des délais de livraison trop longs ou des produits de mauvaise qualité. Une recherche approfondie est essentielle.
            </p>
          </div>

          {/* Section 2: Pourquoi Éviter les Formations à 1000€ */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange">Pourquoi Éviter les Formations à 1000€</h3>
            <h4 className="text-lg font-semibold mb-3">Témoignages de débutants déçus</h4>
            <p className="text-[#FF9F3F] mb-4">
              De nombreux témoignages révèlent des déceptions suite à l'achat de formations coûteuses qui n'apportent pas la valeur promise et laissent les apprenants démunis face aux défis réels.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Analyse des promesses irréalistes</h4>
            <p className="text-[#FF9F3F] mb-4">
              Certaines formations vendent du rêve avec des promesses de gains rapides et importants. La réalité est que le dropshipping demande du travail, de la persévérance et une stratégie bien pensée.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Alternatives gratuites et fiables</h4>
            <p className="text-[#FF9F3F]">
              Voici des ressources fiables et accessibles, comme mes ebooks et guides gratuits qui vous donnent les bases sans vous ruiner et sans fausses promesses.
            </p>
          </div>

          {/* Section 3: Des Ressources Accessibles */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-brand-orange">Des Ressources Accessibles</h3>
            <h4 className="text-lg font-semibold mb-3">Mes ebooks pratiques sur le dropshipping</h4>
            <p className="text-[#7D95F4] mb-4">
              J'ai conçu une série d'ebooks clairs et concrets qui vous guident pas à pas dans votre parcours de dropshipping, avec des conseils pratiques et des exemples réels.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Accès à une Skool dédiée</h4>
            <p className="text-[#7D95F4] mb-4">
              Grâce à notre communauté Skool Dropshipping, vous accédez à un espace d'échange et d'apprentissage où vous pouvez poser vos questions et bénéficier de l'expérience collective.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Avantages pour un apprentissage autonome</h4>
            <p className="text-[#7D95F4]">
              Vous apprenez à votre rythme, sans pression, avec des outils éprouvés et un support communautaire, tout en évitant les dépenses excessives pour des formations souvent décevantes.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-brand-orange to-brand-dark text-md px-8 py-6">
            <a href="https://dropshipping-guide.com/telecharger">
              Télécharger mon guide gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>;
};

export default TransparentGuide;
