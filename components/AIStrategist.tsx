
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateMarketingStrategy } from '../services/gemini';
import { StrategyResult } from '../types';

const AIStrategist: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState('');
  const [result, setResult] = useState<StrategyResult | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !industry || !goals) return;
    
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateMarketingStrategy(brand, industry, goals);
      setResult(data);
    } catch (err) {
      setError('System overload. The AI brain is currently cooling down.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="strategist" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] border border-[#bef264]/10 overflow-hidden shadow-[0_0_100px_rgba(190,242,100,0.1)]">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: Input */}
            <div className="w-full lg:w-5/12 p-10 md:p-14 bg-white/[0.01]">
              <div className="mb-10">
                <h2 className="text-[#bef264] font-black uppercase tracking-[0.2em] text-[11px] mb-4">Neural Strategist v1.4</h2>
                <h3 className="text-4xl font-extrabold font-display leading-tight text-white">
                  Design Your <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] to-[#fbbf24]">Market Takeover.</span>
                </h3>
              </div>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Brand Alias</label>
                  <input 
                    type="text" 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Enter Brand Name"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#bef264]/50 focus:border-[#bef264] outline-none transition-all placeholder:text-slate-700 font-medium text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sector</label>
                  <input 
                    type="text" 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g. Fintech, SaaS, Luxury"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#bef264]/50 focus:border-[#bef264] outline-none transition-all placeholder:text-slate-700 font-medium text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Objectives</label>
                  <textarea 
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Describe your desired dominance..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#bef264]/50 focus:border-[#bef264] outline-none transition-all h-32 resize-none placeholder:text-slate-700 font-medium text-white"
                    required
                  />
                </div>
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full group relative py-5 bg-[#bef264] text-black rounded-2xl font-black text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Calculating...
                      </>
                    ) : 'Initialize Growth Engine'}
                  </span>
                </button>
              </form>
            </div>

            {/* Right: Output */}
            <div className="w-full lg:w-7/12 p-10 md:p-14 bg-black/20 border-l border-white/5 flex flex-col items-center justify-center min-h-[500px]">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full space-y-8"
                  >
                    <div className="p-8 glass rounded-3xl border border-[#bef264]/20 bg-[#bef264]/[0.02]">
                      <div className="text-[10px] font-black text-[#bef264] mb-4 uppercase tracking-[0.2em]">The Vision</div>
                      <p className="text-xl text-slate-100 font-medium leading-relaxed italic">
                        "{result.overview}"
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="text-[10px] font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Execution Roadmap</div>
                      {result.steps.map((step, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-5 p-5 glass rounded-2xl border border-white/5 hover:border-[#bef264]/20 transition-colors"
                        >
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#bef264]/20 text-[#bef264] flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                          <p className="text-sm text-slate-300 font-medium leading-relaxed">{step}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col items-center pt-6">
                      <div className="text-[10px] font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Projected Dominance</div>
                      <div className="text-5xl font-extrabold font-display text-[#bef264] tracking-tighter">
                        {result.projectedImpact}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-[#bef264]/5 rounded-full border border-[#bef264]/10 flex items-center justify-center mx-auto mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-4xl"
                      >
                        ⚡
                      </motion.div>
                    </div>
                    <h4 className="text-2xl font-bold font-display text-white">Intelligence Standby</h4>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto font-medium">
                      Inject your brand parameters into the console to generate a high-fidelity market penetration strategy.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold"
                >
                  {error}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategist;
