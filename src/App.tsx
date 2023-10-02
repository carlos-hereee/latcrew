import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { Loading, Header, Footer } from "nexious-library";
import { AppContext } from "./utils/context/app/AppContext";
import { ChildProps } from "app-types";

const App = ({ children }: ChildProps) => {
  const { isLoading } = useContext(AuthContext);
  const { appName, theme, menu, logo, language, updateMenu } = useContext(AppContext);

  useEffect(() => {
    if (appName) document.title = appName;
  }, [appName]);

  // const handleUpdateMenu = (e) => {
  //   // if (!language || language.uid !== e[0].active.uid) {
  //   //   // updateLanguage(e[0].active);
  //   // }
  //   updateMenu(e);
  // };
  // let menu = undefined
  // let logo = un

  // waiting server response
  if (isLoading) return <Loading message="Loading app assets.." />;
  return (
    <div className={theme ? `${theme} app-container` : "app-container"}>
      {menu && <Header menu={menu} logo={logo} updateMenu={updateMenu} language={language} />}
      <div className="elbow-space">{children}</div>
      {appName && <Footer appName={appName} />}
    </div>
  );
};

export default App;
