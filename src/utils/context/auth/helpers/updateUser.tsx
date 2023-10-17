import { APP_ACTIONS } from "@app/utils/app/types";
import { UpdateUserReducerProps } from "auth-context";

export const updateUser = (props: UpdateUserReducerProps) => {
  //  key varaibles
  const { dispatch, user } = props;
  console.log("user", user);
  dispatch({ type: APP_ACTIONS.SET_USER_DATA, payload: user });
  // const filterPermission = user.permissions.filter(
  //   (app: { [key: string]: string }) => app.role === "admin"
  // );
  // filterPermission.length > 0 && dispatch({ type: "SET_IS_ADMIN", payload: true });
  // user.permissions && dispatch({ type: "SET_PERMSSIONS", payload: user.permissions });
  // user.ownedApps && dispatch({ type: "SET_OWNED_APPS", payload: user.ownedApps });
  // dispatch({ type: "UPDATE_LANGUAGE", payload: data.language });
  // dispatch({ type: "IS_LOADING", payload: true });
  // dispatch({ type: "SET_USER_DATA", payload: data });
};
