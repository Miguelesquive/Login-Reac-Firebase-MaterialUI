import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuozYU6VcQLGTkY4vLEkda5p9ObXsgyXY",
    authDomain: "login-app-6c126.firebaseapp.com",
    databaseURL: "https://login-app-6c126.firebaseio.com",
    projectId: "login-app-6c126",
    storageBucket: "login-app-6c126.appspot.com",
    messagingSenderId: "576932295519",
    appId: "1:576932295519:web:f9669a0b8562c34e97bcea",
    measurementId: "G-951R4PS7P7"
  };
  
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;