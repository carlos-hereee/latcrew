import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};
export default AppRouter;
