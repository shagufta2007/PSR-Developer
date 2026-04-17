import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-purple pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.4)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-cyan rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.2 }}
      />
    </>
  );
};
