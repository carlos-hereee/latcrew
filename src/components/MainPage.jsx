import { useState } from "react";
import AccountSettings from "./AccountSettings";
import { Button } from "nexious-library/@nxs-atoms";
import AppSettings from "./AppSettings";

const MainPage = ({ handleClick }) => {
  const [active, setActive] = useState("app");
  const [show, setShow] = useState({ account: false, app: true });
  const label = { app: "App Settings", account: "Account Settings" };
  const theme = "active";

  const handleMenu = (name) => {
    setActive(name);
    setShow({ account: false, app: false, [name]: !show[name] });
  };
  return (
    <div className="container">
      <div className="flex-g">
        <Button
          label={label.app}
          handleClick={() => handleMenu("app")}
          theme={show["app"] && theme}
        />
        <Button
          label={label.account}
          handleClick={() => handleMenu("account")}
          theme={show["account"] && theme}
        />
      </div>
      {active === "account" && show[active] && <AccountSettings onClick={handleClick} />}
      {active === "app" && show[active] && <AppSettings onClick={handleClick} />}
    </div>
  );
};
export default MainPage;
