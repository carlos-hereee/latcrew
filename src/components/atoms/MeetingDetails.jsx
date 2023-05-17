const MeetingDetails = ({ data }) => (
  <div>
    <p>
      <strong>Meeting Details: </strong>
      <span>
        Appointment set for{" "}
        <strong>
          {data.date} @ {data.time.startTime} - {data.time.endTime}
        </strong>
      </span>
    </p>
  </div>
);
export default MeetingDetails;
