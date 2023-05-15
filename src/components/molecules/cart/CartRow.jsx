import { useContext, useState } from "react";
import CardRow from "../card/CardRow";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { AuthContext } from "../../../utils/context/AuthContext";
import MeetingDetails from "../../atoms/MeetingDetails";
import ButtonLink from "../../atoms/buttons/ButtonLink";
import OpenAppButton from "../../atoms/buttons/OpenAppButton";
import Forms from "../../organisms/Forms";
import BookingLink from "../../organisms/BookingLink";

const CartRow = ({ data, link, setCancel }) => {
  const { setActive, active } = useContext(ServicesContext);
  const { selectedDay, meeting, bookNow } = useContext(CalendarContext);
  const { user, userValues } = useContext(AuthContext);

  const handleClick = (d, isCancel) => {
    isCancel ? setCancel(d) : setActive(d);
  };
  const submit = (e) => bookNow(e, meeting);
  return (
    <div className="row-wrapper" id={data.uid}>
      <CardRow data={data} click={handleClick} />
      {data.isBookable && link ? (
        !data.isBooked ? (
          <div className="column">
            {data.isBookingRequired && <p className="required">{data.bookingErr}</p>}
            {data.meeting?.uid ? (
              <MeetingDetails meeting={data.meeting} />
            ) : data.uid === active.uid ? (
              user.uid ? (
                <div className="row">
                  <ButtonLink link={link} />
                  <p>or</p>
                  <OpenAppButton service={data} />
                </div>
              ) : (
                <Forms data={{ values: userValues }} submit={submit} />
              )
            ) : (
              <BookingLink data={data} />
            )}
          </div>
        ) : (
          data.meeting?.uid && <MeetingDetails meeting={data.meeting} />
        )
      ) : (
        !selectedDay.hasList && !data.isAccessory && <OpenAppButton service={data} />
      )}
    </div>
  );
};

export default CartRow;
