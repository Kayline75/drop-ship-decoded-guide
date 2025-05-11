
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PartCardProps {
  number: number;
  title: string;
  description: string;
  color?: "orange" | "gray" | "dark" | "light";
  className?: string;
}

const PartCard = ({ 
  number, 
  title, 
  description, 
  color = "orange",
  className 
}: PartCardProps) => {
  const colorClasses = {
    orange: "from-brand-orange to-amber-600",
    gray: "from-brand-gray to-slate-400",
    dark: "from-brand-dark to-slate-800",
    light: "from-white to-brand-gray/30",
  };

  const bgColorClasses = {
    orange: "bg-white border-brand-orange/20",
    gray: "bg-white border-brand-gray/20",
    dark: "bg-white border-brand-dark/20",
    light: "bg-white border-gray-50",
  };

  const textColorClass = {
    orange: "text-brand-orange",
    gray: "text-brand-gray",
    dark: "text-brand-dark",
    light: "text-gray-500",
  };

  return (
    <Card className={cn("card-hover overflow-hidden", bgColorClasses[color], className, "animated-border-card")}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-r", colorClasses[color])}>
            <span className="text-sm font-bold">{number}</span>
          </div>
          <CardTitle className={cn("text-lg", textColorClass[color])}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PartCard;
