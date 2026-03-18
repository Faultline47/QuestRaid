import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Zap, MapPin, Clock, ShieldCheck, ChevronRight, PlayCircle } from 'lucide-react';

const RunnerDashboard = () => {
  const activeQuests = [
    {
      title: "Grocery Extraction: Market 21",
      giver: "Giver #442",
      distance: "1.2 km",
      time: "45 mins",
      reward: "250 PHP + 5 XP",
      status: "Available",
      urgency: "High"
    },
    {
      title: "Secure Document Transport",
      giver: "Giver #109",
      distance: "5.4 km",
      time: "20 mins",
      reward: "800 PHP + 15 XP",
      status: "Available",
      urgency: "Medium"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-64px)] px-6 py-12 bg-obsidian text-white w-full max-w-7xl mx-auto">

      {/* Runner Header */}
      <section className="w-full mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 text-cyan-glow font-bold text-xs uppercase tracking-widest mb-2">
             <Sword size={14} className="fill-current" />
             <span>The Frontier</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Active Quests</h1>
        </div>

        <div className="flex gap-4">
           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col min-w-[120px]">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Current XP</span>
              <span className="text-xl font-bold text-cyan-glow">0 / 100</span>
           </div>
           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col min-w-[120px]">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Wallet</span>
              <span className="text-xl font-bold text-white">0 PHP</span>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        {/* Quest List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold">Nearby Opportunities</h3>
            <button className="text-xs font-bold text-cyan-glow uppercase tracking-widest hover:underline">Filter Results</button>
          </div>

          {activeQuests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01, border: "1px solid rgba(34,211,238,0.3)" }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 group transition-all"
            >
              <div className="flex flex-col gap-2 flex-grow">
                 <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${quest.urgency === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-cyan-glow/10 text-cyan-glow'}`}>
                       {quest.urgency} Urgency
                    </span>
                    <span className="text-gray-600 font-bold text-[10px] uppercase tracking-widest">• {quest.giver}</span>
                 </div>
                 <h4 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors">{quest.title}</h4>
                 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1.5">
                       <MapPin size={14} className="text-gray-600" />
                       <span>{quest.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <Clock size={14} className="text-gray-600" />
                       <span>{quest.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <ShieldCheck size={14} className="text-gray-600" />
                       <span className="text-cyan-glow font-bold">{quest.reward}</span>
                    </div>
                 </div>
              </div>

              <button className="w-full md:w-auto bg-white/5 border border-white/10 hover:border-cyan-glow hover:bg-cyan-glow hover:text-obsidian text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                 Accept <PlayCircle size={18} />
              </button>
            </motion.div>
          ))}

          <div className="p-8 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center opacity-50">
             <Zap size={32} className="text-gray-700 mb-4" />
             <p className="text-gray-500 text-sm font-medium">More quests are being forged. Stand by for transmissions.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lightning/10 blur-[50px] -z-10 rounded-full" />
              <h3 className="text-xl font-bold mb-6">Mastery Track</h3>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                       <span>Runner Rank</span>
                       <span className="text-cyan-glow">Novice</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                       <div className="h-full bg-lightning w-1/12" />
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group cursor-help transition-all">
                    <div className="p-2 bg-lightning/20 rounded-lg">
                       <Zap size={18} className="text-cyan-glow" />
                    </div>
                    <div>
                       <h5 className="text-sm font-bold text-white mb-1">First Blood Bonus</h5>
                       <p className="text-xs text-gray-500 leading-relaxed">Complete your first quest to unlock the 'Lightning Uniform' starter kit.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-between">
                Intel
                <span className="px-2 py-0.5 bg-cyan-glow/10 text-cyan-glow text-[10px] rounded-full">LIVE</span>
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
                    <span>High demand in San Francisco</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <span>Weather: Heavy Rain (1.2x XP)</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RunnerDashboard;
