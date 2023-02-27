import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCM4rsqgY0rpwVqx9-EVhydqNwFs9w1ZPU",
  authDomain: "linkedin-clone-3724b.firebaseapp.com",
  projectId: "linkedin-clone-3724b",
  storageBucket: "linkedin-clone-3724b.appspot.com",
  messagingSenderId: "410741401949",
  appId: "1:410741401949:web:7acb3cb6aa2cb55f5e20b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
