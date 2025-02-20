// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtxnXmA5M-Y-TzD9HmeGf4FQFW6axW830",
  authDomain: "chatbot-9bd9c.firebaseapp.com",
  projectId: "chatbot-9bd9c",
  storageBucket: "chatbot-9bd9c.firebasestorage.app",
  messagingSenderId: "371138110956",
  appId: "1:371138110956:web:a275ae7a121708c8ae4cc9",
  measurementId: "G-B3FL2DGRNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);