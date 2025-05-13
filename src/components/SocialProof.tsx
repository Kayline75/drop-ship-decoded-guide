
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const clients = [
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1602345344684-37e44faf9444?crop=entropy&fit=crop&w=120&h=60" },
    { name: "Shopify", logo: "https://images.unsplash.com/photo-1576742243310-ffa9342412e4?crop=entropy&fit=crop&w=120&h=60" },
    { name: "Aliexpress", logo: "https://images.unsplash.com/photo-1554098415-788601d8f6de?crop=entropy&fit=crop&w=120&h=60" },
    { name: "Stripe", logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?crop=entropy&fit=crop&w=120&h=60" },
    { name: "PayPal", logo: "https://images.unsplash.com/photo-1593522868367-80b2fcfafa28?crop=entropy&fit=crop&w=120&h=60" },
    { name: "Wix", logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&fit=crop&w=120&h=60" }
  ];

  const testimonials = [
    {
      name: "Thomas D.",
      position: "Débutant en e-commerce",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&fit=crop&w=80&h=80",
      content: "J'étais sceptique au début, mais après avoir suivi la formation, j'ai réalisé ma première vente en 12 jours. Au bout de 3 mois, je générais plus de 2000€/mois."
    },
    {
      name: "Claire M.",
      position: "Ancienne salariée",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&fit=crop&w=80&h=80",
      content: "La méthodologie est claire et précise. J'ai pu lancer ma boutique tout en gardant mon emploi. Aujourd'hui, je suis à mon compte et je gagne 3 fois mon ancien salaire."
    },
    {
      name: "Karim B.",
      position: "Étudiant entrepreneur",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&fit=crop&w=80&h=80",
      content: "Le module sur la recherche de produits m'a permis de trouver une niche rentable dès le premier mois. Les outils fournis valent à eux seuls le prix de la formation."
    }
  ];

  return (
    <div id="temoignages" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des centaines d'entrepreneurs qui ont transformé leur vie grâce à notre formation.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-8 mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-20 w-32 grayscale hover:grayscale-0 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={client.logo} alt={client.name} className="max-h-12 max-w-full" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
