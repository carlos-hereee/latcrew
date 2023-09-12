import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const signIn = async (dispatch, credentials) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/auth/login", credentials);
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_USER_DATA", payload: data.user });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    if (isDev) console.log("sign in error", error);
    const { status, data } = error.response;
    if (status === 401 && data.includes("security is low")) {
      dispatch({ type: "SET_CHANGE_PASSWORD", payload: data });
    }
    if (status === 403 || status === 404) {
      console.log("data", data);
      dispatch({ type: "SIGN_IN_ERROR", payload: data });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
