import { axiosAuth } from "@app/utils/axios/useAxiosAuth";
import { isDev } from "@app/config";

export const getFiles = async (dispatch) => {
  try {
    const response = await axiosAuth.get("app/files");
    console.log("response", response);
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
