
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PartCardProps {
  number: number;
  title: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "muted" | "custom1" | "custom2" | "custom3";
  className?: string;
}

const PartCard = ({ 
  number, 
  title, 
  description, 
  color = "primary",
  className 
}: PartCardProps) => {
  // Use colors from the uploaded image
  const colorClasses = {
    primary: "from-[#2F1A94] to-[#5E6BD6]", // Dark blue to medium blue
    secondary: "from-[#7D95F4] to-[#B3C4FF]", // Medium blue to light blue
    accent: "from-[#9B6BFF] to-[#7341E0]", // Original purple
    muted: "from-gray-400 to-gray-500", // Original gray
    custom1: "from-[#2F1A94] to-[#5E6BD6]", // Dark blue to medium blue
    custom2: "from-[#7D95F4] to-[#B3C4FF]", // Medium blue to light blue 
    custom3: "from-[#FF9F3F] to-[#FFBB7A]", // Orange
  };

  const bgColorClasses = {
    primary: "border-[#2F1A94]/20",
    secondary: "border-[#7D95F4]/20",
    accent: "border-[#9B6BFF]/20",
    muted: "border-gray-500/20",
    custom1: "border-[#2F1A94]/20", // Dark blue
    custom2: "border-[#7D95F4]/20", // Medium blue
    custom3: "border-[#FF9F3F]/20", // Orange
  };

  const textColorClass = {
    primary: "text-[#2F1A94]",
    secondary: "text-[#7D95F4]",
    accent: "text-[#9B6BFF]",
    muted: "text-gray-400",
    custom1: "text-[#5E6BD6]", // Medium blue for better readability
    custom2: "text-[#7D95F4]", // Medium blue
    custom3: "text-[#FF9F3F]", // Orange
  };

  return (
    <Card className={cn("card-hover glass-card animated-border-card", bgColorClasses[color], className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-r", colorClasses[color])}>
            <span className="text-sm font-bold">{number}</span>
          </div>
          <CardTitle className={cn("text-lg", textColorClass[color])}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PartCard;
