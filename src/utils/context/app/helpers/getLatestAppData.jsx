import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const getLatestAppData = async (dispatch) => {
  try {
    const response = await axiosAuth.get("/app/latest");
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
  } catch (error) {
    if (isDev) console.log("error fetching lateset app data: ", error);
    const response = error.response;
    if (response.status === 400) {
      // error with server sent offline data
      dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    }
  }
  dispatch({ type: "IS_LOADING", payload: false });
};
