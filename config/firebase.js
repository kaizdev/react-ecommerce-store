// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJrYWdexF0Kpc3ulA82rnURXl9A4PHIu8",
    authDomain: "lego-store-kaizdev.firebaseapp.com",
    projectId: "lego-store-kaizdev",
    storageBucket: "lego-store-kaizdev.appspot.com",
    messagingSenderId: "874012742410",
    appId: "1:874012742410:web:a272d0758516b70290e0f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
