
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-lg border-t border-[#FF7E33]/20">
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-black/90 to-[#331200]/90 rounded-lg mt-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] w-10 h-10 rounded-md shadow-[0_0_15px_rgba(255,126,51,0.5)]"></div>
              <span className="text-xl font-bold text-white">Whatsdropshipping</span>
            </div>
            <p className="text-orange-100 mb-6">
              Votre partenaire pour réussir dans le monde du dropshipping avec des ressources éducatives complètes et professionnelles.
            </p>
            <div className="flex space-x-5 justify-center md:justify-start">
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#FF7E33] transition-colors p-2 bg-black/30 rounded-full border border-[#FF7E33]/30 hover:border-[#FF7E33]/50" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#FF7E33] transition-colors p-2 bg-black/30 rounded-full border border-[#FF7E33]/30 hover:border-[#FF7E33]/50" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#FF7E33] transition-colors p-2 bg-black/30 rounded-full border border-[#FF7E33]/30 hover:border-[#FF7E33]/50" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent inline-block">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#FF7E33] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#FF7E33] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Les bases
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#FF7E33] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Les 10 parties
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#FF7E33] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Avantages
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#FF7E33] to-[#FF5733] bg-clip-text text-transparent inline-block">Contact</h3>
            <ul className="space-y-3">
              <li className="text-orange-100">contact@whatsdropshipping.com</li>
              <li className="text-orange-100">Paris</li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#FF7E33] transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Rejoindre la communauté Skool
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#FF7E33]/20 mt-12 pt-8 text-center text-orange-100">
          <p>&copy; {new Date().getFullYear()} Whatsdropshipping. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
