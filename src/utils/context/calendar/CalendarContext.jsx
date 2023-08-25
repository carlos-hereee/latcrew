import { createContext, useReducer } from "react";
import { reducer } from "./CalendarReducer";
import { calendarState } from "../../../data/spanish/spanishState";
import { contactUs } from "./helpers/contactUs";
import { getCalendarDay } from "./helpers/getCalendarDay";
import { setDay } from "./helpers/setDay";
import { setMeeting } from "./helpers/setMeeting";
import { bookNow } from "./helpers/bookNow";
import { resetDay } from "./helpers/resetDay";

export const CalendarContext = createContext();
export const CalendarState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, calendarState);

  return (
    <CalendarContext.Provider
      value={{
        isLoading: state.isLoading,
        calendar: state.calendar,
        selectedDay: state.selectedDay,
        meeting: state.meeting,
        events: state.events,
        booked: state.booked,
        contactUs: (a) => contactUs(dispatch, a),
        getCalendarDay: (a) => getCalendarDay(dispatch, a),
        setDay: (a) => setDay(dispatch, a),
        setMeeting: (a) => setMeeting(dispatch, a),
        bookNow: (a, b) => bookNow(dispatch, a, b),
        resetDay: (a) => resetDay(dispatch, a),
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
