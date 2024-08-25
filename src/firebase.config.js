import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChrWfboE_TSqN5JXVupVq5knNl8AYFFRk",
  authDomain: "flex-burn-auth.firebaseapp.com",
  projectId: "flex-burn-auth",
  storageBucket: "flex-burn-auth.appspot.com",
  messagingSenderId: "617970663565",
  appId: "1:617970663565:web:e9b31f7f7e659f120f62c4",
  measurementId: "G-0G0T9ZTD0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// project-617970663565