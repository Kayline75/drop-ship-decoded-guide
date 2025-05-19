
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const testimonials = [{
    name: "Anonyme",
    position: "Débutant en e-commerce",
    content: "Après 4 mois à essayer le dropshipping j'ai enfin eu ma première ventes! Merci à la communauté et l'aide que vous apportez! Prochain versement : 82,50 $, Ventes totales 87,52 $, Sessions 468",
    rating: 5
  }, {
    name: "Anonyme",
    position: "Nouveau sur le e-commerce",
    content: "J'ai fais mes premières ventes et je voulais remercier Theo et Guillaume pour leur implication, pour ceux qui débute et parte de zéro comme moi dans le e-commerce comme quoi c'est possible quand on est accompagner par les bonnes personnes. Merci pour tout, vous êtes top ✨ ✨ ✨ ✨",
    rating: 5
  }, {
    name: "Anonyme",
    position: "Membre de la formation",
    content: "J'comprend plus moi! ... c'est donc ça le e-com? En 3J je me suis fait casiment mon salaire sur une semaine... Meilleur choix de ma vie! meilleur formation, meilleur coach je veut rien savoir je clot tout les débat!! MERCI... merci.. on garde le cap les amis!! objectif Dubai 🚀 🚀 🚀",
    rating: 5
  }];
  
  const clients = [{
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1602345344684-37e44faf9444?crop=entropy&fit=crop&w=120&h=60"
  }, {
    name: "Shopify",
    logo: "https://images.unsplash.com/photo-1576742243310-ffa9342412e4?crop=entropy&fit=crop&w=120&h=60"
  }, {
    name: "Aliexpress",
    logo: "https://images.unsplash.com/photo-1554098415-788601d8f6de?crop=entropy&fit=crop&w=120&h=60"
  }, {
    name: "Stripe",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?crop=entropy&fit=crop&w=120&h=60"
  }, {
    name: "PayPal",
    logo: "https://images.unsplash.com/photo-1593522868367-80b2fcfafa28?crop=entropy&fit=crop&w=120&h=60"
  }, {
    name: "Wix",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&fit=crop&w=120&h=60"
  }];
  
  return (
    <section id="temoignages" className="section-uniform bg-gradient-to-b from-indigo-900 to-purple-950 py-16">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Ils Ont <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Transformé</span> Leur Vie Grâce au Dropshipping
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto mb-10">
            Découvrez les résultats concrets obtenus par nos élèves qui ont suivi notre méthode étape par étape.
          </p>
        </div>
        
        {/* Testimonials Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Avatar className="h-14 w-14 border-2 border-pink-500">
                      <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-cyan-300">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-white flex-grow">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trusted By Logos */}
        <div className="mb-10">
          <p className="text-center text-lg font-medium text-cyan-300 mb-8">Partenaires de confiance</p>
          <div className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {clients.map((client, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 hover:shadow-md hover:shadow-pink-500/20 transition duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Ajout d'une bannière de succès plus visible */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 p-8 rounded-lg mb-10 border border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Des Résultats Concrets et Vérifiables</h3>
            <p className="text-cyan-300 max-w-3xl mx-auto">
              Ces témoignages sont issus de vrais membres de notre communauté qui ont appliqué notre méthode. 
              Certains ont généré leurs premiers revenus en quelques jours seulement, d'autres ont atteint un salaire complet en moins d'un mois.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 shadow-lg shadow-purple-700/30 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            REJOINDRE NOS ÉLÈVES QUI RÉUSSISSENT
          </a>
          <p className="mt-4 text-cyan-300">Accès immédiat à la communauté et à tous les modules de formation</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
