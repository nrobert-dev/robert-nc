import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgzihCXh5gpuFJRfwUoPtssZFogYb7rBM",
    authDomain: "testfirestore-25bc6.firebaseapp.com",
    databaseURL: "https://testfirestore-25bc6.firebaseio.com",
    projectId: "testfirestore-25bc6",
    storageBucket: "testfirestore-25bc6.appspot.com",
    messagingSenderId: "13576346726",
    appId: "1:13576346726:web:df3cda051d1c5835"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();


  export {
     firestore, firebase as default
  }