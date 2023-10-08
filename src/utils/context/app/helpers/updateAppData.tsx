import { UpdateAppProps } from "app-forms";

export const updateAppData = (props: UpdateAppProps) => {
  const { dispatch, values } = props;
  dispatch({ type: "IS_LOADING", payload: true });
  values.menu && dispatch({ type: "SET_MENU", payload: values.menu });
  values.logo && dispatch({ type: "UPDATE_LOGO", payload: values.logo });
  dispatch({ type: "IS_LOADING", payload: false });
};
