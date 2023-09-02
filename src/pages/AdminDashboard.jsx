import { useContext } from "react";
import { Loading } from "nexious-library/@nxs-molecules";
import { AdminContext } from "../utils/context/admin/AdminContext";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import { AuthContext } from "../utils/context/auth/AuthContext";

const AdminDashboard = () => {
  const { isLoading } = useContext(AdminContext);
  const { user } = useContext(AuthContext);
  const { booked } = useContext(ServicesContext);

  if (isLoading) return <Loading message="Authenticating user .. please wait" />;
  return (
    <div>
      {" "}
      {user && (
        <h2 className="heading">
          Welcome back {user?.nickname ? user.nickname : user.username} you have{" "}
          {booked?.length ? booked.length : 0} upcoming orders:
        </h2>
      )}
      {booked?.length > 0 ? (
        booked.map(<div>{booked.uid}</div>)
      ) : (
        <button className="flex-center w-100">add more meetings</button>
      )}
    </div>
  );
};
export default AdminDashboard;
