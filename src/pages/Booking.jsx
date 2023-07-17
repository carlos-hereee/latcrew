import { useContext, useEffect } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ServicesContext } from "../context/ServicesContext";
import { CalendarEvents } from "nexious-library/@nxs-organism";
import { useNavigate } from "react-router-dom";
import { Calendar } from "nexious-library/@nxs-template";
import { AuthContext } from "../context/AuthContext";
import { loadAsset } from "../assets/getUrl";

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
    // if (events.sections) {
    //   const today = new Date();
    //   const filtered = events.sections.filter((d) => {
    //     return new Date(d.date).getDate() === today.getDate();
    //   })[0];
    //   filtered ? setDay(filtered) : setDay({ date: today.toDateString(), list: [] });
    // }
  }, []);
  const onCheckout = () => {
    addToCart(cart, { service: active, meeting, user });
    navigate("/checkout");
  };
  const handleDayClick = (e) => {
    // active.uid
    meeting.uid !== e.uid && setMeeting({});
    setDay(e);
  };
  console.log("selectedDay", selectedDay);
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
        user={{ ...user, hero: { url: loadAsset(user.hero.url) } }}
        setMeeting={(e) => setMeeting(e)}
        setActive={(e) => setActive(e)}
        removeFromCart={(e) => removeFromCart(cart, e)}
        handleCheckout={onCheckout}
      />
    </section>
  );
};

export default Booking;
