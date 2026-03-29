
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
              <span className="text-xl font-bold tracking-tighter uppercase">Crowd Control</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              We build autonomous marketing systems that allow founders and CEOs to focus on vision while our AI handles the battle for attention.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(platform => (
                <a key={platform} href="#" className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{platform}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Our Ethos</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Career (Engineers Only)</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Press Inquiries</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Investor Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Strategy Session</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">The Lab</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Privacy & Control</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-xs text-slate-600 mb-4 md:mb-0">&copy; 2024 Crowd Control Marketing. All rights reserved by the algorithm.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
