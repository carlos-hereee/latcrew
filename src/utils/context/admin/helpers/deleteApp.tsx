import { isDev } from "@app/config";
import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { ADMIN_ACTIONS } from "@app/utils/types/AdminActions";

type DeleteAppProps = {
  dispatch: React.Dispatch<any>;
  appId: string;
  updateAppData: (key: any) => void;
};
export const deleteApp = async (props: DeleteAppProps) => {
  const { appId, updateAppData, dispatch } = props;
  try {
    dispatch({ type: ADMIN_ACTIONS.IS_LOADING, payload: true });
    const { data } = await axiosAuth.delete("/app/delete-app/" + appId);
    console.log("data", data);
    updateAppData(data);
    dispatch({ type: ADMIN_ACTIONS.IS_LOADING, payload: false });
  } catch (error) {
    isDev && console.log("error", error);
    dispatch({ type: ADMIN_ACTIONS.IS_LOADING, payload: false });
  }
};
