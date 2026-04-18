import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

export const Experience = () => {
  const items = [
    {
      role: "Freelance Web Developer",
      period: "2022 – Present",
      desc: "Focusing on building revenue-driven websites for startups and small businesses. Managing end-to-end development from Figma to Deployment.",
      type: "Professional"
    },
    {
      role: "Self Projects & Practice Work",
      period: "2023 – 2024",
      desc: "Deep diving into advanced Next.js patterns, performance optimization, and interactive UI component development.",
      type: "Growth"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-24">
      <SectionTitle 
        badge="Career"
        title="My Journey"
      />

      <div className="max-w-4xl space-y-12">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-neon-purple"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-neon-cyan tracking-widest">{item.period}</span>
              <h3 className="text-3xl font-bold text-white">{item.role}</h3>
              <p className="text-white/60 leading-relaxed max-w-2xl">{item.desc}</p>
              <div className="inline-block mt-4 text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded">
                Tag: {item.type}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
