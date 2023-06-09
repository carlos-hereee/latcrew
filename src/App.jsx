import { Fragment, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import { AuthContext } from "./utils/context/AuthContext";
import Loading from "./components/molecules/Loading";
import PrivateRoute from "./utils/fns/PrivateRoute";
import { AppContext } from "./utils/context/AppContext";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Booking from "./pages/Booking";

function App() {
  const { isLoading } = useContext(AuthContext);
  const { app } = useContext(AppContext);

  useEffect(() => {
    if (app.name) {
      document.title = app.name;
    }
  }, [app.name]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-d-column p-sm">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
