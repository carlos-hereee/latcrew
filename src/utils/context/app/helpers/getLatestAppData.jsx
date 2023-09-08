import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";
import offline from "../../../../data/offlineAppState.json";

export const getLatestAppData = async (dispatch) => {
  try {
    const response = await axiosAuth.get("/app/latest");
    dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    if (response.data.logo) {
      dispatch({ type: "UPDATE_APP_LOGO", payload: response.data.logo });
    }
    if (response.data.menu) {
      dispatch({ type: "UPDATE_MENU", payload: response.data.menu });
    }
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
    if (response.status === 404) {
      dispatch({ type: "COMING_SOON", payload: true });
      return dispatch({ type: "IS_LOADING", payload: false });
    }
  }
};
