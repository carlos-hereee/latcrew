import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Form } from "nexious-library/@nxs-organism";

const Login = () => {
  const { signIn, signInError } = useContext(AuthContext);

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      {signInError && <p className="error-message">{signInError}</p>}
      <Form
        values={{ username: "qwerty", password: "secretPassword" }}
        submit={(values) => signIn(values)}
      />
      <div className="text-center m-tb">
        <Link to="/signup" className="link">
          Create an account
        </Link>
      </div>
    </div>
  );
};
export default Login;
