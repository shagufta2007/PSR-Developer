import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

export const Process = () => {
  const steps = [
    { title: "Discussion", desc: "Understanding your goals, audience, and challenges." },
    { title: "Planning", desc: "Crafting the strategy, sitemap, and wireframes." },
    { title: "Design", desc: "Creating a stunning high-fidelity interface in Figma." },
    { title: "Development", desc: "Coding the logic with clean React & Tailwind patterns." },
    { title: "Launch", desc: "Testing, optimization, and pushing your site to the world." }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <SectionTitle 
        badge="Workflow"
        title="The Path to Perfection"
        subtitle="My systematic approach to turning ideas into results."
      />

      <div className="relative space-y-12">
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2" />
        
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 text-left md:text-right px-12 space-y-2">
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-white/60 text-sm max-w-sm ml-auto mr-0 md:mr-0 md:ml-auto">
                {step.desc}
              </p>
            </div>
            
            <div className="relative z-10 w-10 h-10 rounded-full bg-neon-purple border-4 border-black flex items-center justify-center font-bold text-xs ring-4 ring-neon-purple/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              {i + 1}
            </div>
            
            <div className="w-full md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
