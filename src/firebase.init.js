// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhH02eYa6xl-I5_skKSNHGftwZkxxNLW0",
  authDomain: "email-password-auth-88ba0.firebaseapp.com",
  projectId: "email-password-auth-88ba0",
  storageBucket: "email-password-auth-88ba0.firebasestorage.app",
  messagingSenderId: "233663997922",
  appId: "1:233663997922:web:8d16cbe23c439f08c87bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth