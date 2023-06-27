import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
export default AppRouter;
// <Routes>
//   <Route exact path="/" element={<Landing />} />
//   <Route path="/login" element={<Auth />} />
//   <Route path="/services" element={<Services />} />
//   <Route path="/booking" element={<Booking />} />
//   <Route path="/checkout" element={<Checkout />} />
//   <Route path="/signup" element={<Register />} />
//   <Route path="/dashboard" element={<PrivateRoute />}>
//     {/* <Route path */}
//     <Route path="/dashboard" element={<Dashboard />} />
//   </Route>
//   {/* <PrivateRoute path="/shop" element={<Shop />} /> */}
// </Routes>
