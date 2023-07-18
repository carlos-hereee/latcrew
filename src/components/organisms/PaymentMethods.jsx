import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import CardHeader from "../molecules/card/CardHeader";
import InStore from "../molecules/buttons/InStore";
import { useNavigate } from "react-router-dom";
import ShippingRequired from "../molecules/ShippingRequired";

const PaymentMethods = ({ isShippingReq }) => {
  const { paymentMethods, paymentType } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // confirm payment data enter is correct
    if (paymentType.uid) {
      // check if user information exist
      if (paymentType.type !== "in-store") {
        // todo redirect to stripe page
      } else {
        // payment type is in-store; enter all data about checkout
        navigate("/checkout-review");
      }
    }
  };

  return (
    <div className="card-footer">
      {!paymentType.uid && (
        <p className="required" id="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar payment-options">
        <h3>Payment methods</h3>
        {/* {paymentMethods.map((p) => (
          <PaymentOptions key={p.uid} data={p} />
        ))} */}
      </nav>
      {paymentType.uid && (
        <>
          <CardHeader data={paymentType} />
          {paymentType.type === "in-store" ? (
            <InStore click={handleSubmit} />
          ) : (
            isShippingReq && <ShippingRequired />
          )}
        </>
      )}
    </div>
  );
};

export default PaymentMethods;
