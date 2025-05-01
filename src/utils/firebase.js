// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5yYiyflL6oBdpPR6GVqWdVO4o0r-lPjw",
  authDomain: "cineflixprimegpt.firebaseapp.com",
  projectId: "cineflixprimegpt",
  storageBucket: "cineflixprimegpt.firebasestorage.app",
  messagingSenderId: "535406006257",
  appId: "1:535406006257:web:92894b1ed4c876a662fe50",
  measurementId: "G-QY592YB624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// npm install -g firebase-tools