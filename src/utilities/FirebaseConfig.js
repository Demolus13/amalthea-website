// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhtM2xOWuPsnUuIl_GNiJR2mKBeIumLo",
  authDomain: "amalthea23test.firebaseapp.com",
  projectId: "amalthea23test",
  storageBucket: "amalthea23test.appspot.com",
  messagingSenderId: "953562945466",
  appId: "1:953562945466:web:df8231399e280670c96f83",
  measurementId: "G-66GEFLY3DL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099"); //for emulator firebase testing

export { auth };
