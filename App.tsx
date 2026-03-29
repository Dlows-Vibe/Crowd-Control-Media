
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIStrategist from './components/AIStrategist';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#bef264" },
      links: {
        color: "#bef264",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 120 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-[#050505] text-[#ecfdf5] relative selection:bg-[#bef264] selection:text-black">
      
      {/* GLOBAL NEURAL NET BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {init && (
          <Particles 
            id="tsparticles" 
            options={particlesOptions as any} 
            className="w-full h-full opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </div>

      <Navbar />

      {/* SCROLL PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#bef264] z-[100] origin-left shadow-[0_0_10px_#bef264]"
        style={{ scaleX }}
      />

      <main className="relative z-10 w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* SERVICES SECTION */}
        <section className="relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto"
          >
            <Services />
          </motion.div>
        </section>

        {/* AI STRATEGIST SECTION */}
        <section className="relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto"
          >
            <AIStrategist />
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto"
          >
            <Stats />
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-48 text-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[4rem] border border-[#bef264]/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-extrabold font-display mb-10 tracking-tighter leading-[0.9]">
              READY TO <br />
              <span className="text-[#bef264]">CONTROL?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto font-medium">
              Join the elite tier of brands using autonomous neural systems to dominate their market.
            </p>
            <button className="px-16 py-8 bg-[#bef264] text-black rounded-full text-2xl font-black hover:scale-105 transition-all shadow-[0_20px_60px_rgba(190,242,100,0.3)]">
              Initialize Audit
            </button>
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
