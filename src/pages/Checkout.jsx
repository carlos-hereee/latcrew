import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ServicesContext } from "../context/ServicesContext";
import { AuthContext } from "../context/AuthContext";
import { Cart } from "nexious-library/@nxs-organism";
import { Link, useNavigate } from "react-router-dom";
import { EmptySection } from "nexious-library/@nxs-molecules";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart, setTotal, total, isUserReq } = useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isShippingReq, setShippingInfoReq] = useState(false);
  const navigate = useNavigate();

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
  }, [JSON.stringify(cart)]);
  // console.log("booked", booked);
  return (
    <section className="flex-d-column">
      {/* <h2 className="heading">{checkout.heading}</h2> */}
      {cart.length > 0 ? (
        <Cart data={cart} heading={checkout.heading} />
      ) : (
        <EmptySection
          heading="Your cart is empty"
          message="Head to services"
          click={() => navigate("/services")}
        />
      )}
      {/* <UserContact />
      {cart.length > 0 ? (
        <Cart data={cart} heading={checkout.booked} />
      ) : booked.length > 0 ? (
        <BagSummary data={booked} />
      ) : (
        <CartEmpty />
      )}
      {total > 0 && <Total total={total} />}
      {isUserReq && user?.uid && !proceedWithCheckout && (
        <ButtonNext click={setNext} />
      )}
      {proceedWithCheckout && (
        <PaymentMethods click={setNext} isShippingReq={isShippingReq} />
      )} */}
    </section>
  );
};

export default Checkout;
