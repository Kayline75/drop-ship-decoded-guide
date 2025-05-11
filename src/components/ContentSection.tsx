
import { Check } from "lucide-react";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  reversed?: boolean;
  id?: string;
  className?: string;
  imageUrl?: string;
}

const ContentSection = ({
  title,
  subtitle,
  content,
  reversed = false,
  id,
  className = "",
  imageUrl,
}: ContentSectionProps) => {
  return (
    <section 
      id={id} 
      className={`section-padding ${className}`}
    >
      <div className="container">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
            <div className="space-y-6">{content}</div>
          </div>
          
          <div className="w-full lg:w-1/2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">{title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
      <Check className="w-3 h-3 text-white" />
    </div>
    <p>{text}</p>
  </div>
);

export default ContentSection;
