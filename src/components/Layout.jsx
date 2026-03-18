import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Sword, User, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Layout = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col selection:bg-cyan-glow selection:text-obsidian">
      {/* Desktop Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 hidden md:flex items-center justify-between px-8 border-b border-white/10 shadow-lg shadow-black/50">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center">
            <Logo />
          </NavLink>

          <div className="flex items-center gap-6 text-sm font-medium tracking-wide">
            <NavLink
              to="/"
              className={({ isActive }) => `transition-colors hover:text-cyan-glow ${isActive ? 'text-cyan-glow underline underline-offset-4 decoration-2' : 'text-gray-400'}`}
            >
              The Realm
            </NavLink>
            <NavLink
              to="/dashboard/runner"
              className={({ isActive }) => `transition-colors hover:text-cyan-glow ${isActive ? 'text-cyan-glow underline underline-offset-4 decoration-2' : 'text-gray-400'}`}
            >
              Quests
            </NavLink>
            <NavLink
              to="/dashboard/giver"
              className={({ isActive }) => `transition-colors hover:text-cyan-glow ${isActive ? 'text-cyan-glow underline underline-offset-4 decoration-2' : 'text-gray-400'}`}
            >
              Post Quest
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 font-medium px-4 py-2 hover:text-white transition-colors"
            >
              Sign In
            </motion.button>
          </NavLink>
          <NavLink to="/profile">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lightning text-white px-6 py-2 rounded-lg font-bold shadow-[0_0_15px_rgba(0,62,120,0.5)] border border-cyan-glow/30 hover:shadow-cyan-glow/20 transition-all"
            >
              Enter QuestRaid
            </motion.button>
          </NavLink>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-0 md:pt-16 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass h-20 md:hidden flex items-center justify-around px-4 border-t border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <NavLink
          to="/"
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? 'text-cyan-glow' : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          {/* Active indicator */}
          <div className="w-1 h-1 rounded-full bg-cyan-glow mt-0.5 opacity-0 active:opacity-100 transition-opacity" />
        </NavLink>

        <NavLink
          to="/dashboard/runner"
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? 'text-cyan-glow' : 'text-gray-500'}`}
        >
          <Sword size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Quests</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? 'text-cyan-glow' : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? 'text-cyan-glow' : 'text-gray-500'}`}
        >
          <ShieldCheck size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Vault</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Layout;
