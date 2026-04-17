import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const SectionTitle = ({ title, subtitle, badge }: SectionTitleProps) => (
  <div className="mb-16 space-y-4">
    {badge && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1 text-xs font-medium tracking-[0.2em] uppercase border border-white/20 rounded-full text-neon-cyan"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-display font-bold"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-white/60 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
