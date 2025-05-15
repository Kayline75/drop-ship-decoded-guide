import { Check } from "lucide-react";
interface ContentSectionProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  reversed?: boolean;
  id?: string;
  className?: string;
  imageUrl?: string;
  gradient?: boolean;
}
const ContentSection = ({
  title,
  subtitle,
  content,
  reversed = false,
  id,
  className = "",
  imageUrl,
  gradient = false
}: ContentSectionProps) => {
  return;
};
export const FeatureItem = ({
  text
}: {
  text: string;
}) => <div className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FF8D6B] flex items-center justify-center">
      <Check className="w-3 h-3 text-white" />
    </div>
    <p className="animate-gradient-text">{text}</p>
  </div>;
export default ContentSection;