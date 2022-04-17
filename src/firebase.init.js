import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsLBk51d0fTSH0CqrJU-qggKytuiUAFYU",
  authDomain: "photopidea.firebaseapp.com",
  projectId: "photopidea",
  storageBucket: "photopidea.appspot.com",
  messagingSenderId: "134949806420",
  appId: "1:134949806420:web:7a88fe486a6bfa1db828c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;