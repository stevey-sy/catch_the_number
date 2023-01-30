// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9LbKPFT5-kRxsHmPhWmukndBWUK27E5o",
  authDomain: "catch-the-number.firebaseapp.com",
  projectId: "catch-the-number",
  storageBucket: "catch-the-number.appspot.com",
  messagingSenderId: "1055999057670",
  appId: "1:1055999057670:web:dff4ed80e0d188ff65c887",
  measurementId: "G-5DRSRBEMJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
//const analytics = getAnalytics(app);

export default database