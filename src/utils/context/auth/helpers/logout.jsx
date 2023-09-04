import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const logOut = async (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    await axiosAuth.delete("/auth/logout");
    // reset user and access token
    dispatch({ type: "SET_USER_DATA", payload: {} });
    dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
  } catch (e) {
    if (isDev) console.log("error", error);
    const { status, data } = error.response;
    dispatch({ type: "SET_ERROR", payload: data });
  }
};
