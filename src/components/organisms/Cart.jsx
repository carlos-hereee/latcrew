import { useContext, useState } from "react";
import { Heading } from "nexious-library/@nxs-atoms";
import { ServicesContext } from "../../context/ServicesContext";
// import CancelRow from "../molecules/card/CancelRow";
// import CartRow from "../molecules/cart/CartRow";
// import Heading from "../atoms/texts/Heading";

const Cart = ({ data, heading }) => {
  const { removeFromCart, cart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(cart, e) : setCancel({});
  };

  return (
    <div className="flex-d-column scroll-y p-sm flex-1">
      <Heading data={heading} />
      {data.map(
        (c) =>
          cancel.uid === c.uid
            ? // <CancelRow data={c} key={c.uid} click={cancelReq} />
              "to do cancel row"
            : "todo cart row"
        // <CartRow key={c.uid} data={c} setCancel={setCancel} />
      )}
    </div>
  );
};

export default Cart;
