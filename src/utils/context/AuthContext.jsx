// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { axiosWithAuth } from "../fns/axios";
import generate from "project-name-generator";
import { reducer } from "../reducer/AuthReducer";
import { v4 } from "uuid";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const initialState = { isLoading: false, accessToken: "", player: {} };
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
  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        accessToken: state.accessToken,
        getAccessToken,
        signIn,
        register,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
