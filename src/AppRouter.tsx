import { Route, Routes } from "react-router-dom";
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
import SignUp from "./pages/Signup";
import AppRoute from "./utils/router/AppRoute";
import { PageNotFound } from "nexious-library";

const AppRouter: React.FC = () => {
  const { accessToken, user, changePassword } = useContext<AuthSchema>(AuthContext);
  const { emergencyPasswordChangeIsRequired } = useContext(AuthContext);

  // const { isComingSoon } = useContext(AppContext);

  // if (isComingSoon && user.role !== "admin") return <ComingSoon />;

  // emergency password change
  if (emergencyPasswordChangeIsRequired) return <ChangePassword handleClick={changePassword} />;

  return (
    <Routes>
      {/* Public Routes */}
      {/* // if server not coaperating use offline data */}
      <Route path="/offline" element={<Offline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Landing />} />
      {/* App routes that requires internet or app data to work */}
      <Route element={<AppRoute />}>
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      {/* Private routes for account holders and authorized user */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-page" element={<AddPage />} />
      </Route>
      {/* All other routes */}
      <Route path="/*" element={<PageNotFound to={accessToken ? "/dashboard" : "/"} />} />
    </Routes>
  );
};
export default AppRouter;
