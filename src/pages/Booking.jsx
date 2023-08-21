import { useContext, useEffect } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { CalendarEvents } from "nexious-library/@nxs-organism";
import { useNavigate } from "react-router-dom";
import { Calendar } from "nexious-library/@nxs-template";
import { AuthContext } from "../utils/context/auth/AuthContext";

const Booking = () => {
  const { events, selectedDay, meeting, setMeeting, setDay } =
    useContext(CalendarContext);
  const { bookable, removeFromCart, cart, active, setActive, addToCart } =
    useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!active.uid) {
      navigate("/services");
    }
  }, []);
  const onCheckout = () => {
    addToCart(cart, { service: active, meeting, user });
    navigate("/checkout");
  };
  const handleDayClick = (e) => {
    meeting.uid !== e.uid && setMeeting({});
    setDay(e);
  };
  return (
    <section className="primary-container">
      <Calendar
        value={new Date()}
        onDayClick={handleDayClick}
        minDate={new Date()}
        // minDetail="month"
        events={events.sections}
        selectedDay={selectedDay}
        setSelectedDay={setDay}
      />
      <CalendarEvents
        selectedDay={selectedDay}
        events={bookable}
        active={active}
        meeting={meeting}
        user={user}
        setMeeting={(e) => setMeeting(e)}
        setActive={(e) => setActive(e)}
        removeFromCart={(e) => removeFromCart(cart, e)}
        handleCheckout={onCheckout}
      />
    </section>
  );
};

export default Booking;
