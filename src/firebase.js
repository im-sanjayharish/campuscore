// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcJUIeOzAmxhDYCkmP2HZ92Ht3q9fH4fc",
  authDomain: "campuscore-apextech.firebaseapp.com",
  projectId: "campuscore-apextech",
  storageBucket: "campuscore-apextech.firebasestorage.app",
  messagingSenderId: "765006546928",
  appId: "1:765006546928:web:7f492e7057e1ee9f8a3f35",
  measurementId: "G-270J430VHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);