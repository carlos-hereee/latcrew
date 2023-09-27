import { Route, Routes } from "react-router-dom";
// import { PageNotFound } from "nexious-library/@nxs-molecules";
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
import PrivateRoute from "./utils/router/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./utils/context/auth/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import AddPage from "./pages/AddPages";
import UserPlayground from "./pages/UserPlayground";
import ChangePassword from "@components/form/ChangePassword";
import Offline from "./pages/Offline";
import { AuthSchema } from "utils/types/auth";

const AppRouter: React.FC = () => {
  const { accessToken, user, isOffline } = useContext<AuthSchema>(AuthContext);
  // const { emergencyPasswordChangeIsRequired, } = useContext(AuthContext);

  // const { isComingSoon } = useContext(AppContext);

  // if (isComingSoon && user.role !== "admin") return <ComingSoon />;
  // if server not coaperating use offline data
  if (isOffline) return <Offline />;

  // if login in but no app is been created
  // if (!app && accessToken) return <UserPlayground />;
  // emergency password change
  // if (emergencyPasswordChangeIsRequired) return <ChangePassword />;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-page" element={<AddPage />} />
      </Route>
      {/* <Route path="/*" element={<PageNotFound to={accessToken ? "/dashboard" : "/"} />} /> */}
    </Routes>
  );
};
export default AppRouter;
