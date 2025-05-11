
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-brand-blue to-brand-purple w-8 h-8 rounded-md"></div>
          <span className="text-xl font-bold">Whatsdropshipping</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#cours" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Le cours
            </a>
            <a href="#parties" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Les 10 parties
            </a>
            <a href="#avantages" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Avantages
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-brand-blue to-brand-purple">
            Démarrer maintenant
          </Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#cours" 
              className="text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Le cours
            </a>
            <a 
              href="#parties" 
              className="text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Les 10 parties
            </a>
            <a 
              href="#avantages" 
              className="text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Avantages
            </a>
          </nav>
          <div className="mt-4">
            <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-purple">
              Démarrer maintenant
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
