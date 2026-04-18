
import React from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { ChevronDown } from 'lucide-react';
 import { GlowingButton } from './GlowingButton'; 
export const Hero = () => {
 const { scrollYProgress } = useScroll();
 const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
 return ( 
<section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-0 overflow-hidden">
 {/* Background Gradients */}
 <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-neon-purple/20 blur-[120px] rounded-full" />
 <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-neon-cyan/10 blur-[120px] rounded-full" /> 
<motion.div style={{ y }} className="relative z-10 max-w-5xl space-y-4" >
 <div className="space-y-4">
 <motion.p initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 className="text-neon-cyan font-mono tracking-widest uppercase text-sm" >

 Helping brands grow online with modern, high-converting websites. 
</motion.p> 
<motion.h1 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }} 
transition={{ delay: 0.2 }} 
className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tighter" > 
I DON’T JUST <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
BUILD WEBSITES</span>
 </motion.h1>
 <motion.h2 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white/80 max-w-4xl" >
 I BUILD ONLINE BUSINESSES <br /> THAT MAKE MONEY.
 </motion.h2>
 </div>
 <motion.div initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="flex flex-wrap gap-4" >
 <GlowingButton onClick={() => document.getElementById('work')?.scrollIntoView()}> 
View My Work
 </GlowingButton> 
<GlowingButton variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView()}> 
Start Your Project
 </GlowingButton> 
</motion.div>
 </motion.div>
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" > 
<span className="text-xs uppercase tracking-widest text-white/40">
Scroll to explore</span>
 <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} > 
<ChevronDown className="text-white/40" />
 </motion.div> 
</motion.div> </section> );
 };
