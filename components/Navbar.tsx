
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'AI Strategist', href: '#strategist' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-[#bef264]/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-[#bef264] to-[#fbbf24] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(190,242,100,0.3)]">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display uppercase text-white">
            Crowd Control
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-[#bef264] transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#bef264] text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(190,242,100,0.4)] transition-all"
          >
            Work with us
          </motion.button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-[#bef264]/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-lg font-medium hover:text-[#bef264]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full py-3 bg-[#bef264] text-black rounded-lg font-bold">
                Work with us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;