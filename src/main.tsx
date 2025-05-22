
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'

// Fonction de détection de mobile
const isMobileDevice = () => {
  return window.innerWidth < 768 || 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Chargement conditionnel des styles non critiques
const loadNonCriticalStyles = () => {
  const stylesToLoad = [
    './styles/animations.css',
    './styles/components.css',
    './styles/utilities.css'
  ];
  
  stylesToLoad.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });
};

// Préchargement des images critiques uniquement avec dimensions pour éviter CLS
const preloadCriticalImages = () => {
  // Limitons aux images réellement critiques pour le premier affichage
  const criticalImages = [
    {
      src: "/lovable-uploads/35862d3c-aa6b-46ac-9b29-da7a8d228926.png",
      width: 800,
      height: 600
    }
  ];
  
  criticalImages.forEach(img => {
    const image = new Image();
    image.src = img.src;
    image.width = img.width;
    image.height = img.height;
  });
};

// Chargement des images secondaires après le rendu initial
const preloadSecondaryImages = () => {
  // Utiliser le format WebP quand disponible pour économiser de la bande passante
  // Sur mobile, utiliser des versions plus petites des images
  const secondaryImages = isMobileDevice() ? 
    [
      { 
        src: "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png", 
        width: 400, 
        height: 300 
      },
      { 
        src: "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png", 
        width: 400, 
        height: 300 
      }
    ] : 
    [
      { 
        src: "/lovable-uploads/50188027-d3ff-41d5-9be3-1f46a75b86ba.png", 
        width: 800, 
        height: 600 
      },
      { 
        src: "/lovable-uploads/ae9bf4ab-0c81-4039-ad26-91a75c8b2adf.png", 
        width: 800, 
        height: 600 
      }
    ];
  
  secondaryImages.forEach(img => {
    const image = new Image();
    image.src = img.src;
    image.width = img.width;
    image.height = img.height;
  });
};

// Initialisation de l'application
const initApp = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
  );
};

// Chargement optimisé des ressources
document.addEventListener('DOMContentLoaded', () => {
  // Charger d'abord les images critiques
  preloadCriticalImages();
  
  // Charger les styles non critiques
  loadNonCriticalStyles();
  
  // Initialiser l'application
  initApp();
  
  // Charger les ressources non critiques quand le navigateur est inactif
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preloadSecondaryImages);
  } else {
    // Fallback si requestIdleCallback n'est pas disponible
    setTimeout(preloadSecondaryImages, 1000);
  }
});
