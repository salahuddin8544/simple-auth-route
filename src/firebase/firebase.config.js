// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOUFfsQNufl8Z8j-Do4o5T1xJ1tyeEG3Y",
  authDomain: "simple-ema-john-aouth.firebaseapp.com",
  projectId: "simple-ema-john-aouth",
  storageBucket: "simple-ema-john-aouth.appspot.com",
  messagingSenderId: "728514261636",
  appId: "1:728514261636:web:9d46607cf3f30bdcca88d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app