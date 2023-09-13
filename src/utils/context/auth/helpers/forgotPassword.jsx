import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const forgotPassword = async (dispatch, credentials) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/auth/forgot-password", credentials);
    console.log("data", data);
  } catch (error) {
    isDev && console.log("error", error);
  }
};
