import { GoBackButton } from "nexious-library/@nxs-molecules";
import { Form } from "nexious-library/@nxs-organism";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";

const ForgotPassword = ({ handleClick }) => {
  const { forgotPassValues, forgotPassLabels } = useContext(AuthContext);
  const { forgotPassword, forgotPassPlaceholders } = useContext(AuthContext);
  const { forgotPasswordError } = useContext(AuthContext);
  const [steps, setSteps] = useState("1");

  return (
    <div>
      <GoBackButton onClick={() => handleClick("login")} />
      <h2 className="heading">Forgot password</h2>
      {forgotPasswordError && <p className="error-message">{forgotPasswordError}</p>}
      <Form
        initialValues={forgotPassValues}
        labels={forgotPassLabels}
        placeholders={forgotPassPlaceholders}
        onSubmit={(values) => forgotPassword(values)}
      />
    </div>
  );
};
export default ForgotPassword;
