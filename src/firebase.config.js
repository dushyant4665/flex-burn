import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const firestore = getFirestore(app); // Initialize Firestore (if needed)

export { auth, firestore };