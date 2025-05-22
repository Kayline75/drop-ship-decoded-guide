import React from "react";
import { Rocket } from "lucide-react";
const TransparentGuide = () => {
  return <section id="guide-expert" className="bg-transparent text-white py-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#FF5733]/10 filter blur-xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full bg-[#FF7E33]/10 filter blur-xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7E33] to-[#FF5733] inline">
            Notre Guide Expert Transparent
          </h2>
          <p className="text-orange-100 text-lg md:text-xl max-w-3xl mx-auto">
            Découvrez les coulisses de notre formation dropshipping : stratégies éprouvées, outils indispensables et un accompagnement personnalisé pour garantir votre succès.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strategy & Tools */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-[#FF7E33]/20 shadow-lg transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Rocket className="text-[#FF7E33] mr-2 w-6 h-6" />
              <h3 className="text-xl font-semibold">Stratégie et Outils</h3>
            </div>
            <p className="text-orange-100">
              Accédez à des stratégies de vente éprouvées et maîtrisez les outils indispensables pour automatiser et optimiser votre boutique en ligne.
            </p>
          </div>

          {/* Community & Support */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-[#FF7E33]/20 shadow-lg transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF7E33] mr-2 w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386a9 9 0 0115.912 2.659l-.607 2.708a.75.75 0 00.656.857l1.574-.293a.75.75 0 00.972-.755l-.197-1.185a.75.75 0 00-.931-.494l-1.263.234a9 9 0 01-10.728-6.719A.75.75 0 002.25 2.25z" />
                <path d="M19.933 5.418a.75.75 0 01-.208 1.485 6 6 0 00-6.126 6.363l.523 2.334a.75.75 0 01-.644.901l-1.561-.29a.75.75 0 01-.97.757l.21 1.261a.75.75 0 01-.92.525l1.271-.236a6 6 0 008.048-8.329.75.75 0 011.485.208z" />
              </svg>
              <h3 className="text-xl font-semibold">Communauté et Support</h3>
            </div>
            <p className="text-orange-100">
              Rejoignez une communauté active et bénéficiez d'un support quotidien pour répondre à toutes vos questions et surmonter les défis.
            </p>
          </div>

          {/* Personalized Coaching */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-[#FF7E33]/20 shadow-lg transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF7E33] mr-2 w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5a4.5 4.5 0 01-9 0v-1.32l-1.72 1.72a.75.75 0 01-1.06-1.06l3-3zM6 12a3 3 0 116 0 3 3 0 01-6 0zm12 1.5a3 3 0 100-6 3 3 0 000 6zM5.257 17.16a.75.75 0 01.943.83l-1.606 4.819a.75.75 0 01-1.342-.67l1.606-4.818a.75.75 0 011.001-.351zm13.558 0a.75.75 0 011.001.35l1.606 4.818a.75.75 0 01-1.342.67l-1.606-4.819a.75.75 0 01.943-.83z" />
              </svg>
              <h3 className="text-xl font-semibold">Coaching Personnalisé</h3>
            </div>
            <p className="text-orange-100">
              Bénéficiez de sessions de coaching individuelles pour affiner votre stratégie et accélérer votre progression vers le succès.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          
          
          {/* Add actual testimonials here */}
        </div>
      </div>
    </section>;
};
export default TransparentGuide;