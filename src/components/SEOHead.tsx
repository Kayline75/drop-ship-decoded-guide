
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
    
    return () => {
      // No cleanup needed as meta tags stay in the document
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, noindex, nofollow]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;
