import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import MeetingDetails from "../atoms/MeetingDetails";
import UserCard from "../molecules/card/UserCard";
import { AuthContext } from "../../utils/context/AuthContext";
import Forms from "../organisms/Forms";
import Title from "../atoms/texts/Title";
import { useNavigate } from "react-router-dom";

const BookEvent = () => {
  const { bookNow, meeting, selectedDay, setMeeting } = useContext(CalendarContext);
  const { active, addToBooked, cart, booked, removeFromCart, setActive } =
    useContext(ServicesContext);
  const { user, userValues } = useContext(AuthContext);
  const [prevCart, setCart] = useState(0);
  const [prevBooked, setBooked] = useState(0);
  const navigate = useNavigate();

  const submit = (e) => bookNow(e, meeting);

  useEffect(() => {
    if (cart.length === 0 && prevBooked > 0) {
      // if cart is empty and prevbooked is not 0
      navigate("/checkout");
    } else {
      setCart(cart.length);
      setBooked(booked.length);
    }
    console.log("prevCart, prevBooked", prevCart, prevBooked);
  }, [JSON.stringify(cart), JSON.stringify(booked)]);

  const handleClick = () => {
    addToBooked(booked, user, meeting, active);
    // remove from cart
    removeFromCart(cart, active);
    // reset variable details
    setActive({});
    setMeeting({});
  };

  return (
    <div className="book-event">
      <Title data={`Booking service: ${active.title} ${active.subtitle}`} />
      {selectedDay.hasList &&
        selectedDay.list.filter((l) => l.uid !== meeting.uid).length > 0 && (
          <p className="warning">
            A new date was selected, your previous appointment has been saved in
            memory so if you cannot find a new time you can continue below
          </p>
        )}
      <MeetingDetails data={meeting} />
      {user.uid ? <UserCard /> : <Forms data={userValues} submit={submit} />}
      {meeting.uid && user.uid && active.uid && (
        <button type="button" className="btn btn-main" onClick={handleClick}>
          BOOK NOW!
        </button>
      )}
    </div>
  );
};
export default BookEvent;
