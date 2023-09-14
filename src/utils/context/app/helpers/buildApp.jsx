import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const buildApp = async (dispatch, data) => {
  try {
    const response = await axiosAuth.post("/app/build-app", data);
    // console.log("response", response);
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    if (response.data.menu) {
      dispatch({ type: "UPDATE_MENU", payload: response.data.menu });
    }
  } catch (error) {
    isDev && console.log("error", error);
  }
};
