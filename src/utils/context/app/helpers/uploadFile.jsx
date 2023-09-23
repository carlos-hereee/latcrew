import { axiosWithMedia } from "../../../helpers/configs/axios";
import { isDev } from "../../../helpers/configs/isDev";

export const uploadFile = async (dispatch, file) => {
  try {
    const response = await axiosWithMedia.post("/app/upload-file", file);
    console.log("response", response);
  } catch (error) {
    isDev && console.log("error uploading file", error);
  }
};
