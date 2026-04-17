import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

interface Project {
  title: string;
  category: 'Real' | 'Concept';
  image: string;
 
  link?: string;
}

export const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Lumina Scent Store",
      category: 'Real',
      image: "/educatinalwebsite.png",
    link :"https://al-manzoor-education-system-gogera.vercel.app/"
    },
    {
      title: "Oceania Real Estate",
      category: 'Real',
    image: "/digitalzone.png",
      link :"https://digital-zone-six.vercel.app/"
    },
    {
      title: "E-commerce UI Concept",
      category: 'Concept',
      image: "/restorent.png",
      link :"https://aurelius-food.vercel.app/"
    },
    {
      title: "Business Landing Page Design",
      category: 'Concept',
    image: "/golari.png",
     link :"https://aurelius-collection.vercel.app/"
    },
    {
      title: "Dashboard UI Design",
      category: 'Concept',
      image: "/guesthouse.png",
      link :"https://design-by-psr-developer-agency-acad-three.vercel.app/"
    },
    {
      title: "Mobile App UI Design",
      category: 'Concept',

      image: "/showroom.png",
     link :"https://elitewheels.vercel.app/"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-24">
      <SectionTitle 
        badge="Case Studies"
        title="Latest Projects"
        subtitle="Divide into real results and creative design experiments to show the full potential."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col interactive overflow-hidden rounded-3xl bg-glass border border-white/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <motion.img 
                src={proj.image} 
                alt={proj.title}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${
                  proj.category === 'Real' ? 'bg-green-500 text-black shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                }`}>
                  {proj.category === 'Real' ? '🟢 Client Work' : '🔵 Concept Design'}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">{proj.title}</h3>
                
              
              </div>

             
              
              <div className="flex gap-4 mt-6">
             <a 
  href={proj.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neon-purple hover:text-neon-cyan transition-colors"
>
  Live Preview <ExternalLink className="w-3 h-3" />
</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
