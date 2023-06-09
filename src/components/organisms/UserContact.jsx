import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ToggleOpen from "../molecules/buttons/ToggleOpen";
// import UserCard from "../molecules/card/UserCard";
import NoCaptchaForm from "../molecules/forms/NoCaptchaForm";
import { AuthContext } from "../../utils/context/AuthContext";
import ContactDetailsReq from "../atoms/texts/ContactDetailsReq";
import ToggleData from "../atoms/texts/ToggleData";

const UserContact = () => {
  const { userValues, updateUserData } = useContext(AuthContext);
  const { isUserReq } = useContext(ServicesContext);
  const [isOpen, setIsOpen] = useState(false);
  const submit = (e) => updateUserData(e);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="bag-container">
      {isUserReq && (
        <div id="contact-user-form">
          <ContactDetailsReq />
        </div>
      )}
      <div className="secondary-section-container">
        {isUserReq ? (
          <>
            <ToggleOpen
              data={<ToggleData isOpen={isOpen} open="Enter contact details" />}
              click={handleClick}
            />
            {isOpen && <NoCaptchaForm data={userValues} submit={submit} />}
          </>
        ) : (
          "todo user contact card"
          // <UserCard />
        )}
      </div>
    </div>
  );
};
export default UserContact;
