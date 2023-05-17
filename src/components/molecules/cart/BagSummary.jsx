import { useContext, useState } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import Heading from "../../atoms/texts/Heading";
import CancelRow from "../card/CancelRow";
import BagItem from "./BagItem";

const BagSummary = () => {
  const { cart, onQuantityChange, removeFromCart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});
  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(cart, e) : setCancel({});
  };
  return (
    <div>
      <Heading data={{ title: "Bag Summary" }} />
      <div className="bag-container">
        {cart.map((c) =>
          cancel.uid === c.uid ? (
            <CancelRow data={c} key={c.uid} click={cancelReq} />
          ) : (
            <BagItem key={c.uid} data={c} setCancel={setCancel} />
          )
        )}
      </div>
    </div>
  );
};

export default BagSummary;
