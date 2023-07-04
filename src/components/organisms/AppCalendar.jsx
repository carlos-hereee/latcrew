import { useContext } from "react";
import { useEffect, useState } from "react";
import { Calendar } from "nexious-library/@nxs-organism";
import { useNavigate } from "react-router-dom";
import { CalendarContext } from "../../context/CalendarContext";
import { scrollToMeetings } from "../../utils/calendar";
import { dateEqual, formatDate } from "../../utils/moment";
// import Icons from "../molecules/icons/Icons";
// import { Icon } from "nexious-library/atoms";

const AppCalendar = ({ data }) => {
  const [value, onChange] = useState(null);
  const { setDay } = useContext(CalendarContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      const day = formatDate(value);
      const match = dateEqual(day, data);
      if (match) {
        match.list = match.list.filter((d) => d.isOpen);
        setDay(match);
      } else setDay({ title: day, uid: day, hasList: false });
    } else onChange(new Date());
  }, [value]);
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
      minDetail="month"
      prev2Label={null}
      next2Label={null}
      events={data}
    />
  );
};

export default AppCalendar;
