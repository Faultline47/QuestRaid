import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// QuestRaid Firebase Configuration
// Replace with your actual environment variables or config object
const firebaseConfig = {
  apiKey: "PLACEHOLDER_API_KEY",
  authDomain: "questraid-app.firebaseapp.com",
  projectId: "questraid-app",
  storageBucket: "questraid-app.appspot.com",
  messagingSenderId: "PLACEHOLDER_SENDER_ID",
  appId: "PLACEHOLDER_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
