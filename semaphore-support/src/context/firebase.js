// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDM6wBSaBzbw3Qyjq_ZzdVgDa6lYaFJqqQ",
  authDomain: "semaphore-6ee8e.firebaseapp.com",
  projectId: "semaphore-6ee8e",
  storageBucket: "semaphore-6ee8e.firebasestorage.app",
  messagingSenderId: "772827149593",
  appId: "1:772827149593:web:cefdb8a8f59217b3610188",
  measurementId: "G-CR4STRN6HG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db };