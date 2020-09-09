import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABrkPGdhg8qsUOPdcovvbxhbdiL8kJzLU",
    authDomain: "photography-1cf12.firebaseapp.com",
    databaseURL: "https://photography-1cf12.firebaseio.com",
    projectId: "photography-1cf12",
    storageBucket: "photography-1cf12.appspot.com",
    messagingSenderId: "699877754061",
    appId: "1:699877754061:web:7923fe23af28121bfe9584"
  };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export  { projectStorage, projectFirestore, timestamp ,app};