import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Cpu, Database } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 }
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "MongoDB / Firebase", level: 85 },
        { name: "REST APIs", level: 90 }
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Brand Strategy", level: 75 }
      ],
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Tools",
      skills: [
        { name: "Git / GitHub", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Vercel / Netlify", level: 90 }
      ],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <SectionTitle 
        badge="Evolution"
        title="Modern Stack for Modern Results"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-glass border border-white/10 hover:border-neon-purple/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={si} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
