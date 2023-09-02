import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./AdminReducer";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();
export const AdminState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isLoading: true });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/dashboard");
      dispatch({ type: "IS_LOADING", payload: false });
    } else dispatch({ type: "IS_LOADING", payload: false });
  }, [user]);
  return (
    <AdminContext.Provider value={{ init: state.init, isLoading: state.isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};
