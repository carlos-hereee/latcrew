import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ServicesContext } from "../context/ServicesContext";
import AppCalendar from "../components/organisms/AppCalendar";
import { Cart, CalendarEvents } from "nexious-library/@nxs-organism";
import { EmptySection } from "nexious-library/@nxs-molecules";

const Booking = () => {
  const { events, selectedDay, meeting, setMeeting } = useContext(CalendarContext);
  const { bookable, removeFromCart, cart } = useContext(ServicesContext);
  const handleRemoveFromCart = (e) => {
    removeFromCart(cart, e);
  };

  return (
    <section className="primary-container">
      <div className="calendar">{<AppCalendar data={events.sections || []} />}</div>
      <div>
        {bookable?.length > 0 ? (
          <Cart
            data={bookable}
            heading="Select a package"
            removeFromCart={handleRemoveFromCart}
          />
        ) : (
          <EmptySection message="Your cart is empty! Go to store" />
        )}
      </div>
      <CalendarEvents
        selectedDay={selectedDay}
        active={meeting}
        click={(e) => setMeeting(e)}
      />
    </section>
  );
};

export default Booking;
