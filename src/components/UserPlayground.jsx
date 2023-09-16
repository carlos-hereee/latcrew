import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";
import WelcomeMessage from "./WelcomeMessage";
import message from "../data/messages.json";
import ChangePassword from "./ChangePassword";
import MainPage from "./MainPage";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState("home");
  console.log("user", user);

  return (
    <div className="app-container elbow-space">
      <div className="banner">
        <WelcomeMessage user={user} message={message.welcomeMessage} />
        <DangerZone />
      </div>
      {page === "changePassword" && <ChangePassword handleClick={(e) => setPage(e)} />}
      {page === "home" && <MainPage handleClick={(name) => setPage(name)} />}
      {/* <div>FOOTER</div> */}
    </div>
  );
};
export default UserPlayground;
