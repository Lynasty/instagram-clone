// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGh-4ozbSLv8M0sz4PtV8AbSKScHnCzk",
  authDomain: "instagram-5e613.firebaseapp.com",
  projectId: "instagram-5e613",
  storageBucket: "instagram-5e613.appspot.com",
  messagingSenderId: "446881536143",
  appId: "1:446881536143:web:3b06216253c6d95edc38fa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };