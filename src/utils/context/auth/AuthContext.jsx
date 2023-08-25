// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./AuthReducer";
import authState from "../../../data/app/authState.json";
import { signIn } from "./helpers/signIn";
import { register } from "./helpers/register";
import { logOut } from "./helpers/logout";
import { updateUserData } from "./helpers/updateUserData";
import { setShipping } from "./helpers/setShipping";
import { getUserData } from "./helpers/getUserData";
import { changePassword } from "./helpers/changePassword";
import { getAccessToken } from "./helpers/getAccessToken";
import { updateLanguage } from "../app/helpers/updateLanguage";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, authState);
  useEffect(() => {
    getAccessToken(dispatch);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        dummyUser: state.dummyUser,
        userValues: state.userValues,
        loginValues: state.loginValues,
        accessToken: state.accessToken,
        signInError: state.signInError,
        signUpError: state.signUpError,
        isChangePassword: state.isChangePassword,
        language: state.language,
        signIn: (e) => signIn(dispatch, e),
        register: (e) => register(dispatch, e),
        logOut: (e) => logOut(dispatch, e),
        updateUserData: (e) => updateUserData(dispatch, e),
        setShipping: (e) => setShipping(dispatch, e),
        getUserData: (e) => getUserData(dispatch, e),
        changePassword: (e) => changePassword(dispatch, e),
        updateLanguage: (a) => updateLanguage(dispatch, a),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
