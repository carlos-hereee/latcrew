import { axiosAuth } from "../../../axios";

export const getLatestAppData = async (dispatch) => {
  console.log("log");
  try {
    const data = await axiosAuth.get("/app/latest");
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
