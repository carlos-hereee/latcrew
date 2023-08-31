import { axiosAuth } from "../../../axios";

export const getLatestAppData = async (dispatch) => {
  try {
    const { data } = await axiosAuth.get("/app/latest");
    dispatch({ type: "UPDATE_APP_ASSETS", payload: data });
  } catch (error) {
    console.log("error fetching lateset app data: ", error);
  }
};
