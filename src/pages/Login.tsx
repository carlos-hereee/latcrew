import { useContext } from "react";
import { Form } from "nexious-library";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { AuthSchema } from "@app/utils/types/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn, authErrors, loginForm } = useContext<AuthSchema>(AuthContext);
  // console.log("authErrors", authErrors);

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      {authErrors.signInError && <p className="error-message">{authErrors.signInError}</p>}
      <Form initialValues={loginForm.initialValues} onSubmit={signIn} />
      <div className="flex-d-column flex-center">
        <Link to="/sign-up">
          Dont have an account?
          <br /> Create an account
        </Link>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
    </div>
  );
};
export default Login;
