
import React, { useEffect } from 'react';

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  noindex = false,
  nofollow = false,
  structuredData,
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string | undefined, attrName: string = "name") => {
      if (!content) return;
      
      let meta = document.querySelector(`meta[${attrName}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Update standard meta tags
    if (description) updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    
    // Update robots meta tag
    const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
    updateMetaTag("robots", robotsContent);
    
    // Update Open Graph meta tags
    if (ogTitle || title) updateMetaTag("og:title", ogTitle || title, "property");
    if (ogDescription || description) updateMetaTag("og:description", ogDescription || description, "property");
    if (ogImage) updateMetaTag("og:image", ogImage, "property");
    
    // Add structured data for SEO if provided
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(structuredData);
    }
    
    return () => {
      // Clean up structured data if needed
      if (structuredData) {
        const scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (scriptTag) {
          scriptTag.remove();
        }
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, noindex, nofollow, structuredData]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;
