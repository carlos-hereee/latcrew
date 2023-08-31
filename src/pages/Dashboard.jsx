import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import FeatureItems from "../components/FeatureItems";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { booked } = useContext(ServicesContext);
  return (
    <section className="dashboard m-auto">
      <div>
        <h2 className="heading">
          Welcome back {user.nickname ? user.nickname : user.username} you have{" "}
          {booked.length} upcoming orders:
        </h2>
        {booked.length > 0 ? (
          booked.map(<div>{booked.uid}</div>)
        ) : (
          <div className="flex-center w-100">
            <p>No upcoming orders </p>
          </div>
        )}
      </div>
      <FeatureItems />
      <nav className="navbar">
        <button type="button" className="btn-main">
          Edit profile
        </button>
        <button type="button" className="btn-danger" onClick={() => logOut()}>
          Log Out
        </button>
      </nav>
    </section>
  );
};
export default Dashboard;
