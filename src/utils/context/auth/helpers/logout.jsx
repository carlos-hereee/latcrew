import { axiosAuth } from "../../axios";

export const logOut = async (dispatch, user) => {
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
