import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import CalendarEvents from "../components/organisms/CalendarEvents.jsx";
import AppCalendar from "../components/organisms/AppCalendar";
import CartEmpty from "../components/molecules/empty/CartEmpty";
import Cart from "../components/organisms/Cart";
// import CartItem from "../components/organisms/CartItem";

const Booking = () => {
  const { events } = useContext(CalendarContext);
  const { bookable } = useContext(ServicesContext);

  return (
    <section className="primary-container">
      <div className="calendar">
        {<AppCalendar data={events.sections?.length > 0 ? events.sections : []} />}
      </div>
      <div className="booking">
        {/* {bookable?.length > 0 ? <CartItem data={bookable} /> : <CartEmpty />} */}
        {bookable?.length > 0 ? <Cart data={bookable} /> : <CartEmpty />}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
