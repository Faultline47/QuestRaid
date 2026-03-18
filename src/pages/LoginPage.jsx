import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-black relative overflow-hidden"
      >
        {/* Glow behind the card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-lightning/10 blur-3xl -z-10" />

        <div className="flex flex-col items-center mb-10">
          <div className="p-4 bg-cyan-glow/10 rounded-2xl mb-6">
            <Lock className="w-8 h-8 text-cyan-glow drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Access the Vault</h1>
          <p className="text-gray-400 text-center text-sm">
            Enter your credentials to continue your journey through the Realm.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Ident-Token (Email)</label>
            <input
              type="email"
              placeholder="runner@questraid.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Pass-Key</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-obsidian font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-cyan-glow transition-colors animate-electric mt-4"
          >
            Decrypt & Enter <ArrowRight size={20} />
          </motion.button>
        </form>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="h-px w-full bg-white/5 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian px-4 text-xs font-bold text-gray-600 uppercase tracking-widest">or forge new account</span>
          </div>

          <div className="flex gap-4 w-full">
            <button className="flex-grow bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition-all text-sm">
              Giver
            </button>
            <button className="flex-grow bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition-all text-sm">
              Runner
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
          <Shield size={12} className="text-gray-600" />
          Encrypted by QuestRaid Protocol
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
