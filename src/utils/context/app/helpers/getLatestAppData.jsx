import { axiosWithOutAuth } from "../../../axios";

export const getLatestAppData = async (dispatch) => {
  const data = await axiosWithOutAuth.get("/app/latest");
  console.log("data", data);
};
