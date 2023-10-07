import { isDev } from "@app/config";

export const deleteApp = async (dispatch, data) => {
  try {
    const response = await axiosMedia.delete("/app/delete-app", data);
    // console.log("response", response);
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    // dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    if (response.data.menu) {
      dispatch({ type: "SET_MENU", payload: response.data.menu });
    }
  } catch (error) {
    isDev && console.log("error", error);
  }
};
