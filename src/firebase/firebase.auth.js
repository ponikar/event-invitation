import firebase, { FirebaseAuthProvider } from "./firebase.config";

export const doSignIn = () =>
  firebase.auth().signInWithPopup(FirebaseAuthProvider);
