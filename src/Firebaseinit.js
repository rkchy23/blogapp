// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3dFEkQF_Y_NoxeMql4lvgjg2eWIRvG0",
  authDomain: "bloggingapp-f21c1.firebaseapp.com",
  projectId: "bloggingapp-f21c1",
  storageBucket: "bloggingapp-f21c1.appspot.com",
  messagingSenderId: "181180818385",
  appId: "1:181180818385:web:a15c3356c7ca4df741b6f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)