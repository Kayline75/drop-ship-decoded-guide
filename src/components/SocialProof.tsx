
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-heading">Ils ont réussi avec notre méthode</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <Card key={index} className="feature-card transition-transform duration-300 hover:translate-y-[-8px]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.position}</p>
                  </div>
                </div>
                <p className="italic text-md">&ldquo;{item.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-medium text-center mb-8">Les marques avec lesquelles nous travaillons</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
