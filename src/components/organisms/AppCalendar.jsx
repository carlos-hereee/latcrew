import { useContext } from "react";
import { Calendar } from "nexious-library/@nxs-organism";
import { CalendarContext } from "../../context/CalendarContext";

const AppCalendar = ({ data }) => {
  const { setDay } = useContext(CalendarContext);

  const handleDayClick = (e) => {
    setDay(e);
    // if (window.location.pathname === "/booking") {
    //   scrollToMeetings();
    // }
    // if (window.location.pathname === "/") {
    //   navigate("/booking");
    // }
  };
  return (
    <Calendar
      value={new Date()}
      onDayClick={handleDayClick}
      minDate={new Date()}
      // minDetail="month"
      events={data}
    />
  );
};

export default AppCalendar;
