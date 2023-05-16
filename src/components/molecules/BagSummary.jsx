import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import AccessoryDetails from "../atoms/AccessoryDetails";
import Cost from "../atoms/Cost";
import MeetingDetails from "../atoms/MeetingDetails";
import CardHeader from "./card/CardHeader";
import FieldQuantity from "./forms/FieldQuantity";
import BookingRequired from "./required/BookingRequired";
import ButtonLink from "../atoms/buttons/ButtonLink";
import Heading from "../atoms/Text/Heading";
// import BookingLink from "../organisms/BookingLink";

const values = { quantity: 1 };
const BagSummary = ({ inReview }) => {
  const { cart, onQuantityChange } = useContext(ServicesContext);
  return (
    <div className="card-section-wrapper">
      <Heading data={{ title: "Bag Summary" }} />
      {cart.map((c) => (
        <div className="card-section-row" key={c.uid}>
          {c.isAccessory ? (
            <AccessoryDetails data={c} />
          ) : (
            <>
              <div className="details-wrapper">
                <div className="details">
                  <CardHeader data={c} />
                  {c.meeting?.uid ? (
                    <MeetingDetails meeting={c.meeting} />
                  ) : (
                    <BookingRequired data={c} />
                  )}
                </div>
              </div>
              {!c.meeting?.uid && <ButtonLink link="booking" />}
            </>
          )}
          <div className="card-section-cost">
            {inReview ? (
              <p>x{c.count}</p>
            ) : (
              c.isAccessory && (
                <FieldQuantity
                  data={values}
                  max={c.inStock}
                  change={({ target }) => onQuantityChange(target.value, c)}
                />
              )
            )}
            {c.cost && c.count && <Cost cost={c.cost * c.count} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BagSummary;
