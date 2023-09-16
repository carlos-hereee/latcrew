import { useContext } from "react";
import BuildApp from "./BuildApp";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { Hero } from "nexious-library/@nxs-molecules";
import { AppContext } from "../../utils/context/app/AppContext";

const AppSettings = ({ onClick }) => {
  const { isAdmin, ownedApps } = useContext(AuthContext);
  const { theme, getAppWithAppId, setEditApp } = useContext(AppContext);
  const editApp = (app) => {
    onClick("editApp");
    setEditApp(app);
  };
  const editLogo = (appId) => {
    console.log("app", appId);
  };
  return (
    <div className="container">
      {isAdmin ? (
        <>
          <h2 className="heading">All owned apps</h2>
          {ownedApps.map((apps) => (
            <div key={apps.appId} className="card-row pad-t">
              <Hero
                hero={apps.logo ? apps.log : {}}
                onImageClick={() => editLogo(apps)}
              />
              <div className="flex-column elbow-space mb-2">
                <h2 className="heading">{apps.appName}</h2>
                <div className="flex-center flex-row flex-wrap">
                  <button
                    className="btn-main"
                    type="button"
                    onClick={() => editApp(apps.appId)}>
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
                    onClick={() => getAppWithAppId(apps.appId)}>
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
          ))}
          <button
            type="button"
            className={`btn-main w-max ${theme ? "btn-" + theme : ""}`}
            onClick={() => onClick("newApp")}>
            + Create a new app
          </button>
        </>
      ) : (
        <BuildApp heading="Create your first app" />
      )}
    </div>
  );
};

export default AppSettings;
