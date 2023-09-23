import { axiosWithMedia } from "../../../helpers/configs/axios";
import { isDev } from "../../../helpers/configs/isDev";

export const deleteApp = async (dispatch, data) => {
  try {
    const response = await axiosWithMedia.delete("/app/delete-app", data);
    // console.log("response", response);
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    // dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    if (response.data.menu) {
      dispatch({ type: "UPDATE_MENU", payload: response.data.menu });
    }
  } catch (error) {
    isDev && console.log("error", error);
  }
};
