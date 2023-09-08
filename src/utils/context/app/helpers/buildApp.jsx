import { axiosWithMedia } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const buildApp = async (dispatch, data) => {
  try {
    const response = await axiosWithMedia.post("/app/build-app", data);
    console.log("response", response);
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
  } catch (error) {
    isDev && console.log("error", error);
  }
};
