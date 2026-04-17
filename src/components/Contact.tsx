import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { GlowingButton } from './GlowingButton';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message
    const whatsappMessage = `Hello PSR! My name is ${formData.name}. %0AEmail: ${formData.email} %0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923337044053?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <SectionTitle 
            badge="Contact"
            title="Let’s discuss your project."
            subtitle="Ready to turn your idea into reality? Fill the form or reach out directly."
          />
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:shguftarani234@gmil.com'}>
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase text-white/40 font-bold">Email Me</div>
                <div className="font-medium">shguftarani234@gmil.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/923337044053', '_blank')}>
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase text-white/40 font-bold">WhatsApp</div>
                <div className="font-medium">+92 333 7044053</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 shadow-2xl shadow-neon-purple/5"
        >
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-white/40">Full Name</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-white/40">Email Address</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-white/40">Your Project Brief</label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors"
              placeholder="Describe your idea..."
            />
          </div>
          <GlowingButton type="submit" className="w-full">
            Send via WhatsApp
          </GlowingButton>
        </motion.form>
      </div>
    </section>
  );
};
