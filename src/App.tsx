import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { AppContext } from "./utils/context/app/AppContext";
import { Footer, Header } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-molecules";
import AppInProgress from "@components/app/AppInProgress";

function App({ children }) {
  const { isLoading, language, updateLanguage, isOffline } = useContext(AuthContext);
  const { app, menu, updateMenu, logo } = useContext(AppContext);

  useEffect(() => {
    if (app?.appName) document.title = app.appName;
  }, [app]);

  const handleUpdateMenu = (e) => {
    if (!language || language.uid !== e[0].active.uid) {
      updateLanguage(e[0].active);
    }
    updateMenu(e);
  };
  // waiting server response
  if (isLoading) return <Loading message="Loading app assets.." />;
  // no app no login - everything's okay tho, app is under construction
  if (!app) return <AppInProgress />;
  return (
    <div className="app-container">
      <Header menu={menu} logo={logo} updateMenu={handleUpdateMenu} language={language} />
      <div className="elbow-space">{children}</div>
      <Footer appName={app && app.name ? app.name : "sparkle shine"} />
    </div>
  );
}

export default App;
