import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

const SignUp = ({ handleClick }) => {
  const { register, signUpError, signUpValues } = useContext(AuthContext);

  return (
    <div>
      <h2 className="heading">Sign up</h2>
      {signUpError && <p className="error-message">{signUpError}</p>}
      <Form
        initialValues={signUpValues}
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
