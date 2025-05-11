
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
          ? "card-backdrop shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#FF6B95] to-[#7BE0FF] w-8 h-8 rounded-md"></div>
          <span className="text-xl font-bold">Whatsdropshipping</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#cours" className="nav-link text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Le cours
            </a>
            <a href="#parties" className="nav-link text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Les 10 parties
            </a>
            <a href="#avantages" className="nav-link text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Avantages
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B] hover:opacity-90 transition-all button-glow">
            Démarrer maintenant
          </Button>
        </div>

        <button 
          className="md:hidden text-foreground"
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
        <div className="md:hidden absolute top-full left-0 right-0 card-backdrop py-5 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#cours" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Le cours
            </a>
            <a 
              href="#parties" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Les 10 parties
            </a>
            <a 
              href="#avantages" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Avantages
            </a>
          </nav>
          <div className="mt-5">
            <Button className="w-full bg-gradient-to-r from-[#FF6B95] to-[#FF8D6B]">
              Démarrer maintenant
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
