import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const AppRoute = () => {
  const { isOffline } = useContext(AuthContext);
  return isOffline ? <Navigate to="/offline" /> : <Outlet />;
};
export default AppRoute;
