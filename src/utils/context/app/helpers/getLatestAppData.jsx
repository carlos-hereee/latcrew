import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";
import offline from "../../../../data/offlineAppState.json";

export const getLatestAppData = async (dispatch) => {
  try {
    const response = await axiosAuth.get("/app/latest");
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
  } catch (error) {
    if (isDev) console.log("error fetching latest app data: ", error);
    // server is offline
    if (!error.response) {
      dispatch({ type: "UPDATE_APP_ASSETS", payload: offline });
      return dispatch({ type: "IS_LOADING", payload: false });
    }
    const response = error.response;
    // server sent offline data
    if (response.status === 400) {
      dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
      return dispatch({ type: "IS_LOADING", payload: false });
    }
  }
};
