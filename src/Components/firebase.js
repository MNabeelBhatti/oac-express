// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOREfIC0iaXKVM2L2TJPyRDHD4yrKtco",
  authDomain: "oac-express.firebaseapp.com",
  projectId: "oac-express",
  storageBucket: "oac-express.appspot.com",
  messagingSenderId: "1042393102814",
  appId: "1:1042393102814:web:ce111477dbe1cf04a0054f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, auth ,storage};
