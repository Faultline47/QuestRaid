import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const featureCards = [
    {
      title: "Quest Givers",
      subtitle: "Outsource your friction. Reclaim your day.",
      description: "Simple, secure, and reliable fulfillment. Perfect for errands, specialized trades, or help when you need it most.",
      icon: <Shield className="w-8 h-8 text-cyan-glow" />,
      tagline: "High-trust mastery marketplace.",
      buttonText: "Post a Quest",
      route: "/dashboard/giver"
    },
    {
      title: "Runners",
      subtitle: "The world is your playground. Level up your income.",
      description: "Earn XP with every task. Scale from local errands to elite mastery quests. Level 10 unlockable perks await.",
      icon: <Sword className="w-8 h-8 text-cyan-glow" />,
      tagline: "The Lightning Uniform prestige.",
      buttonText: "Start Earning",
      route: "/dashboard/runner"
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lightning/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-glow/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 text-cyan-glow text-xs font-bold uppercase tracking-widest mb-8">
            <Zap size={14} className="fill-current" />
            <span>Forge Your Legacy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tight mb-6 text-white drop-shadow-sm">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-lightning">Quest Economy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            The high-trust RPG marketplace where physical work meets digital mastery.
            Connect with verified Runners or reclaim your time as a Quest Giver.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
            <NavLink to="/dashboard/runner" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-obsidian px-8 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:bg-cyan-glow transition-colors animate-electric"
              >
                Become a Runner <ArrowRight size={20} />
              </motion.button>
            </NavLink>
            <NavLink to="/dashboard/giver" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-obsidian border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all"
              >
                Post Quest
              </motion.button>
            </NavLink>
          </div>
        </motion.div>
      </section>

      {/* Dual-Track Section */}
      <section className="w-full max-w-7xl px-6 py-20 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-cyan-glow/30 transition-all duration-500"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-8 p-4 bg-cyan-glow/10 rounded-2xl w-fit">
                {card.icon}
              </div>

              <h3 className="text-3xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-cyan-glow font-bold text-sm tracking-wide uppercase mb-6 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                {card.subtitle}
              </p>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {card.description}
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <NavLink to={card.route} className="flex-grow">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/5 border border-white/10 hover:border-cyan-glow hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:text-cyan-glow"
                  >
                    {card.buttonText}
                  </motion.button>
                </NavLink>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <Shield size={12} className="text-gray-600" />
                {card.tagline}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="w-full bg-white/[0.01] border-y border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-white">Trust is our currency.</h2>
            <p className="text-gray-400">
              QuestRaid uses a symmetric reputation engine and 'Shadow Ratings' to ensure
              the highest quality interactions for both parties.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-cyan-glow drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] mb-1">99%</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Reliability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">Lv. 1</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Entry Point</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
