import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

const AccountSettings = ({ onClick }) => {
  const { user, updateUser } = useContext(AuthContext);
  const { userValues, userLabels, userPlaceholders } = useContext(AuthContext);

  const initialValues = {
    ...userValues,
    username: user.username ? user.username : "",
    email: user.email ? user.email : "",
    nickname: user.nickname ? user.nickname : "",
  };

  return (
    <div className="container">
      <h2 className="heading">Update account settings</h2>
      <Form
        initialValues={initialValues}
        labels={userLabels}
        placeholders={userPlaceholders}
        onSubmit={(values) => updateUser(values)}
        submitLabel="Save and continue"
      />
      <h2 className="heading">More options:</h2>
      <button
        className="btn-main btn-link"
        type="button"
        onClick={() => onClick("changePassword")}>
        Change password
      </button>
    </div>
  );
};
export default AccountSettings;
