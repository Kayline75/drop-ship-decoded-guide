
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GlassCard } from "./CardStyles";

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
  // Use updated color scheme
  const colorClasses = {
    primary: "from-[#F97316] to-[#FF8D6B]", // Orange gradient
    secondary: "from-[#33C3F0] to-[#1EAEDB]", // Sky blue gradient
    accent: "from-[#F97316] to-[#33C3F0]", // Orange to sky blue
    muted: "from-gray-400 to-gray-500", // Original gray
    custom1: "from-[#F97316] to-[#FF8D6B]", // Orange gradient
    custom2: "from-[#33C3F0] to-[#1EAEDB]", // Sky blue gradient
    custom3: "from-white to-[#F5F5F5]", // White gradient
  };

  const bgColorClasses = {
    primary: "border-[#F97316]/20",
    secondary: "border-[#33C3F0]/20",
    accent: "border-[#F97316]/20",
    muted: "border-gray-500/20",
    custom1: "border-[#F97316]/20", // Orange
    custom2: "border-[#33C3F0]/20", // Sky blue
    custom3: "border-white/20", // White
  };

  const textColorClass = {
    primary: "text-[#F97316]",
    secondary: "text-[#33C3F0]",
    accent: "text-[#F97316]",
    muted: "text-gray-400",
    custom1: "text-[#F97316]", // Orange
    custom2: "text-[#33C3F0]", // Sky blue
    custom3: "text-white", // White
  };

  return (
    <GlassCard 
      className={cn("animated-border-card", bgColorClasses[color], className)}
      hover={true}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-r", colorClasses[color])}>
              <span className="text-sm font-bold">{number}</span>
            </div>
            <CardTitle className={cn("text-lg", textColorClass[color])}>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white">{description}</p> {/* Changed to white */}
        </CardContent>
      </Card>
    </GlassCard>
  );
};

export default PartCard;
