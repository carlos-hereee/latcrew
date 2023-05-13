import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import ListItem from "../atoms/ListItem";

const EventList = () => {
  const { selectedDay, meeting, setMeeting } = useContext(CalendarContext);
  return (
    <div className="list">
      {selectedDay.list.map((d) => (
        <ListItem
          key={d.uid}
          data={d}
          click={setMeeting}
          icon={d.uid === meeting.uid ? "check" : "uncheck"}
        />
      ))}
    </div>
  );
};
export default EventList;
