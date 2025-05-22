// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAESlBGvteuzjBpaezofzA-zm6O9zBXsP0",
  authDomain: "caddigital-262fd.firebaseapp.com",
  projectId: "caddigital-262fd",
  storageBucket: "caddigital-262fd.firebasestorage.app",
  messagingSenderId: "256069989953",
  appId: "1:256069989953:web:1e13c79f2deff25e14b8c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}