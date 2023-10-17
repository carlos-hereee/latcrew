import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { AppContext } from "../../utils/context/app/AppContext";

const DangerZone = () => {
  const { logout } = useContext(AuthContext);
  const { appId, deleteApp } = useContext(AppContext);
  return (
    <div className="container">
      <h2 className="heading error-message">Danger Zone</h2>
      <div className="flex-row">
        <button type="button" className="btn-cancel" onClick={logout}>
          Log out
        </button>
        <button type="button" className="btn-cancel" onClick={() => deleteApp(appId)}>
          Delete app
        </button>
      </div>
    </div>
  );
};
export default DangerZone;
