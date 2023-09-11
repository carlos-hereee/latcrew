import { Route, Routes } from "react-router-dom";
import { PageNotFound, ComingSoon } from "nexious-library/@nxs-molecules";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/helpers/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import { AppContext } from "./utils/context/app/AppContext";
import AddPage from "./pages/AddPages";

const AppRouter = () => {
  const { accessToken, user } = useContext(AuthContext);
  const { isComingSoon } = useContext(AppContext);

  if (isComingSoon && user.role !== "admin") return <ComingSoon />;
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-page" element={<AddPage />} />
      </Route>
      <Route path="/*" element={<PageNotFound to={accessToken ? "/dashboard" : "/"} />} />
    </Routes>
  );
};
export default AppRouter;
