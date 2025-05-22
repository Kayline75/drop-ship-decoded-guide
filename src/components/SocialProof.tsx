
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { GlassCard } from "./CardStyles";

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonialImages = [
    "/lovable-uploads/35862d3c-aa6b-46ac-9b29-da7a8d228926.png",
    "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png", 
    "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png"
  ];
  
  return (
    <section id="temoignages" className="section-uniform bg-gradient-to-b from-[#331200] to-[#121212] py-[34px]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px]">
            Ils Ont <span className="bg-gradient-to-r from-[#FF7E33] via-[#FF5733] to-[#FF3333] bg-clip-text text-transparent">Transformé</span> Leur Vie Grâce au Dropshipping
          </h2>
          <p className="text-lg text-[#FF9F3F] max-w-2xl mx-auto mb-10">
            Découvrez les résultats concrets obtenus par nos élèves qui ont suivi notre méthode étape par étape.
          </p>
        </div>
        
        {/* Testimonials Carousel Section */}
        <div id="testimonials-section" className={`max-w-5xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-3/4 lg:basis-3/4">
                  <div className="p-2">
                    <GlassCard className="bg-gradient-to-br from-[#331200]/40 to-[#121212]/40 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-[#FF5733]/20 transition-all duration-300 overflow-hidden rounded-lg p-2">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Témoignage client ${index + 1}`}
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: "600px" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 justify-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-sm text-[#FF9F3F]">Résultats vérifiés</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none mx-2 bg-gradient-to-r from-[#FF7E33]/20 to-[#FF5733]/20 border-[#FF7E33]/30 hover:bg-gradient-to-r hover:from-[#FF7E33]/30 hover:to-[#FF5733]/30" />
              <CarouselNext className="static transform-none mx-2 bg-gradient-to-r from-[#FF7E33]/20 to-[#FF5733]/20 border-[#FF7E33]/30 hover:bg-gradient-to-r hover:from-[#FF7E33]/30 hover:to-[#FF5733]/30" />
            </div>
          </Carousel>
        </div>
        
        {/* Ajout d'une bannière de succès plus visible */}
        <div className="bg-gradient-to-r from-[#FF7E33]/20 to-[#FF5733]/20 p-8 rounded-lg mb-10 border border-white/10 backdrop-blur-sm">
          <div className="text-center">
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
    </section>
  );
};

export default SocialProof;
