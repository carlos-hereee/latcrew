import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { filterUserValues } from "../../../app/filterUserValues";
import { isDev } from "@app/config";
import { ReducerMethodProps } from "auth-context";

export const getAccessToken = async (props: ReducerMethodProps) => {
  const { dispatch } = props;
  try {
    console.log("fetching accessTOken");
    dispatch({ type: "IS_LOADING", payload: false });
    const { data } = await axiosAuth.post("/auth/refresh-token");
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    if (data.user) {
      const user = data.user;
      // store key varaibles
      const userData = filterUserValues(user);
      dispatch({ type: "SET_USER_DATA", payload: userData });
      const filterPermission = user.permissions.filter(
        (app: { [key: string]: string }) => app.role === "admin"
      );
      filterPermission.length > 0 && dispatch({ type: "SET_IS_ADMIN", payload: true });
      user.permissions && dispatch({ type: "SET_PERMSSIONS", payload: user.permissions });
      user.ownedApps && dispatch({ type: "SET_OWNED_APPS", payload: user.ownedApps });
      // dispatch({ type: "UPDATE_LANGUAGE", payload: data.language });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error: any) {
    if (isDev) console.log("error fetching token", error);
    const status = error.response?.status;
    // server is offline, rejected, or not found
    if (status === 403 || status === 404 || status === 403) {
      // forbiden -- no cookie
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
