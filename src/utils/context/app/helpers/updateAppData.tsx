import { UpdateAppProps } from "app-forms";

export const updateAppData = (props: UpdateAppProps) => {
  const { dispatch, values } = props;
  console.log("values", values);
  dispatch({ type: "IS_LOADING", payload: true });
  values.logo && dispatch({ type: "SET_APP_LOGO", payload: values.logo });
  values.adminIds && dispatch({ type: "SET_ADMIN_IDS", payload: values.adminIds });
  values.appId && dispatch({ type: "SET_APP_ID", payload: values.appId });
  values.appName && dispatch({ type: "SET_APP_NAME", payload: values.appName });
  values.calendar && dispatch({ type: "SET_CALENDAR", payload: values.calendar });
  values.landing && dispatch({ type: "SET_LANDING", payload: values.landing });
  values.newsletter && dispatch({ type: "SET_NEWSLETTER", payload: values.newsletter });
  values.menu && dispatch({ type: "SET_MENU", payload: values.menu });
  values.media && dispatch({ type: "SET_MEDIA", payload: values.media });
  values.ownerId && dispatch({ type: "SET_OWNER_ID", payload: values.ownerId });
  values.themeList && dispatch({ type: "SET_THEME_LIST", payload: values.themeList });
  dispatch({ type: "IS_LOADING", payload: false });
};
