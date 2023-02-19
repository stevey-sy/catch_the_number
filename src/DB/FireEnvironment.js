// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiX9Vm5kGItO4QNkE8ATmvTTMILVa-OsY",
  authDomain: "pick-the-number.firebaseapp.com",
  projectId: "pick-the-number",
  storageBucket: "pick-the-number.appspot.com",
  messagingSenderId: "71409158119",
  appId: "1:71409158119:web:cc679d45f16c0179219f42",
  measurementId: "G-Q7J89W3YWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default getFirestore();