import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { isDev } from "@app/config";
import { EditAppProps } from "app-forms";

export const editApp = async (props: EditAppProps) => {
  const { dispatch, values, appId, updateApp } = props;
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post(`/app/update-app/${appId}`, values);
    data && updateApp(data);
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error building app ", error);
  }
};
