import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ServicesContext } from "../context/ServicesContext";
import { AuthContext } from "../context/AuthContext";
import { Cart, UserCard } from "nexious-library/@nxs-organism";
import { Link, useNavigate } from "react-router-dom";
import { EmptySection, Total } from "nexious-library/@nxs-molecules";
import { loadAsset } from "../assets/getUrl";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart, setTotal, total, isUserReq } = useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isShippingReq, setShippingInfoReq] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      let cost = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.service.cost;
      }, 0);
      setTotal(cost);
    } else {
      setTotal(0);
    }
  }, [JSON.stringify(cart)]);
  return (
    <section className="flex-d-column">
      {cart.length > 0 ? (
        <Cart data={cart} heading={checkout.heading} />
      ) : (
        <EmptySection
          heading="Your cart is empty"
          message="Head to services"
          click={() => navigate("/services")}
        />
      )}
      {total > 0 && <Total total={total} />}
      {user.uid ? (
        <>
          <h2 className="heading">Your details</h2>
          <UserCard
            user={{ ...user, hero: { url: loadAsset(user.hero.url) } }}
            hideHero
            isRow
          />
        </>
      ) : (
        <p>Enter user information</p>
      )}
      {/* 

      {proceedWithCheckout && (
        <PaymentMethods click={setNext} isShippingReq={isShippingReq} />
      )} */}
    </section>
  );
};

export default Checkout;
