import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const AdminRoute = () => {
  const { isAdmin } = useContext(AuthContext);
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};
export default AdminRoute;
