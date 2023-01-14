
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDR2DaWkseevmgDjNH1TF77fY3sxRPgmtM",
  authDomain: "social-a5dbd.firebaseapp.com",
  projectId: "social-a5dbd",
  storageBucket: "social-a5dbd.appspot.com",
  messagingSenderId: "537740569876",
  appId: "1:537740569876:web:214071df52ff34f78b6601",
  measurementId: "G-2TNDHE0514"
  });
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
export {auth,storage,provider};