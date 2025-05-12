
import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  scrollY?: number;
  className?: string;
}

const GradientBackground = ({ children, scrollY = 0, className = "" }: GradientBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Primary gradient blob */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px]"
        style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
      ></div>
      
      {/* Secondary gradient blob */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px]"
        style={{ transform: `translateY(${-scrollY * 0.05}px) rotate(${-scrollY * 0.01}deg)` }}
      ></div>
      
      {/* Tertiary gradient blob */}
      <div 
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      ></div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default GradientBackground;
