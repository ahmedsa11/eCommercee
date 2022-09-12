// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD14HYAr1jwfWB0RiT4wi9gd5s8ZMpcMLA",
  authDomain: "ecommerce-79689.firebaseapp.com",
  projectId: "ecommerce-79689",
  storageBucket: "ecommerce-79689.appspot.com",
  messagingSenderId: "451215431843",
  appId: "1:451215431843:web:4ee2862b450b26f53f4716",
  measurementId: "G-JYSD26HJQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getAuth(app);
export default db