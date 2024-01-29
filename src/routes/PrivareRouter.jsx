import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";

const PrivareRouter = ({ children }) => {
  const { user, loadding } = useContext(authContext);
  const localcation = useLocation()

  if(loadding) {
    return <Loader />
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={localcation} to={"/login"} />;
};

export default PrivareRouter;
