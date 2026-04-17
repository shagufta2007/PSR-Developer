import React from 'react';
import { GlowingButton } from './GlowingButton';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-6 flex justify-between items-center bg-black/50 backdrop-blur-lg border-bottom border-white/5">
      <div 
        className="text-2xl font-heading font-black tracking-tighter interactive cursor-pointer" 
        onClick={() => {
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        PSR<span className="text-neon-purple">DEVELOPER</span>
      </div>
      <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-bold">
        <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
        <a href="#work" className="hover:text-neon-cyan transition-colors">Work</a>
        <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
      </div>
      <GlowingButton 
        variant="outline" 
        className="px-6 py-2 rounded-full text-xs"
        onClick={() => document.getElementById('contact')?.scrollIntoView()}
      >
        Let's Talk
      </GlowingButton>
    </nav>
  );
};
