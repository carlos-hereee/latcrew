import {
  // useState,
  useContext,
  useEffect,
} from "react";
import { AuthContext } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { Form } from "nexious-library/@nxs-organism";
// import Icons from "../components/molecules/icons/Icons";

const Login = () => {
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
    console.log("values", values);
    signIn(values);
  };
  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <Form values={{ username: "", password: "" }} submit={handleSubmit} />
      <div className="text-center m-tb">
        <Link to="/signup" className="link">
          Create an account
        </Link>
      </div>
    </div>
  );
};
export default Login;
