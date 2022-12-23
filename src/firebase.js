// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUzswVHSaa0zF3_VVcYEeF0ijbcjwIqM",
  authDomain: "twitter-clone-e3b1d.firebaseapp.com",
  projectId: "twitter-clone-e3b1d",
  storageBucket: "twitter-clone-e3b1d.appspot.com",
  messagingSenderId: "448309837579",
  appId: "1:448309837579:web:5c0c865e53e7c034212c0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
