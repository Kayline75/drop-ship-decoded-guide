
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
  
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-[#331200] to-[#121212] ${className}`}>
      {/* Enhanced smooth background gradient for better transitions */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(51, 18, 0, 1) 0%, rgba(18, 18, 18, 1) 100%)',
          opacity: 0.9
        }}
      ></div>
      
      {/* Primary dynamic gradient blob with improved blend mode */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-[#FF7E33]/20 rounded-full filter blur-[100px] mix-blend-overlay"
        style={{ 
          transform: primaryTransform,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Secondary dynamic gradient blob with improved blend mode */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-[#FF5733]/10 rounded-full filter blur-[120px] mix-blend-overlay"
        style={{ 
          transform: secondaryTransform,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
