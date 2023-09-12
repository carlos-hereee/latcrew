import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

const SignUp = ({ handleClick }) => {
  const { register, signUpError, signUpValues } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (accessToken) {
  //     navigate("/dashboard");
  //   }
  // }, [accessToken]);

  // const initvalues = {
  //   username: "qwerty",
  //   email: "example@mail.com",
  //   password: "secretPassword",
  //   confirmPassword: "secretPassword",
  // };
  return (
    <div>
      <h2 className="heading">Sign up</h2>
      {signUpError && <p className="error-message">{signUpError}</p>}
      <Form
        initialvalues={signUpValues}
        submit={(values) => register(values)}
        showAuthTips
      />
      <div className="flex-center">
        <label>Already have an account?</label>
        <button type="button" onClick={() => handleClick("login")} className="btn-link">
          Go to Login
        </button>
      </div>
    </div>
  );
};
export default SignUp;
