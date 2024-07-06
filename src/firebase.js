// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuDdAHul3rypXtzzxX9Jbx7BOohcQMKeE",
  authDomain: "ariesjobportal.firebaseapp.com",
  projectId: "ariesjobportal",
  storageBucket: "ariesjobportal.appspot.com",
  messagingSenderId: "900541235570",
  appId: "1:900541235570:web:305ac80635fac98db11deb",
  measurementId: "G-6QN202RKNS"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth();
// const firestore =app.firestore();

// export {app,auth};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
