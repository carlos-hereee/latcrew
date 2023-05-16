import { useContext } from "react";
import { AuthContext } from "../../../utils/context/AuthContext";

const UserCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card-body">
      <p>
        <strong>Contact Details: </strong>
      </p>
      <p>
        {user.name ? (
          <span>Name: {user.name}</span>
        ) : (
          <span>
            Name: {user.firstName} {user.lastName}
          </span>
        )}
        <br />
        <span>Email: {user.email}</span>
        <br />
        <span>Phone: {user.phone}</span>
      </p>
    </div>
  );
};

export default UserCard;
