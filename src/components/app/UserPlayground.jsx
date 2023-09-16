import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import DangerZone from "./DangerZone";
import WelcomeMessage from "./WelcomeMessage";
import message from "../../data/messages.json";
import ChangePassword from "../form/ChangePassword";
import MainPage from "./MainPage";
import { AppContext } from "../../utils/context/app/AppContext";
import { Select } from "nexious-library/@nxs-molecules";
const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  const { theme, themeList } = useContext(AppContext);
  const [page, setPage] = useState("home");
  const [style, setTheme] = useState(theme ? theme : "light-mode");

  const handleThemeChange = (event) => {
    event.preventDefault();
    setTheme(event.target.value);
  };
  return (
    <div className={`app-container elbow-space ${style}`}>
      <div className="banner">
        <WelcomeMessage user={user} message={message.welcomeMessage} />
        <div className="select-field">
          <Select
            name={theme}
            list={themeList}
            onChange={handleThemeChange}
            active={style}
            label={"Theme: "}
            theme={style}
          />
        </div>
        <DangerZone />
      </div>
      {page === "changePassword" && <ChangePassword handleClick={(e) => setPage(e)} />}
      {page === "home" && <MainPage handleClick={(name) => setPage(name)} />}
      {/* <div>FOOTER</div> */}
    </div>
  );
};
export default UserPlayground;
