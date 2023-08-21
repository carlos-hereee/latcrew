import { axiosAuth } from "../../../axios";

export const changePassword = async (dispatch, credentials) => {
  try {
    const { data } = await axiosAuth.put("/auth/change-password", credentials);
    console.log("data", data);
  } catch (error) {
    if (isDev) console.log("error", error);
    const { status, data } = error.response;
    if (status === 403) {
      dispatch({ type: "SIGN_IN_ERROR", payload: data.message });
    }
  }
};
