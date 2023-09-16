import { useContext, useState } from "react";
import BuildApp from "./BuildApp";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Hero } from "nexious-library/@nxs-molecules";

const AppSettings = ({ onClick }) => {
  const { isAdmin, ownedApps } = useContext(AuthContext);
  const editApp = (app) => {
    console.log("app", app);
  };
  const editLogo = (app) => {
    console.log("loho click", app);
  };
  return (
    <div className="container">
      {isAdmin ? (
        <>
          {ownedApps.map((apps) => (
            <div key={apps.appId} className="card-row">
              <Hero
                hero={apps.logo ? apps.log : {}}
                onImageClick={() => editLogo(apps)}
              />
              <div>
                <h2 className="heading">{apps.appName}</h2>
                <button className="btn-main" type="button" onClick={() => editApp(apps)}>
                  Edit app
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn-main w-max"
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
