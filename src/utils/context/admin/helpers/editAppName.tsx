import { isDev } from "@app/config";
import { EditAppProps } from "app-forms";
import { axiosMedia } from "@app/utils/axios/axiosMedia";

export const editAppName = async (props: EditAppProps) => {
  const { dispatch, values, appId } = props;
  try {
    // const formData= new FormData(values)
    console.log("values", values);
    dispatch({ type: "IS_LOADING", payload: true });
    const response = await axiosMedia.post(`/app/update-app-name/${appId}`, values);
    console.log("response", response);
    // dispatch({ type: "SET_OWNED_APPS", payload: response.data });
    // dispatch({ type: "SET_IS_ADMIN", payload: response.data });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error building app ", error);
    // dispatch({ type: "SET_APP_ID", payload: "" });
    // dispatch({ type: "IS_LOADING", payload: false });
  }
};
