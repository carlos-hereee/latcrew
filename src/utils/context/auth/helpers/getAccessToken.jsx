import { axiosAuth } from "../../../axios";
import { isDev } from "../../../isDev";

export const getAccessToken = async (dispatch) => {
  try {
    const { data } = await axiosAuth.post("/auth/refresh-token");
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_USER_DATA", payload: data.user });
  } catch (error) {
    if (isDev) console.log("access token error", error);
    const { status, data } = error.response;
    if (status === 403) {
      // forbiden -- no cookie
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
    }
  }
};
