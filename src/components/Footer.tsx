
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/60 backdrop-blur-lg border-t border-[#7BE0FF]/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-[#FF6B95] to-[#7BE0FF] w-8 h-8 rounded-md"></div>
              <span className="text-xl font-bold">Whatsdropshipping</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Votre partenaire pour réussir dans le monde du dropshipping avec des ressources éducatives complètes et professionnelles.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors block">Accueil</a>
              </li>
              <li>
                <a href="#cours" className="text-muted-foreground hover:text-secondary transition-colors block">Le cours</a>
              </li>
              <li>
                <a href="#parties" className="text-muted-foreground hover:text-secondary transition-colors block">Les 10 parties</a>
              </li>
              <li>
                <a href="#avantages" className="text-muted-foreground hover:text-secondary transition-colors block">Avantages</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">contact@whatsdropshipping.com</li>
              <li className="text-muted-foreground">+33 1 23 45 67 89</li>
              <li className="text-muted-foreground">Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#7BE0FF]/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Whatsdropshipping. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
