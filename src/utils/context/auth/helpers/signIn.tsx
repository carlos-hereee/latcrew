import { axiosAuth } from "@axios/axiosAuth";
import { isDev } from "@app/config";
import { LoginFormProps } from "app-forms";

export const signIn = async (dispatch: React.Dispatch<any>, credentials: LoginFormProps) => {
  try {
    console.log("credentials", credentials);
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await axiosAuth.post("/auth/login", credentials);
    dispatch({ type: "SET_ACCESS_TOKEN", payload: data });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    if (isDev) console.log("sign in error", error);
    const { status, data } = error.response;
    if (status === 401 && data.includes("security is low")) {
      dispatch({ type: "SET_CHANGE_PASSWORD", payload: data });
    }
    if (status === 403 || status === 404 || status === 400) {
      dispatch({ type: "SIGN_IN_ERROR", payload: data });
    }
    dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
    dispatch({ type: "IS_LOADING", payload: false });
  }
};
