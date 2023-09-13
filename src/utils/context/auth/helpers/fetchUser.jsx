import { axiosAuth } from "../../../helpers/axios";
export const getUserData = async (dispatch, username) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.get("/auth/user", username);
    // console.log("data", data);
    dispatch({ type: "SET_USER_DATA", payload: data });
  } catch (error) {
    const { data, status } = error.response;
    dispatch({ type: "FORGOT_PASSWORD_ERROR", payload: data });
  }
};
