
import { useState, useEffect } from 'react';

interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  allowIndex: boolean;
  followLinks: boolean;
}

const defaultSEOSettings: SEOSettings = {
  title: "Whatsdropshipping | Formation complète en Dropshipping",
  description: "Apprenez le dropshipping de A à Z avec notre formation structurée en 10 parties. Des conseils pratiques pour créer votre business en ligne.",
  keywords: "dropshipping, formation, ecommerce, vente en ligne, business en ligne",
  ogTitle: "",
  ogDescription: "",
  ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  allowIndex: true,
  followLinks: true
};

export function useSEO() {
  const [seoSettings, setSeoSettings] = useState<SEOSettings>(defaultSEOSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load SEO settings from local storage
  useEffect(() => {
    const loadSettings = () => {
      try {
        const storedSettings = localStorage.getItem('seo-settings');
        if (storedSettings) {
          const settings = JSON.parse(storedSettings);
          setSeoSettings({...defaultSEOSettings, ...settings});
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading SEO settings:", error);
        setIsLoaded(true);
      }
    };

    loadSettings();
  }, []);

  // Save settings to localStorage
  const saveSEOSettings = (settings: Partial<SEOSettings>) => {
    const newSettings = { ...seoSettings, ...settings };
    localStorage.setItem('seo-settings', JSON.stringify(newSettings));
    setSeoSettings(newSettings);
    
    return newSettings;
  };

  // Apply SEO settings to document head
  const applySEOSettings = (customSettings?: Partial<SEOSettings>) => {
    const settings = customSettings 
      ? { ...seoSettings, ...customSettings } 
      : seoSettings;
    
    document.title = settings.title;
    
    // Update meta tags
    updateMetaTag("description", settings.description);
    updateMetaTag("keywords", settings.keywords);
    
    // Update robots meta tag
    const robotsContent = `${settings.allowIndex ? 'index' : 'noindex'}, ${settings.followLinks ? 'follow' : 'nofollow'}`;
    updateMetaTag("robots", robotsContent);
    
    // Update OG meta tags
    updateMetaTag("og:title", settings.ogTitle || settings.title, "property");
    updateMetaTag("og:description", settings.ogDescription || settings.description, "property");
    updateMetaTag("og:image", settings.ogImage, "property");
  };
  
  // Helper function to update meta tags
  const updateMetaTag = (name: string, content: string, attrName: string = "name") => {
    let meta = document.querySelector(`meta[${attrName}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attrName, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute("content", content);
  };

  return { 
    seoSettings, 
    saveSEOSettings, 
    applySEOSettings,
    isLoaded 
  };
}
