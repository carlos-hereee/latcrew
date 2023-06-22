import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
// import NotFound from "../molecules/notFound/MeetingNotFound";
import { ServicesContext } from "../../utils/context/ServicesContext";
// import DayNotFound from "../molecules/notFound/DayNotFound";
// import BookEvent from "../molecules/BookEvent";
// import EventList from "../molecules/EventList";
import { CardHeader } from "nexious-library";

const CalendarEvents = () => {
  const { selectedDay, meeting } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  return (
    <div className="p-sm" id="calendar-events">
      <CardHeader data={selectedDay} />
      {/* {selectedDay.list?.length > 0 ? <EventList /> : <DayNotFound />} */}
      {/* {active.uid && meeting.uid ? <BookEvent /> : <NotFound />} */}
    </div>
  );
};
export default CalendarEvents;
