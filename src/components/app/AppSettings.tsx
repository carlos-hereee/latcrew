import { useContext } from "react";
import BuildApp from "./BuildApp";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { Hero } from "nexious-library/@nxs-molecules";
import { AppContext } from "../../utils/context/app/AppContext";

const AppSettings = ({ onClick }) => {
  const { isAdmin, ownedApps } = useContext(AuthContext);
  const { theme, getAppWithAppId, setEditApp } = useContext(AppContext);
  const editApp = (app) => {
    setEditApp(app.appId);
    onClick("editApp");
  };
  const editLogo = (appId) => {
    console.log("app", appId);
  };
  return (
    <div className="container">
      <h2 className="heading">All your apps: </h2>
      {ownedApps.length < 0 ? (
        ownedApps.map((app) => (
          <div key={app.appId} className="card-row pad-t">
            <Hero hero={app.logo ? app.log : {}} onImageClick={() => editLogo(app)} />
            <div className="flex-column elbow-space mb-2">
              <h2 className="heading">{app.appName}</h2>
              <div className="flex-center flex-row flex-wrap">
                <button className="btn-main" type="button" onClick={() => editApp(app)}>
                  Edit app
                </button>
                {/* <button
                    className="btn-main"
                    type="button"
                    onClick={() => editApp(apps)}>
                    Advanced Settings
                  </button> */}
                <button
                  className="btn-main"
                  type="button"
                  onClick={() => getAppWithAppId(app.appId)}>
                  See live
                </button>
                {/* <button
                    className="btn-cancel"
                    disabled
                    type="button"
                    onClick={() => editApp(apps)}>
                    Delete app
                  </button> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <p>You dont own any apps yet</p>
          <button
            type="button"
            className={`btn-main w-max ${theme ? "btn-" + theme : ""}`}
            onClick={() => onClick("newApp")}>
            + Create a new app
          </button>
        </>
      )}
    </div>
  );
};

export default AppSettings;
