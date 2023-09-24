import { axiosAuth } from "../../../axios/axiosAuth";
export const getUserData = async (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const { data } = await axiosAuth.get("/auth");
    // console.log("data", data);
    dispatch({ type: "SET_USER_DATA", payload: data });
  } catch (e) {
    const { data, status } = e.response;
    dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
  }
};
