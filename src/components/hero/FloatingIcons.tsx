
import { Package, Plane } from "lucide-react";
import { CSSProperties } from "react";

interface IconPosition {
  x: string;
  y: string;
  delay: string;
  size: number;
  rotation: string;
  duration: string;
  direction?: string;
}

interface FloatingIconsProps {
  mousePosition: { x: number; y: number };
}

export const FloatingIcons = ({ mousePosition }: FloatingIconsProps) => {
  // Package icons with varied positions and animations
  const packageIcons: IconPosition[] = [
    {
      x: "10%",
      y: "30%",
      delay: "1.5s",
      size: 18,
      rotation: "5deg",
      duration: "6s"
    },
    {
      x: "85%",
      y: "25%",
      delay: "2s",
      size: 22,
      rotation: "-8deg",
      duration: "7s"
    },
    {
      x: "30%",
      y: "85%",
      delay: "2.5s",
      size: 16,
      rotation: "12deg",
      duration: "8s"
    },
    {
      x: "70%",
      y: "70%",
      delay: "3s",
      size: 20,
      rotation: "-15deg",
      duration: "5s"
    },
    {
      x: "45%",
      y: "15%",
      delay: "3.5s",
      size: 24,
      rotation: "0deg",
      duration: "9s"
    },
    {
      x: "15%",
      y: "50%",
      delay: "2.8s",
      size: 19,
      rotation: "20deg",
      duration: "6.5s"
    },
    {
      x: "55%",
      y: "65%",
      delay: "1.8s",
      size: 17,
      rotation: "-10deg",
      duration: "7.5s"
    },
    {
      x: "78%",
      y: "42%",
      delay: "3.2s",
      size: 21,
      rotation: "8deg",
      duration: "8.5s"
    },
    {
      x: "25%",
      y: "10%",
      delay: "2.2s",
      size: 23,
      rotation: "-3deg",
      duration: "7.2s"
    },
    {
      x: "60%",
      y: "30%",
      delay: "1.2s",
      size: 18,
      rotation: "15deg",
      duration: "5.8s"
    },
    {
      x: "90%",
      y: "60%",
      delay: "2.7s",
      size: 16,
      rotation: "-18deg",
      duration: "6.3s"
    },
    {
      x: "5%",
      y: "75%",
      delay: "3.7s",
      size: 20,
      rotation: "7deg",
      duration: "8.2s"
    }
  ];

  // Airplane icons with custom animations
  const airplaneIcons: IconPosition[] = [
    {
      x: "20%",
      y: "40%",
      delay: "1s",
      size: 28,
      rotation: "25deg",
      duration: "12s",
      direction: "right"
    },
    {
      x: "75%",
      y: "20%",
      delay: "5s",
      size: 24,
      rotation: "-15deg",
      duration: "15s",
      direction: "left"
    }
  ];

  return (
    <>
      {/* Package icons with enhanced floating animations */}
      {packageIcons.map((item, i) => (
        <div
          key={`package-${i}`}
          className="floating-element package-icon hover:scale-110 transition-transform"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            transform: `rotate(${item.rotation})`,
            animationDuration: item.duration
          }}
        >
          <Package
            size={item.size}
            className="text-[#33C3F0] hover:text-[#7BE0FF] transition-colors"
          />
        </div>
      ))}

      {/* Airplane icons with custom floating animations */}
      {airplaneIcons.map((item, i) => (
        <div
          key={`airplane-${i}`}
          className={`floating-element airplane-icon hover:scale-125 transition-transform duration-300 cursor-pointer`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            transform: `rotate(${item.rotation})`,
            animationDuration: item.duration
          }}
        >
          <Plane
            size={item.size}
            className={`text-white hover:text-[#F97316] transition-colors ${
              item.direction === "left" ? "flip-horizontal" : ""
            }`}
          />
        </div>
      ))}
    </>
  );
};
