
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/animations.css'
import './styles/components.css'
import './styles/utilities.css'

// Préchargement des images critiques uniquement
const preloadCriticalImages = () => {
  // Limitons aux images réellement critiques pour le premier affichage
  const criticalImages = [
    "/lovable-uploads/35862d3c-aa6b-46ac-9b29-da7a8d228926.png"
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Chargement des images secondaires après le rendu initial
const preloadSecondaryImages = () => {
  const secondaryImages = [
    "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png", 
    "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png"
  ];
  
  secondaryImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Chargement optimisé des ressources
if ('requestIdleCallback' in window) {
  // Images critiques immédiatement
  preloadCriticalImages();
  // Images secondaires quand le navigateur est inactif
  window.requestIdleCallback(preloadSecondaryImages);
} else {
  // Fallback si requestIdleCallback n'est pas disponible
  preloadCriticalImages();
  setTimeout(preloadSecondaryImages, 1000);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
