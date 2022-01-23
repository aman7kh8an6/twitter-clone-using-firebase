import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbYqEqYZcRp5ihbSu8i5JP988O_W04jy0",
  authDomain: "twitter-clone-3b8f4.firebaseapp.com",
  projectId: "twitter-clone-3b8f4",
  storageBucket: "twitter-clone-3b8f4.appspot.com",
  messagingSenderId: "63107485783",
  appId: "1:63107485783:web:a069448acdbd6fa04b1312",
  measurementId: "G-J2CJ433RXT"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;