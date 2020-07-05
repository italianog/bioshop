import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBM26dDeTRe4I1AoF2CcH-xtjqpygmDwY",
  authDomain: "bioshop-2163c.firebaseapp.com",
  databaseURL: "https://bioshop-2163c.firebaseio.com",
  projectId: "bioshop-2163c",
  storageBucket: "bioshop-2163c.appspot.com",
  messagingSenderId: "901752881639",
  appId: "1:901752881639:web:40c094b653f06049383d42",
  measurementId: "G-VLTLQH262W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
