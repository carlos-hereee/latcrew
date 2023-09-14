import { axiosWithMedia } from "../../../helpers/axios";
import { isDev } from "../../../helpers/isDev";

export const uploadFile = async (dispatch, file) => {
  try {
    const response = await axiosWithMedia.post("/app/upload-file", file);
    console.log("response", response);
  } catch (error) {
    isDev && console.log("error uploading file", error);
  }
};
