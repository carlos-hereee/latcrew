import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import AddToCart from "../../atoms/buttons/AddToCart";
import RemoveFromCart from "../../atoms/buttons/RemoveFromCart";

const ForSaleBtn = ({ data }) => {
  const { cart, addToCart, removeFromCart, active, setActive } =
    useContext(ServicesContext);

  const handleClick = (item) => {
    //  removeFromCart(data, active)
    if (item.uid === active.uid) {
      setActive({});
    }
    removeFromCart(cart, item);
  };

  return cart.filter((c) => c.uid === data.uid).length > 0 ? (
    <RemoveFromCart data={data} click={() => handleClick(data)} />
  ) : (
    <AddToCart data={data} click={() => addToCart(cart, data)} />
  );
};
export default ForSaleBtn;
