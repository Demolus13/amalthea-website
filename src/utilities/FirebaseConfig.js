// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhtM2xOWuPsnUuIl_GNiJR2mKBeIumLo",
  authDomain: "amalthea23test.firebaseapp.com",
  databaseURL:
    "https://amalthea23test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amalthea23test",
  storageBucket: "amalthea23test.appspot.com",
  messagingSenderId: "953562945466",
  appId: "1:953562945466:web:df8231399e280670c96f83",
  measurementId: "G-66GEFLY3DL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// eslint-disable-next-line no-restricted-globals
// if (location.hostname === "localhost") {
//   // Point to the RTDB emulator running on localhost.
//   connectDatabaseEmulator(database, "127.0.0.1", 9000);
//   console.log(database);
// }
// connectAuthEmulator(auth, "http://127.0.0.1:9099"); //for emulator firebase testing

export { auth, database };

//Database Structure

/*
leaders:{
  leaderUID:{
    leaderName,
    leaderEmail,
    leaderContactNumber,
    teamName
  }
  leader2UID:{
    ....
  }
}
teams:{
  teamname1:{
    leaderName,
    leaderUID,
    numberOfMembers,
    members:{
      0:{
        name,
        contactNumber,
        email
      }
      1:{
        ...
      }
    }
  }
}



*/
