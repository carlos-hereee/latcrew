import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

const SignUp = ({ handleClick }) => {
  const { register, signUpError, signUpValues } = useContext(AuthContext);

  return (
    <div>
      <h2 className="heading">Sign up</h2>
      {signUpError && <p className="error-message">{signUpError}</p>}
      <Form initialValues={signUpValues} onSubmit={(values) => register(values)} />
      <div className="flex-center">
        <button type="button" onClick={() => handleClick("login")} className="btn-link">
          Already have an account?
          <br /> Go to Login
        </button>
      </div>
    </div>
  );
};
export default SignUp;
