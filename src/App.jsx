import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { AppContext } from "./utils/context/app/AppContext";
import { Footer, Header } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-organism";
import logo from "/icons/logo.svg";

function App({ children }) {
  const { isLoading, language, updateLanguage } = useContext(AuthContext);
  const { app, menu, updateMenu } = useContext(AppContext);

  useEffect(() => {
    if (app && app.appName) {
      document.title = app.appName;
    }
  }, [app]);

  const handleUpdateMenu = (e) => {
    if (!language || language.uid !== e[0].active.uid) {
      updateLanguage(e[0].active);
    }
    updateMenu(e);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container p-sm">
      <Header
        menu={menu}
        logo={{
          url: logo,
          name: app && app.appName ? app.appName : "sparkle shine",
          alt: "industry-brand",
        }}
        updateMenu={handleUpdateMenu}
      />
      {children}
      <Footer appName={app && app.appName ? app.appName : "sparkle shine"} />
    </div>
  );
}

export default App;
