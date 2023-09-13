import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Form } from "nexious-library/@nxs-organism";
import messages from "../data/messages.json";

const ProfileCompletion = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("email values ", email);
  //   // console.log("values", props.currentTarget.value);
  // };
  return (
    <div className="container">
      <h2 className="heading">Profile Completion</h2>
      {user.email ? (
        <p>Email {user.email}</p>
      ) : (
        <Form
          initialValues={{ email }}
          submitLabel="add email"
          labels={{ email: messages.email }}
          onSubmit={(values) => updateUser(values)}
        />
        // <form onSubmit={handleSubmit}>
        //   <p className="w-full">{messages.email}</p>
        //   <Field
        //     label="email"
        //     name="email"
        //     onChange={(event) => setEmail(event.target.value)}
        //   />
        //   <button type="submit" className="btn-main">
        //     add email
        //   </button>
        // </form>
      )}
    </div>
  );
};
export default ProfileCompletion;
