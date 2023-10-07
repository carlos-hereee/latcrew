import { AppReducerProps } from "app-context";

export const reducer: AppReducerProps = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_UPLOAD_FILE_ERROR":
      return { ...state, uploadFileError: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_ADMIN_IDS":
      return { ...state, adminIds: action.payload };
    case "SET_NEWSLETTER":
      return { ...state, newsletter: action.payload };
    case "SET_APP_ID":
      return { ...state, appId: action.payload };
    case "SET_MEDIA":
      return { ...state, media: action.payload };
    case "SET_OWNER_ID":
      return { ...state, ownerId: action.payload };
    case "SET_APP_NAME":
      return { ...state, appName: action.payload };
    case "SET_LANDING":
      return { ...state, landingPage: action.payload };
    case "SET_THEME_LIST":
      return { ...state, themeList: action.payload };
    case "SET_CALENDAR":
      return { ...state, calendar: action.payload };
    case "SET_APP_LOGO":
      return { ...state, logo: action.payload };
    case "SET_EDIT_APP":
      return { ...state, editApp: action.payload };
    case "SET_MENU":
      return { ...state, menu: action.payload };
    case "COMING_SOON":
      return { ...state, isComingSoon: action.payload };
    case "UPDATE_PAGES":
      return { ...state, pages: action.payload };
    case "UPDATE_BURGER":
      return { ...state, burger: action.payload };
    case "UPDATE_LANGUAGE":
      return { ...state, language: action.payload };
    case "LOAD_FILTERS":
      return { ...state, filters: action.payload, isFiltered: false };
    case "SELECT_PAYMENT_TYPE":
      return { ...state, paymentType: action.payload };
    case "UPDATE_SELECTED":
      return { ...state, selected: action.payload };
    case "UPDATE_APPLIED_FILTER":
      return { ...state, isFiltered: true, appliedFilters: action.payload };
    case "UPDATE_FILTER":
      return { ...state, isFiltered: true, filtered: action.payload };
    case "RESET_FILTER":
      return { ...state, isFiltered: false, filtered: action.payload };
    default:
      return state;
  }
};
