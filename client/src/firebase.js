// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f6fb3.firebaseapp.com",
  projectId: "mern-auth-f6fb3",
  storageBucket: "mern-auth-f6fb3.appspot.com",
  messagingSenderId: "859441116715",
  appId: "1:859441116715:web:b2eeddd6eeeba0bcda9c6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);