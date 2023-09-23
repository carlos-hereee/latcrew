import { axiosAuth } from "../../../helpers/configs/axios";
import { isDev } from "../../../helpers/configs/isDev";

export const updateApp = async (dispatch, values) => {
  try {
    const { data } = await axiosAuth.post("/app/update-app", values);
    console.log("data", data);
  } catch (error) {
    if (isDev) console.log("error fetching token", error);
    if (!error.response) {
      // dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      // dispatch({ type: "SET_USER_DATA", payload: {} });
      return dispatch({ type: "IS_LOADING", payload: false });
    }
    const { status, data } = error.response;
    // server is offline
    if (status === 403) {
      // forbiden -- no cookie
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
      return dispatch({ type: "IS_LOADING", payload: false });
    }
  }
};
