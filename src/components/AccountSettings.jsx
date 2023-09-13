import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";
import messages from "../data/messages.json";
import { useNavigate } from "react-router-dom";

const AccountSettings = (props) => {
  const { user, updateUser, userValues } = useContext(AuthContext);
  const { onClick } = props;
  const navigate = useNavigate();

  const initialValues = {
    ...userValues,
    username: user.username ? user.username : "",
    email: user.email ? user.email : "",
    nickname: user.nickname ? user.nickname : "",
  };
  // const labels = {
  //   email: messages.labels.email,
  //   nickname: messages.labels.nickname,
  //   phone: messages.labels.phone,
  // };
  return (
    <div className="container">
      <h2 className="heading">Update account settings</h2>
      <Form
        initialValues={initialValues}
        labels={{ ...messages.labels }}
        placeholders={{ nickname: messages.nicknamePlaceholder }}
        onSubmit={(values) => updateUser(values)}
        submitLabel="Save and continue"
      />
      <h2 className="heading">More options:</h2>
      <button className="btn-main btn-link" type="button" onClick={onClick}>
        Change password
      </button>
    </div>
  );
};
export default AccountSettings;
