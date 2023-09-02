import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Loading } from "nexious-library/@nxs-molecules";
import { AdminContext } from "../utils/context/admin/AdminContext";

const AdminDashboard = () => {
  const { isLoading } = useContext(AdminContext);

  if (isLoading) return <Loading message="Authenticating user .. please wait" />;
  return <div>AdminDashboard</div>;
};
export default AdminDashboard;
