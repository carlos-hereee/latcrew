import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const setEditApp = async (dispatch, appId) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.get(`app/latest/${appId}`);
    const editAppData = {
      appName: data?.app?.appName || "",
      themeList: data?.app?.themeList || [],
      calendar: data?.app?.calendar || {},
      newsletter: data?.app?.newsletter || {},
      menu: data?.app?.menu || [{}],
      media: data?.app?.media || [{}],
      language: data?.app?.languageId || {},
    };
    dispatch({ type: "SET_EDIT_APP", payload: editAppData });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error setting edit app", error);
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
