import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBTD-fKOoDcWhGHzzXWlyaE3yO5rSsfk88",
    authDomain: "furniture-sanodady.firebaseapp.com",
    databaseURL: "https://furniture-sanodady-default-rtdb.firebaseio.com",
    projectId: "furniture-sanodady",
    storageBucket: "furniture-sanodady.appspot.com",
    messagingSenderId: "754559293713",
    appId: "1:754559293713:web:1bb5bec382ce99138b14b0"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const storage = firebase.storage;
const db = firebase.firestore();

export { auth, db, storage };