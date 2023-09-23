import { axiosAuth } from "../../../helpers/configs/axios";
import { isDev } from "../../../helpers/configs/isDev";

export const getFiles = async (dispatch) => {
  try {
    const response = await axiosAuth.get("app/files");
    console.log("response", response);
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
