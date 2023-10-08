import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { isDev } from "@app/config";
import { EditAppProps } from "app-forms";

export const editApp = async (props: EditAppProps) => {
  const { dispatch, values, appId, updateAppData } = props;
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post(`/app/update-app/${appId}`, values);
    data.app && updateAppData(data.app);
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    isDev && console.log("error building app ", error);
  }
};
