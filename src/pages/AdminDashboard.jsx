import { useContext, useEffect, useState } from "react";
import { Loading, EmptySection } from "nexious-library/@nxs-molecules";
import { AdminContext } from "../utils/context/admin/AdminContext";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import { AuthContext } from "../utils/context/auth/AuthContext";
import { Calendar } from "nexious-library/@nxs-template";
import { Form, Navigation } from "nexious-library/@nxs-organism";
import { CalendarContext } from "../utils/context/calendar/CalendarContext";
import { AppContext } from "../utils/context/app/AppContext";
import BuildApp from "../components/BuildApp";

const AdminDashboard = () => {
  const { user, logout, isLoading } = useContext(AuthContext);
  const { app, menu, deleteApp } = useContext(AppContext);
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
  // console.log("app", app);
  // console.log("user", user);
  console.log("user", menu);
  if (isLoading) return <Loading message="Authenticating user .. please wait" />;
  if (!app) return <BuildApp />;
  // const heading = "No open meetings this day, try a different day";
  return (
    <div className="container">
      <h1 className="heading">
        Welcome back {user?.nickname ? user.nickname : user.username}
      </h1>
      <h2>App Pages</h2>
      {menu && menu.length > 0
        ? menu.map((m) => (
            <button key={m.menuId} className="btn-main" type="button">
              {m.active.name}
            </button>
          ))
        : "add pages"}
      {/* <Navigation menu={menu} /> */}
      {selectedDay && (
        <>
          {error && <p className="error-message">{error}</p>}
          <button className="btn-main" type="button" onClick={handleAddMeeting}>
            Add a meeting
          </button>
        </>
      )}{" "}
      {/* {start && (
        <Calendar
          onDayClick={handleDayClick}
          events={events}
          value={start}
          setDay={setDay}
        />
      )} */}
      {/* {booked?.length && booked.map(<div>{booked.uid}</div>)}
      {selectedDay && <h2 className="heading">{selectedDay.date}</h2>}
      {selectedDay && selectedDay.list?.length > 0 ? (
        selectedDay.list.map((day) => (
          <button key={day.uid}>
            <Icon icon={meeting.uid === day.uid ? "check" : "uncheck"} />
            {day.time.startTime} - {day.time.endTime}
          </button>
        ))
      ) : (
        <EmptySection heading={heading} />
      )} */}
      <h2>Danger zone</h2>
      <div className="flex-row">
        <button type="button" className="btn-cancel" onClick={logout}>
          Log out
        </button>
        <button type="button" className="btn-cancel" onClick={() => deleteApp(app)}>
          Delete app
        </button>
      </div>
    </div>
  );
};
export default AdminDashboard;
