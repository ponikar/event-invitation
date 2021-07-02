import { useEffect } from "react";
import { Route } from "react-router-dom";
import { FirebaseAuth } from "../../../firebase/firebase.config";
import { getUserId } from "../../../helpers/storage.helpers";
import { Guest } from "./guest.component";

export const ProtectedRoutes = ({ Component, ...props }) => {
  // useEffect(() => {
  //   FirebaseAuth.signOut();
  // }, [])

  
  const checkUser = (_) => {
    if (!getUserId()) {
      return <Guest />
    }
    return <Component />;
  };

  return <Route render={checkUser} {...props} />;
};
