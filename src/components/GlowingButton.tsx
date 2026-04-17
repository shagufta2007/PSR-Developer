import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const GlowingButton = ({ 
  children, 
  variant = 'purple', 
  className = '',
  onClick,
  type = 'button'
}: GlowingButtonProps) => {
  const styles = {
    purple: "bg-neon-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    cyan: "bg-neon-cyan text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 interactive ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
