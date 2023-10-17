import { UpdateAppProps } from "app-forms";
import { APP_ACTIONS } from "@app/utils/app/types";

export const updateAppData = (props: UpdateAppProps) => {
  const { dispatch, values } = props;
  dispatch({ type: APP_ACTIONS.IS_LOADING, payload: true });
  values.logo && dispatch({ type: APP_ACTIONS.SET_APP_LOGO, payload: values.logo });
  values.adminIds && dispatch({ type: APP_ACTIONS.SET_ADMIN_IDS, payload: values.adminIds });
  values.appId && dispatch({ type: APP_ACTIONS.SET_APP_ID, payload: values.appId });
  values.appName && dispatch({ type: APP_ACTIONS.SET_APP_NAME, payload: values.appName });
  values.calendar && dispatch({ type: APP_ACTIONS.SET_CALENDAR, payload: values.calendar });
  values.landing && dispatch({ type: APP_ACTIONS.SET_LANDING, payload: values.landing });
  values.newsletter && dispatch({ type: APP_ACTIONS.SET_NEWSLETTER, payload: values.newsletter });
  values.menu && dispatch({ type: APP_ACTIONS.SET_MENU, payload: values.menu });
  values.media && dispatch({ type: APP_ACTIONS.SET_MEDIA, payload: values.media });
  values.ownerId && dispatch({ type: APP_ACTIONS.SET_OWNER_ID, payload: values.ownerId });
  values.themeList && dispatch({ type: APP_ACTIONS.SET_THEME_LIST, payload: values.themeList });
  dispatch({ type: APP_ACTIONS.IS_LOADING, payload: false });
};
