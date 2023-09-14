import { useContext } from "react";
import { Form } from "nexious-library/@nxs-organism";
import { AuthContext } from "../utils/context/auth/AuthContext";

const Login = ({ handleClick }) => {
  const { signIn, signInError, loginValues } = useContext(AuthContext);

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      {signInError && <p className="error-message">{signInError}</p>}
      <Form initialValues={loginValues} onSubmit={signIn} />
      <div className="flex-d-column flex-center">
        <button className="btn-link" type="button" onClick={() => handleClick("signUp")}>
          Dont have an account?
          <br /> Create an account
        </button>
        <button
          className="btn-link"
          type="button"
          onClick={() => handleClick("forgotPassword")}>
          Forgot password?
        </button>
      </div>
    </div>
  );
};
export default Login;
