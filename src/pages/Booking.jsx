import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ServicesContext } from "../context/ServicesContext";
import CalendarEvents from "../components/organisms/CalendarEvents.jsx";
import AppCalendar from "../components/organisms/AppCalendar";
import Cart from "../components/organisms/Cart";

const Booking = () => {
  const { events, selectedDay } = useContext(CalendarContext);
  const { bookable } = useContext(ServicesContext);
  console.log("selectedDay", selectedDay);
  return (
    <section className="primary-container">
      <div className="calendar">{<AppCalendar data={events.sections || []} />}</div>
      {/* <div className="flex-start">
        {bookable?.length > 0 ? (
          <Cart data={bookable} heading={{ title: "Select a package" }} />
        ) : (
          "todo empty cart"
          // <CartEmpty />
        )}
        <CalendarEvents />
      </div> */}
    </section>
  );
};

export default Booking;
