import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByqRVngnQt0TDxvrL1IHmA5AMFQEsc0Os",
  authDomain: "disneyplus-clone-983d7.firebaseapp.com",
  projectId: "disneyplus-clone-983d7",
  storageBucket: "disneyplus-clone-983d7.appspot.com",
  messagingSenderId: "556701851415",
  appId: "1:556701851415:web:0ce7c268dc08bc059ea152"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider;
const storage = getStorage(firebaseApp);

export { auth, provider, storage, signInWithPopup, onAuthStateChanged, signOut };
export default db;
