import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./AdminReducer";
import { AdminContextProps } from "app-admin";
import { ChildProps } from "app-types";
import { buildApp } from "./helpers/buildApp";
import { editApp } from "./helpers/editApp";
import adminState from "@data/adminState.json";

export const AdminContext = createContext<AdminContextProps>({} as AdminContextProps);
export const AdminState = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(reducer, adminState);
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
        isLoading: state.isLoading,
        appNameForm: state.appNameForm,
        pagesForm: state.pagesForm,
        sectionForm: state.sectionForm,
        landingPageForm: state.landingPageForm,
        heroForm: state.heroForm,
        buildApp: (a) => buildApp(dispatch, a),
        editApp: (a) => editApp(dispatch, a),
        // updateLoading: (a) => dispatch({ type: "IS_LOADING", payload: a }),
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
