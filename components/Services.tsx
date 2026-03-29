
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Autonomous Content Swarms",
    description: "AI that monitors trends in real-time and deploys perfectly-timed content across 12+ channels simultaneously.",
    icon: "🚀",
    metric: "4x Velocity"
  },
  {
    title: "Neuro-Visual Optimization",
    description: "Deep-learning models that analyze heatmaps and eye-tracking data to design high-converting visual assets.",
    icon: "👁️",
    metric: "88% CTR Lift"
  },
  {
    title: "Sentient Community Management",
    description: "Scale your engagement without the overhead. AI agents that mimic your brand voice and build genuine loyalty.",
    icon: "🤝",
    metric: "24/7 Presence"
  },
  {
    title: "Predictive Audience Cloning",
    description: "Identify your perfect customers and use genetic algorithms to find millions more just like them.",
    icon: "🧬",
    metric: "12x ROI"
  },
  {
    title: "Hyper-Personalized Outreach",
    description: "Automate million-scale cold outreach that feels like a hand-written letter from a trusted friend.",
    icon: "✉️",
    metric: "45% Reply Rate"
  },
  {
    title: "Algorithm Arbitrage",
    description: "We exploit social media algorithms before they even announce changes, giving you the first-mover edge.",
    icon: "📈",
    metric: "Top 1% Reach"
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-[#bef264] font-black uppercase tracking-[0.4em] text-[12px] mb-4">
          Capabilities Arsenal
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold font-display leading-[1] mb-6 text-white">
          Weaponized Intelligence <br /> 
          <span className="text-slate-600">for market domination.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-10 glass rounded-[2.5rem] border border-[#bef264]/20 transition-all hover:border-[#bef264]/60 hover:bg-white/[0.03] group relative overflow-hidden flex flex-col h-full"
          >
            <div className="text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">{service.icon}</div>
            <h4 className="text-2xl font-bold mb-4 group-hover:text-[#bef264] transition-colors font-display text-white">
              {service.title}
            </h4>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
              <span className="text-[10px] font-black text-[#bef264] uppercase tracking-widest">Efficiency</span>
              <span className="text-xl font-black font-display text-white">{service.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
