import { useContext } from "react";
import AddToCart from "../../atoms/buttons/AddToCart";
import RemoveFromCart from "../../atoms/buttons/RemoveFromCart";
import { ServicesContext } from "../../../utils/context/ServicesContext";

const ForSaleBtn = ({ data }) => {
  const { cart, addToCart, removeFromCart, active } = useContext(ServicesContext);

  const handleClick = (item, cmd) => {
    //  removeFromCart(data, active)
    if (cmd === 1) {
      addToCart(cart, item);
    } else removeFromCart(cart, item);
  };

  return cart.filter((c) => c.uid === data.uid).length > 0 ? (
    <RemoveFromCart data={data} click={() => handleClick(data, -1)} />
  ) : (
    <AddToCart data={data} click={() => handleClick(data, 1)} />
  );
};
export default ForSaleBtn;
