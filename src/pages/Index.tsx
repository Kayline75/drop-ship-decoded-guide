import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PartCard from "@/components/PartCard";
import ContentSection, { FeatureItem } from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Globe, Store, BarChart } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen">
      <NavBar />
      <Hero />

      

      <div id="parties" className="bg-brand-gray/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les <span className="gradient-text">10 parties</span> de notre formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour démarrer et faire évoluer votre activité de dropshipping
              étape par étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PartCard number={1} title="Comprendre le modèle" description="Les bases du dropshipping, la chaine logistique et le choix des fournisseurs." color="custom1" // Remplace "orange"
          />
            <PartCard number={2} title="Trouver sa niche" description="Comment identifier une niche rentable et analyser la concurrence." color="custom2" // Remplace "dark"
          />
            <PartCard number={3} title="Construire sa boutique" description="Choisir sa plateforme e-commerce et structurer son site pour convertir." color="custom3" // Remplace "gray"
          />
            <PartCard number={4} title="Travailler avec des fournisseurs" description="Trouver des fournisseurs fiables et communiquer efficacement avec eux." color="custom1" // Remplace "orange"
          />
            <PartCard number={5} title="Créer des offres irrésistibles" description="Rédiger des fiches produit qui convertissent et définir une stratégie de prix." color="custom2" // Remplace "dark"
          />
            <PartCard number={6} title="Marketing et acquisition" description="Lancer des publicités efficaces, utiliser l'IA et le marketing d'influence." color="custom3" // Remplace "gray"
          />
            <PartCard number={7} title="Gestion et suivi" description="Automatiser les commandes et gérer efficacement le suivi des livraisons." color="custom1" // Remplace "orange"
          />
            <PartCard number={8} title="Optimiser et faire grandir" description="Améliorer le taux de conversion et augmenter le panier moyen avec des upsells." color="custom2" // Remplace "dark"
          />
            <PartCard number={9} title="Légal et sécurité" description="Comprendre vos obligations légales et choisir où ouvrir votre société." color="custom3" // Remplace "gray"
          />
            <PartCard number={10} title="Aller plus loin" description="Lancer une seconde boutique et externaliser certaines missions pour scaler." color="custom1" // Remplace "orange"
          className="md:col-span-2 lg:col-span-1" />
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-brand-orange to-brand-dark text-md px-8 py-6">
              Commencer la formation gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div id="avantages" className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir notre <span className="gradient-text">formation</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre objectif est de vous fournir des connaissances concrètes et applicables 
              pour réussir dans le domaine du dropshipping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Information pratique
              </h3>
              <p className="text-gray-600">
                Des conseils concrets, applicables immédiatement, sans jargon inutile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-dark/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-brand-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Vision internationale
              </h3>
              <p className="text-gray-600">
                Comparaison des stratégies en France, en Suisse et aux Émirats arabes unis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gray/15 flex items-center justify-center">
                <Store className="h-8 w-8 text-brand-gray" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Focus Shopify
              </h3>
              <p className="text-gray-600">
                Maîtrisez la plateforme la plus adaptée au dropshipping et ses applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-orange/blue dark to-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre business en dropshipping?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez notre formation complète et commencez votre aventure entrepreneuriale dès aujourd'hui.
          </p>
          <Button className="bg-white text-brand-dark hover:bg-gray-100 text-md px-8 py-6">
            Démarrer gratuitement
          </Button>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Index;