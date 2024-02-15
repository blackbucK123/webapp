// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0a0qpZ-FfHjwR6ni7xU_NUqxUyV6bE9s",
  authDomain: "web-app-elegant-zodiac-342810.firebaseapp.com",
  projectId: "web-app-elegant-zodiac-342810",
  storageBucket: "web-app-elegant-zodiac-342810.appspot.com",
  messagingSenderId: "92806811142",
  appId: "1:92806811142:web:49847aa705b6d3254d3d87",
  measurementId: "G-J55TQWFQ3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);