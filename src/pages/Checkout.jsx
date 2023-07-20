import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ServicesContext } from "../context/ServicesContext";
import { AuthContext } from "../context/AuthContext";
import { Cart, UserCard, PaymentMethods } from "nexious-library/@nxs-organism";
import { useNavigate } from "react-router-dom";
import { EmptySection, Total } from "nexious-library/@nxs-molecules";
import { loadAsset } from "../assets/getUrl";
// import {}

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart, setTotal, total, isUserReq } = useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  // const [proceedWithCheckout, setNext] = useState(false);
  // const [isShippingReq, setShippingInfoReq] = useState(false);
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
        <div className="flex-d-column">
          <h2 className="heading">Your details</h2>
          <UserCard
            user={{ ...user, hero: { url: loadAsset(user.hero.url) } }}
            hideHero
            isRow
          />
          <PaymentMethods
            data={checkout.paymentMethods.map((p) => {
              return { ...p, hero: { ...p.hero, url: loadAsset(p.hero.url) } };
            })}
          />
        </div>
      ) : (
        <p>Enter user information</p>
      )}
    </section>
  );
};

export default Checkout;
