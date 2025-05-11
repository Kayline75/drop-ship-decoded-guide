
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
  const colorClasses = {
    primary: "from-[#FF6B95] to-[#FF8D6B]",
    secondary: "from-[#7BE0FF] to-[#5CC9FF]",
    accent: "from-[#9B6BFF] to-[#7341E0]",
    muted: "from-gray-400 to-gray-500",
    custom1: "from-[#FF6B95] to-[#FF8D6B]", // Orange-like
    custom2: "from-[#9B6BFF] to-[#7341E0]", // Dark purple
    custom3: "from-[#7BE0FF] to-[#5CC9FF]", // Blue-gray
  };

  const bgColorClasses = {
    primary: "border-[#FF6B95]/20",
    secondary: "border-[#7BE0FF]/20",
    accent: "border-[#9B6BFF]/20",
    muted: "border-gray-500/20",
    custom1: "border-[#FF6B95]/20", // Orange-like
    custom2: "border-[#9B6BFF]/20", // Dark purple
    custom3: "border-[#7BE0FF]/20", // Blue-gray
  };

  const textColorClass = {
    primary: "text-[#FF6B95]",
    secondary: "text-[#7BE0FF]",
    accent: "text-[#9B6BFF]",
    muted: "text-gray-400",
    custom1: "text-[#FF6B95]", // Orange-like
    custom2: "text-[#9B6BFF]", // Dark purple
    custom3: "text-[#7BE0FF]", // Blue-gray
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
