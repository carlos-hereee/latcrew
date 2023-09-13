import { useContext } from "react";
import { Form, ChangePassword } from "nexious-library/@nxs-organism";
import { AuthContext } from "../utils/context/auth/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import ChangePassword from "../components/ChangePassword";

const Login = ({ handleClick }) => {
  const { signIn, signInError, loginValues, isChangePassword } = useContext(AuthContext);
  const { changePassword } = useContext(AuthContext);

  if (isChangePassword) {
    return (
      <ChangePassword
        values={loginValues}
        error={signInError}
        onSubmit={changePassword}
        showAuthTips
      />
    );
  }
  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      {signInError && <p className="error-message">{signInError}</p>}
      <Form initialValues={loginValues} submit={signIn} />
      <div className="flex-center">
        <label>Dont have an account? </label>
        <button className="btn-link" type="button" onClick={() => handleClick("signUp")}>
          Create an account
        </button>
      </div>
    </div>
  );
};
export default Login;
