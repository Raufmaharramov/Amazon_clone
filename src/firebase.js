// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY5IHZswM4KMho96SSFJT8TuWPBHAbmaA",
  authDomain: "clone-ebe87.firebaseapp.com",
  projectId: "clone-ebe87",
  storageBucket: "clone-ebe87.appspot.com",
  messagingSenderId: "481623002400",
  appId: "1:481623002400:web:c25ea8a568f069c395db45",
  measurementId: "G-2Q3FR9ZTWK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
