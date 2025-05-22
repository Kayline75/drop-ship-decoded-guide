
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const PopupChat = () => {
  // État pour suivre si le bouton a été affiché - optimise le rendu initial
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Utilisation d'un effet de chargement différé pour ne pas bloquer le rendu initial
  useState(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  });
  
  // Si le composant n'a pas encore été chargé, ne rien afficher
  if (!isLoaded) return null;
  
  return (
    <div className="whatsapp-container">
      <span className="whatsapp-label">Contacte-nous</span>
      <a 
        href="https://wa.me/33610688223?text=Bonjour%20je%20viens%20du%20site%20Whatsdropshipping" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
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
        <MessageCircle size={20} />
      </a>
    </div>
  );
};

export default PopupChat;
