import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { db } from '../lib/firebase';

const RoleContext = createContext();

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }) => {
  const { user } = useAuth();
  const [isRunnerMode, setIsRunnerMode] = useState(false);

  useEffect(() => {
    if (user?.role) {
      setIsRunnerMode(user.role === 'runner');
    }
  }, [user]);

  const toggleRole = async () => {
    if (!user) return;

    const newRole = isRunnerMode ? 'giver' : 'runner';
    const userRef = doc(db, "users", user.uid);

    try {
      await updateDoc(userRef, { role: newRole });
      setIsRunnerMode(!isRunnerMode);
    } catch (error) {
      console.error("Role Update Error:", error);
    }
  };

  const value = {
    isRunnerMode,
    toggleRole,
    role: isRunnerMode ? 'runner' : 'giver'
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};
