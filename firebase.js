// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDozuGELaGre7xUYyLd8mTKLhAZRk92KQE",
  authDomain: "uber-clone-d52e4.firebaseapp.com",
  projectId: "uber-clone-d52e4",
  storageBucket: "uber-clone-d52e4.appspot.com",
  messagingSenderId: "579272800125",
  appId: "1:579272800125:web:20e0a2e818636cb8f17e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app, provider, auth}