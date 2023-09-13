import { useEffect, useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ForgotPassword from "./ForgotPassword ";

const AppInProgress = () => {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage("login");
  }, []);

  return (
    <div className="app-container elbow-space">
      <h2>App is under construction, try again later</h2>
      {/* todo : test forgot password  */}
      {page === "forgotPassword" && <ForgotPassword handleClick={setPage} />}
      {page === "login" && <Login handleClick={setPage} />}
      {page === "signUp" && <SignUp handleClick={setPage} />}
      <p className="text-center text-max">More coming soon!</p>
    </div>
  );
};
export default AppInProgress;
