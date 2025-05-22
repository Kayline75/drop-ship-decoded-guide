
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/animations.css'
import './styles/components.css'
import './styles/utilities.css'

// Préchargement des ressources cruciales
const preloadImages = () => {
  const imagesToPreload = [
    "/lovable-uploads/35862d3c-aa6b-46ac-9b29-da7a8d228926.png",
    "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png", 
    "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png"
  ];
  
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Améliorer les performances de chargement
if ('requestIdleCallback' in window) {
  // Utiliser requestIdleCallback pour précharger des ressources non critiques
  window.requestIdleCallback(preloadImages);
} else {
  // Fallback si requestIdleCallback n'est pas disponible
  setTimeout(preloadImages, 200);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
