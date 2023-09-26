import { axiosAuth } from "../../../axios/axiosAuth";
import { isDev } from "../../../configs/isDev";

export const uploadImage = async (dispatch, file, onUploadProgress) => {
  // console.log("asset", asset);
  try {
    let formData = new FormData();
    formData.append("file", file);
    const data = await axiosAuth.post("/app/file-upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress,
    });
    console.log("data", data);
  } catch (error) {
    if (isDev) console.log("upload image error ", error);
    const { status, data } = error.response;
    dispatch({ type: "SET_UPLOAD_ERROR", payload: data });
  }
};