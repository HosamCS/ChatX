// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJ4WcU-xGXPdpHG13wRndmynYvxUX8Pg",
  authDomain: "chatx-3eb47.firebaseapp.com",
  projectId: "chatx-3eb47",
  storageBucket: "chatx-3eb47.appspot.com",
  messagingSenderId: "922556288544",
  appId: "1:922556288544:web:eaa7fa04620e45a360f645",
  measurementId: "G-Y3M7RRYDML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
 export const auth = getAuth();
