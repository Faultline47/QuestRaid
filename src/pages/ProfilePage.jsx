import React from 'react';
import { motion } from 'framer-motion';
import { User, Sword, Shield, MapPin, Zap, MessageSquare, ChevronRight, Settings } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-64px)] px-6 py-12 bg-obsidian text-white w-full max-w-5xl mx-auto overflow-hidden">

      {/* Profile Header */}
      <section className="w-full relative py-12 px-8 flex flex-col md:flex-row items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lightning/10 blur-[80px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-glow/5 blur-[80px] -z-10 rounded-full" />

        <div className="relative group">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-cyan-glow/30 p-1 bg-obsidian relative overflow-hidden group-hover:border-cyan-glow transition-all duration-500">
             <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center">
                <User size={64} className="text-gray-500" />
             </div>
          </div>
          <div className="absolute -bottom-2 -right-2 p-2 bg-lightning rounded-full border-4 border-obsidian shadow-lg shadow-black/50">
            <Zap size={20} className="text-white fill-current" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight">Novice Runner</h1>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Lv. 1</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-cyan-glow" />
              <span>San Francisco Sector</span>
            </div>
            <div className="flex items-center gap-1">
              <Sword size={16} className="text-cyan-glow" />
              <span>Fulfillment Novice</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-cyan-glow" />
              <span>Verified Identity</span>
            </div>
          </div>

          <div className="flex gap-4 w-full max-w-md">
            <button className="flex-grow bg-white text-obsidian font-bold py-3 rounded-xl hover:bg-cyan-glow transition-all flex items-center justify-center gap-2 text-sm">
              <Settings size={16} /> Edit Profile
            </button>
            <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl transition-all">
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats and Achievements Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* XP Progress Card */}
        <div className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Quest Progression</h3>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">0 / 100 XP to Lv. 2</span>
          </div>

          <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-6 border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-lightning to-cyan-glow"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">0</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Quests Finished</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">0</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Earnings (PHP)</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">5.0</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Reputation</span>
            </div>
          </div>
        </div>

        {/* Recent Mastery Card */}
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col">
          <h3 className="text-xl font-bold mb-8">Mastery Track</h3>

          <div className="space-y-4 flex-grow">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                   <Zap size={14} />
                </div>
                <span className="text-sm font-medium">True-Rated Mastery</span>
              </div>
              <ChevronRight size={14} />
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                   <Users size={14} />
                </div>
                <span className="text-sm font-medium">Community Mastery</span>
              </div>
              <ChevronRight size={14} />
            </div>
          </div>

          <p className="mt-8 text-xs text-center text-gray-500 font-bold uppercase tracking-widest">Complete first quest to unlock</p>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
