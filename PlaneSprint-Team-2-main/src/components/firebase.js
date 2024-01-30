// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ej9qNYt5-XuNCyqWyLNgNYhFdYNoJP0",
  authDomain: "morako-foods.firebaseapp.com",
  projectId: "morako-foods",
  storageBucket: "morako-foods.appspot.com",
  messagingSenderId: "569639253210",
  appId: "1:569639253210:web:ee29f58a81cdb66a6221e3",
  measurementId: "G-DLDYZ6R1TQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);