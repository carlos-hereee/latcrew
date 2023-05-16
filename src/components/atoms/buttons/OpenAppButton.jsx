import { useContext } from "react";
import { CalendarContext } from "../../../utils/context/CalendarContext";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { minDate, getMeetingList, minTime } from "../../../utils/fns/moment";
import { AuthContext } from "../../../utils/context/AuthContext";
import { scrollToCartItem } from "../../../utils/fns/calendar";

const OpenAppButton = ({ service }) => {
  const { events, setDay, selectedDay, setMeeting, bookNow } =
    useContext(CalendarContext);
  const { setActive, setIsUserReq } = useContext(ServicesContext);
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    // console.log("service", service);
    if (service.uid) {
      setActive(service);
    }
    if (selectedDay.hasList && selectedDay.list.length > 0) {
      const meeting = minDate(selectedDay.list);
      setMeeting(meeting);
      if (user.uid) {
        bookNow(user, meeting);
      } else {
        setIsUserReq(true);
        scrollToCartItem({ uid: "contact-user-form" });
      }
    } else {
      const meetingList = getMeetingList(events.sections);
      const meetingDay = minDate(meetingList);
      const meetingTime = minTime(meetingDay.list);
      setDay(meetingDay);
      setMeeting(meetingTime);
    }
  };
  return (
    <button
      type="button"
      className="btn btn-main"
      onClick={() => handleClick(service)}>
      Find Open Appointment
    </button>
  );
};
export default OpenAppButton;
