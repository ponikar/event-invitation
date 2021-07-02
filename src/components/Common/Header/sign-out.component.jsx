import { FirebaseAuth } from "../../../firebase/firebase.config";

export const SignOutButton = ({ className }) => {
  return (
    FirebaseAuth.currentUser && (
      <a onClick={(_) => FirebaseAuth.signOut()} className={className}>
        Sign Out
      </a>
    )
  );
};
