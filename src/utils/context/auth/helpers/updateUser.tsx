import { AUTH_ACTIONS } from "@app/utils/types/AuthTypes";
import { UpdateUserReducerProps } from "auth-context";

export const updateUser = (props: UpdateUserReducerProps) => {
  //  key varaibles
  const { dispatch, user } = props;
  const userData = {
    userId: user.userId,
    username: user.username,
    email: user.email || "",
    nickname: user.nickname || "",
    languageId: user.languageId || "",
    phone: user.phone || "",
  };
  dispatch({ type: AUTH_ACTIONS.SET_USER_DATA, payload: userData });
  user.ownedApps && dispatch({ type: AUTH_ACTIONS.SET_OWNED_APPS, payload: user.ownedApps });
  user.permissions && dispatch({ type: AUTH_ACTIONS.SET_PERMSSIONS, payload: user.permissions });
  // user.permission.length > 0 && dispatch({ type: AUTH_ACTIONS.SET_IS_ADMIN, payload: true });
};
