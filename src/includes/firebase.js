import firebase from "firebase/app";
import "firebase/auth";
// we'll be using firebase to authenticate the userSelect
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDglc4uU7Xmqn36-87H0Hs2lGtXUt1YJSk",
  authDomain: "music-b0505.firebaseapp.com",
  projectId: "music-b0505",
  storageBucket: "music-b0505.appspot.com",
  appId: "1:884345502334:web:c955f52a4d63a1d883762f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, songsCollection, storage };
