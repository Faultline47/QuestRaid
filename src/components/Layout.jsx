import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { Home, Sword, User, ShieldCheck, LogOut, LayoutDashboard, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';
import { useRole } from '../contexts/RoleContext';

const Layout = () => {
  const { user, logout } = useAuth();
  const { isRunnerMode, role } = useRole();

  // Primary Color based on Role
  const accentColor = isRunnerMode ? 'text-lightning' : 'text-cyan-glow';
  const accentBg = isRunnerMode ? 'bg-lightning' : 'bg-cyan-glow';
  const accentBorder = isRunnerMode ? 'border-lightning/30' : 'border-cyan-glow/30';
  const shadowColor = isRunnerMode ? 'shadow-lightning/20' : 'shadow-cyan-glow/20';

  return (
    <div className={`min-h-screen bg-obsidian text-white flex flex-col selection:bg-cyan-glow selection:text-obsidian transition-colors duration-500`}>
      {/* Desktop Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 hidden md:flex items-center justify-between px-8 border-b border-white/10 shadow-lg shadow-black/50">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center">
            <Logo />
          </NavLink>

          {user && (
            <div className="flex items-center gap-6 text-sm font-medium tracking-wide">
              <NavLink
                to="/"
                className={({ isActive }) => `transition-colors hover:${accentColor} ${isActive ? `${accentColor} underline underline-offset-4 decoration-2` : 'text-gray-400'}`}
              >
                The Realm
              </NavLink>
              <NavLink
                to={isRunnerMode ? "/dashboard/runner" : "/dashboard/giver"}
                className={({ isActive }) => `transition-colors hover:${accentColor} ${isActive ? `${accentColor} underline underline-offset-4 decoration-2` : 'text-gray-400'}`}
              >
                {isRunnerMode ? "Bounty Board" : "My Orders"}
              </NavLink>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <NavLink to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${accentBg} text-white px-6 py-2 rounded-lg font-bold shadow-lg ${shadowColor} border border-white/10 transition-all`}
              >
                Enter QuestRaid
              </motion.button>
            </NavLink>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end mr-2">
                <span className="text-xs font-bold text-white leading-none">{user.displayName}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${accentColor} leading-none mt-1`}>
                  Lv. {user.level} {role}
                </span>
              </div>
              <NavLink to="/profile">
                <div className={`w-10 h-10 rounded-full border-2 ${isRunnerMode ? 'border-lightning' : 'border-cyan-glow'} p-0.5 overflow-hidden`}>
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                      <User size={16} />
                    </div>
                  )}
                </div>
              </NavLink>
              <button
                onClick={logout}
                className="p-2 text-gray-500 hover:text-white transition-colors"
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
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
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? accentColor : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </NavLink>

        {user && (
          <NavLink
            to={isRunnerMode ? "/dashboard/runner" : "/dashboard/giver"}
            className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? accentColor : 'text-gray-500'}`}
          >
            {isRunnerMode ? <Sword size={24} /> : <Shield size={24} />}
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {isRunnerMode ? "Quests" : "Orders"}
            </span>
          </NavLink>
        )}

        <NavLink
          to={user ? "/profile" : "/login"}
          className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[64px] ${isActive ? accentColor : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Layout;
