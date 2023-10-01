import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { Loading, Header, Footer } from "nexious-library";
import { AppProps } from "app-types";
import { AppContext } from "./utils/context/app/AppContext";

const App: React.FC<AppProps> = ({ children }) => {
  const { isLoading } = useContext(AuthContext);
  const { app, menu, updateMenu, logo, language, theme } = useContext(AppContext);

  useEffect(() => {
    if (app?.appName) document.title = app.appName;
  }, [app]);

  // const handleUpdateMenu = (e) => {
  //   // if (!language || language.uid !== e[0].active.uid) {
  //   //   // updateLanguage(e[0].active);
  //   // }
  //   updateMenu(e);
  // };

  // waiting server response
  if (isLoading) return <Loading message="Loading app assets.." />;
  return (
    <div className={theme ? `${theme} app-container"` : "app-container"}>
      {menu && <Header menu={menu} logo={logo} updateMenu={updateMenu} language={language} />}
      <div className="elbow-space">{children}</div>
      {app && <Footer appName={app && app.appName ? app.appName : "sparkle shine"} />}
    </div>
  );
};

export default App;
