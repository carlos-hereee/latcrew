import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { isDev } from "@app/config";
import { EditAppProps } from "app-forms";

export const buildApp = async (props: EditAppProps) => {
  const { dispatch, appId, updateAppData, values } = props;
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/app/build-app/" + appId, values);
    data && updateAppData(data);
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error building app ", error);
    dispatch({ type: "SET_APP_ID", payload: "" });
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
