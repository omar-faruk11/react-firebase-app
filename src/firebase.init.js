// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoMy6ks5xne1cUuBM2YPRUGJVwB3xDbAI",
  authDomain: "travel-guru-ddf95.firebaseapp.com",
  projectId: "travel-guru-ddf95",
  storageBucket: "travel-guru-ddf95.appspot.com",
  messagingSenderId: "434938680701",
  appId: "1:434938680701:web:f42a27cb300a65b9f2a814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;