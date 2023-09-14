import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";
import offline from "../../../../data/offlineAppState.json";

export const getLatestAppData = async (dispatch, appId) => {
  try {
    dispatch({ type: "IS_LOADING", payload: false });
    const { data } = await axiosAuth.get(`/app/latest/${appId}`);
    dispatch({ type: "UPDATE_APP_ASSETS", payload: data.app });
    // if (data?.app?.logo) {
    //   dispatch({ type: "UPDATE_APP_LOGO", payload: data.app.logo });
    // }
    // if (data?.app?.menu) {
    //   dispatch({ type: "UPDATE_MENU", payload: data.menu });
    // }
    if (data?.pages) {
      dispatch({ type: "UPDATE_PAGES", payload: data.pages });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    if (isDev) console.log("error fetching latest app data: ", error);
    // server is offline
    if (!error.response) {
      dispatch({ type: "UPDATE_APP_ASSETS", payload: offline });
    }
    const response = error.response;
    // server sent offline data
    if (response.status === 400) {
      dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    }
    if (response.status === 404) {
      dispatch({ type: "COMING_SOON", payload: true });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
