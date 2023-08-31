import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { AppContext } from "./utils/context/app/AppContext";
import { Footer, Header } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-molecules";

function App({ children }) {
  const { isLoading, language, updateLanguage } = useContext(AuthContext);
  const { app, menu, updateMenu } = useContext(AppContext);

  useEffect(() => {
    if (app && app.name) {
      document.title = app.name;
    }
  }, [app]);
  // console.log("app", app);
  // console.log("language", language);

  const handleUpdateMenu = (e) => {
    if (!language || language.uid !== e[0].active.uid) {
      updateLanguage(e[0].active);
    }
    updateMenu(e);
  };
  if (isLoading) {
    return <Loading message="Loading app assets.." />;
  }
  return (
    <div className="container p-sm">
      {menu && app?.logo && (
        <Header
          menu={menu}
          logo={app.logo}
          updateMenu={handleUpdateMenu}
          language={language}
        />
      )}
      {children}
      <Footer appName={app && app.name ? app.name : "sparkle shine"} />
    </div>
  );
}

export default App;
