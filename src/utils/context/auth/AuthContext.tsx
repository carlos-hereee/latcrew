// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect, useContext } from "react";
import { reducer } from "./AuthReducer";
import authState from "../../../data/authState.json";
import { login } from "./helpers/login";
import { register } from "./helpers/register";
import { logOut } from "./helpers/logout";
import { updateUserData } from "./helpers/updateUserData";
import { setShipping } from "./helpers/setShipping";
import { getUserData } from "./helpers/getUserData";
import { changePassword } from "./helpers/changePassword";
import { getAccessToken } from "./helpers/getAccessToken";
import { updateLanguage } from "../app/helpers/updateLanguage";
import { forgotPassword } from "./helpers/forgotPassword";
import { fetchUser } from "./helpers/fetchUser";
import { buildApp } from "./helpers/buildApp";
import { AppProps } from "app-types";
import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { isDev } from "@app/config";
import { AuthSchema } from "auth-context";

export const AuthContext = createContext<AuthSchema>({} as AuthSchema);

export const AuthState = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, authState);

  useEffect(() => {
    getAccessToken({ dispatch });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        isOffline: state.isOffline,
        isAdmin: state.isAdmin,
        authErrors: state.authErrors,
        accessToken: state.accessToken,
        user: state.user,
        dummyData: state.dummyData,
        userForm: state.userForm,
        loginForm: state.loginForm,
        signUpForm: state.signUpForm,
        passwordChangeForm: state.passwordChangeForm,
        forgotPasswordForm: state.forgotPasswordForm,
        emergencyPasswordChangeIsRequired: state.emergencyPasswordChangeIsRequired,
        // language: state.language,
        // menu: state.menu,
        // permissions: state.permissions,
        ownedApps: state.ownedApps,
        // isAdmin: state.isAdmin,
        setStranded: (e) => dispatch({ type: "SET_STRANDED", payload: e }),
        setIsLoading: (e) => dispatch({ type: "IS_LOADING", payload: e }),
        setAccessToken: (e) => dispatch({ type: "SET_ACCESS_TOKEN", payload: e }),
        login: (e) => login(dispatch, e),
        register: (e) => register(dispatch, e),
        logout: () => logOut(dispatch),
        updateUser: (e) => updateUserData(dispatch, e),
        // setShipping: (e) => setShipping(dispatch, e),
        // getUserData: () => getUserData(dispatch),
        fetchUser: (a) => fetchUser(dispatch, a),
        changePassword: (e) => changePassword(dispatch, e),
        // updateLanguage: (a) => updateLanguage(dispatch, a),
        buildApp: (a) => buildApp(dispatch, a),
        editApp: (a) => editApp(dispatch, a),
        forgotPassword: (a) => forgotPassword(dispatch, a),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an auth provider");
  }
  return context;
};
