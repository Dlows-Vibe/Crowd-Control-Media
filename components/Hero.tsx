
import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const orbX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const orbY = useTransform(smoothY, [-500, 500], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const titleWords = "WE CONTROL".split(" ");
  const accentWord = "THE CROWD.".split("");

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full flex items-center justify-center px-6"
    >
      <motion.div 
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#bef264]/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="text-center relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-12"
        >
          <div className="px-6 py-2.5 glass rounded-full border border-[#bef264]/40 text-[#bef264] text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-4 bg-black/40">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bef264]"></span>
            </span>
            Neural Intelligence Active
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-extrabold font-display leading-[0.8] tracking-tighter mb-12">
          <div className="flex justify-center flex-wrap gap-x-10 mb-4">
            {titleWords.map((word, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] via-[#fbbf24] to-[#fde047] neon-glow">
            {accentWord.join("")}
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 mb-16 font-medium leading-relaxed"
        >
          Proprietary neural reasoning engines orchestrating mass-scale dominance. 
          <span className="text-[#bef264] font-bold"> We don't just market—we control.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="px-14 py-7 bg-[#bef264] text-black rounded-full text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(190,242,100,0.3)]">
            Deploy Agent
          </button>
          <button className="px-14 py-7 glass border border-white/20 rounded-full text-2xl font-bold hover:bg-white/10 text-white transition-all">
            The Laboratory
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
