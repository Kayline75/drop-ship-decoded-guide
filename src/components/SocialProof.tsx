
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
  
  const testimonials = [
    {
      name: "Anonyme",
      position: "Débutant en e-commerce",
      content: "Après 4 mois à essayer le dropshipping j'ai enfin eu ma première ventes! Merci à la communauté et l'aide que vous apportez!",
      stats: "Prochain versement : 82,50 $, Ventes totales 87,52 $, Sessions 468",
      interactions: "3 likes, 6 comments",
      rating: 5,
      image: "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png"
    },
    {
      name: "Anonyme",
      position: "Nouveau sur le e-commerce",
      content: "J'ai fais mes premières ventes et je voulais remercier Theo et Guillaume pour leur implication, pour ceux qui débute et parte de zéro comme moi dans le e-commerce comme quoi c'est possible quand on est accompagner par les bonnes personnes.",
      stats: "Merci pour tout, vous êtes top ✨ ✨ ✨ ✨",
      interactions: "2 likes, 5 comments",
      rating: 5,
      image: "/lovable-uploads/35862d3c-aa6b-46ac-9b29-da7a8d228926.png"
    },
    {
      name: "Anonyme",
      position: "Membre de la formation",
      content: "J'comprend plus moi! ... c'est donc ça le e-com? En 3J je me suis fait casiment mon salaire sur une semaine... Meilleur choix de ma vie! meilleur formation, meilleur coach je veut rien savoir je clot tout les débat!!",
      stats: "MERCI... merci.. on garde le cap les amis!! objectif Dubai 🚀 🚀 🚀",
      interactions: "6 likes, 11 comments",
      rating: 5,
      image: "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png"
    }
  ];
  
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
  
  return <section id="temoignages" className="section-uniform bg-gradient-to-b from-[#331200] to-[#121212] py-[34px]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Ils Ont <span className="bg-gradient-to-r from-[#FF7E33] via-[#FF5733] to-[#FF3333] bg-clip-text text-transparent">Transformé</span> Leur Vie Grâce au Dropshipping
          </h2>
          <p className="text-lg text-[#FF9F3F] max-w-2xl mx-auto mb-10">
            Découvrez les résultats concrets obtenus par nos élèves qui ont suivi notre méthode étape par étape.
          </p>
        </div>
        
        {/* Testimonials Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#331200]/40 to-[#121212]/40 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-[#FF5733]/20 transition-all duration-300 h-full">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Screenshot de témoignage */}
                <div className="w-full rounded-t-lg overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`Témoignage d'élève ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Contenu du témoignage */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Avatar className="h-14 w-14 border-2 border-[#FF5733]">
                        <AvatarFallback className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] text-white">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-[#FF9F3F]">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 mb-4">
                    <p className="text-white mb-2">{testimonial.content}</p>
                    <p className="text-[#FF9F3F] text-sm italic">{testimonial.stats}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-sm text-white/60">{testimonial.interactions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Ajout d'une bannière de succès plus visible */}
        <div className="bg-gradient-to-r from-[#FF7E33]/20 to-[#FF5733]/20 p-8 rounded-lg mb-10 border border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Des Résultats Concrets et Vérifiables</h3>
            <p className="text-[#FF9F3F] max-w-3xl mx-auto">Ces témoignages sont issus de vrais membres de notre communauté qui ont appliqué notre méthode. Certains ont généré leurs premiers revenus en quelques jours seulement, d'autres ont atteint un salaire complet en moins d'un mois.</p>
          </div>
        </div>
        
        {/* Call to Action - optimized for mobile */}
        <div className="text-center mt-16">
          <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:from-[#FF9F3F] hover:to-[#FF7E33] text-white shadow-lg shadow-[#FF5733]/30 transition-all duration-300 py-[14px] px-[20px] sm:px-[22px]">
            <span className="hidden sm:inline">REJOINDRE NOS ÉLÈVES QUI RÉUSSISSENT</span>
            <span className="sm:hidden">REJOINDRE LA FORMATION</span>
          </a>
          <p className="mt-4 text-[#FF9F3F]">Accès immédiat à la communauté et à tous les modules de formation</p>
        </div>
      </div>
    </section>;
};
export default SocialProof;
