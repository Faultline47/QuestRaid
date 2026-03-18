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
      if (currentUser) {
        // Fetch or Initialize Profile
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser({ ...currentUser, ...userDoc.data() });
        } else {
          // This case handles the rare sync delay where the redirect logic hasn't finished yet
          const profile = await initializeUserProfile(currentUser);
          setUser({ ...currentUser, ...profile });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const initializeUserProfile = async (firebaseUser) => {
    const userRef = doc(db, "users", firebaseUser.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const initialProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        role: 'giver', // Default to Giver as per directives
        xp: 0,
        level: 1,
        reputation: 5.0,
        totalEarned: 0,
        completedQuests: 0,
        activeQuestId: null,
        masteries: [],
        createdAt: serverTimestamp()
      };
      await setDoc(userRef, initialProfile);
      return initialProfile;
    }
    return userDoc.data();
  };

  const login = () => {
    setSyncing(true);
    return signInWithRedirect(auth, googleProvider);
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
