import { axiosMedia } from "@app/utils/axios/useAxiosMedia";
import { isDev } from "@app/config";

export const uploadFile = async (dispatch, file) => {
  try {
    const response = await axiosMedia.post("/app/upload-file", file);
    console.log("response", response);
  } catch (error) {
    isDev && console.log("error uploading file", error);
  }
};
