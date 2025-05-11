
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-r from-brand-orange to-brand-gray w-8 h-8 rounded-md"></div>
              <span className="text-xl font-bold">Whatsdropshipping</span>
            </div>
            <p className="text-gray-300 mb-6">
              Votre partenaire pour réussir dans le monde du dropshipping avec des ressources éducatives complètes et professionnelles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Accueil</a></li>
              <li><a href="#cours" className="text-gray-300 hover:text-white">Le cours</a></li>
              <li><a href="#parties" className="text-gray-300 hover:text-white">Les 10 parties</a></li>
              <li><a href="#avantages" className="text-gray-300 hover:text-white">Avantages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">contact@whatsdropshipping.com</li>
              <li className="text-gray-300">+33 1 23 45 67 89</li>
              <li className="text-gray-300">Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Whatsdropshipping. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
