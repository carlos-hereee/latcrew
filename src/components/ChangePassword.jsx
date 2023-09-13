import { IconButton } from "nexious-library/@nxs-molecules";
import { Form } from "nexious-library/@nxs-organism";
import { useContext } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";

const ChangePassword = (props) => {
  const { onClick } = props;
  const { changePassword, passChangeValues, passChangeLabels } = useContext(AuthContext);
  const { passChangePlaceholders } = useContext(AuthContext);

  return (
    <div className="container">
      <IconButton
        icon={{ icon: "leftArrow", label: "Go back", name: "Go back" }}
        theme="btn-main"
        onClick={onClick}
      />
      <h2 className="heading">Change password</h2>
      <Form
        initialValues={passChangeValues}
        labels={passChangeLabels}
        placeholders={passChangePlaceholders}
        onSubmit={(values) => changePassword(values)}
      />
    </div>
  );
};

export default ChangePassword;
