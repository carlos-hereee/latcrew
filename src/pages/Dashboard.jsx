// import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

const Dashboard = ({ history }) => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <section className="dashboard m-auto">
      <nav className="navbar">
        <button className="btn btn-danger" onClick={() => logOut(user, history)}>
          Log Out
        </button>
      </nav>
    </section>
  );
};
export default Dashboard;
