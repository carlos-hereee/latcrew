// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { axiosAuth } from "../axios";
import { reducer } from "../reducer/AuthReducer";
import { isDev } from "../../data/config";
import initialState from "../../data/app/authState.json";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const { data } = await axiosAuth.post("/auth/refresh-token");
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch (error) {
      const { status, data } = error.response;
      if (status === 403) {
        // forbiden -- no cookie
        dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
        dispatch({ type: "SET_USER_DATA", payload: {} });
      }
    }
  };

  const signIn = async (credentials) => {
    try {
      const { data } = await axiosAuth.post("/auth/login", credentials);
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch (error) {
      if (isDev) console.log("error", error);
      const { status, data } = error.response;
      if (status === 401 && data.includes("security is low")) {
        dispatch({ type: "SET_CHANGE_PASSWORD", payload: data });
      }
      if (status === 403 || status === 404) {
        dispatch({ type: "SIGN_IN_ERROR", payload: data.message });
      }
    }
  };
  const register = async (credentials) => {
    try {
      const { data } = await axiosAuth.post("/auth/register", credentials);
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_LOGIN", payload: data.user });
    } catch (error) {
      if (isDev) console.log("error", error);
      const { status, data } = error.response;
      dispatch({ type: "SIGN_UP_ERROR", payload: data });
    }
  };
  const logOut = async (user) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosAuth.post("/auth/logout", user);
      dispatch({ type: "SET_USER_DATA", payload: data });
    } catch (e) {
      if (isDev) console.log("error", error);
      const { status, data } = error.response;
      dispatch({ type: "SET_ERROR", payload: data });
    }
  };
  const getUserData = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosAuth.get("/auth");
      // console.log("data", data);
      dispatch({ type: "SET_USER_DATA", payload: data });
    } catch (e) {
      const { data, status } = e.response;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  const updateUserData = (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "SET_USER_DATA", payload: data });
  };
  const setShipping = (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_SHIPPING_DETAILS", payload: data });
  };
  const changePassword = async (credentials) => {
    try {
      const { data } = await axiosAuth.put("/auth/change-password", credentials);
      console.log("data", data);
    } catch (error) {
      if (isDev) console.log("error", error);
      const { status, data } = error.response;
      if (status === 403) {
        dispatch({ type: "SIGN_IN_ERROR", payload: data.message });
      }
    }
  };
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
        getAccessToken,
        signIn,
        register,
        logOut,
        updateUserData,
        setShipping,
        getUserData,
        changePassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
