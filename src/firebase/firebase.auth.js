import { FirebaseAuthProvider, firebase } from "./firebase.config";



export const doSignIn = async () => {
    try {
        const response = await firebase.auth().signInWithPopup(FirebaseAuthProvider);
        return response;
    } catch(e) {
        throw new Error(e.message);
    }
}