// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsnxi-Vrvely6OvCTF54ZnFTT3-SEGxoM",
  authDomain: "konstantink.firebaseapp.com",
  databaseURL: "https://konstantink.firebaseio.com",
  projectId: "konstantink",
  storageBucket: "konstantink.appspot.com",
  messagingSenderId: "496883278257",
  appId: "1:496883278257:web:efccf24dc95a75689c5d90",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
