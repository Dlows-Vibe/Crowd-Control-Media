
import React from 'react';
import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'M1', organic: 400, crowdControl: 600 },
  { name: 'M2', organic: 1200, crowdControl: 2800 },
  { name: 'M3', organic: 2000, crowdControl: 5900 },
  { name: 'M4', organic: 2400, crowdControl: 11000 },
  { name: 'M5', organic: 3000, crowdControl: 22000 },
  { name: 'M6', organic: 3500, crowdControl: 45000 },
];

const Stats: React.FC = () => {
  return (
    <section id="case-studies" className="py-40 bg-transparent relative overflow-hidden">
      {/* Decorative side orb */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#bef264]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[#bef264] font-black uppercase tracking-[0.4em] text-[12px] mb-6">Empirical Evidence</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold font-display leading-[0.9] mb-10 tracking-tighter text-white">
              Visualizing <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] to-[#fbbf24] drop-shadow-lg">The Yield Gap.</span>
            </h3>
            <p className="text-slate-400 text-xl mb-14 font-medium leading-relaxed max-w-lg">
              Standard marketing scales linearly and hits diminishing returns. 
              Our neural engines leverage viral feedback loops to create exponential trajectory.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-10 glass rounded-[3rem] border border-[#bef264]/10 bg-black/40"
              >
                <div className="text-5xl font-black text-white mb-3 font-display tracking-tighter shadow-[#bef264]/20">8.2x</div>
                <div className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em]">CAC Reduction</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-10 glass rounded-[3rem] border border-[#bef264]/10 bg-black/40"
              >
                <div className="text-5xl font-black text-white mb-3 font-display tracking-tighter shadow-[#bef264]/20">14M+</div>
                <div className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em]">Node Reach</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="glass rounded-[4rem] p-12 border border-[#bef264]/10 h-[500px] relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black/60"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#bef264] via-[#fbbf24] to-transparent opacity-60" />
            <h4 className="text-center text-[11px] font-black text-slate-500 mb-12 uppercase tracking-[0.4em]">
              Projection Engine: Control vs Chaos
            </h4>
            <ResponsiveContainer width="100%" height="75%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorControl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#bef264" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#bef264" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#ffffff08" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#050505', 
                    border: '1px solid rgba(190,242,100,0.2)', 
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                    padding: '16px'
                  }}
                  itemStyle={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}
                  cursor={{ stroke: '#bef264', strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="crowdControl" 
                  stroke="#bef264" 
                  strokeWidth={5}
                  fillOpacity={1} 
                  fill="url(#colorControl)" 
                  animationDuration={3000}
                />
                <Area 
                  type="monotone" 
                  dataKey="organic" 
                  stroke="#475569" 
                  strokeWidth={2}
                  fillOpacity={0.05}
                  fill="#475569" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-8 flex justify-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.5)]" />
                <span className="text-[11px] font-black text-slate-200 uppercase tracking-widest">Crowd Control</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-slate-600" />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Industry Standard</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
