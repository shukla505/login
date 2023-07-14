import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCybtsrjWjy97rD7-pmVJMOL3Gr5urUK_s",
  authDomain: "show-5e092.firebaseapp.com",
  projectId: "show-5e092",
  storageBucket: "show-5e092.appspot.com",
  messagingSenderId: "809962518293",
  appId: "1:809962518293:web:963fbba5a4cf5520e0db1c",
  measurementId: "G-4QVF4RP8FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };