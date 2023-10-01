import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import DangerZone from "@components/app/DangerZone";
import WelcomeMessage from "@components/app/WelcomeMessage";
import message from "../data/messages.json";
import ChangePassword from "@components/form/ChangePassword";
import { AppContext } from "../utils/context/app/AppContext";
import { Button, Hero, Select } from "nexious-library";
import AccountSettings from "@app/components/app/AccountSettings";
// import AppSettings from "@app/components/app/AppSettings";
import BuildApp from "@app/components/app/BuildApp";
import EditApp from "@app/components/app/EditApp";
import { useNavigate } from "react-router-dom";

const UserPlayground = () => {
  const { user, ownedApps, editApp } = useContext(AuthContext);
  const { theme, themeList, setTheme } = useContext(AppContext);
  const [error, setError] = useState<{ [key: string]: any }>({});

  const navigate = useNavigate();

  const handleSeeLive = (app: { appName?: string; appId: string }) => {
    if (!app.appName) {
      setError({
        ...error,
        [app.appId]: "Could not see live app because app name has not been set",
      });
    } else {
      let name = app.appName.split(" ").join("+");
      navigate({ pathname: "/app", search: `?appName=${name}` });
    }
  };
  const handleEdit = (app: { appName?: string; appId: string }) => {
    if (!app.appName) {
      setError({
        ...error,
        [app.appId]: "Could not see live app because app name has not been set",
      });
    } else {
      let name = app.appName.split(" ").join("+");
      navigate({ pathname: "/edit-app", search: `?appName=${name}` });
    }
  };
  return (
    <div className="container">
      <div className="banner">
        <WelcomeMessage user={user} message={message.welcomeMessage} />
        <div className="flex-center">
          <div className="select-field">
            <Select
              name={theme}
              list={themeList}
              onChange={(event: any) => setTheme(event.target.value)}
              active={theme}
              label={"Theme: "}
              theme={theme}
            />
          </div>
          <DangerZone />
        </div>
      </div>
      <div className="container">
        <h2 className="heading">All your apps: </h2>
        <button
          type="button"
          className={`btn-main w-max ${theme ? "btn-" + theme : ""}`}
          onClick={() => navigate("/build-app")}
        >
          + Create a new app
        </button>
        {ownedApps?.length > 0 ? (
          ownedApps.map((app) => (
            <div key={app.appId} className="card-row pad-t">
              <Hero hero={app.logo ? app.logo : {}} onImageClick={() => handleEdit(app)} />
              <div className="flex-column elbow-space mb-2">
                {app.appName ? (
                  <h2 className="heading">{app.appName}</h2>
                ) : (
                  <h2 className="heading">No name</h2>
                )}
                <div>
                  {error && error[app.appId] && <p className="error-message">{error[app.appId]}</p>}
                </div>
                <div className="flex-row flex-wrap">
                  <button className="btn-main" type="button" onClick={() => handleEdit(app)}>
                    Edit app
                  </button>
                  <button className="btn-main" type="button" onClick={() => handleSeeLive(app)}>
                    See live
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You dont own any apps</p>
        )}
        {/* <div className="flex-g">
          <Button label={label.app} onClick={() => handleMenu("app")} theme={appTheme} />
          <Button label={label.account} onClick={() => handleMenu("account")} theme={accTheme} />
        </div>
        {active === "account" && show[active] && <AccountSettings onClick={handleMenu} />}
        {active === "app" && show[active] && <AppSettings onClick={handleMenu} />}
    
        {active === "editApp" && show[active] && <EditApp onClick={handleMenu} />} */}
      </div>
      {/* <div>FOOTER</div> */}
    </div>
  );
};
export default UserPlayground;
