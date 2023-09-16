import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { AppContext } from "../../utils/context/app/AppContext";

const DangerZone = () => {
  const { logout, deleteApp, isAdmin } = useContext(AuthContext);
  const { app } = useContext(AppContext);
  return (
    <div className="danger-zone">
      <button type="button" className="btn-cancel" onClick={logout}>
        Log out
      </button>
      {app && isAdmin && (
        <button type="button" className="btn-cancel" onClick={() => deleteApp(app)}>
          Delete app
        </button>
      )}
    </div>
  );
};
export default DangerZone;
