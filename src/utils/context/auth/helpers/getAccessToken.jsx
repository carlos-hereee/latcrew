import { axiosAuth } from "../../../helpers/axios";
import { filterUserValues } from "../../../helpers/filterUserValues";
import { isDev } from "../../../helpers/isDev";

export const getAccessToken = async (dispatch) => {
  try {
    console.log("fetching accessTOken");
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/auth/refresh-token");
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data.accessToken });
    if (data.user) {
      const user = data.user;
      // store key varaibles
      const userData = filterUserValues(user);
      dispatch({ type: "SET_USER_DATA", payload: userData });
      const filterPermission = user.permissions.filter((app) => app.role === "admin");
      filterPermission.length > 0 && dispatch({ type: "SET_IS_ADMIN", payload: true });
      user.permissions && dispatch({ type: "SET_PERMSSIONS", payload: user.permissions });
      user.ownedApps && dispatch({ type: "SET_OWNED_APPS", payload: user.ownedApps });
      // dispatch({ type: "UPDATE_LANGUAGE", payload: data.language });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    if (isDev) console.log("error fetching token", error);
    if (!error.response) {
      dispatch({ type: "SET_STRANDED", payload: true });
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
    }
    const { status, data } = error.response;
    // server is offline
    if (status === 403 || status === 404) {
      // forbiden -- no cookie
      dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
      dispatch({ type: "SET_USER_DATA", payload: {} });
    }
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
