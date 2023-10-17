import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { filterUserValues } from "../../../app/filterUserValues";
import { isDev } from "@app/config";
import { RefreshTokenReducerProps } from "auth-context";

export const getAccessToken = async (props: RefreshTokenReducerProps) => {
  const { dispatch, updateUser } = props;
  try {
    console.log("fetching accessTOken");
    dispatch({ type: "IS_LOADING", payload: false });
    const { data } = await axiosAuth.post("/auth/refresh-token");
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    if (data.user) updateUser(data.user);
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
