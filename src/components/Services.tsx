import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Layout, Zap, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Services = () => {
  const services = [
    {
      title: "E-Commerce Websites",
      description: "Custom storefronts designed to sell. From inventory to checkout, I make it seamless.",
      result: "Increase your online sales with optimized stores",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Business Websites",
      description: "Establish your authority with a professional, fast, and secure corporate presence.",
      result: "Build trust and generate more B2B leads",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "User-centric designs that prioritize usability while keeping things visually stunning.",
      result: "Improve user retention and conversion rates",
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: "Website Optimization",
      description: "Speeding up slow sites and fixing SEO issues to rank higher on Google.",
      result: "Better Google ranking & faster load speeds",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <SectionTitle 
        badge="Offerings"
        title="Interactive Services"
        subtitle="Specially crafted solutions for businesses that want more than just a template."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-glass border border-white/5 hover:border-neon-cyan/50 transition-all group"
          >
            <div className="text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/60 mb-6">{service.description}</p>
            <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
              <span className="text-sm font-semibold text-neon-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Result: {service.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
