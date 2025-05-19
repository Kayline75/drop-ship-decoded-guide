
import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  scrollY?: number;
  className?: string;
}

const GradientBackground = ({ children, scrollY = 0, className = "" }: GradientBackgroundProps) => {
  // Pre-calculate transform values to improve performance
  const primaryTransform = `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`;
  const secondaryTransform = `translateY(${-scrollY * 0.05}px) rotate(${-scrollY * 0.01}deg)`;
  const tertiaryTransform = `translateY(${scrollY * 0.03}px)`;
  
  return (
    <div className={`relative overflow-hidden bg-[#121212] ${className}`}>
      {/* Dynamic background for depth without creating visible separations */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(51, 18, 0, 1) 0%, rgba(18, 18, 18, 1) 100%)'
        }}
      ></div>
      
      {/* Dynamic gradient blob with will-change property */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-[#FF7E33]/20 rounded-full filter blur-[100px]"
        style={{ 
          transform: primaryTransform,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Secondary dynamic gradient blob with will-change property */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-[#FF5733]/10 rounded-full filter blur-[120px]"
        style={{ 
          transform: secondaryTransform,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default GradientBackground;
