
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import NavBar from "@/components/NavBar";
import { Settings } from "lucide-react";

// Define the schema for SEO settings
const seoFormSchema = z.object({
  title: z.string().min(5, {
    message: "Le titre doit contenir au moins 5 caractères.",
  }).max(60, {
    message: "Le titre ne doit pas dépasser 60 caractères.",
  }),
  description: z.string().min(50, {
    message: "La description doit contenir au moins 50 caractères.",
  }).max(160, {
    message: "La description ne doit pas dépasser 160 caractères.",
  }),
  keywords: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  allowIndex: z.boolean().default(true),
  followLinks: z.boolean().default(true),
});

type SEOFormValues = z.infer<typeof seoFormSchema>;

const SEOSettings: React.FC = () => {
  const { toast } = useToast();
  const [characterCount, setCharacterCount] = useState({
    title: 0,
    description: 0,
  });

  // Initialize form with default values
  const form = useForm<SEOFormValues>({
    resolver: zodResolver(seoFormSchema),
    defaultValues: {
      title: "",
      description: "",
      keywords: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      allowIndex: true,
      followLinks: true,
    },
  });

  // Load stored SEO settings on mount
  useEffect(() => {
    const storedSettings = localStorage.getItem('seo-settings');
    if (storedSettings) {
      const parsed = JSON.parse(storedSettings);
      form.reset(parsed);
      setCharacterCount({
        title: parsed.title?.length || 0,
        description: parsed.description?.length || 0,
      });
    } else {
      // If no stored settings, try to get values from current document
      form.setValue('title', document.title || "Whatsdropshipping | Formation complète en Dropshipping");
      
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
      if (metaDescription) {
        form.setValue('description', metaDescription);
        setCharacterCount(prev => ({ ...prev, description: metaDescription.length }));
      }
      
      const metaKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
      if (metaKeywords) {
        form.setValue('keywords', metaKeywords);
      }

      // Get OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

      if (ogTitle) form.setValue('ogTitle', ogTitle);
      if (ogDescription) form.setValue('ogDescription', ogDescription);
      if (ogImage) form.setValue('ogImage', ogImage);
      
      setCharacterCount({
        title: document.title?.length || 0,
        description: metaDescription?.length || 0,
      });
    }
  }, [form]);

  // Save SEO settings and update meta tags
  const onSubmit = (data: SEOFormValues) => {
    // Save to localStorage
    localStorage.setItem('seo-settings', JSON.stringify(data));
    
    // Update meta tags in document head
    document.title = data.title;
    
    // Update standard meta tags
    updateMetaTag("description", data.description);
    updateMetaTag("keywords", data.keywords || "");
    
    // Update robots meta tag
    const robotsContent = `${data.allowIndex ? 'index' : 'noindex'}, ${data.followLinks ? 'follow' : 'nofollow'}`;
    updateMetaTag("robots", robotsContent);
    
    // Update OG meta tags
    updateMetaTag("og:title", data.ogTitle || data.title, "property");
    updateMetaTag("og:description", data.ogDescription || data.description, "property");
    updateMetaTag("og:image", data.ogImage || "", "property");

    toast({
      title: "Paramètres SEO mis à jour",
      description: "Les modifications ont été appliquées avec succès.",
    });
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

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <NavBar />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Settings className="text-[#FF7E33] w-8 h-8" />
            <h1 className="text-3xl font-bold text-white">Paramètres SEO</h1>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 shadow-lg border border-[#FF7E33]/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Paramètres SEO de base</h2>
                  
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Titre de la page
                          <span className="text-sm text-gray-400 ml-2">
                            ({characterCount.title}/60)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Entrez le titre de la page" 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              setCharacterCount(prev => ({ ...prev, title: e.target.value.length }));
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Le titre apparaîtra dans les résultats de recherche et l'onglet du navigateur.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-white">
                          Méta description
                          <span className="text-sm text-gray-400 ml-2">
                            ({characterCount.description}/160)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre page en 160 caractères maximum" 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            rows={4}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              setCharacterCount(prev => ({ ...prev, description: e.target.value.length }));
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          La description qui apparaîtra sous le titre dans les résultats de recherche.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-white">Mots-clés</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="dropshipping, formation, e-commerce, ..." 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Liste de mots-clés séparés par des virgules (moins important aujourd'hui).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Contrôle d'indexation</h2>
                  
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="allowIndex"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-[#FF7E33] border-[#FF7E33]/50"
                            />
                          </FormControl>
                          <div className="space-y-1">
                            <FormLabel className="text-white">
                              Autoriser les moteurs de recherche à indexer cette page
                            </FormLabel>
                            <FormDescription className="text-gray-400">
                              Désactivez cette option pour exclure la page des résultats de recherche.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="followLinks"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-[#FF7E33] border-[#FF7E33]/50"
                            />
                          </FormControl>
                          <div className="space-y-1">
                            <FormLabel className="text-white">
                              Autoriser les moteurs de recherche à suivre les liens
                            </FormLabel>
                            <FormDescription className="text-gray-400">
                              Désactivez cette option pour empêcher les moteurs de recherche de suivre les liens de cette page.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Paramètres Open Graph (Réseaux sociaux)</h2>
                  
                  <FormField
                    control={form.control}
                    name="ogTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Titre Open Graph</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Titre pour les réseaux sociaux" 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Le titre affiché lors du partage sur les réseaux sociaux (laissez vide pour utiliser le titre principal).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="ogDescription"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-white">Description Open Graph</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Description pour les réseaux sociaux" 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          La description affichée lors du partage sur les réseaux sociaux (laissez vide pour utiliser la méta description).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="ogImage"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-white">URL de l'image Open Graph</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://example.com/image.jpg" 
                            className="bg-[#1A1F2C] text-white border-[#FF7E33]/50"
                            type="url"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          L'image qui sera affichée lors du partage sur les réseaux sociaux (URL complète).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex gap-4 justify-end">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => form.reset()}
                    className="text-white border-[#FF7E33]/50 hover:bg-[#FF7E33]/20"
                  >
                    Réinitialiser
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-[#FF7E33] to-[#FF5733] hover:opacity-90 transition-all text-white shadow-[0_0_15px_rgba(255,126,51,0.5)]"
                  >
                    Sauvegarder les paramètres
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-black/50 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-2">Prévisualisation</h3>
                  <div className="p-4 bg-white rounded">
                    <div className="text-blue-600 text-xl font-medium mb-1 truncate">
                      {form.watch("title") || "Whatsdropshipping | Formation complète en Dropshipping"}
                    </div>
                    <div className="text-green-700 text-sm mb-2 truncate">
                      whatsdropshipping.com
                      {form.watch("allowIndex") ? "" : " 🚫 Non indexé"}
                    </div>
                    <div className="text-gray-600">
                      {form.watch("description") || "Apprenez le dropshipping de A à Z avec notre formation structurée en 10 parties. Des conseils pratiques pour créer votre business en ligne."}
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOSettings;
