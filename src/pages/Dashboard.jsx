import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("user", user);
  return (
    <section className="dashboard m-auto">
      <nav className="navbar">
        <button type="button" className="btn btn-danger" onClick={() => logOut(user)}>
          Log Out
        </button>
      </nav>
    </section>
  );
};
export default Dashboard;
