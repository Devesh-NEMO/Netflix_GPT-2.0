// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTjpNCOL1LCistq88jGWiU3hNQOyeAQPE",
  authDomain: "netflixgpt-d30ed.firebaseapp.com",
  projectId: "netflixgpt-d30ed",
  storageBucket: "netflixgpt-d30ed.firebasestorage.app",
  messagingSenderId: "325226324650",
  appId: "1:325226324650:web:1da22c9db4e743881526d3",
  measurementId: "G-8SXNWRNZLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);