import { axiosAuth } from "../../axios";

export const signIn = async (dispatch, credentials) => {
  try {
    const { data } = await axiosAuth.post("/auth/login", credentials);
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    dispatch({ type: "SET_USER_DATA", payload: data.user });
  } catch (error) {
    if (isDev) console.log("sign in error", error);
    const { status, data } = error.response;
    if (status === 401 && data.includes("security is low")) {
      dispatch({ type: "SET_CHANGE_PASSWORD", payload: data });
    }
    if (status === 403 || status === 404) {
      dispatch({ type: "SIGN_IN_ERROR", payload: data.message });
    }
  }
};
