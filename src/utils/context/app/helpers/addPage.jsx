import { axiosWithMedia } from "../../../helpers/axios";

export const addPage = async (dispatch, a, fetchLatest) => {
  try {
    await axiosWithMedia.post("/app/add-page", a);
    // const response = await axiosWithMedia.post("/app/add-page", a);
    // console.log("response", response);
    fetchLatest(dispatch);
  } catch (error) {}
};
