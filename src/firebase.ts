// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJ1M97Yx3j92nZTXLMQodvzfruKZ-CUY",
  authDomain: "shoppingo-5383f.firebaseapp.com",
  projectId: "shoppingo-5383f",
  storageBucket: "shoppingo-5383f.firebasestorage.app",
  messagingSenderId: "721856964080",
  appId: "1:721856964080:web:3f7a102eb38f1c5063e935",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
