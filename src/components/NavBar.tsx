
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
        <a href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#F97316] to-[#33C3F0] w-8 h-8 rounded-md"></div>
          <span className="text-xl font-bold text-white">Whatsdropshipping</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#cours" className="nav-link text-sm font-medium text-white hover:text-[#33C3F0] transition-colors">
              Les bases
            </a>
            <a href="#parties" className="nav-link text-sm font-medium text-white hover:text-[#33C3F0] transition-colors">
              Les 10 parties
            </a>
            <a href="#avantages" className="nav-link text-sm font-medium text-white hover:text-[#33C3F0] transition-colors">
              Avantages
            </a>
          </nav>
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-[#F97316] to-[#FF8D6B] hover:opacity-90 transition-all button-glow text-white px-4 py-2"
          >
            Démarrer maintenant
          </a>
        </div>

        <button 
          className="md:hidden text-white"
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
              className="text-sm font-medium text-white hover:text-[#33C3F0] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Les bases
            </a>
            <a 
              href="#parties" 
              className="text-sm font-medium text-white hover:text-[#33C3F0] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Les 10 parties
            </a>
            <a 
              href="#avantages" 
              className="text-sm font-medium text-white hover:text-[#33C3F0] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Avantages
            </a>
          </nav>
          <div className="mt-5">
            <a 
              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full bg-gradient-to-r from-[#F97316] to-[#FF8D6B] text-white py-2"
            >
              Démarrer maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
