import {
  // useState,
  useContext,
  useEffect,
} from "react";
import { AuthContext } from "../utils/context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
// import Icons from "../components/molecules/icons/Icons";
import NoCaptchaForm from "../components/molecules/forms/NoCaptchaForm";

const Auth = () => {
  const {
    signIn,
    //  error,
    accessToken,
  } = useContext(AuthContext);
  // const [canSeePassword, setCanSeePassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken]);
  const handleSubmit = (values) => {
    signIn(values);
  };
  return (
    <section className="container">
      <div className="card">
        <h3 className="card-title">Login</h3>
        <div className="card-body">
          <NoCaptchaForm
            data={{ username: "", password: "" }}
            submit={handleSubmit}
          />
        </div>
        <div className="card-footer">
          <Link to="signup">Create an account</Link>
        </div>
      </div>
    </section>
  );
};
export default Auth;
