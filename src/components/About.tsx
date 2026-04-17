import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

export const About = () => {
  const stats = [
    { label: "Client Projects", value: "2+" },
    { label: "Design Concepts", value: "10+" },
    { label: "Mobile Optimized", value: "100%" }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-xl mx-auto lg:mx-0 overflow-hidden rounded-3xl group"
        >
          <img 
            src="/about.png" 
            alt="Portrait"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>

        <div className="space-y-8">
          <SectionTitle 
            badge="About Me"
            title="I solve business problems with code."
            subtitle="I’m a passionate web developer focused on creating modern, fast, and revenue-driven websites. I don’t just design — I solve business problems."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-glass text-center border border-white/10"
              >
                <div className="text-3xl font-bold text-neon-cyan mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-white/60 leading-relaxed">
            My journey started with a simple goal: to make the web a more profitable place for brands. 
            I combine clean code with conversion-focused design to ensure your website isn't just a 
            digital business card, but a high-performing salesman.
          </p>
        </div>
      </div>
    </section>
  );
};
