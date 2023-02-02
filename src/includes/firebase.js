import firebase from "firebase/app";
import "firebase/auth";
// we'll be using firebase to authenticate the userSelect

const firebaseConfig = {
  apiKey: "AIzaSyDglc4uU7Xmqn36-87H0Hs2lGtXUt1YJSk",
  authDomain: "music-b0505.firebaseapp.com",
  projectId: "music-b0505",
  storageBucket: "music-b0505.appspot.com",
  appId: "1:884345502334:web:c955f52a4d63a1d883762f",
};

export default firebase.initializeApp(firebaseConfig);
// allows us to import firebase and use it in components
