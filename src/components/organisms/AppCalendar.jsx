import { useContext } from "react";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { scrollToMeetings } from "../../utils/fns/calendar";
import { dateEqual, formatDate } from "../../utils/fns/moment";
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
  const tileContent = (date) => {
    const current = new Date(date).getDate();
    const today = new Date().getDate();
    const match = dateEqual(formatDate(date), data);

    if (match && current >= today) {
      const open = match.list.filter((m) => m.isOpen);
      if (open.length > 0) {
        return <div className="match">{/* <Icon name={open.length} /> */}</div>;
      }
    }
  };
  const handleDayClick = () => {
    if (window.location.pathname === "/booking") {
      scrollToMeetings();
    }
    if (window.location.pathname === "/") {
      navigate("/booking");
    }
  };
  return (
    <Calendar
      onChange={onChange}
      value={value}
      minDate={new Date()}
      minDetail="month"
      prev2Label={null}
      next2Label={null}
      navigationLabel={({ label }) => (
        <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
      )}
      showNeighboringMonth={false}
      tileContent={({ date }) => tileContent(date)}
      onClickDay={() => handleDayClick()}
    />
  );
};

export default AppCalendar;
