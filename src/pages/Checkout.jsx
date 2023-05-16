import { useContext, useState, useEffect } from "react";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { AuthContext } from "../utils/context/AuthContext";
import PaymentMethods from "../components/organisms/PaymentMethods";
import CardHeader from "../components/molecules/card/CardHeader";
import BagSummary from "../components/molecules/BagSummary";
import UserContact from "../components/organisms/UserContact";
import ButtonNext from "../components/molecules/buttons/ButtonNext";
import CartEmpty from "../components/molecules/empty/CartEmpty";
import Total from "../components/molecules/Total";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart, setTotal, total, isUserReq } = useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isShippingReq, setShippingInfoReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = 0;
      let isAccessory = false;
      cart.filter((c) => {
        if (c.isAccessory) {
          isAccessory = true;
        }
        cost += c.cost * c.count;
        return c;
      });

      setShippingInfoReq(isAccessory);
      setTotal(cost);
    } else {
      // cart is empty
      setShippingInfoReq(false);
      setTotal(0);
    }
  }, [user, cart]);
  return (
    <section className="section-container">
      <CardHeader data={checkout} />
      {isUserReq && <UserContact />}
      {cart.length > 0 ? <BagSummary /> : <CartEmpty />}
      {total > 0 && <Total total={total} />}
      {isUserReq && user?.uid && !proceedWithCheckout && (
        <ButtonNext click={setNext} />
      )}
      {proceedWithCheckout && (
        <PaymentMethods click={setNext} isShippingReq={isShippingReq} />
      )}
    </section>
  );
};

export default Checkout;
