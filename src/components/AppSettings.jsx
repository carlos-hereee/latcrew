import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import BuildApp from "./BuildApp";
import { AuthContext } from "../utils/context/auth/AuthContext";

const AppSettings = () => {
  // const { app } = useContext(AppContext);
  const { isAdmin, ownedApps } = useContext(AuthContext);
  // console.log("app", app);
  console.log("isadmin", isAdmin, ownedApps);
  return (
    <div className="container">
      {isAdmin ? (
        ownedApps.map((apps) => (
          <div key={apps} className="card">
            {apps}
          </div>
        ))
      ) : (
        <BuildApp heading="Create your first app" />
      )}
    </div>
  );
};

export default AppSettings;
