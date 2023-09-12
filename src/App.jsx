import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { AppContext } from "./utils/context/app/AppContext";
import { Footer, Header } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-molecules";
import AppInProgress from "./components/AppInProgress ";

function App({ children }) {
  const { isLoading, language, updateLanguage } = useContext(AuthContext);
  const { app, menu, updateMenu, logo } = useContext(AppContext);

  // console.log("logo", logo);
  useEffect(() => {
    if (app?.appName) {
      document.title = app.appName;
    }
  }, [app && app.name]);

  const handleUpdateMenu = (e) => {
    if (!language || language.uid !== e[0].active.uid) {
      updateLanguage(e[0].active);
    }
    updateMenu(e);
  };
  if (isLoading) {
    return <Loading message="Loading app assets.." />;
  }
  // console.log("app", app);
  if (!app) return <AppInProgress />;
  console.log("to do menu", menu);
  return (
    <div className="app-container">
      <Header menu={menu} logo={logo} updateMenu={handleUpdateMenu} language={language} />
      <div className="elbow-space">{children}</div>
      <Footer appName={app && app.name ? app.name : "sparkle shine"} />
    </div>
  );
}

export default App;
