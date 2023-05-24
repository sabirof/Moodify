// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmH8fZNLpVc9m6tunPPa6FPgUC3zODjO4",
  authDomain: "moodify-99345.firebaseapp.com",
  projectId: "moodify-99345",
  storageBucket: "moodify-99345.appspot.com",
  messagingSenderId: "357245972950",
  appId: "1:357245972950:web:bfdd6e0956fc9e9dd37477"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);