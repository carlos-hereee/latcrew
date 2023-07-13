import { useContext, useEffect } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ServicesContext } from "../context/ServicesContext";
import { CalendarEvents } from "nexious-library/@nxs-organism";
import { useNavigate } from "react-router-dom";
import { Calendar } from "nexious-library/@nxs-template";

const Booking = () => {
  const { events, selectedDay, meeting, setMeeting, setDay } =
    useContext(CalendarContext);
  const { bookable, removeFromCart, cart, active, setActive } =
    useContext(ServicesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (events.sections) {
      const today = new Date();
      const filtered = events.sections.filter((d) => {
        return new Date(d.date).getDate() === today.getDate();
      })[0];
      filtered ? setDay(filtered) : setDay({ date: today.toDateString(), list: [] });
    }
  }, []);
  return (
    <section className="primary-container">
      <Calendar
        value={new Date()}
        onDayClick={setDay}
        minDate={new Date()}
        // minDetail="month"
        events={events.sections}
      />
      <CalendarEvents
        selectedDay={selectedDay}
        events={bookable}
        active={active}
        meeting={meeting}
        setMeeting={(e) => setMeeting(e)}
        setActive={(e) => setActive(e)}
        removeFromCart={(e) => removeFromCart(cart, e)}
        handleCheckout={() => navigate("/checkout")}
      />
    </section>
  );
};

export default Booking;
