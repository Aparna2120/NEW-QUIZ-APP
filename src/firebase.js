// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnU-o4m58Exlhg6kFb16WYzDB81yZbMQ",
  authDomain: "auth-b3fad.firebaseapp.com",
  projectId: "auth-b3fad",
  storageBucket: "auth-b3fad.appspot.com",
  messagingSenderId: "149060497810",
  appId: "1:149060497810:web:51b5a6f29a8174a74a514b",
  measurementId: "G-DET3W3W6ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;