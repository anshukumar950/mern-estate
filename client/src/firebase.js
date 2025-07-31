// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a0446.firebaseapp.com",
  projectId: "mern-estate-a0446",
  storageBucket: "mern-estate-a0446.firebasestorage.app",
  messagingSenderId: "523252805174",
  appId: "1:523252805174:web:0424a421bfe528be397297"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 