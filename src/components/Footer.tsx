
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/60 backdrop-blur-lg border-t border-[#33C3F0]/10">
      <div className="container mx-auto px-4 py-16 bg-slate-900 rounded-lg mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="bg-gradient-to-r from-[#F97316] to-[#33C3F0] w-10 h-10 rounded-md"></div>
              <span className="text-xl font-bold text-white">Whatsdropshipping</span>
            </div>
            <p className="text-white mb-6">
              Votre partenaire pour réussir dans le monde du dropshipping avec des ressources éducatives complètes et professionnelles.
            </p>
            <div className="flex space-x-5 justify-center md:justify-start">
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#33C3F0] transition-colors p-2 bg-white/10 rounded-full" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#33C3F0] transition-colors p-2 bg-white/10 rounded-full" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                className="text-white hover:text-[#33C3F0] transition-colors p-2 bg-white/10 rounded-full" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#F97316] to-[#33C3F0] bg-clip-text text-transparent inline-block">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#33C3F0] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#33C3F0] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Les bases
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#33C3F0] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Les 10 parties
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#33C3F0] transition-colors block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Avantages
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#33C3F0] to-[#F97316] bg-clip-text text-transparent inline-block">Contact</h3>
            <ul className="space-y-3">
              <li className="text-white">contact@whatsdropshipping.com</li>
              <li className="text-white">Paris</li>
              <li className="text-white">
                <a 
                  href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
                  className="text-white hover:text-[#33C3F0] transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Rejoindre la communauté Skool
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#33C3F0]/20 mt-12 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Whatsdropshipping. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
