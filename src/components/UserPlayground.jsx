import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";
import AccountSettings from "./AccountSettings";
import WelcomeMessage from "./WelcomeMessage";
import message from "../data/messages.json";
import ChangePassword from "./ChangePassword";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState("");
  // console.log("user", user);
  return (
    <div className="app-container elbow-space">
      {user && <WelcomeMessage user={user} message={message.welcomeMessage} />}
      {page === "auth" ? (
        <ChangePassword onClick={() => setPage("")} />
      ) : (
        <div className="container">
          <button type="button" className="btn-main" onClick={() => setPage("account")}>
            Update account settings{" "}
          </button>
          {page === "account" && <AccountSettings onClick={() => setPage("auth")} />}
        </div>
      )}
      <DangerZone />
    </div>
  );
};
export default UserPlayground;
