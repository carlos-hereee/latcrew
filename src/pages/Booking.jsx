import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ServicesContext } from "../context/ServicesContext";
import CalendarEvents from "../components/organisms/CalendarEvents.jsx";
import AppCalendar from "../components/organisms/AppCalendar";
// import Cart from "../components/organisms/Cart";
import { Cart } from "nexious-library/@nxs-organism";

const Booking = () => {
  const { events, selectedDay } = useContext(CalendarContext);
  const { bookable, removeFromCart, cart } = useContext(ServicesContext);
  const handleRemoveFromCart = (e) => {
    removeFromCart(cart, e);
  };
  return (
    <section className="primary-container">
      <div className="calendar">{<AppCalendar data={events.sections || []} />}</div>
      <div className="flex-start">
        {bookable?.length > 0 ? (
          <Cart
            data={bookable}
            heading={"Select a package"}
            removeFromCart={handleRemoveFromCart}
          />
        ) : (
          "todo empty cart"
          // <CartEmpty />
        )}
        {/* <CalendarEvents /> */}
      </div>
    </section>
  );
};

export default Booking;
