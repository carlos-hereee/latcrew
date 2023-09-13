// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./AuthReducer";
import authState from "../../../data/authState.json";
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
        userLabels: state.userLabels,
        userPlaceholders: state.userPlaceholders,
        loginValues: state.loginValues,
        signUpValues: state.signUpValues,
        accessToken: state.accessToken,
        signInError: state.signInError,
        signUpError: state.signUpError,
        passChangeValues: state.passChangeValues,
        passChangeLabels: state.passChangeLabels,
        passChangePlaceholders: state.passChangePlaceholders,
        isChangePassword: state.isChangePassword,
        changePasswordError: state.changePasswordError,
        language: state.language,
        menu: state.menu,
        signIn: (e) => signIn(dispatch, e),
        register: (e) => register(dispatch, e),
        logout: () => logOut(dispatch),
        updateUser: (e) => updateUserData(dispatch, e),
        setShipping: (e) => setShipping(dispatch, e),
        getUserData: (e) => getUserData(dispatch, e),
        changePassword: (e) => changePassword(dispatch, e),
        updateLanguage: (a) => updateLanguage(dispatch, a),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
