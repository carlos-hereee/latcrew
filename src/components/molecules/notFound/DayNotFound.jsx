import { useContext } from "react";
import { AuthContext } from "../../../utils/context/AuthContext";

const DayNotFound = () => {
  const { accessToken } = useContext(AuthContext);
  return accessToken ? (
    <div className="container-empty">
      <h4>No meeting this day</h4>
      <button type="button">Add a meeting</button>
    </div>
  ) : (
    <div className="container-empty">
      <h4>All booked up, please try a different day</h4>
    </div>
  );
};

export default DayNotFound;
