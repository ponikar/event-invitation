import firebase from 'firebase/app'
import "firebase/auth"

 var firebaseConfig = {
    apiKey: "AIzaSyCjUlzl5SkSsBO8tJDADsk9VfzWEiGhJvY",
    authDomain: "invitation-55ec8.firebaseapp.com",
    projectId: "invitation-55ec8",
    storageBucket: "invitation-55ec8.appspot.com",
    messagingSenderId: "227028878367",
    appId: "1:227028878367:web:8286f45808eeb6888f412a"
  };
  
  

if(!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firebase Google Sign in Provider
export const FirebaseAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FirebaseAuth  = firebase.auth();

export const firebase;