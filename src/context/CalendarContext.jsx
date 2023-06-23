import { createContext, useReducer, useContext } from "react";
// import { dateEqual, today } from "../functions/moment";
import { LogContext } from "./LogContext";
import { ServicesContext } from "./ServicesContext";
import { axiosWithAuth } from "../utils/axios";
import { reducer } from "./reducer/LogReducer";
import { app } from "../data/config";

export const CalendarContext = createContext();
export const CalendarState = ({ children }) => {
  const initialState = {
    isLoading: false,
    calendar: [],
    events: app.events || [],
    selectedDay: {},
    meeting: {},
    booked: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addMessageToLog } = useContext(LogContext);
  const { bookEvent, cart, active } = useContext(ServicesContext);
  // const getCalendar = async () => {
  //   try {
  //     const { data } = await axiosCalendar.get("/calendar/events");
  //     // console.log("get calendar", data);
  //     // updateCalendar(data.events);
  //     updateEvents(data);
  //     setDay(dateEqual(today, data));
  //   } catch (error) {
  //     const { status, data } = error.response;
  //     isDev && console.log("status", status, data);
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
  //   }
  // };

  const updateEvents = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_EVENTS", payload: events });
  };
  const resetDay = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "RESET_EVENTS", payload: events });
  };
  // const updateCalendar = async (calendar) => {
  //   dispatch({ type: "IS_LOADING", payload: true });
  //   dispatch({ type: "UPDATE_CALENDAR", payload: calendar });
  // };
  const contactUs = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/contact-me", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const getCalendarDay = async (day) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.get(`/calendar/${day}`);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const setDay = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_CALENDAR_EVENT", payload: event });
  };
  const setMeeting = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_APPOINTMENT", payload: event });
  };
  const bookNow = async (values, meeting) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      // const { data } = await axiosWithAuth.post("calendar/book", { values, event });
      // console.log("data", data);
      const isFilter = cart.filter((c) => c.uid === active.uid);
      if (isFilter.length > 0) {
        // console.log("isFilter", isFilter);
        const idx = cart.findIndex((c) => c.uid === active.uid);
        bookEvent({ values, meeting }, cart, idx);
      }
    } catch (error) {
      // const data = error.response.data;
      const data = error;
      // isDev && console.log("data", data);
      addMessageToLog(data);
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        isLoading: state.isLoading,
        calendar: state.calendar,
        selectedDay: state.selectedDay,
        meeting: state.meeting,
        events: state.events,
        booked: state.booked,
        contactUs,
        getCalendarDay,
        setDay,
        setMeeting,
        bookNow,
        resetDay,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
