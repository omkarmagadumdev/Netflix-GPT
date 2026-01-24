// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWNnrsrDE770WYpClzPZ-nnkCoJMzOSuw",
  authDomain: "netflixgpt-63f65.firebaseapp.com",
  projectId: "netflixgpt-63f65",
  storageBucket: "netflixgpt-63f65.firebasestorage.app",
  messagingSenderId: "84485461534",
  appId: "1:84485461534:web:7ea8a6b2a9a3558132800f",
  measurementId: "G-VH2V7ES7ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()