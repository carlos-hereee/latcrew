import { useContext } from "react";
import { CalendarContext } from "../utils/context/CalendarContext";
import CalendarEvents from "../components/organisms/CalendarEvents.jsx";
import AppCalendar from "../components/organisms/AppCalendar";
import CartEmpty from "../components/molecules/empty/CartEmpty";
import CartItem from "../components/organisms/CartItem";

const Booking = ({ data }) => {
  const { events } = useContext(CalendarContext);

  return (
    <section className="primary-container">
      <div className="calendar">
        {<AppCalendar data={events.sections?.length > 0 ? events.sections : []} />}
      </div>
      <div className="booking">
        {data?.length > 0 ? <CartItem data={data} /> : <CartEmpty />}
        <CalendarEvents />
      </div>
    </section>
  );
};

export default Booking;
