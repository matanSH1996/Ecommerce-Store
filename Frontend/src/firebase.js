import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDespIKDyC88WnsOAhZZSLBC9lRMUczrb4",
  authDomain: "ecommerce-int-final-project.firebaseapp.com",
  projectId: "ecommerce-int-final-project",
  storageBucket: "ecommerce-int-final-project.appspot.com",
  messagingSenderId: "145983404070",
  appId: "1:145983404070:web:157da0c089d442b7f94ee7",
  measurementId: "G-4DSJ63G70B"
};


const app = initializeApp(firebaseConfig);

// Initialize Firestore as a DB
export const db = getFirestore()

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

//export the app
export default app