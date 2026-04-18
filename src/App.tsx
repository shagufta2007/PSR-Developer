/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { ProblemSolution } from './components/ProblemSolution';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-white selection:bg-neon-purple selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <CustomCursor />
      
    <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <ProblemSolution />
        <Portfolio />
        <Process />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}
