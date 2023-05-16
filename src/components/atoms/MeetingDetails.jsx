const MeetingDetails = ({ meeting }) => (
  <div>
    <p>
      <strong>Meeting Details: </strong>
      <span>
        Appointment set for{" "}
        <strong>
          {meeting.date} @ {meeting.time.startTime} - {meeting.time.endTime}
        </strong>
      </span>
    </p>
  </div>
);
export default MeetingDetails;
