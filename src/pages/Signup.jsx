import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

const SignUp = () => {
  const { register, signUpError, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken]);

  const initvalues = {
    username: "qwerty",
    email: "example@mail.com",
    password: "secretPassword",
    confirmPassword: "secretPassword",
  };
  return (
    <div>
      <h2 className="heading">Sign up</h2>
      {signUpError && <p className="error-message">{signUpError}</p>}
      <Form values={initvalues} submit={(values) => register(values)} showAuthTips />
      <div className="text-center m-tb">
        <Link to="/login" className="link">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
