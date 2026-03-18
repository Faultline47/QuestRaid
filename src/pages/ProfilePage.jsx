import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Sword,
  Shield,
  MapPin,
  Zap,
  MessageSquare,
  ChevronRight,
  Settings,
  LogOut,
  TrendingUp,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useRole } from '../contexts/RoleContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { isRunnerMode, toggleRole } = useRole();

  if (!user) return null;

  const accentColor = isRunnerMode ? 'text-lightning' : 'text-cyan-glow';
  const accentBg = isRunnerMode ? 'bg-lightning' : 'bg-cyan-glow';
  const accentBorder = isRunnerMode ? 'border-lightning/30' : 'border-cyan-glow/30';
  const accentShadow = isRunnerMode ? 'shadow-lightning/20' : 'shadow-cyan-glow/20';

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-64px)] px-6 py-12 bg-obsidian text-white w-full max-w-5xl mx-auto">

      {/* Profile Header */}
      <section className={`w-full relative py-12 px-8 flex flex-col md:flex-row items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden mb-12 transition-all duration-500`}>
        <div className={`absolute top-0 right-0 w-64 h-64 ${isRunnerMode ? 'bg-lightning/10' : 'bg-cyan-glow/10'} blur-[80px] -z-10 rounded-full transition-colors`} />
        <div className={`absolute bottom-0 left-0 w-64 h-64 ${isRunnerMode ? 'bg-cyan-glow/5' : 'bg-lightning/5'} blur-[80px] -z-10 rounded-full transition-colors`} />

        <div className="relative group">
          <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full border-4 ${isRunnerMode ? 'border-lightning/30' : 'border-cyan-glow/30'} p-1 bg-obsidian relative overflow-hidden group-hover:${isRunnerMode ? 'border-lightning' : 'border-cyan-glow'} transition-all duration-500`}>
             {user.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
             ) : (
                <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center">
                   <User size={64} className="text-gray-500" />
                </div>
             )}
          </div>
          <div className={`absolute -bottom-2 -right-2 p-2 ${accentBg} rounded-full border-4 border-obsidian shadow-lg shadow-black/50 transition-colors`}>
            <Zap size={20} className="text-white fill-current" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight">{user.displayName}</h1>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Lv. {user.level}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <MapPin size={16} className={accentColor} />
              <span>San Francisco Sector</span>
            </div>
            <div className="flex items-center gap-1">
              {isRunnerMode ? <Sword size={16} className={accentColor} /> : <Shield size={16} className={accentColor} />}
              <span className="capitalize">{user.role} Identity</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck size={16} className={accentColor} />
              <span>Verified Agent</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
            <button className={`flex-grow md:flex-initial bg-white text-obsidian font-bold px-8 py-3 rounded-xl hover:${accentBg} hover:text-white transition-all flex items-center justify-center gap-2 text-sm shadow-lg ${accentShadow}`}>
              <Settings size={16} /> Edit Profile
            </button>
            <button
              onClick={logout}
              className="p-3 bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-white rounded-xl transition-all"
              title="Sign Out"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Role Toggle Section */}
      <section className="w-full mb-12 p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500">
        <div className="max-w-md">
          <h3 className="text-xl font-bold mb-2">Interface Configuration</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Switch between Giver and Runner roles to access different dashboards and protocols.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className={`text-xs font-bold uppercase tracking-widest ${!isRunnerMode ? 'text-cyan-glow' : 'text-gray-500'}`}>Giver</span>
          <button
            onClick={toggleRole}
            className={`w-20 h-10 rounded-full ${isRunnerMode ? 'bg-lightning' : 'bg-cyan-glow'} p-1 transition-colors relative`}
          >
            <motion.div
              animate={{ x: isRunnerMode ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              {isRunnerMode ? <Sword size={16} className="text-lightning" /> : <Shield size={16} className="text-cyan-glow" />}
            </motion.div>
          </button>
          <span className={`text-xs font-bold uppercase tracking-widest ${isRunnerMode ? 'text-lightning' : 'text-gray-500'}`}>Runner</span>
        </div>
      </section>

      {/* Stats and Achievements Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* XP Progress Card */}
        <div className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-white/[0.02] transition-all">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Quest Progression</h3>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {user.xp} / {(user.level) * 100} XP to Lv. {user.level + 1}
            </span>
          </div>

          <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-6 border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(user.xp / ((user.level) * 100)) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-full bg-gradient-to-r ${isRunnerMode ? 'from-lightning to-cyan-glow' : 'from-cyan-glow to-lightning'}`}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">{user.completedQuests}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                {isRunnerMode ? 'Quests Run' : 'Quests Posted'}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">{user.totalEarned}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                {isRunnerMode ? 'Earnings' : 'Invested'} (PHP)
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white mb-1">{user.reputation.toFixed(1)}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Reputation</span>
            </div>
          </div>
        </div>

        {/* Recent Mastery Card */}
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col transition-all">
          <h3 className="text-xl font-bold mb-8">Asset Intel</h3>

          <div className="space-y-4 flex-grow">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${accentBg} flex items-center justify-center`}>
                   <TrendingUp size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium">Yield History</span>
              </div>
              <ChevronRight size={14} className="text-gray-600 group-hover:text-white" />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${accentBg} flex items-center justify-center`}>
                   <CreditCard size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium">Wallet Vault</span>
              </div>
              <ChevronRight size={14} className="text-gray-600 group-hover:text-white" />
            </div>
          </div>

          <p className={`mt-8 text-xs text-center font-bold uppercase tracking-widest transition-colors ${accentColor}`}>
            Verified Agent Status
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
