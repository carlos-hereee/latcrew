import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "@components/app/DangerZone";
import WelcomeMessage from "@components/app/WelcomeMessage";
import message from "../data/messages.json";
import ChangePassword from "@components/form/ChangePassword";
import { AppContext } from "../utils/context/app/AppContext";
import { Button, Select } from "nexious-library";
import AccountSettings from "@app/components/app/AccountSettings";
import AppSettings from "@app/components/app/AppSettings";
import BuildApp from "@app/components/app/BuildApp";
import EditApp from "@app/components/app/EditApp";

const UserPlayground = () => {
  const { user } = useContext(AuthContext);
  const { theme, themeList, setTheme } = useContext(AppContext);
  const [active, setActive] = useState("newApp");
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    account: false,
    app: false,
    newApp: true,
    editApp: false,
  });
  const label = { app: "App Settings", account: "Account Settings" };
  const appTheme = show["app"]
    ? "active"
    : show["newApp"]
    ? "active"
    : show["editApp"]
    ? "active"
    : "";
  const accTheme = show["account"] && "active";

  const handleMenu = (name: string) => {
    setActive(name);
    setShow({ editApp: false, newApp: false, account: false, app: false, [name]: !show[name] });
  };
  const handleThemeChange = (event) => {
    event.preventDefault();
    setTheme(event.target.value);
  };
  return (
    <div className="app-container">
      <div className="banner">
        <WelcomeMessage user={user} message={message.welcomeMessage} />
        <div className="flex-center">
          <div className="select-field">
            <Select
              name={theme}
              list={themeList}
              onChange={handleThemeChange}
              active={theme}
              label={"Theme: "}
              theme={theme}
            />
          </div>
          <DangerZone />
        </div>
      </div>
      <div className="container">
        <div className="flex-g">
          <Button label={label.app} onClick={() => handleMenu("app")} theme={appTheme} />
          <Button label={label.account} onClick={() => handleMenu("account")} theme={accTheme} />
        </div>
        {active === "account" && show[active] && <AccountSettings onClick={handleMenu} />}
        {active === "app" && show[active] && <AppSettings onClick={handleMenu} />}
        {active === "newApp" && show[active] && (
          <BuildApp cancelBtn onClick={() => handleMenu("app")} />
        )}
        {active === "editApp" && show[active] && <EditApp onClick={handleMenu} />}
      </div>
      {/* <div>FOOTER</div> */}
    </div>
  );
};
export default UserPlayground;
