// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-475b6.firebaseapp.com",
  projectId: "mern-auth-475b6",
  storageBucket: "mern-auth-475b6.appspot.com",
  messagingSenderId: "208949995645",
  appId: "1:208949995645:web:4b705b4823443ecac26914"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);