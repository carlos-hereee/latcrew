import { useContext } from "react";
import { AuthContext } from "../../../utils/context/AuthContext";

const UserCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card-body">
      {user.name ? (
        <p>Name: {user.name}</p>
      ) : (
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
      )}
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
