
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
    <div className={`relative overflow-hidden bg-blue-900 ${className}`}>
      {/* Subtle blue gradients for depth without creating visible separations */}
      <div 
        className="absolute inset-0 bg-blue-900"
        style={{
          background: 'linear-gradient(135deg, rgba(30,58,138,1) 0%, rgba(23,37,84,1) 100%)'
        }}
      ></div>
      
      {/* Very subtle gradient blob with will-change property */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-blue-800/30 rounded-full filter blur-[100px]"
        style={{ 
          transform: primaryTransform,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Secondary subtle gradient blob with will-change property */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-700/20 rounded-full filter blur-[120px]"
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
