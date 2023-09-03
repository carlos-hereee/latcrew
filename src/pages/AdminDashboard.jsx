import { useContext, useEffect, useState } from "react";
import { Loading, EmptySection } from "nexious-library/@nxs-molecules";
import { AdminContext } from "../utils/context/admin/AdminContext";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Calendar } from "nexious-library/@nxs-template";
import { CalendarContext } from "../utils/context/calendar/CalendarContext";

const AdminDashboard = () => {
  const { isLoading } = useContext(AdminContext);
  const { user } = useContext(AuthContext);
  const { booked } = useContext(ServicesContext);
  const { setDay, selectedDay, events, error, addCalendarEvent } =
    useContext(CalendarContext);

  const [start, setStart] = useState();

  useEffect(() => {
    if (selectedDay?.date) {
      setStart(new Date(selectedDay.date));
    } else setStart(new Date());
  }, [selectedDay]);

  const handleDayClick = (e) => {
    setDay(e);
  };
  const handleAddMeeting = () => {
    addCalendarEvent(selectedDay);
  };
  if (isLoading) return <Loading message="Authenticating user .. please wait" />;
  const heading = "No open meetings this day, try a different day";
  return (
    <div className="container">
      {user && (
        <h2 className="heading">
          Welcome back {user?.nickname ? user.nickname : user.username} you have{" "}
          {booked?.length ? booked.length : 0} upcoming orders:
        </h2>
      )}
      {start && (
        <Calendar
          onDayClick={handleDayClick}
          events={events}
          value={start}
          setDay={setDay}
        />
      )}
      {booked?.length && booked.map(<div>{booked.uid}</div>)}
      {selectedDay && <h2 className="heading">{selectedDay.date}</h2>}

      {selectedDay && selectedDay.list?.length > 0 ? (
        selectedDay.list.map((day) => (
          <button key={day.uid}>
            <Icon icon={meeting.uid === day.uid ? "check" : "uncheck"} />
            {day.time.startTime} - {day.time.endTime}
          </button>
        ))
      ) : (
        <EmptySection heading={heading} message={error} />
      )}
      {selectedDay && (
        <button className="btn-main" type="button" onClick={handleAddMeeting}>
          Add a meeting
        </button>
      )}
    </div>
  );
};
export default AdminDashboard;
