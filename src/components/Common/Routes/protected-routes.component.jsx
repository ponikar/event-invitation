import { Route } from "react-router-dom";
import { getUserId } from "../../../helpers/storage.helpers";
import { Guest } from "./guest.component";

export const ProtectedRoutes = ({ Component, ...props }) => {
  const checkUser = (_) => {
    if (!getUserId()) {
      return <Guest />
    }
    return <Component />;
  };

  return <Route render={checkUser} {...props} />;
};
