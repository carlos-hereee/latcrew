import { axiosAuth } from "../../axios";

export const register = async (dispatch, credentials) => {
  try {
    const { data } = await axiosAuth.post("/auth/register", credentials);
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_LOGIN", payload: data.user });
  } catch (error) {
    if (isDev) console.log("register error", error);
    const { status, data } = error.response;
    dispatch({ type: "SIGN_UP_ERROR", payload: data });
  }
};
