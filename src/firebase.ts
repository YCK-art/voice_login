// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBAk89NsIaUNqwQlIpvwMXDfUnytGKxzxo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "guidant-830b4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "guidant-830b4",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:152749627191:web:b624be88cbd058d6a76cb2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "guidant-830b4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "152749627191",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 