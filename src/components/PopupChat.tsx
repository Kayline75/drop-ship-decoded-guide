
import { MessageCircle } from 'lucide-react';

const PopupChat = () => {
  return (
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
      <div className="flex items-center gap-2">
        <MessageCircle size={20} />
        <span>Contacte-nous</span>
      </div>
    </a>
  );
};

export default PopupChat;
