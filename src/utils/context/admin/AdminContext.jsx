import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./AdminReducer";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();
export const AdminState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isLoading: true, menu: [] });
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     user.role === "admin"
  //       ? dispatch({ type: "IS_LOADING", payload: false })
  //       : navigate("/dashboard");
  //   }
  // }, [user]);
  return (
    <AdminContext.Provider
      value={{
        init: state.init,
        isLoading: state.isLoading,
        updateLoading: (a) => dispatch({ type: "IS_LOADING", payload: a }),
      }}>
      {children}
    </AdminContext.Provider>
  );
};