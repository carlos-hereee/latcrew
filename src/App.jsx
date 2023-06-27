import { Fragment, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import { AuthContext } from "./context/AuthContext";
import { AppContext } from "./context/AppContext";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Booking from "./pages/Booking";
import PrivateRoute from "./utils/PrivateRoute";
import { Footer, Header } from "nexious-library";
import logo from "./assets/logo.svg";
function App() {
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
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            {/* <Route path */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <PrivateRoute path="/shop" element={<Shop />} /> */}
        </Routes>
      </Fragment>
      <Footer title={app.name} />
    </div>
  );
}

export default App;
