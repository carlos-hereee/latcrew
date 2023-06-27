import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { AppContext } from "./context/AppContext";
import { Footer, Header } from "nexious-library";
import logo from "./assets/logo.svg";

function App({ children }) {
  const { isLoading } = useContext(AuthContext);
  const { app, menu } = useContext(AppContext);

  useEffect(() => {
    if (app.name) {
      document.title = app.name;
    }
  }, [app.name]);
  if (isLoading) {
    // return <Loading />;
  }
  return (
    <div className="flex-d-column p-sm">
      <Header
        menu={menu}
        data={{ url: logo, name: app.name, alt: "industry-brand" }}
        title={app.name}
      />
      {children}
      <Footer title={app.name} />
    </div>
  );
}

export default App;
