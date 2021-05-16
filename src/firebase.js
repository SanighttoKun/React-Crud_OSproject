import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDNu1ubN_ewd32hB5n90MhrT39PHYSxMv0",
    authDomain: "react-crud-363e0.firebaseapp.com",
    databaseURL: "https://react-crud-363e0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-crud-363e0",
    storageBucket: "react-crud-363e0.appspot.com",
    messagingSenderId: "809483596958",
    appId: "1:809483596958:web:28bc4015ac64738083b78f"
  };
  // Initialize Firebase
  var firebaseDb = firebase.initializeApp(firebaseConfig);

  export default firebaseDb.database().ref();