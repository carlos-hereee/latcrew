// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { axiosWithAuth } from "../fns/axios";
import generate from "project-name-generator";
import { reducer } from "../reducer/AuthReducer";
import { v4 } from "uuid";
import shortid from "shortid";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const initialState = {
    isLoading: false,
    accessToken: "",
    user: {},
    userValues: { name: "", email: "", phone: "" },
    signUpValues: { username: "", password: "", confirmPassword: "" },
    loginValues: { username: "", password: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   getAccessToken();
  // }, []);

  const getAccessToken = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/users/refresh-token");
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch {
      loadUser();
    }
  };
  const loadUser = () => {
    dispatch({ type: "IS_LOADING", payload: true });
    let user = { nickname: generate({ words: 2 }), uid: v4() };
    dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
    dispatch({ type: "SET_USER_DATA", payload: user });
  };

  const signIn = async (username, password) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/users/login", {
        username,
        password,
      });
      dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
      dispatch({ type: "SET_USER_DATA", payload: data.user });
    } catch (e) {
      let payload = JSON.parse(e.request.response).message;
      dispatch({ type: "SET_ERROR", payload });
    }
  };
  const register = async (username, password) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/users/register", {
        username,
        password,
      });
      dispatch({ type: "SET_LOGIN", payload: data.user });
    } catch (e) {
      let payload = JSON.parse(e.request.response).message;
      dispatch({ type: "SET_SIGNUP_ERROR", payload });
    }
  };
  const logOut = async (user) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/users/logout", user);
      dispatch({ type: "SET_USER_DATA", payload: data });
    } catch (e) {
      let payload = JSON.parse(e.request.response).message;
      dispatch({ type: "SET_ERROR", payload });
    }
  };
  const getUserData = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/users");
      // console.log("data", data);
      dispatch({ type: "SET_USER_DATA", payload: data });
    } catch (e) {
      const { data, status } = e.response;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  const updateUserData = (data) => {
    if (!data.uid) {
      data.uid = shortid.generate();
    }
    dispatch({ type: "SET_USER_DATA", payload: data });
  };
  const setShipping = (data) => {
    // if (isDev) data.uid = shortid.generate();
    dispatch({ type: "UPDATE_SHIPPING_DETAILS", payload: data });
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        userValues: state.userValues,
        accessToken: state.accessToken,
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
