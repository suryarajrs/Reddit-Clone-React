// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDLVHT5rTi_mT0p0NPjgdYwxJuBPm-wVE",
  authDomain: "reddit-clone-1d69a.firebaseapp.com",
  projectId: "reddit-clone-1d69a",
  storageBucket: "reddit-clone-1d69a.appspot.com",
  messagingSenderId: "416439766657",
  appId: "1:416439766657:web:048d401ddcf6fbe18e8780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export{auth, provider}