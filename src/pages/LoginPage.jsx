import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to="/profile" replace />;
  }

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

        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div
            animate={{
              filter: ["drop-shadow(0 0 0px rgba(34,211,238,0))", "drop-shadow(0 0 10px rgba(34,211,238,0.5))", "drop-shadow(0 0 0px rgba(34,211,238,0))"]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-4 bg-cyan-glow/10 rounded-2xl mb-6"
          >
            <Lock className="w-8 h-8 text-cyan-glow" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Access the Vault</h1>
          <p className="text-gray-400 text-sm">
            Authenticate to continue your journey through the QuestRaid Realm.
          </p>
        </div>

        <div className="space-y-6">
          <motion.button
            onClick={login}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-obsidian font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 hover:bg-cyan-glow transition-colors animate-electric shadow-lg shadow-cyan-glow/20"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </motion.button>

          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="h-px w-full bg-white/5 relative">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian px-4 text-xs font-bold text-gray-600 uppercase tracking-widest">protocol security</span>
            </div>

            <p className="text-center text-xs text-gray-500 leading-relaxed max-w-[280px]">
              By entering the Realm, you agree to our Code of Conduct and the QuestRaid Symmetric Reputation Engine protocols.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
          <Shield size={12} className="text-gray-600" />
          Encrypted by QuestRaid Vault
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
