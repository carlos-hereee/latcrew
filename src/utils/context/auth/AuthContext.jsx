// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./AuthReducer";
import { authState } from "../initialData";
import { getAccessToken } from "./getAccessToken";
import { signIn } from "./signIn";
import { register } from "./register";
import { logOut } from "./logout";
import { updateUserData } from "./updateUserData";
import { setShipping } from "./setShipping";
import { getUserData } from "./getUserData";

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
        signIn: (e) => signIn(dispatch, e),
        register: (e) => register(dispatch, e),
        logOut: (e) => logOut(dispatch, e),
        updateUserData: (e) => updateUserData(dispatch, e),
        setShipping: (e) => setShipping(dispatch, e),
        getUserData: (e) => getUserData(dispatch, e),
        changePassword: (e) => changePassword(dispatch, e),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
