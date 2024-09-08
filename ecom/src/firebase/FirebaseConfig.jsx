import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhiXrsDrDio5z72JeU3nrr_0glz-3kMn4",
  authDomain: "shopshop-fc7b8.firebaseapp.com",
  projectId: "shopshop-fc7b8",
  storageBucket: "shopshop-fc7b8.appspot.com",
  messagingSenderId: "586248230296",
  appId: "1:586248230296:web:2ebdc3a1117178d985c7ed",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
