// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBAk89NsIaUNqwQlIpvwMXDfUnytGKxzxo",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "voice-login-fwqb.vercel.app",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "guidant-830b4",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:152749627191:web:b624be88cbd058d6a76cb2",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "guidant-830b4.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "152749627191",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 