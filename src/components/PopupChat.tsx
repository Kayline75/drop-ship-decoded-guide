
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const PopupChat = () => {
  // État pour suivre si le bouton a été affiché - optimise le rendu initial
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Utilisation d'un effet de chargement différé pour ne pas bloquer le rendu initial
  useEffect(() => {
    // Retarder encore plus sur mobile pour prioriser le contenu principal
    const timer = setTimeout(() => setIsLoaded(true), isMobile ? 2000 : 1000);
    return () => clearTimeout(timer);
  }, [isMobile]);
  
  // Si le composant n'a pas encore été chargé, ne rien afficher
  if (!isLoaded) return null;
  
  // Version simplifiée pour mobile
  const buttonSize = isMobile ? 16 : 20;
  const containerClass = `whatsapp-container ${isMobile ? 'whatsapp-mobile' : ''}`;
  
  return (
    <div className={containerClass}>
      <span className="whatsapp-label">Contacte-nous</span>
      <a 
        href="https://wa.me/33610688223?text=Bonjour%20je%20viens%20du%20site%20Whatsdropshipping" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactez-nous sur WhatsApp"
        onClick={(e) => {
          // Open in new window but don't navigate away from current page
          e.preventDefault();
          window.open(
            "https://wa.me/33610688223?text=Bonjour%20je%20viens%20du%20site%20Whatsdropshipping",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <MessageCircle size={buttonSize} />
      </a>
    </div>
  );
};

export default PopupChat;
