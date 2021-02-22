import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCGfi1HLcwUf80yJrcgWeAqJI6NYDX3H6k",
  authDomain: "reactnode-1.firebaseapp.com",
  projectId: "reactnode-1",
  storageBucket: "reactnode-1.appspot.com",
  // messagingSenderId: "596961187481",
  appId: "1:596961187481:web:8252d387c21c8c81ebca08",
  measurementId: "G-CJNWQ4JVL8",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
