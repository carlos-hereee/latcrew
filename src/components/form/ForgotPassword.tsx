import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth/AuthContext";
import { PageClickProps } from "@type/app/PageClickProps";
import { GoBackButton } from "nexious-library/@nxs-molecules";
import { Form } from "nexious-library";

const ForgotPassword: React.FC<PageClickProps> = ({ handleClick }) => {
  const { forgotPassValues, forgotPassLabels, fetchUser } = useContext(AuthContext);
  const { forgotPassword, forgotPassPlaceholders, dummyData } = useContext(AuthContext);
  const { forgotPasswordError } = useContext(AuthContext);

  return (
    <div>
      <GoBackButton onClick={() => handleClick("login")} />
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
