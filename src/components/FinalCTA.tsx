import React from 'react';
import { motion } from 'framer-motion';
import { GlowingButton } from './GlowingButton';

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6 md:px-24 text-center space-y-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 blur-[100px] opacity-30" />
      <motion.h2 
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="text-4xl md:text-6xl font-bold font-heading relative z-10"
      >
        Ready to Turn Your Idea Into a <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Profitable Website?</span>
      </motion.h2>
      <div className="relative z-10">
        <GlowingButton 
          variant="cyan" 
          className="text-lg px-12 py-6"
          onClick={() => document.getElementById('contact')?.scrollIntoView()}
        >
           Hire PSR Now
        </GlowingButton>
      </div>
    </section>
  );
};
