
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  premium?: boolean;
  animated?: boolean;
  hover?: boolean;
}
export const GlassCard = ({
  children,
  className = "",
  premium = false,
  animated = false,
  hover = false
}: GlassCardProps) => {
  return <div className={cn("glass-card", premium && "glass-card-premium", animated && "animated-border-card", hover && "card-hover", className)}>
      {children}
    </div>;
};
interface GlowButtonProps {
  children: ReactNode;
  className?: string;
}
export const GlowButton = ({
  children,
  className = ""
}: GlowButtonProps) => {
  return <div className={cn("button-glow relative group overflow-hidden", className)}>
      {children}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F33]/20 to-[#FF5733]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
    </div>;
};
export const AnimatedBadge = ({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#331200] to-[#121212] border border-[#FF7E33]/30 shadow-lg shadow-[#FF5733]/20 animate-pulse-slow", className)}>
    {children}
  </div>;
};
