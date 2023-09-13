import { useState } from "react";
import AccountSettings from "./AccountSettings";

const MainPage = ({ onClick }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <button type="button" className="btn-main" onClick={() => setShow(!show)}>
        Account settings
      </button>
      {show && <AccountSettings onClick={onClick} />}
    </div>
  );
};
export default MainPage;
