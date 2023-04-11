import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAJ3G1aBA1VMdV0RsHOVJ3BsJJVyCkXdmM",
    authDomain: "looklive-b4a65.firebaseapp.com",
    projectId: "looklive-b4a65",
    storageBucket: "looklive-b4a65.appspot.com",
    messagingSenderId: "800529865026",
    appId: "1:800529865026:web:06d2cad6fb8b3ba5a2d0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);