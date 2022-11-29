// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhDDatwsu2fEUboEXFaYpYCAslsF4ugkw",
  authDomain: "react-curso-9aada.firebaseapp.com",
  projectId: "react-curso-9aada",
  storageBucket: "react-curso-9aada.appspot.com",
  messagingSenderId: "405216734933",
  appId: "1:405216734933:web:1c346e74b0491ce452bc5c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)

