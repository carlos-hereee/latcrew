import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CardRow from "../molecules/card/CardRow";
import CancelRow from "../molecules/card/CancelRow";
import OpenAppButton from "../atoms/buttons/OpenAppButton";
import ButtonLink from "../atoms/buttons/ButtonLink";
import { CalendarContext } from "../../utils/context/CalendarContext";
import MeetingDetails from "../atoms/MeetingDetails";
import { AuthContext } from "../../utils/context/AuthContext";
import BookingLink from "./BookingLink";
import Forms from "./Forms";

const CartItem = ({ data, link }) => {
  const { removeFromCart, setActive, active } = useContext(ServicesContext);
  const { selectedDay, meeting, bookNow } = useContext(CalendarContext);
  const { user, userValues, userSchema } = useContext(AuthContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e, active) : setCancel({});
  };
  const handleClick = (d, isCancel) => {
    isCancel ? setCancel(d) : setActive(d);
  };
  const submit = (e) => bookNow(e, meeting);

  return (
    <div className="">
      {data.map((c) =>
        cancel.uid === c.uid ? (
          <CancelRow data={c} key={c.uid} click={cancelReq} />
        ) : (
          <div key={c.uid} className="row-wrapper" id={c.uid}>
            <CardRow data={c} click={handleClick} />
            {c.isBookable && link ? (
              !c.isBooked ? (
                <div className="column">
                  {c.isBookingRequired && <p className="required">{c.bookingErr}</p>}
                  {c.meeting?.uid ? (
                    <MeetingDetails meeting={c.meeting} />
                  ) : c.uid === active.uid ? (
                    user.uid ? (
                      <div className="row">
                        <ButtonLink link={link} />
                        <p>or</p>
                        <OpenAppButton service={c} />
                      </div>
                    ) : (
                      <Forms
                        data={{ values: userValues, schema: userSchema }}
                        submit={submit}
                      />
                    )
                  ) : (
                    <BookingLink data={c} />
                  )}
                </div>
              ) : (
                c.meeting?.uid && <MeetingDetails meeting={c.meeting} />
              )
            ) : (
              !selectedDay.hasList && !c.isAccessory && <OpenAppButton service={c} />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default CartItem;
