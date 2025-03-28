// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Ixj2C3Z-Xe81wcqVsbkt30SifmLv-aA",
  authDomain: "green-bridge-da79a.firebaseapp.com",
  projectId: "green-bridge-da79a",
  storageBucket: "green-bridge-da79a.firebasestorage.app",
  messagingSenderId: "297860982232",
  appId: "1:297860982232:web:255a44dd9cd2cce3f27ead",
  measurementId: "G-WBE7T66XZK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);