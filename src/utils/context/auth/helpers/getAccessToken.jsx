import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const getAccessToken = async (dispatch) => {
  console.log("fetching accessTOken");
  try {
    const { data } = await axiosAuth.post("/auth/refresh-token");
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_USER_DATA", payload: data.user });
    dispatch({ type: "UPDATE_LANGUAGE", payload: data.language });
  } catch (error) {
    if (isDev) console.log("error fetching token", error);
    if (!error.response) {
      dispatch({ type: "SET_STRANDED", payload: true });
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
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
