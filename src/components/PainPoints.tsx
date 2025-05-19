
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const PainPoints = () => {
  const painPoints = [{
    title: "Confusion face aux avis contradictoires du marché",
    description: "Entre les promesses irréalistes et les opinions négatives, il est difficile d'identifier une stratégie dropshipping fiable."
  }, {
    title: "Échecs précédents malgré vos efforts",
    description: "Vous avez peut-être déjà tenté le dropshipping sans résultat, avec des problèmes logistiques ou de service client."
  }, {
    title: "Crainte de perdre votre investissement marketing",
    description: "L'incertitude sur le retour sur investissement publicitaire vous empêche d'avancer sereinement dans votre projet."
  }, {
    title: "Difficulté à identifier des produits gagnants",
    description: "La recherche de produits à fort potentiel ressemble à une quête impossible sans méthode structurée."
  }, {
    title: "Inquiétudes sur la fiabilité des fournisseurs",
    description: "Les délais de livraison incertains et la qualité variable des produits vous font douter de la viabilité du modèle."
  }];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="problemes" className="section-uniform bg-gradient-to-b from-[#331200] to-[#121212]">
      <div className="container-uniform">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-[30px] text-center">
            5 Obstacles Majeurs au Succès en <span className="gradient-text-harmonized">Dropshipping</span> (et Comment les Surmonter)
          </h2>
          <p className="text-lg text-[#FF9F3F] max-w-2xl mx-auto mb-10">
            Nous avons identifié et résolu les défis qui bloquent 90% des entrepreneurs en e-commerce avec ou sans stock.
          </p>
        </div>

        {isMobile ? (
          <div className="max-w-md mx-auto px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {painPoints.map((point, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6 bg-[#22110A] rounded-lg shadow-md border border-white/10 h-full flex flex-col items-center justify-center">
                      <h3 className="text-xl font-bold text-[#FF7E33] mb-3 text-center">{point.title}</h3>
                      <p className="text-[#FF9F3F] text-center">{point.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 h-10 w-10" />
                <CarouselNext className="static translate-y-0 h-10 w-10" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {painPoints.map((point, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-[#FF7E33] mb-3 text-center">{point.title}</h3>
                <p className="text-[#FF9F3F] text-center">{point.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PainPoints;
