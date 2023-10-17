import { isDev } from "@app/config";
import { axiosAuth } from "@app/utils/axios/axiosAuth";

type DeleteAppProps = {
  dispatch: React.Dispatch<any>;
  appId: string;
};
export const deleteApp = async (props: DeleteAppProps) => {
  const { dispatch, appId } = props;
  try {
    const response = await axiosAuth.delete("/app/delete-app/" + appId);
    console.log("response", response);
    // dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    // dispatch({ type: "UPDATE_APP_ASSETS", payload: response.data });
    // if (response.data.menu) {
    //   dispatch({ type: "SET_MENU", payload: response.data.menu });
    // }
  } catch (error) {
    isDev && console.log("error", error);
  }
};
