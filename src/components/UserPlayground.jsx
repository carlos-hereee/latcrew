import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";
import ProfileCompletion from "./ProfileCompletion";
import WelcomeMessage from "./WelcomeMessage";
import message from "../data/messages.json";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <div className="app-container elbow-space">
      <WelcomeMessage user={user} message={message.welcomeMessage} />
      <ProfileCompletion />
      <DangerZone />
    </div>
  );
};
export default UserPlayground;
