// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1v71b5Jc-7bma9Ze3ooBZcPG87sH1NWQ",
  authDomain: "prepwise-ee7c4.firebaseapp.com",
  projectId: "prepwise-ee7c4",
  storageBucket: "prepwise-ee7c4.firebasestorage.app",
  messagingSenderId: "1072199911985",
  appId: "1:1072199911985:web:faed13c2d839024c352310",
  measurementId: "G-YTBEEFM10H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only on client side
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export const auth = getAuth(app);
export const db = getFirestore(app);