// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-b7c19.firebaseapp.com",
  projectId: "mern-estate-b7c19",
  storageBucket: "mern-estate-b7c19.appspot.com",
  messagingSenderId: "1091119412843",
  appId: "1:1091119412843:web:93126e1b2bfd26db89232e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);