import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm PSR's Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Enhanced bot logic
    setTimeout(() => {
      let botResponse = "That sounds interesting! Please provide more details so I can better assist you. Or would you like to discuss a project?";
      const lowInput = input.toLowerCase();
      
      if (lowInput.includes("service") || lowInput.includes("pricing") || lowInput.includes("offer")) {
        botResponse = "I offer a variety of services including E-commerce stores (Next.js/Shopify), Corporate Business sites, UI/UX Design (Figma), and Performance Optimization. Pricing starts at $500! Want a custom quote?";
      } else if (lowInput.includes("hello") || lowInput.includes("hi") || lowInput.includes("hey")) {
        botResponse = "Hello there! I'm PSR's Virtual Assistant. Ready to turn your digital ideas into high-converting realities?";
      } else if (lowInput.includes("contact") || lowInput.includes("hire") || lowInput.includes("whatsapp")) {
        botResponse = "You can jump straight to a conversation! Click the 'Hire PSR' button or reach out on WhatsApp at +923337044053.";
      } else if (lowInput.includes("portfolio") || lowInput.includes("work") || lowInput.includes("project")) {
        botResponse = "PSR has worked on successful client projects like Lumina Scent and Oceania Real Estate. You can view 6+ projects in the Work section!";
      } else if (lowInput.includes("time") || lowInput.includes("duration")) {
        botResponse = "Most business sites take 2-4 weeks. Larger projects take 6-8 weeks. Efficiency + Quality is the goal!";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] h-[450px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-neon-purple/20"
          >
            <div className="p-4 bg-neon-purple/20 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-sm tracking-tight">PSR AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-neon-purple transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white/5 border border-white/10 rounded-tl-none' : 'bg-neon-purple text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-neon-purple transition-colors"
              />
              <button type="submit" className="w-10 h-10 rounded-xl bg-neon-purple flex items-center justify-center hover:scale-110 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-neon-purple flex items-center justify-center shadow-2xl shadow-neon-purple/40 ring-4 ring-neon-purple/20"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};
