import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, CircleDollarSign, ShieldCheck } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Features = () => {
  const features = [
    { title: "Fast Performance", desc: "Lightning load speeds for better SEO and UX.", icon: <Zap className="w-6 h-6" /> },
    { title: "Mobile First", desc: "Pixel perfect on every screen size.", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Conversion Focus", desc: "Design that actually leads to sales.", icon: <CircleDollarSign className="w-6 h-6" /> },
    { title: "Secure", desc: "Advanced security protocols to keep you safe.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-24">
      <SectionTitle 
        badge="Quality"
        title="Why Choose PSR"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-glass border border-white/5 hover:border-neon-purple/20 text-center space-y-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 mx-auto flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="text-white/60 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
