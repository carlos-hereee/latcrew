import ButtonLinks from "../buttons/ButtonLinks";

const CartEmpty = () => {
  return (
    <div className="container-empty">
      <p className="empty">Your cart is empty head to Services </p>
      <ButtonLinks links={["services"]} />
    </div>
  );
};

export default CartEmpty;
