import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";
import WelcomeMessage from "./WelcomeMessage";
import message from "../data/messages.json";
import ChangePassword from "./ChangePassword";
import HomePage from "./Homepage";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState("home");
  const [pageShow, setPageShow] = useState({ home: false, account: false });

  const handlePages = (name) => {
    setPage(name);
    setPageShow({ ...pageShow, [name]: !pageShow[name] });
  };
  return (
    <div className="app-container elbow-space">
      {user && <WelcomeMessage user={user} message={message.welcomeMessage} />}
      {page === "changePassword" && <ChangePassword onClick={handlePages} />}
      {page === "home" && <HomePage />}
      <DangerZone />
    </div>
  );
};
export default UserPlayground;
