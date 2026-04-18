import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, MessageSquare } from 'lucide-react';

export const Footer = () => {
  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/PSRDeveloper", name: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/psr-developer-aa3b6a388/", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/psrdeveloper/", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, link: "https://x.com/psrdeveloper", name: "Twitter" },
    { icon: <MessageSquare className="w-5 h-5" />, link: "https://www.threads.com/@psrdeveloper?hl=en", name: "Threads" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-3xl font-heading font-black tracking-tighter interactive cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            PSR<span className="text-neon-purple">DEVELOPER</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Building modern, revenue-driven websites that help businesses grow in the digital era.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/60">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#about" className="hover:text-neon-purple transition-colors">About Us</a></li>
            <li><a href="#work" className="hover:text-neon-purple transition-colors">Our Work</a></li>
            <li><a href="#contact" className="hover:text-neon-purple transition-colors">Hire Me</a></li>
            <li><a href="#faq" className="hover:text-neon-purple transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/60">Services</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-neon-purple transition-colors">E-Commerce</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">Web Optimization</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">Business Sites</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/60">Follow Us</h4>
          <div className="flex gap-4">
            {socialMedia.map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all text-white/40"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 text-center">
        <div className="text-white/20 text-[10px] uppercase tracking-[0.4em]">
          &copy; 2026 PSR DEVELOPER . ALL RIGHTS RESERVED . CRAFTED WITH PASSION
        </div>
      </div>
    </footer>
  );
};
