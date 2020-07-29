import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAEoVJF_Yl-axMeDyeAqsIcc4CyXmZ9L1g",
  authDomain: "fire-gram-photography.firebaseapp.com",
  databaseURL: "https://fire-gram-photography.firebaseio.com",
  projectId: "fire-gram-photography",
  storageBucket: "fire-gram-photography.appspot.com",
  messagingSenderId: "266660088274",
  appId: "1:266660088274:web:e9fecd779252fda75e600b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };