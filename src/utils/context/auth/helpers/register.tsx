import { isDev } from "@app/config";
import { axiosAuth } from "@app/utils/axios/axiosAuth";

export const register = async (dispatch, credentials) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/auth/register", credentials);
    data.accessToken && dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    data.user && dispatch({ type: "SET_USER_DATA", payload: data.user });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    if (isDev) console.log("register error", error);
    const { status, data } = error.response;
    dispatch({ type: "SIGN_UP_ERROR", payload: data });
    dispatch({ type: "SET_USER_DATA", payload: {} });
    dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
