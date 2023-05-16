import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CancelRow from "../molecules/card/CancelRow";
import CartRow from "../molecules/cart/CartRow";

const Cart = ({ data }) => {
  const { removeFromCart, cart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(cart, e) : setCancel({});
  };

  return (
    <div className="cart-container">
      <h2>Select a service</h2>
      {data.map((c) =>
        cancel.uid === c.uid ? (
          <CancelRow data={c} key={c.uid} click={cancelReq} />
        ) : (
          <CartRow key={c.uid} data={c} setCancel={setCancel} />
        )
      )}
    </div>
  );
};

export default Cart;
