import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, ChangePassword } from "nexious-library/@nxs-organism";
import { AuthContext } from "../utils/context/auth/AuthContext";
// import ChangePassword from "../components/ChangePassword";

const Login = () => {
  const { signIn, signInError, loginValues, isChangePassword, changePassword } =
    useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (accessToken) {
  //     navigate("/dashboard");
  //   }
  // }, [accessToken]);

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
      <div className="text-center m-tb">
        <Link to="/signup" className="link">
          Create an account
        </Link>
      </div>
    </div>
  );
};
export default Login;
