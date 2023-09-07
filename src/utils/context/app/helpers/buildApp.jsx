import { axiosAuth } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const buildApp = async (dispatch, data) => {
  console.log("app values", data);
  try {
    const response = await axiosAuth.post("/app/build-app", data);
    console.log("response", response);
  } catch (error) {
    isDev && console.log("error", error);
  }
};
