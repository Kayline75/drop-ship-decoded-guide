
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import SEOHead from '@/components/SEOHead';

const DropshippingGuide = () => {
  useEffect(() => {
    // Scrolls to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    toast.success("Redirection vers la formation en cours", {
      description: "Vous allez être redirigé vers notre formation complète en dropshipping",
    });
  };
  
  return (
    <>
      <SEOHead 
        title="Qu'est-ce que le dropshipping et comment démarrer sans argent ? (Guide 2025)"
        description="Guide complet 2025 pour comprendre et démarrer un business en dropshipping sans investissement initial. Découvrez les étapes, outils et méthodes."
        keywords="dropshipping, e-commerce, gagner argent en ligne, shopify, business en ligne, formation dropshipping, 2025, sans investissement"
        ogTitle="Guide Dropshipping 2025 - Démarrer sans argent | Whatsdropshipping"
        ogDescription="Apprenez à créer un business e-commerce rentable sans stock ni investissement initial. Guide étape par étape pour réussir en dropshipping en 2025."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
      />
      
      <div className="min-h-screen bg-background overflow-hidden">
        <NavBar />
        
        <main className="container mx-auto px-4 pt-28 pb-16">
          <article className="prose prose-lg max-w-3xl mx-auto text-white prose-headings:text-[#FF7E33] prose-a:text-[#FF7E33]">
            {/* Breadcrumb - Good for SEO */}
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex">
                <li><Link to="/" className="text-gray-400 hover:text-[#FF7E33]">Accueil</Link></li>
                <li className="mx-2 text-gray-400">/</li>
                <li><Link to="/blog" className="text-gray-400 hover:text-[#FF7E33]">Blog</Link></li>
                <li className="mx-2 text-gray-400">/</li>
                <li className="text-[#FF7E33]">Qu'est-ce que le dropshipping</li>
              </ol>
            </nav>
            
            {/* Publication date - Good for SEO */}
            <div className="mb-8">
              <time dateTime="2025-05-22" className="text-gray-400">
                Publié le 22 mai 2025 • Mis à jour le 22 mai 2025
              </time>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400">Temps de lecture: 7 min</span>
            </div>
            
            {/* Main Heading with featured image */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF7E33]">
                Qu'est-ce que le dropshipping ? Définition simple et méthode 2025
              </h1>
              <div className="relative rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Illustration du dropshipping - ordinateur portable montrant une boutique en ligne" 
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                  width="1200"
                  height="600"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded text-xs text-white">
                  Photo: Unsplash
                </div>
              </div>
            </div>
            
            {/* Introduction */}
            <div className="mb-8 text-lg leading-relaxed">
              <p>
                Le <strong>dropshipping</strong> est un modèle de commerce en ligne qui te permet de vendre des produits <mark className="bg-[#FF7E33]/20 px-1">sans stock, sans local, sans investir une fortune</mark>. 
                Tu crées une boutique e-commerce, tu choisis des produits auprès de fournisseurs, et lorsqu'un client commande, c'est le fournisseur qui livre à sa place. 
                Résultat : tu gagnes la différence entre ton prix de vente et le prix fournisseur.
              </p>
              
              <div className="my-8 p-4 bg-gradient-to-r from-[#1A1F2C] to-[#282c39] border-l-4 border-[#FF7E33] rounded-r-lg">
                <p className="italic">
                  "Le dropshipping n'est pas un moyen de s'enrichir rapidement, mais une véritable méthode business accessible 
                  à tous pour créer une source de revenus en ligne avec un investissement minimal."
                </p>
              </div>
            </div>
            
            {/* Table of Contents */}
            <div className="my-8 p-4 bg-[#1A1F2C]/50 rounded-lg border border-[#FF7E33]/20">
              <h2 className="text-xl font-semibold mb-3">Contenu de l'article</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#pourquoi" className="hover:text-[#FF7E33] flex">
                    <span className="mr-2">➡️</span> Pourquoi le dropshipping séduit autant en 2025 ?
                  </a>
                </li>
                <li>
                  <a href="#etapes" className="hover:text-[#FF7E33] flex">
                    <span className="mr-2">➡️</span> Comment fonctionne le dropshipping ? (Étapes)
                  </a>
                </li>
                <li>
                  <a href="#formation" className="hover:text-[#FF7E33] flex">
                    <span className="mr-2">➡️</span> Faut-il une formation en dropshipping pour réussir ?
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#FF7E33] flex">
                    <span className="mr-2">➡️</span> FAQ - Les questions fréquentes
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Why Section */}
            <section id="pourquoi" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6 mt-12 text-[#FF7E33]">Pourquoi le dropshipping séduit autant en 2025 ?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#1A1F2C] to-[#282c39] p-6 rounded-lg border border-[#FF7E33]/10 hover:border-[#FF7E33]/30 transition-all">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-[#FF7E33] mr-2">🏪</span>
                    Aucun stock à gérer
                  </h3>
                  <p>Fini les inquiétudes liées au stockage et à la gestion d'inventaire. Ton fournisseur s'occupe de tout!</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1A1F2C] to-[#282c39] p-6 rounded-lg border border-[#FF7E33]/10 hover:border-[#FF7E33]/30 transition-all">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-[#FF7E33] mr-2">💰</span>
                    Peu ou pas de capital pour commencer
                  </h3>
                  <p>Avec 50€ à 150€, tu peux démarrer une boutique complète et commencer à générer des revenus.</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1A1F2C] to-[#282c39] p-6 rounded-lg border border-[#FF7E33]/10 hover:border-[#FF7E33]/30 transition-all">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-[#FF7E33] mr-2">🌴</span>
                    Liberté géographique totale
                  </h3>
                  <p>Travaille depuis n'importe où dans le monde avec une simple connexion internet.</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1A1F2C] to-[#282c39] p-6 rounded-lg border border-[#FF7E33]/10 hover:border-[#FF7E33]/30 transition-all">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-[#FF7E33] mr-2">🚀</span>
                    Démarrage ultra rapide
                  </h3>
                  <p>Grâce à des plateformes comme Shopify ou WooCommerce, tu peux être opérationnel en quelques heures.</p>
                </div>
              </div>
              
              {/* First CTA */}
              <div className="my-10 p-6 bg-gradient-to-r from-[#FF7E33]/20 to-[#FF5733]/20 rounded-lg border border-[#FF7E33]/30">
                <h3 className="text-2xl font-bold mb-3">Prêt à découvrir comment générer tes premiers revenus en dropshipping ?</h3>
                <p className="mb-5">Notre formation complète t'accompagne de A à Z, même si tu pars de zéro et sans budget.</p>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
                  onClick={handleCTAClick}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:from-[#FF9F3F] hover:to-[#FF7E33] text-white px-6 py-3 shadow-[0_0_20px_rgba(255,126,51,0.3)] transition-all duration-300 border border-white/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DÉMARRER MA FORMATION MAINTENANT →
                </a>
              </div>
            </section>
            
            {/* Steps Section */}
            <section id="etapes" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-8 mt-14 text-[#FF7E33]">Comment fonctionne le dropshipping ? (Étapes)</h2>
              
              <div className="relative pl-8 border-l-2 border-[#FF7E33]/30 mb-10">
                <div className="absolute w-4 h-4 bg-[#FF7E33] rounded-full -left-[9px] top-0"></div>
                <h3 id="etape1" className="text-2xl font-bold mb-4 text-white scroll-mt-20">Étape 1 – Trouver un produit gagnant</h3>
                <p className="mb-4">
                  Tu dois identifier un produit tendance ou evergreen. Utilise des plateformes comme 
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="cursor-help text-[#FF7E33] underline decoration-dotted underline-offset-2"> CJ Dropshipping</span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-[#1A1F2C] border border-[#FF7E33]/20 text-white">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">CJ Dropshipping</h4>
                          <p className="text-sm">
                            Plateforme qui permet de trouver des produits à fort potentiel et offre des services d'expédition depuis la Chine, les USA et l'Europe.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>, 
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="cursor-help text-[#FF7E33] underline decoration-dotted underline-offset-2"> 1688</span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-[#1A1F2C] border border-[#FF7E33]/20 text-white">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">1688.com</h4>
                          <p className="text-sm">
                            Plateforme B2B chinoise d'Alibaba pour trouver des fournisseurs à prix usine (moins cher qu'AliExpress).
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>, ou 
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="cursor-help text-[#FF7E33] underline decoration-dotted underline-offset-2"> TikTok Trends</span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-[#1A1F2C] border border-[#FF7E33]/20 text-white">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">TikTok Trends</h4>
                          <p className="text-sm">
                            Surveille les produits viraux sur TikTok qui peuvent devenir d'excellentes opportunités de dropshipping.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard> pour découvrir les produits les plus prometteurs.
                </p>
                
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-medium mb-2">Caractéristiques d'un produit gagnant:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Résout un problème spécifique</li>
                      <li>Suscite une réaction "Wow" ou émotionnelle</li>
                      <li>Marge bénéficiaire d'au moins 70%</li>
                      <li>Coût d'achat idéal entre 1€ et 20€</li>
                      <li>Facile à démontrer visuellement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#FF7E33]/30 mb-10">
                <div className="absolute w-4 h-4 bg-[#FF7E33] rounded-full -left-[9px] top-0"></div>
                <h3 id="etape2" className="text-2xl font-bold mb-4 text-white scroll-mt-20">Étape 2 – Créer ta boutique en ligne</h3>
                <p className="mb-4">
                  Le plus simple est d'utiliser Shopify (ultra intuitif, plug-and-play) ou WooCommerce (si tu es à l'aise avec WordPress).
                </p>
                
                <Tabs defaultValue="shopify" className="mb-6">
                  <TabsList className="bg-[#1A1F2C] border border-[#FF7E33]/20">
                    <TabsTrigger value="shopify">Shopify</TabsTrigger>
                    <TabsTrigger value="woocommerce">WooCommerce</TabsTrigger>
                  </TabsList>
                  <TabsContent value="shopify" className="p-4 bg-[#1A1F2C]/50 border border-[#FF7E33]/20 rounded-md mt-2">
                    <h4 className="font-medium mb-2">Avantages de Shopify:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Plateforme tout-en-un, très intuitive</li>
                      <li>Intégration facile avec les fournisseurs dropshipping</li>
                      <li>Support client 24/7</li>
                      <li>Nombreuses applications disponibles</li>
                    </ul>
                    <p>Prix: à partir de 29$/mois (essai gratuit de 14 jours)</p>
                  </TabsContent>
                  <TabsContent value="woocommerce" className="p-4 bg-[#1A1F2C]/50 border border-[#FF7E33]/20 rounded-md mt-2">
                    <h4 className="font-medium mb-2">Avantages de WooCommerce:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Solution gratuite (hors hébergement)</li>
                      <li>Personnalisation totale</li>
                      <li>Contrôle complet sur ton site</li>
                      <li>Extensions nombreuses</li>
                    </ul>
                    <p>Prix: Gratuit + coût d'hébergement (environ 5-10€/mois)</p>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#FF7E33]/30 mb-10">
                <div className="absolute w-4 h-4 bg-[#FF7E33] rounded-full -left-[9px] top-0"></div>
                <h3 id="etape3" className="text-2xl font-bold mb-4 text-white scroll-mt-20">Étape 3 – Connecter un fournisseur fiable</h3>
                <p className="mb-4">
                  Utilise des plateformes comme CJ Dropshipping, Wiio ou des agents privés via WhatsApp ou 1688. 
                  Vérifie bien les délais de livraison (objectif : moins de 10 jours en Europe).
                </p>
                
                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fournisseur</TableHead>
                      <TableHead>Avantages</TableHead>
                      <TableHead>Délai moyen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>CJ Dropshipping</TableCell>
                      <TableCell>Entrepôts internationaux, QC, services photo</TableCell>
                      <TableCell>7-15 jours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wiio</TableCell>
                      <TableCell>Service premium, livraison rapide</TableCell>
                      <TableCell>5-10 jours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Agent privé (1688)</TableCell>
                      <TableCell>Prix usine, relation directe</TableCell>
                      <TableCell>10-20 jours</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#FF7E33]/30 mb-10">
                <div className="absolute w-4 h-4 bg-[#FF7E33] rounded-full -left-[9px] top-0"></div>
                <h3 id="etape4" className="text-2xl font-bold mb-4 text-white scroll-mt-20">Étape 4 – Lancer ton marketing</h3>
                <p className="mb-4">
                  Tu peux vendre avec ou sans pub : TikTok Organique, Reels Instagram, Pinterest, Meta Ads (si petit budget), 
                  ou via des influenceurs micro-niche.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#1A1F2C]/50 p-4 rounded-md border border-[#FF7E33]/20">
                    <h4 className="font-medium mb-2 text-[#FF7E33]">Marketing sans budget</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Contenu organique sur TikTok</li>
                      <li>Reels Instagram</li>
                      <li>Pins sur Pinterest</li>
                      <li>Groupes Facebook pertinents</li>
                      <li>SEO pour trafic organique</li>
                    </ul>
                  </div>
                  <div className="bg-[#1A1F2C]/50 p-4 rounded-md border border-[#FF7E33]/20">
                    <h4 className="font-medium mb-2 text-[#FF7E33]">Marketing avec petit budget</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Meta Ads (5-10€/jour)</li>
                      <li>TikTok Ads (8-15€/jour)</li>
                      <li>Micro-influenceurs (20-50€ par post)</li>
                      <li>Google Shopping (CPC)</li>
                      <li>Remarketing ciblé</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Second CTA - Mid-article */}
              <div className="my-12 p-6 bg-gradient-to-r from-[#232738] to-[#1A1F2C] rounded-lg border border-[#FF7E33]/30 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Tu veux apprendre à trouver rapidement un produit gagnant ?</h3>
                    <p className="text-gray-300">
                      Notre méthode éprouvée t'aide à identifier des produits rentables et à les lancer avec une stratégie marketing efficace.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <a 
                      href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
                      onClick={handleCTAClick}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:from-[#FF9F3F] hover:to-[#FF7E33] text-white px-4 py-3 shadow-[0_0_20px_rgba(255,126,51,0.3)] transition-all duration-300 border border-white/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ACCÉDER À LA MÉTHODE
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Formation Section */}
            <section id="formation" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6 mt-14 text-[#FF7E33]">Faut-il une formation en dropshipping pour réussir ?</h2>
              
              <p className="mb-6">
                Tu n'as pas besoin de payer 1000€ pour une formation. Une <strong>méthode claire et un accompagnement suffisent</strong>. 
                La formation proposée ici est à <mark className="bg-[#FF7E33]/20 px-1">97€, sans engagement</mark>, et inclut un accès 7j/7 
                à une équipe disponible pour répondre à toutes tes questions.
              </p>
              
              <div className="bg-[#1A1F2C]/70 border border-[#FF7E33]/20 rounded-lg p-6 mb-10">
                <h3 className="text-xl font-bold mb-4">Ce que tu apprends dans notre formation:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recherche de produits</h4>
                      <p className="text-sm text-gray-300">Notre méthode pour trouver des produits à fort potentiel en utilisant les tendances TikTok et les outils spécialisés.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Création de boutique</h4>
                      <p className="text-sm text-gray-300">Tutoriels étape par étape pour créer ta boutique Shopify optimisée pour les conversions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sourcing de produits</h4>
                      <p className="text-sm text-gray-300">Comment trouver les meilleurs fournisseurs avec des délais de livraison courts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Marketing à budget zéro</h4>
                      <p className="text-sm text-gray-300">Stratégies marketing organiques pour générer des ventes sans budget publicitaire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Publicité rentable</h4>
                      <p className="text-sm text-gray-300">Mise en place de campagnes publicitaires optimisées pour un retour sur investissement maximal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7E33] flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-xs">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Scaling et automatisation</h4>
                      <p className="text-sm text-gray-300">Comment passer de quelques commandes à des centaines tout en automatisant ton business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-8 mt-14 text-[#FF7E33]">FAQ – Les questions fréquentes sur le dropshipping</h2>
              
              <div className="space-y-6 mb-10">
                <div className="bg-[#1A1F2C]/70 border border-[#FF7E33]/20 rounded-lg p-6 hover:border-[#FF7E33]/40 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Est-ce que le dropshipping est légal ?</h3>
                  <p>
                    <strong>Oui, absolument.</strong> Le dropshipping est un modèle d'affaires légal à condition de respecter les 
                    règles standard du e-commerce : déclaration fiscale de ton activité, respect des droits des consommateurs 
                    (délais de livraison annoncés, droit de rétractation), et éviter les contrefaçons.
                  </p>
                </div>
                
                <div className="bg-[#1A1F2C]/70 border border-[#FF7E33]/20 rounded-lg p-6 hover:border-[#FF7E33]/40 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Quel budget minimum pour se lancer ?</h3>
                  <p>
                    Pour démarrer, tu auras besoin de <strong>50€ à 150€</strong> qui couvriront :
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Nom de domaine (~12€/an)</li>
                    <li>Abonnement Shopify (~29$/mois avec 14 jours gratuits)</li>
                    <li>Quelques applications essentielles (~10-20€/mois)</li>
                  </ul>
                  <p className="mt-2">
                    Pour le marketing, tu peux commencer avec du contenu organique (0€) ou un petit budget publicitaire 
                    (à partir de 5€/jour pour tester).
                  </p>
                </div>
                
                <div className="bg-[#1A1F2C]/70 border border-[#FF7E33]/20 rounded-lg p-6 hover:border-[#FF7E33]/40 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Puis-je réussir sans publicité payante ?</h3>
                  <p>
                    <strong>Oui, c'est tout à fait possible</strong> grâce à des stratégies de marketing organique :
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>TikTok Shop et vidéos organiques</li>
                    <li>Contenu généré par les utilisateurs (UGC)</li>
                    <li>Instagram Reels et collaborations avec micro-influenceurs</li>
                    <li>Optimisation pour les moteurs de recherche (SEO)</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Final CTA */}
            <div className="my-16 p-8 bg-gradient-to-r from-[#FF7E33]/30 to-[#FF5733]/30 rounded-lg border border-[#FF7E33]/30 shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à lancer ton business dropshipping dès aujourd'hui ?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Rejoins notre formation complète et bénéficie d'un accompagnement personnalisé 
                pour créer ta source de revenus en ligne, même en partant de zéro.
              </p>
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:from-[#FF9F3F] hover:to-[#FF7E33] text-white px-8 py-4 shadow-[0_0_30px_rgba(255,126,51,0.4)] transition-all duration-300 border border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                DÉMARRER MA FORMATION MAINTENANT →
              </a>
              <p className="mt-4 text-white/80">Objectif: Ta première vente en moins de 30 jours</p>
            </div>
            
            {/* Conclusion */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#FF7E33]">Conclusion – Lance ton business dropshipping dès aujourd'hui</h2>
              <p className="mb-4">
                Le dropshipping n'est pas une arnaque, mais il faut éviter les fausses promesses. C'est un vrai business 
                qui demande de l'apprentissage et de la persévérance. Avec une méthode honnête et claire, des outils adaptés 
                et un accompagnement de qualité, tu peux réellement générer des revenus importants.
              </p>
              <p className="mb-4">
                Ne te laisse pas décourager par ceux qui ont échoué sans méthode. Rejoins ceux qui réussissent grâce 
                à une approche structurée et des conseils d'experts qui ont fait leurs preuves.
              </p>
              <p>
                Ta réussite est à portée de main, et elle commence par une décision : celle de te former correctement.
              </p>
            </section>
            
            {/* Author Box */}
            <div className="my-10 p-6 bg-[#1A1F2C] rounded-lg border border-[#FF7E33]/20">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3QlMjBtYWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=120&h=120&q=80" 
                    alt="Kayline - Expert en Dropshipping" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kayline</h3>
                  <p className="text-[#FF7E33] font-medium mb-2">Expert en E-commerce & Dropshipping</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Entrepreneur passionné par le e-commerce depuis 2018, j'ai aidé plus de 300 entrepreneurs à lancer leur business en ligne.
                    Je partage ici les méthodes qui fonctionnent réellement en 2025.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-[#FF7E33] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="text-[#FF7E33] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="#" className="text-[#FF7E33] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6 text-[#FF7E33]">Articles liés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="#" className="bg-[#1A1F2C] rounded-lg overflow-hidden border border-[#FF7E33]/20 hover:border-[#FF7E33]/40 transition-transform hover:-translate-y-1 group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                      alt="Les 10 meilleurs outils pour le dropshipping en 2025" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FF7E33] transition-colors">Les 10 meilleurs outils pour le dropshipping en 2025</h4>
                    <p className="text-gray-300 text-sm">Découvre les outils indispensables pour automatiser et optimiser ton business dropshipping cette année.</p>
                  </div>
                </a>
                <a href="#" className="bg-[#1A1F2C] rounded-lg overflow-hidden border border-[#FF7E33]/20 hover:border-[#FF7E33]/40 transition-transform hover:-translate-y-1 group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                      alt="Comment trouver des produits tendance avant tout le monde" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FF7E33] transition-colors">Comment trouver des produits tendance avant tout le monde</h4>
                    <p className="text-gray-300 text-sm">Les techniques secrètes pour dénicher les produits à fort potentiel avant qu'ils ne deviennent viraux.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Comments Section */}
            <section className="my-12 border-t border-[#FF7E33]/20 pt-8">
              <h3 className="text-2xl font-bold mb-6">Commentaires (12)</h3>
              
              <div className="space-y-6 mb-10">
                <div className="bg-[#1A1F2C]/70 rounded-lg p-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100&q=60" 
                        alt="Sophie Moreau" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="font-bold mr-2">Sophie Moreau</h4>
                        <span className="text-gray-400 text-xs">Il y a 2 jours</span>
                      </div>
                      <p className="text-sm">
                        J'ai suivi votre formation il y a 3 mois et je viens de réaliser ma première vente à 4 chiffres ce mois-ci ! 
                        Vos conseils sur les produits et le marketing organique ont vraiment fait la différence. Merci !
                      </p>
                      <div className="mt-2 flex items-center space-x-4 text-xs text-gray-400">
                        <button className="hover:text-[#FF7E33] flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                          J'aime (24)
                        </button>
                        <button className="hover:text-[#FF7E33]">
                          Répondre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1A1F2C]/70 rounded-lg p-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100&q=60" 
                        alt="Thomas Leroy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="font-bold mr-2">Thomas Leroy</h4>
                        <span className="text-gray-400 text-xs">Il y a 5 jours</span>
                      </div>
                      <p className="text-sm">
                        Est-ce que cette méthode fonctionne aussi pour les marchés de niche très spécifiques ? 
                        Je suis dans le secteur du bien-être animal et je cherche à me diversifier.
                      </p>
                      <div className="mt-2 flex items-center space-x-4 text-xs text-gray-400">
                        <button className="hover:text-[#FF7E33] flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                          J'aime (8)
                        </button>
                        <button className="hover:text-[#FF7E33]">
                          Répondre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1A1F2C]/70 rounded-lg p-5 border border-[#FF7E33]/20">
                <h4 className="font-bold mb-4">Laisser un commentaire</h4>
                <textarea 
                  className="w-full p-3 rounded-md bg-[#232738] border border-[#FF7E33]/20 text-white mb-4" 
                  rows={4} 
                  placeholder="Partagez votre expérience ou posez une question..."
                ></textarea>
                <button className="px-4 py-2 bg-[#FF7E33] text-white rounded-md hover:bg-[#FF5733] transition-colors">
                  Publier le commentaire
                </button>
              </div>
            </section>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DropshippingGuide;
