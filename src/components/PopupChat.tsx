
import { useState, useEffect, lazy, Suspense } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';

// Utilisation de l'intersection observer pour retarder l'initialisation du chat
const PopupChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChatReady, setIsChatReady] = useState(false);

  // Charger le chat seulement après que l'utilisateur ait navigué sur le site
  useEffect(() => {
    // Attendre plus longtemps pour montrer le chat pour prioriser le chargement du contenu principal
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 secondes au lieu de 3

    // Observer la visibilité pour charger le chat seulement si nécessaire
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsChatReady(true);
          observer.disconnect();
        }
      });
    });

    // Observer le footer comme indicateur que l'utilisateur a fait défiler la page
    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleOpenChat = () => {
    setIsDialogOpen(true);
  };

  // Chargement progressif du bouton de chat
  return showPopup ? (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-0 opacity-100">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FF7E33] to-[#FF5733] p-0 text-white shadow-lg hover:shadow-xl shadow-[#FF5733]/30 transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 border border-[#FF7E33]/20 bg-black/90 backdrop-blur-lg text-white" sideOffset={5}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] w-8 h-8 rounded-md"></div>
                <span className="font-semibold">Coach Dropshipping</span>
              </div>
              <Button variant="ghost" className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-transparent" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </Button>
            </div>
            
            <p className="text-sm mb-4">
              Besoin d'aide pour lancer votre business de dropshipping ? Notre coach expert est là pour répondre à vos questions.
            </p>
            
            <Button className="w-full bg-gradient-to-r from-[#FF7E33] to-[#FF5733] text-white hover:opacity-90" onClick={handleOpenChat}>
              Discuter maintenant
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Dialogue avec iframe chargé seulement si nécessaire */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] h-[80vh] max-h-[600px] p-0 border border-[#FF7E33]/20 bg-black/90 backdrop-blur-lg text-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-[#FF7E33]/20">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] w-8 h-8 rounded-md"></div>
                <span className="font-semibold">Coach Dropshipping Expert</span>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {isDialogOpen && isChatReady && (
                <iframe 
                  src="https://chatgpt.com/g/g-682cfd7935e481919c1d406c4b5b2d80-coach-dropshipping-expert-francais" 
                  className="w-full h-full border-none" 
                  title="Coach Dropshipping" 
                  allow="microphone; camera; display-capture"
                  loading="lazy" 
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
};

export default PopupChat;
