import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHi4lq9AVR6rYbt7ew1s0Tq9zrdN97BsU",
  authDomain: "medimap-12d52.firebaseapp.com",
  projectId: "medimap-12d52",
  storageBucket: "medimap-12d52.firebasestorage.app",
  messagingSenderId: "144932633138",
  appId: "1:144932633138:web:11a11587a3a2b7e596da2b",
  measurementId: "G-FPXT1H2K5W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
