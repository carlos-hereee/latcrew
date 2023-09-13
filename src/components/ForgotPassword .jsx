import { GoBackButton } from "nexious-library/@nxs-molecules";

const ForgotPassword = ({ handleClick }) => {
  return (
    <div>
      <GoBackButton onClick={() => handleClick("login")} />
    </div>
  );
};
export default ForgotPassword;
