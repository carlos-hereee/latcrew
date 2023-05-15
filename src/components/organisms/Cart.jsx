import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CancelRow from "../molecules/card/CancelRow";
import CartRow from "../molecules/cart/CartRow";

const Cart = ({ data }) => {
  const { removeFromCart, active } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e, active) : setCancel({});
  };

  return (
    <div className="cart-container">
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
