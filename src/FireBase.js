import firebase from 'firebase';

  const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqDngYpHFI39SASxlKHPLsC1L2gmHIm1A",
    authDomain: "instagram-clone-cee72.firebaseapp.com",
    databaseURL: "https://instagram-clone-cee72-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-cee72",
    storageBucket: "instagram-clone-cee72.appspot.com",
    messagingSenderId: "949814115242",
    appId: "1:949814115242:web:daa63e047b8b8ea9a489d3",
    measurementId: "G-SDZNJETCYH"
  });

  const db =FirebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
   
  export {db, auth, storage};
