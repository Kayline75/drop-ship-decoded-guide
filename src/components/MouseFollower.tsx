
import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create mouse follower element if it doesn't exist
    if (!document.querySelector('.mouse-follower')) {
      const follower = document.createElement('div');
      follower.className = 'mouse-follower';
      document.body.appendChild(follower);
      mouseFollowerRef.current = follower;
    }
    
    // Use CSS variables for position to avoid layout thrashing
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        // Use transform instead of left/top to leverage GPU acceleration
        // This avoids repaints and layout recalculations
        mouseFollowerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        mouseFollowerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // We don't remove the follower on unmount since it's used globally
    };
  }, []);

  return null; // No visible rendering, just effects
};

export default MouseFollower;
