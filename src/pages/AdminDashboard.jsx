import { useContext, useEffect, useState } from "react";
import { Loading } from "nexious-library/@nxs-molecules";
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
  if (isLoading) return <Loading message="Authenticating user .. please wait" />;
  return (
    <div className="container">
      {user && (
        <h2 className="heading">
          Welcome back {user?.nickname ? user.nickname : user.username} you have{" "}
          {booked?.length ? booked.length : 0} upcoming orders:
        </h2>
      )}
      {start && <Calendar onDayClick={handleDayClick} events={events} value={start} />}
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
        <div className="container">
          <strong>No open meetings this day, try a different day</strong>
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <button className="btn-main" type="button" onClick={() => addCalendarEvent()}>
              Add a meeting
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default AdminDashboard;
