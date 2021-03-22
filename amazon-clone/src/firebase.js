import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxXD1yAcZgWyfpwNlDKSAcRedB7BJNtNY",
  authDomain: "clone-4f7db.firebaseapp.com",
  projectId: "clone-4f7db",
  storageBucket: "clone-4f7db.appspot.com",
  messagingSenderId: "681056935553",
  appId: "1:681056935553:web:78f6ea1325d6ec9a20b780",
  measurementId: "G-ZHDYQV3JHT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };