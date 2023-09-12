import { useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const AppInProgress = () => {
  const [page, setPage] = useState("login");
  return (
    <div className="app-container elbow-space">
      <h2>App is under construction, try again later</h2>
      {page === "login" && <Login handleClick={setPage} />}
      {page === "signUp" && <SignUp handleClick={setPage} />}
      <p className="text-center text-max">More coming soon!</p>
    </div>
  );
};
export default AppInProgress;
