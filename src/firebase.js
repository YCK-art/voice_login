// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBAk89NsIaUNqwQlIpvwMXDfUnytGKxzxo",
  authDomain: "guidant-830b4.web.app", // ✅ Firebase Hosting 도메인 (핵심)
  projectId: "guidant-830b4",
  appId: "1:152749627191:web:b624be88cbd058d6a76cb2",
  storageBucket: "guidant-830b4.firebasestorage.app",
  messagingSenderId: "152749627191",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 