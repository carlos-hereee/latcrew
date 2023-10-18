import { isDev } from "@app/config";
import { axiosAuth } from "@app/utils/axios/axiosAuth";

type DeleteAppProps = {
  appId: string;
  updateApp: (key: any) => void;
};
export const deleteApp = async (props: DeleteAppProps) => {
  const { appId, updateApp } = props;
  try {
    await axiosAuth.delete("/app/delete-app/" + appId);
    updateApp({});
  } catch (error) {
    isDev && console.log("error", error);
  }
};
