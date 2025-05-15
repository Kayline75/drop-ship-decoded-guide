
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
  
  const testimonials = [{
    name: "Thomas D.",
    position: "Débutant en e-commerce",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&fit=crop&w=80&h=80",
    content: "J'étais sceptique au début, mais après avoir suivi la formation, j'ai réalisé ma première vente en 12 jours. Au bout de 3 mois, je générais plus de 2000€/mois."
  }, {
    name: "Claire M.",
    position: "Ancienne salariée",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&fit=crop&w=80&h=80",
    content: "La méthodologie est claire et précise. J'ai pu lancer ma boutique tout en gardant mon emploi. Aujourd'hui, je suis à mon compte et je gagne 3 fois mon ancien salaire."
  }, {
    name: "Karim B.",
    position: "Étudiant entrepreneur",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&fit=crop&w=80&h=80",
    content: "Le module sur la recherche de produits m'a permis de trouver une niche rentable dès le premier mois. Les outils fournis valent à eux seuls le prix de la formation."
  }];
  
  // Return a simple placeholder component for now
  return (
    <div className="bg-gradient-to-b from-brand-dark/80 to-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-lg">
              <img src={client.logo} alt={client.name} className="max-h-12 opacity-70" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className={`bg-white/5 backdrop-blur-sm transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-lg font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-brand-orange">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-white/90">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
