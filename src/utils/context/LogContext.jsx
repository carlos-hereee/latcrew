import { createContext, useReducer } from "react";
import { reducer } from "../reducers/LogReducer";
export const LogContext = createContext();

export const LogState = ({ children }) => {
  const initialState = { isLoading: false, log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMessageToLog = (message) => {
    dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
  };
  const removeMessageFromLog = (message) => {
    dispatch({ type: "REMOVE_MESSAGE_FROM_LOG", payload: message });
  };

  return (
    <LogContext.Provider
      value={{
        log: state.log,
        isLoading: state.isLoading,
        addMessageToLog,
        removeMessageFromLog,
      }}>
      {children}
    </LogContext.Provider>
  );
};
