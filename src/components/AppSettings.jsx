import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import BuildApp from "./BuildApp";

const AppSettings = () => {
  const { app, isAdmin } = useContext(AppContext);
  console.log("app", app);
  return (
    <div className="container">
      {isAdmin ? "</div>" : <BuildApp heading="Create your first app" />}
    </div>
  );
};

export default AppSettings;
