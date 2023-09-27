import { axiosAuth } from "@axios/axiosAuth";
import { isDev } from "@app/config";

export const buildApp = async (dispatch, data) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const response = await axiosAuth.post("/app/build-app", data);
    dispatch({ type: "SET_OWNED_APPS", payload: response.data });
    // dispatch({ type: "SET_IS_ADMIN", payload: response.data });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error building app ", error);
    dispatch({ type: "SET_APP_ID", payload: "" });
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
