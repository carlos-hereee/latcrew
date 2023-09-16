import { useState } from "react";
import AccountSettings from "./AccountSettings";
import { Button } from "nexious-library/@nxs-atoms";
import AppSettings from "./AppSettings";
import BuildApp from "./BuildApp";
import EditApp from "./EditApp";

const MainPage = ({ handleClick }) => {
  const [active, setActive] = useState("app");
  const [show, setShow] = useState({
    account: false,
    app: true,
    newApp: false,
    editApp: false,
  });
  const label = { app: "App Settings", account: "Account Settings" };
  const appTheme = show["app"] ? "active" : show["newApp"] ? "active" : "";
  const accTheme = show["account"] && "active";

  const handleMenu = (name) => {
    setActive(name);
    setShow({ account: false, app: false, [name]: !show[name] });
  };
  // console.log("active", active);
  return (
    <div className="container">
      <div className="flex-g">
        <Button
          label={label.app}
          handleClick={() => handleMenu("app")}
          theme={appTheme}
        />
        <Button
          label={label.account}
          handleClick={() => handleMenu("account")}
          theme={accTheme}
        />
      </div>
      {active === "account" && show[active] && <AccountSettings onClick={handleClick} />}
      {active === "app" && show[active] && <AppSettings onClick={handleMenu} />}
      {active === "newApp" && show[active] && (
        <BuildApp cancelBtn onClick={() => handleMenu("app")} />
      )}
      {active === "editApp" && show[active] && <EditApp onClick={handleMenu} />}
    </div>
  );
};
export default MainPage;
