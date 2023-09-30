import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { GoBackButton } from "nexious-library";
import { Form } from "nexious-library";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const { forgotPassValues, forgotPassLabels, fetchUser } = useContext(AuthContext);
  const { forgotPassword, forgotPassPlaceholders, dummyData } = useContext(AuthContext);
  const { forgotPasswordError } = useContext(AuthContext);
  const navigate = useNavigate();
  {
    /* todo : test forgot password  */
  }
  return (
    <div>
      <GoBackButton onClick={() => navigate("/")} />
      <h2 className="heading">Forgot password</h2>
      {forgotPasswordError && <p className="error-message">{forgotPasswordError}</p>}
      {dummyData.username ? (
        <Form
          initialValues={forgotPassValues}
          labels={forgotPassLabels}
          placeholders={forgotPassPlaceholders}
          onSubmit={(values) => forgotPassword(values)}
        />
      ) : (
        <Form initialValues={{ username: "qwerty" }} onSubmit={(values) => fetchUser(values)} />
      )}
    </div>
  );
};
export default ForgotPassword;
