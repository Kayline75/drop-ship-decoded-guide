
import { CSSProperties } from "react";

interface GlowEffectProps {
  mousePosition: {
    x: number;
    y: number;
  };
  containerRef: React.RefObject<HTMLDivElement>;
}

export const GlowEffect = ({ mousePosition, containerRef }: GlowEffectProps) => {
  // Calculate dynamic styles based on mouse position
  const getGlowStyle = (): CSSProperties => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (mousePosition.x / width) * 100;
      const y = (mousePosition.y / height) * 100;
      return {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(51, 195, 240, 0.15) 0%, transparent 50%)`
      };
    }
    return {};
  };

  return (
    <div 
      className="absolute inset-0 z-0 transition-opacity duration-300 ease-out" 
      style={getGlowStyle()}
    />
  );
};
