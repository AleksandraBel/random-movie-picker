// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1w_rV_Lzm06K7fOUFQLI96zDqrzahOw",
  authDomain: "randommoviepicker-4a6ff.firebaseapp.com",
  projectId: "randommoviepicker-4a6ff",
  storageBucket: "randommoviepicker-4a6ff.firebasestorage.app",
  messagingSenderId: "97962959635",
  appId: "1:97962959635:web:e4bfcae3d9e2b59da070e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
