// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBhDDatwsu2fEUboEXFaYpYCAslsF4ugkw",
//   authDomain: "react-curso-9aada.firebaseapp.com",
//   projectId: "react-curso-9aada",
//   storageBucket: "react-curso-9aada.appspot.com",
//   messagingSenderId: "405216734933",
//   appId: "1:405216734933:web:1c346e74b0491ce452bc5c"
// };

// Testing 
const firebaseConfig = {
  apiKey: "AIzaSyCHyPTZVbamG1fHY_HFFTvcEh4r61DedQ8",
  authDomain: "react-testing-c66b5.firebaseapp.com",
  projectId: "react-testing-c66b5",
  storageBucket: "react-testing-c66b5.appspot.com",
  messagingSenderId: "1094672349553",
  appId: "1:1094672349553:web:6d114fd33ed4949bfeded0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)

