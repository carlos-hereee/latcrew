import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ToggleOpen from "../molecules/buttons/ToggleOpen";
import UserCard from "../molecules/card/UserCard";
import NoCaptchaForm from "../molecules/forms/NoCaptchaForm";
import { AuthContext } from "../../utils/context/AuthContext";

const UserContact = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(AuthContext);
  const { isUserReq } = useContext(ServicesContext);
  const [isOpen, setIsOpen] = useState(false);
  const submit = (e) => updateUserData(e);
  const handleClick = () => setIsOpen(!isOpen);
  const setData = () => {
    return isOpen ? <p>Close contact details</p> : <p>Enter contact details</p>;
  };
  return (
    <div>
      <div className="card-header" id="contact-user-form">
        <h3>Contact information</h3>
        {isUserReq && (
          <p className="required">Please enter contact details before proceeding</p>
        )}
      </div>
      {user && user.uid ? (
        <UserCard />
      ) : isOpen ? (
        <>
          <ToggleOpen data={setData()} click={handleClick} />
          <NoCaptchaForm
            data={{ values: userValues, schema: userSchema }}
            submit={submit}
          />
        </>
      ) : (
        <ToggleOpen data={setData()} click={handleClick} />
      )}
    </div>
  );
};
export default UserContact;
