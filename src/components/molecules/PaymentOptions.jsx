import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
// import Forms from "../organisms/Forms";
// import Buttons from "./buttons/Buttons";
// import CardHeader from "./card/CardHeader";
// import UserCard from "./card/UserCard";
import { AuthContext } from "../../utils/context/AuthContext";
import Icons from "./icons/Icons";

const PaymentOptions = ({ data }) => {
  const { selectPaymentType } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, userValues, userSchema, shippingDetails } = useContext(AuthContext);
  // todo add toggle active
  return (
    <button
      type="button"
      onClick={() => selectPaymentType(data)}
      className="btn-icons">
      <Icons name={data.icon} />
      <span className="icon-label">{data.name}</span>
    </button>
  );
};

export default PaymentOptions;
