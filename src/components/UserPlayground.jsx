import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <div className="app-container elbow-space">
      <h2>Welcome back {user.username}</h2>
      <div>
        {user.email ? (
          <p>Email {user.email}</p>
        ) : (
          <button className="btn-main">add email</button>
        )}
      </div>
      <DangerZone />
    </div>
  );
};
export default UserPlayground;
