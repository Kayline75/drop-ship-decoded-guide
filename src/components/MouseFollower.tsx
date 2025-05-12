
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
    
    // Add global mouse move listener
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        mouseFollowerRef.current.style.left = `${e.clientX}px`;
        mouseFollowerRef.current.style.top = `${e.clientY}px`;
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
