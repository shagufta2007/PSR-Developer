import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const FAQ = () => {
  const faqs = [
    { question: "How long does a website take?", answer: "A typical business website takes 2-4 weeks. Complex e-commerce stores can take 6-8 weeks depending on the features." },
    { question: "What is the cost?", answer: "Projects start at $500. However, every project is unique, and I provide custom quotes based on your specific requirements." },
    { question: "Do you provide support?", answer: "Yes! I provide 30 days of free support post-launch to ensure everything runs smoothly." },
    { question: "Can I edit the website later?", answer: "Absolutely. I build mostly on Next.js with CMS integration so you can edit text and images easily without coding." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-24">
      <SectionTitle 
        badge="FAQ"
        title="Client Doubts"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border border-white/5 bg-glass rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-bold">{f.question}</span>
              <Plus className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-45' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-white/60 text-sm"
                >
                  {f.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
