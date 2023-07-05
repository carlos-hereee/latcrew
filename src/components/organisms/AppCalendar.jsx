import { useContext, useEffect } from "react";
import { Calendar } from "nexious-library/@nxs-template";
import { CalendarContext } from "../../context/CalendarContext";

const AppCalendar = ({ data }) => {
  const { setDay } = useContext(CalendarContext);

  useEffect(() => {
    if (data) {
      const today = new Date();
      const filtered = data.filter((d) => {
        return new Date(d.date).getDate() === today.getDate();
      })[0];
      filtered ? setDay(filtered) : setDay({ date: today.toDateString(), list: [] });
    }
  }, []);

  return (
    <Calendar
      value={new Date()}
      onDayClick={setDay}
      minDate={new Date()}
      // minDetail="month"
      events={data}
    />
  );
};

export default AppCalendar;
