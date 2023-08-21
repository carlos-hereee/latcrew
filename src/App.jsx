import { useContext, useEffect } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import { AppContext } from "./utils/context/app/AppContext";
import { Footer, Header } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-organism";
import logo from "/icons/logo.svg";

function App({ children }) {
  const { isLoading } = useContext(AuthContext);
  const { app, menu } = useContext(AppContext);

  useEffect(() => {
    if (app.appName) {
      document.title = app.appName;
    }
  }, [app.appName]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container p-sm">
      <Header
        menu={menu}
        logo={{ url: logo, name: app.appName, alt: "industry-brand" }}
      />
      {children}
      <Footer appName={app.name} />
    </div>
  );
}

export default App;
