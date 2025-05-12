import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PartCard from "@/components/PartCard";
import ContentSection, { FeatureItem } from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Globe, Store, BarChart } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";

const Index = () => {
  return <div className="min-h-screen">
      <NavBar />
      <Hero />

      <div id="cours" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprendre le <span className="gradient-text">Dropshipping</span> Facilement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre formation complète en 10 parties vous guidera pas à pas vers la réussite
              de votre projet de dropshipping.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ContentSection title="Qu'est-ce que la chaîne logistique en dropshipping?" subtitle="Un modèle commercial où vous ne gérez aucun stock." content={<>
                  <p className="text-gray-700 mb-6">
                    Le dropshipping, c'est un modèle où tu ne stockes pas les produits chez toi. 
                    En gros, tu ouvres une boutique en ligne, un client passe commande chez toi, et c'est ton 
                    fournisseur qui envoie directement le produit au client.
                  </p>
                  <p className="text-gray-700 mb-6">
                    <strong className="">Voici le schéma :</strong><br />
                    Client → Ta boutique → Fournisseur → Livraison directe au client.
                  </p>
                  <p className="text-gray-700">
                    Tu gagnes de l'argent sur la différence entre le prix d'achat (chez le fournisseur) 
                    et le prix de vente (sur ta boutique). Pas de stock, pas d'emballage à gérer toi-même.
                  </p>
                </>} imageUrl="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" gradient={true} />

            <div className="h-24"></div>

            <ContentSection title="Pourquoi le choix du fournisseur est crucial?" subtitle="Votre fournisseur représente la qualité de votre service." content={<>
                  <p className="text-gray-700 mb-6">
                    Ton fournisseur, c'est la base. S'il envoie en retard, mal emballe, ou propose des produits 
                    de mauvaise qualité, c'est toi que le client va accuser.
                  </p>
                  <div className="space-y-3 mb-6">
                    <FeatureItem text="Fiable et réactif" />
                    <FeatureItem text="Avec de bons avis" />
                    <FeatureItem text="Qui respecte les délais" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Un mauvais fournisseur = des litiges, des remboursements, et une mauvaise réputation.
                  </p>
                </>} reversed={true} imageUrl="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" gradient={true} />

            <div className="h-24"></div>

            <ContentSection title="Dropshipping local ou international: que choisir?" subtitle="Deux approches avec leurs avantages et inconvénients." content={<>
                  <div className="bg-brand-gray/10 p-5 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-3">Local (ex: fournisseurs français ou européens)</h3>
                    <div className="space-y-2">
                      <FeatureItem text="Livraison rapide" />
                      <FeatureItem text="Meilleure communication" />
                      <p className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="w-3 h-0.5 bg-white"></span>
                        </span>
                        <span>Prix plus élevés</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-gray/10 p-5 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-3">International (souvent Chine via 1688, AliExpress, etc.)</h3>
                    <div className="space-y-2">
                      <FeatureItem text="Prix bas" />
                      <FeatureItem text="Large choix de produits" />
                      <p className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="w-3 h-0.5 bg-white"></span>
                        </span>
                        <span>Délais plus longs</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="w-3 h-0.5 bg-white"></span>
                        </span>
                        <span>Risque de mauvaise qualité si tu ne testes pas</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-orange-300 font-medium text-center">
                    👉 Le mieux ? Tester les deux selon ta niche, et comparer.
                  </p>
                </>} imageUrl="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" gradient={true} />
          </div>
        </div>
      </div>

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

      <div id="avantages" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gray/10 via-blue-900/70 to-background z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Pourquoi choisir notre <span className="gradient-text">formation</span>?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Notre objectif est de vous fournir des connaissances concrètes et applicables 
              pour réussir dans le domaine du dropshipping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Information pratique
              </h3>
              <p className="text-white/80">
                Des conseils concrets, applicables immédiatement, sans jargon inutile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-dark/20 flex items-center justify-center">
                <Globe className="h-8 w-8 text-brand-medium" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Vision internationale
              </h3>
              <p className="text-white/80">
                Comparaison des stratégies en France, en Suisse et aux Émirats arabes unis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gray/25 flex items-center justify-center">
                <Store className="h-8 w-8 text-brand-gray" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Focus Shopify
              </h3>
              <p className="text-white/80">
                Maîtrisez la plateforme la plus adaptée au dropshipping et ses applications.
              </p>
            </div>
          </div>
        </div>
        
        {/* Add subtle animated gradient blobs for depth */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-orange/5 rounded-full filter blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-medium/5 rounded-full filter blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-background z-0"></div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Prêt à lancer votre business en dropshipping?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Rejoignez notre formation complète et commencez votre aventure entrepreneuriale dès aujourd'hui.
            </p>
            <Button className="bg-white text-brand-dark hover:bg-gray-100 text-md px-8 py-6">
              Démarrer gratuitement
            </Button>
          </div>
        </div>
        
        {/* Add subtle gradient blobs for depth */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-brand-medium/10 rounded-full filter blur-[100px] animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Footer />
    </div>;
};
export default Index;
