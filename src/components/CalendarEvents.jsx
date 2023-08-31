// import { MeetingDetails } from "@nxs-atoms";
// import { CalendarEventList, IconButton } from "@nxs-molecules";
import { CardSection } from "nexious-library/@nxs-organism";
import { Icon } from "nexious-library/@nxs-atoms";
// import { setActive } from "../utils/context/services/helpers/setActive";
import { useContext } from "react";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import { CalendarContext } from "../utils/context/calendar/CalendarContext";

const CalendarEvents = () => {
  // const { selectedDay, active, meeting, setMeeting, handleCheckout, user }
  const { active, services } = useContext(ServicesContext);
  const { selectedDay, meeting } = useContext(CalendarContext);
  const handleClick = (e) => {
    // setActive(e);
    console.log("e", e);
  };
  const findNextOpen = (e) => {
    console.log("e", e);
  };
  return (
    <div className="calendar-events">
      <div className="calendar-package-details">
        <h2 className="heading">Selected package</h2>
        <CardSection data={active} click={() => handleClick(active)} />
      </div>
      <div className="event-wrapper">
        <h2 className="heading">
          {`${selectedDay.date} ${meeting.uid ? `@ ${meeting.response}` : ""}`}
        </h2>
        {selectedDay.list?.length > 0 ? (
          selectedDay.list.map((day) => (
            <button key={day.uid}>
              <Icon icon={meeting.uid === day.uid ? "check" : "uncheck"} />
              {day.time.startTime} - {day.time.endTime}
            </button>
          ))
        ) : (
          <div className="flex-d-column">
            <strong>All booked up, please try a different day</strong>
            <button className="btn-main" type="button" onClick={findNextOpen}>
              Find next availible
            </button>
          </div>
        )}
      </div>
      {/* <div className="event-wrapper">
      
        {meeting.uid ? (
          <div className="flex-d-column">
            <IconButton
              click={setMeeting}
              icon={{
                icon: "x",
                label: `${meeting.time.startTime} ${meeting.time.endTime}`,
              }}
            />
            {user && user.uid ? (
              <div>
                <h2 className="heading">User Information</h2>
                <UserCard user={user} hideHero />
                <MeetingDetails meeting={meeting} />
                <button type="button" className="btn-cta" onClick={handleCheckout}>
                  Proceed to checkout
                </button>
              </div>
            ) : (
              <div>Enter details</div>
            )}
          </div>
        ) 

        )}
      </div> */}
    </div>
  );
};
export default CalendarEvents;
