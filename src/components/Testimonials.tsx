import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

export const Testimonials = () => {
  const list = [
    { name: "Waqar Hussain", role: "Principal, Al-Manzoor Education System", text: "I got my school website developed for Al-Manzoor Education System by PSR Developer, and the entire experience was truly smooth and satisfying. From the very start, their approach felt honest and professional — no unrealistic promises, just genuine work. What impressed me the most was their friendly and cooperative behavior. They listen carefully, understand your requirements, and guide you in a simple and clear manner. Communication was always easy, and they remained responsive throughout the process. The website they created for our school looks modern, clean, and perfectly represents our educational system. Everything is well-organized, visually appealing, and runs without any issues. Overall, I’m extremely satisfied with their service. If you’re looking for a reliable team that delivers quality work without any complications, PSR Developer is definitely a great choice.", img: "/waqar.png" },
    { name: "Shahjad", role: "Founder, Sultan Digital Zone", text: "I got my Sultan Digital Zone website developed by PSR Developer, and the whole experience was genuinely smooth and satisfying. From the beginning, their approach felt honest and professional — no fake promises, just real work. What I liked the most is their friendly behavior. They listen properly, understand your requirements, and guide you in a very simple and clear way. Communication was easy, and they were always responsive. The website they created for me looks modern, clean, and perfectly fits my business needs. Everything is well-designed and runs smoothly. You can check it here: https://digital-zone-six.vercel.app/ Overall, I’m really happy with their service. If you want someone reliable who delivers quality work without any hassle, PSR Developer is a great choice..", img: "/icon-192.png" },
    { name: "Ahmed Raza", role: "Operations Manager, Creative Hub", text: "Working with PSR Developer was a great experience. They understood our vision quickly and transformed it into a clean and professional digital solution. Their team was highly cooperative, met deadlines on time, and paid attention to every detail. The final result exceeded our expectations in both design and performance. I would definitely recommend them to anyone looking for reliable and high-quality development services.", img: "/review3.jpg" }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <SectionTitle 
        badge="Social Proof"
        title="What Clients Say"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-glass border border-white/5 flex flex-col justify-between hover:border-neon-cyan/30 transition-colors"
          >
            <p className="text-white/80 italic mb-8">“{t.text}”</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-[10px] uppercase font-bold text-neon-cyan">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
