import { ADMIN_ACTIONS } from "@app/utils/types/AdminActions";
import { AdminStateProps } from "app-admin";

type ReducerAction = { type: ADMIN_ACTIONS; payload?: any };
type AdminReducerProps = (state: AdminStateProps, action: ReducerAction) => AdminStateProps;

export const reducer: AdminReducerProps = (state, action) => {
  switch (action.type) {
    case ADMIN_ACTIONS.IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
