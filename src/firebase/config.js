import * as firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAsxAPgESIwEH0tFZtQbrPLt37tlT9gZhQ",
    authDomain: "contact-app-be9bf.firebaseapp.com",
    databaseURL: "https://contact-app-be9bf.firebaseio.com",
    projectId: "contact-app-be9bf",
    storageBucket: "contact-app-be9bf.appspot.com",
    messagingSenderId: "1025293729563",
    appId: "1:1025293729563:web:0147ca99fa8bdd15421dbe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase