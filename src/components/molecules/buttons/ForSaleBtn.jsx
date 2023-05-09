import { useContext } from "react";
import AddToCart from "../../atoms/buttons/AddToCart";
import RemoveFromCart from "../../atoms/buttons/RemoveFromCart";
import { ServicesContext } from "../../../utils/context/ServicesContext";

const ForSaleBtn = ({ data }) => {
  const { cart } = useContext(ServicesContext);
  return cart.filter((c) => c.uid === data.uid).length > 0 ? (
    <RemoveFromCart data={data} />
  ) : (
    <AddToCart data={data} />
  );
};
export default ForSaleBtn;
