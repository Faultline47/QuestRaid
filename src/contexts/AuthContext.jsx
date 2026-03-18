import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  getRedirectResult
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import { Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    // Check for redirect result upon returning from Google Sign-In
    const checkRedirect = async () => {
      try {
        setSyncing(true);
        const result = await getRedirectResult(auth);
        if (result?.user) {
          await initializeUserProfile(result.user);
        }
      } catch (error) {
        console.error("Redirect Result Error:", error);
      } finally {
        setSyncing(false);
      }
    };

    checkRedirect();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          // Fetch or Initialize Profile
          const userRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUser({ ...currentUser, ...userDoc.data() });
          } else {
            const profile = await initializeUserProfile(currentUser);
            setUser({ ...currentUser, ...profile });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth State Error:", error);
        // On error with placeholder config, we still allow the session to proceed
        // as a 'local' user for UI demonstration if necessary, but here we'll
        // just ensure the loading state resolves.
        setUser(currentUser || null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const initializeUserProfile = async (firebaseUser) => {
    const userRef = doc(db, "users", firebaseUser.uid);

    const initialProfile = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      role: 'giver',
      xp: 0,
      level: 1,
      reputation: 5.0,
      totalEarned: 0,
      completedQuests: 0,
      activeQuestId: null,
      masteries: [],
      createdAt: serverTimestamp()
    };

    try {
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, initialProfile);
        return initialProfile;
      }
      return userDoc.data();
    } catch (error) {
      console.error("Profile Init Error:", error);
      return initialProfile; // Fallback to local profile if Firestore fails (placeholder config)
    }
  };

  const login = () => {
    try {
      setSyncing(true);
      return signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Login Error:", error);
      setSyncing(false);
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      <AnimatePresence>
        {syncing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                filter: [
                  "drop-shadow(0 0 0px rgba(34,211,238,0))",
                  "drop-shadow(0 0 20px rgba(34,211,238,0.8))",
                  "drop-shadow(0 0 0px rgba(34,211,238,0))"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="p-8 bg-cyan-glow/10 rounded-full"
            >
              <Zap size={64} className="text-cyan-glow fill-current" />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-white">Syncing with the Guild...</h2>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] animate-pulse">Establishing Secure Handshake</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!loading && children}
    </AuthContext.Provider>
  );
};
