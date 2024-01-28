import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivareRouter = ({ children }) => {
  const { user } = useContext(authContext);

  if (user && user?.email) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivareRouter;
