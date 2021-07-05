import { useCallback, useState } from "react";
import { FirebaseAuth } from "../../../firebase/firebase.config";
import { Loading } from "../Loading/loading.component";

export const SignOutButton = ({ className }) => {

  const [loading, setIsLoading] = useState(false);
  const onClick = useCallback(async () => {
      if(!loading) {
        try {
          setIsLoading(true);
          await FirebaseAuth.signOut();
          window.location.href = "/";
        } catch(e) {
          setIsLoading(false);
        }
      }
  }, []);
  return (
    FirebaseAuth.currentUser && (
      <a onClick={onClick} className={`${className} cursor-pointer`}>
       { loading ? <Loading /> : "Sign Out" }
      </a>
    )
  );
};
