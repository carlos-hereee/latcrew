import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Form } from "nexious-library/@nxs-organism";

// const Schema = Yup.object().shape({
//   password: Yup.string().required("This field is required"),
//   changepassword: Yup.string().when("password", {
//     is: (val) => (val && val.length > 0 ? true : false),
//     then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same"),
//   }),
// });
const SignUp = ({ history }) => {
  const { register, signUpError, accessToken } = useContext(AuthContext);
  const [canSeePassword, setCanSeePassword] = useState(false);
  const [canSeeConfirmPassword, setCanConfirmSeePassword] = useState(false);
  if (accessToken) {
    history.push("/dashboard");
  }
  const handleSubmit = (e) => {
    console.log("e", e);
  };
  return (
    <div>
      <h2 className="heading">Sign up</h2>
      <Form
        values={{ username: "", email: "", password: "", confirmPassword: "" }}
        isAuth
        submit={handleSubmit}
      />
      <div className="text-center m-tb">
        <Link to="/login" className="link">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
