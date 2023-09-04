import { axiosAuth } from "../../../helpers/axios";

export const addCalendarEvent = async (dispatch, day) => {
  const { data } = axiosAuth.post("/calendar/add-event", { day });
  console.log("data", data);
  // return <div>addCalendarEvent</div>;
};
