import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwyxKXyMRqVS-5zmwgivHk1Gpe2V12feg",
  authDomain: "uber-eats-clone-a7847.firebaseapp.com",
  projectId: "uber-eats-clone-a7847",
  storageBucket: "uber-eats-clone-a7847.appspot.com",
  messagingSenderId: "801919914854",
  appId: "1:801919914854:web:78ed45e2284681404b2ea7",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export default db;
