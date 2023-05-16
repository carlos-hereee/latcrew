import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import MeetingDetails from "../atoms/MeetingDetails";
import UserCard from "../molecules/card/UserCard";
import { AuthContext } from "../../utils/context/AuthContext";
import Forms from "../organisms/Forms";
import Title from "../atoms/text/Title";

const BookEvent = () => {
  const { bookNow, meeting, selectedDay } = useContext(CalendarContext);
  const { active } = useContext(ServicesContext);
  const { user, userValues } = useContext(AuthContext);

  const submit = (e) => bookNow(e, meeting);
  return (
    <div className="book-event">
      <Title data={`Booking: ${active.title} ${active.subtitle}`} />
      {selectedDay.hasList &&
        selectedDay.list.filter((l) => l.uid !== meeting.uid).length > 0 && (
          <p className="warning">
            A new date was selected, your previous appointment has been saved in
            memory so if you cannot find a new time you can continue below
          </p>
        )}
      <MeetingDetails meeting={meeting} />
      {user.uid ? <UserCard /> : <Forms data={userValues} submit={submit} />}
    </div>
  );
};
export default BookEvent;
