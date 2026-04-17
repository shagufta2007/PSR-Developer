import React from 'react';
import { motion } from 'framer-motion';

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Pulsing Neon */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-neon-purple rounded-full blur-[150px]"
      />
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Brand Name */}
        <div className="relative overflow-hidden">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-white"
          >
            PSR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">DEVELOPER</span>
          </motion.h1>
          
          {/* Scanning Line Effect */}
          <motion.div 
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </div>

        {/* Minimal Progress Line */}
        <div className="w-48 h-px bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs font-mono tracking-[0.3em] uppercase text-white/40"
        >
          Initializing Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};
