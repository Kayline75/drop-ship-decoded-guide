
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PartCardProps {
  number: number;
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "orange";
  className?: string;
}

const PartCard = ({ 
  number, 
  title, 
  description, 
  color = "blue",
  className 
}: PartCardProps) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-emerald-500 to-emerald-600",
    orange: "from-amber-500 to-amber-600",
  };

  const bgColorClasses = {
    blue: "bg-blue-50",
    purple: "bg-purple-50",
    green: "bg-emerald-50",
    orange: "bg-amber-50",
  };

  const textColorClass = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-emerald-500",
    orange: "text-amber-500",
  };

  return (
    <Card className={cn("card-hover overflow-hidden border-none", bgColorClasses[color], className)}>
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
