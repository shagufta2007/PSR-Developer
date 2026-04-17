import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-6 md:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-neon-purple/5 blur-[100px]" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display">Is your website failing you?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> The Problem
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>• Slow loading times driving users away</li>
              <li>• Confusing layout that kills conversions</li>
              <li>• Not optimized for mobile users</li>
              <li>• Looks like a generic $5 template</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
            <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> The Solution
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>• Lightning-fast performance scores</li>
              <li>• Psychological triggers for higher sales</li>
              <li>• Flawless mobile experience</li>
              <li>• Premium, custom unique identity</li>
            </ul>
          </div>
        </div>

        <p className="text-2xl text-white/80 italic font-medium">
          “Your website should work like a salesman — not just a design.”
        </p>
      </div>
    </section>
  );
};
