// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { axiosAuth } from "../utils/axios";
import { reducer } from "./reducer/AuthReducer";
import user from "../data/data.user.json";
export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const initialState = {
    isLoading: false,
    accessToken: "",
    user: {},
    dummyUser: user,
    signInError: "",
    userValues: { name: "", email: "", phone: "" },
    signUpValues: { username: "", password: "", confirmPassword: "" },
    loginValues: { username: "", password: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const { data } = await axiosAuth.post("/auth/refresh-token");
      console.log("data", data);
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch (error) {
      const { status, data } = error.response;
      if (status === 403) {
        console.log("response", error.response);
        // forbiden -- no cookie
        dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
        dispatch({ type: "SET_USER_DATA", payload: {} });
      }
    }
  };

  const signIn = async (username, password) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const creds = { username, password };
      const { data } = await axiosAuth.post("/auth/login", creds);
      console.log("data", data);
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch (error) {
      let payload = error.response.data.message;
      dispatch({ type: "SET_SING_IN_ERROR", payload });
    }
  };
  const register = async (username, password) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const creds = { username, password };
      const { data } = await axiosAuth.post("/auth/register", creds);
      console.log("data", data);
      dispatch({ type: "SET_LOGIN", payload: data.user });
    } catch (e) {
      console.log("e", e);
      let payload = JSON.parse(e.request.response).message;
      dispatch({ type: "SET_SIGNUP_ERROR", payload });
    }
  };
  const logOut = async (user) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosAuth.post("/auth/logout", user);
      dispatch({ type: "SET_USER_DATA", payload: data });
    } catch (e) {
      let payload = JSON.parse(e.request.response).message;
      dispatch({ type: "SET_ERROR", payload });
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
  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        dummyUser: state.dummyUser,
        userValues: state.userValues,
        accessToken: state.accessToken,
        signInError: state.signInError,
        getAccessToken,
        signIn,
        register,
        logOut,
        updateUserData,
        setShipping,
        getUserData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
