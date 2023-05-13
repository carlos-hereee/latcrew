import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../components/organisms/CalendarEvents.jsx";
import AppCalendar from "../components/organisms/AppCalendar";
import CartEmpty from "../components/molecules/empty/CartEmpty";
import ButtonLink from "../components/atoms/buttons/ButtonLink";
import CartItem from "../components/organisms/CartItem";

const Booking = ({ data }) => {
  const { events } = useContext(CalendarContext);

  return (
    <section className="primary-container">
      <AppCalendar data={events.sections} />
      <div className="booking">
        {data.length > 0 ? (
          <CartItem data={data} />
        ) : (
          <div className="container-empty">
            <CartEmpty />
            <ButtonLink link="services" />
            <ButtonLink link="accessories" />
          </div>
        )}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
