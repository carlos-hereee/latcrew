import { AdminReducerProps } from "app-admin";

export const reducer: AdminReducerProps = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
