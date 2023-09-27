import { useState } from "react";
import AccountSettings from "@components/app/AccountSettings";
import { Button } from "nexious-library/@nxs-atoms";
import AppSettings from "@components/app/AppSettings";
import BuildApp from "@components/app/BuildApp";
import EditApp from "@components/app/EditApp";

const MainPage = ({ handleClick }) => {
  const [active, setActive] = useState("newApp");
  const [show, setShow] = useState({
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

  const handleMenu = (name) => {
    setActive(name);
    setShow({ account: false, app: false, [name]: !show[name] });
  };
  // console.log("active", active);
  return (
    <div className="container">
      <div className="flex-g">
        <Button label={label.app} handleClick={() => handleMenu("app")} theme={appTheme} />
        <Button label={label.account} handleClick={() => handleMenu("account")} theme={accTheme} />
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
