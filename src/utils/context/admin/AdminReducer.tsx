import { AdminActions, AdminStateProps } from "app-admin";

export const reducer = (state: AdminStateProps, action: AdminActions): AdminStateProps => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
