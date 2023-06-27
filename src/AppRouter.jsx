import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
export default AppRouter;
// <Routes>
//   <Route exact path="/" element={<Landing />} />
//   <Route path="/login" element={<Auth />} />

//   <Route path="/booking" element={<Booking />} />
//   <Route path="/checkout" element={<Checkout />} />
//   <Route path="/signup" element={<Register />} />
//   <Route path="/dashboard" element={<PrivateRoute />}>
//     {/* <Route path */}
//     <Route path="/dashboard" element={<Dashboard />} />
//   </Route>
//   {/* <PrivateRoute path="/shop" element={<Shop />} /> */}
// </Routes>
