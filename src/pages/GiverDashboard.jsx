import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Sword, Zap, PlusCircle, ArrowRight, History, MessageSquare, MapPin } from 'lucide-react';

const GiverDashboard = () => {
  const yourQuests = [
    {
       title: "Grocery Extraction: Market 21",
       status: "Searching for Runner",
       time: "Started 15 mins ago",
       price: "250 PHP",
       runner: "Pending..."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-64px)] px-6 py-12 bg-obsidian text-white w-full max-w-7xl mx-auto">

      {/* Giver Header */}
      <section className="w-full mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 text-cyan-glow font-bold text-xs uppercase tracking-widest mb-2">
             <Shield size={14} className="fill-current" />
             <span>The Overseer</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Quest Command</h1>
        </div>

        <div className="flex gap-4">
           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col min-w-[120px]">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Reputation</span>
              <span className="text-xl font-bold text-cyan-glow">5.00</span>
           </div>
           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col min-w-[120px]">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Credits</span>
              <span className="text-xl font-bold text-white">5,000 PHP</span>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        {/* Create Quest Card */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl border border-cyan-glow/20 bg-gradient-to-br from-white/[0.05] to-transparent shadow-2xl shadow-cyan-glow/5 group overflow-hidden relative"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/5 blur-[80px] -z-10 rounded-full" />

            <div className="flex flex-col items-center text-center max-w-md mx-auto">
               <div className="p-6 bg-cyan-glow/10 rounded-full mb-8 group-hover:bg-cyan-glow/20 transition-colors">
                  <PlusCircle size={48} className="text-cyan-glow" />
               </div>
               <h3 className="text-3xl font-bold mb-4">Forge a New Quest</h3>
               <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                  Outsource your friction. Reclaim your day. From errands to skilled trades, verified Runners are standing by.
               </p>
               <button className="w-full bg-white text-obsidian font-bold py-5 rounded-2xl text-xl flex items-center justify-center gap-3 hover:bg-cyan-glow transition-all animate-electric">
                  Initialize Protocol <Sword size={24} />
               </button>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold px-2">Active Protocols</h3>
            {yourQuests.map((quest, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-6 flex-grow">
                   <div className="p-4 bg-cyan-glow/10 rounded-xl">
                      <Zap size={24} className="text-cyan-glow animate-pulse" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-bold text-white">{quest.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                         <span className="text-cyan-glow">{quest.status}</span>
                         <span>• {quest.time}</span>
                         <span className="text-white">{quest.price}</span>
                      </div>
                   </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                   <button className="flex-grow md:flex-initial bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                      <MessageSquare size={16} /> Signal
                   </button>
                   <button className="flex-grow md:flex-initial bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                      Details <ArrowRight size={16} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl font-bold mb-8">Trust Dashboard</h3>
              <div className="space-y-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                       <ShieldCheck size={20} className="text-cyan-glow" />
                       <span className="text-sm font-bold uppercase tracking-widest text-white">Shadow Rating</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-bold text-white">5.0</span>
                       <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">/ 5.0</span>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 leading-relaxed italic">"Exceptional Giver. Clear instructions and prompt validation."</p>
                 </div>

                 <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-1">Mastery Access</h5>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 opacity-50 text-sm">
                       <span>True-Rated Trades</span>
                       <Shield size={14} className="text-gray-700" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 opacity-50 text-sm">
                       <span>Elite Runner Pool</span>
                       <Sword size={14} className="text-gray-700" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-between">
                Intel
                <History size={16} className="text-gray-600" />
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin size={16} className="text-cyan-glow" />
                    <span>84 Runners active nearby</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Zap size={16} className="text-gray-600" />
                    <span>Fulfillment rate: 98.4%</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GiverDashboard;
