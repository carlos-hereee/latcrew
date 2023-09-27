import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, authErrors, signUpForm } = useContext(AuthContext);

  return (
    <div>
      <h2 className="heading">Sign up</h2>
      {authErrors.signUpError && <p className="error-message">{authErrors.signUpError}</p>}
      <Form initialValues={signUpForm.initialValues} onSubmit={(values: any) => register(values)} />
      <div className="flex-center">
        <Link to="login">
          Already have an account?
          <br /> Go to Login
        </Link>
        {/* <button type="button" onClick={() => handleClick("login")} className="btn-link">
   
        </button> */}
      </div>
    </div>
  );
};
export default SignUp;
