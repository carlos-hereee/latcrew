import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const AppRoute = () => {
  const { isOffline } = useContext(AuthContext);
  return isOffline ? <Outlet /> : <Navigate to="/offline-data" />;
};
export default AppRoute;
