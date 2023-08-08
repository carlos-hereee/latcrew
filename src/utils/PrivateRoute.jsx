import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { accessToken } = useContext(AuthContext);
  return accessToken ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
