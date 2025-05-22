
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Vérifier l'agent utilisateur pour détecter les appareils mobiles au premier rendu
    // Cela évite le flash de contenu lors du chargement initial
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  });

  React.useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Utiliser matchMedia pour une meilleure performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Gestionnaire d'événement optimisé
    const handleChange = () => {
      updateLayout();
    };
    
    // Écouter les changements de média query
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
    } else {
      // Fallback pour les anciens navigateurs
      window.addEventListener('resize', handleChange);
    }
    
    // Set initial value
    updateLayout();
    
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange);
      } else {
        window.removeEventListener('resize', handleChange);
      }
    };
  }, []);

  return isMobile;
}
