// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYx5NnmgF43k6cDeRQp7f-mx3Kwgunt_Q",
    authDomain: "bootcamp-udd.firebaseapp.com",
    projectId: "bootcamp-udd",
    storageBucket: "bootcamp-udd.appspot.com",
    messagingSenderId: "293120720609",
    appId: "1:293120720609:web:69a0223e67c687f423c1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


