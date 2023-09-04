import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const getAccessToken = async (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  console.log("fetching accessTOken");
  try {
    const { data } = await axiosAuth.post("/auth/refresh-token");
    // console.log("data", data);
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_USER_DATA", payload: data.user });
    dispatch({ type: "UPDATE_LANGUAGE", payload: data.language });
    dispatch({ type: "IS_LOADING", payload: false });
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
