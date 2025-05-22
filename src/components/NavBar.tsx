
import { useEffect, useState } from "react";
import { Menu, X, BookOpen, ListTodo, Speedometer } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  // Optimize external link handling
  const handleExternalLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Pre-load link in background
    const href = (event.currentTarget as HTMLAnchorElement).href;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  // Handle scroll to section on home page
  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, scroll to section
    document.querySelector(`#${sectionId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-[#FF7E33]/20 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c" 
          className="flex items-center gap-2"
          target="_blank"
          rel="preconnect"
          onClick={handleExternalLink}
        >
          <div className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] w-8 h-8 rounded-md"></div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Whatsdropshipping</span>
            <span className="text-[#FF7E33] text-xs -mt-1">Kayline | by KlickandSell Academy</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {isHomePage ? (
              <a 
                href="#tarifs" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors"
                onClick={(e) => handleScrollToSection(e, "tarifs")}
              >
                LE PRIX
              </a>
            ) : (
              <Link 
                to="/#tarifs" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors"
              >
                LE PRIX
              </Link>
            )}
            
            {isHomePage ? (
              <a 
                href="#guide-expert" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors"
                onClick={(e) => handleScrollToSection(e, "guide-expert")}
              >
                LE GUIDE
              </a>
            ) : (
              <Link 
                to="/#guide-expert" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors"
              >
                LE GUIDE
              </Link>
            )}
            
            {isHomePage ? (
              <a 
                href="#faq" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center gap-1"
                onClick={(e) => handleScrollToSection(e, "faq")}
              >
                <ListTodo className="w-4 h-4" />
                ARTICLES
              </a>
            ) : (
              <Link 
                to="/#faq" 
                className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center gap-1"
              >
                <ListTodo className="w-4 h-4" />
                ARTICLES
              </Link>
            )}
            
            <Link 
              to="/dropshipping-guide" 
              className="nav-link text-sm font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center gap-1"
            >
              <BookOpen className="w-4 h-4" />
              FAQ
            </Link>
          </nav>
          <a 
            href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 transition-all text-white px-4 py-2 shadow-[0_0_15px_rgba(255,126,51,0.5)]"
            style={{ zIndex: 100 }}
            target="_blank"
            rel="preconnect"
            onClick={handleExternalLink}
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

      {/* Menu mobile optimisé */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg py-5 px-4 border-b border-[#FF7E33]/20">
          <nav className="flex flex-col space-y-6">
            {isHomePage ? (
              <a 
                href="#tarifs" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center"
                onClick={(e) => {
                  handleScrollToSection(e, "tarifs");
                  setIsMobileMenuOpen(false);
                }}
              >
                LE PRIX
              </a>
            ) : (
              <Link 
                to="/#tarifs" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LE PRIX
              </Link>
            )}
            
            {isHomePage ? (
              <a 
                href="#guide-expert" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center"
                onClick={(e) => {
                  handleScrollToSection(e, "guide-expert");
                  setIsMobileMenuOpen(false);
                }}
              >
                LE GUIDE
              </a>
            ) : (
              <Link 
                to="/#guide-expert" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LE GUIDE
              </Link>
            )}
            
            {isHomePage ? (
              <a 
                href="#faq" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center gap-2"
                onClick={(e) => {
                  handleScrollToSection(e, "faq");
                  setIsMobileMenuOpen(false);
                }}
              >
                <ListTodo className="w-4 h-4" />
                ARTICLES
              </a>
            ) : (
              <Link 
                to="/#faq" 
                className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ListTodo className="w-4 h-4" />
                ARTICLES
              </Link>
            )}
            
            <Link 
              to="/dropshipping-guide" 
              className="text-base font-medium text-white hover:text-[#FF7E33] transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="w-4 h-4" />
              FAQ
            </Link>
          </nav>
          <div className="mt-6">
            <a 
              href="https://www.skool.com/klicksell-academie-5416/about?ref=78558161b3d140c79291ccbc46e5275c"
              className="inline-block w-full text-center py-3 px-4 rounded-md text-white bg-gradient-to-r from-[#FF7E33] to-[#FF5733] shadow-[0_0_15px_rgba(255,126,51,0.3)]"
              target="_blank"
              rel="preconnect"
              onClick={(e) => {
                handleExternalLink(e);
                setIsMobileMenuOpen(false);
              }}
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
