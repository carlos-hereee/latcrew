const loadFilters = (state, action) => {
  return { ...state, isLoading: false, filters: action.payload, isFiltered: false };
};
const updateFilter = (state, action) => {
  return { ...state, isLoading: false, isFiltered: true, filtered: action.payload };
};
const updateAppliedFilter = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    appliedFilters: action.payload,
    filterToggle: !state.filterToggle,
  };
};
const resetFilter = (state, action) => {
  return { ...state, isLoading: false, isFiltered: false, filtered: action.payload };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_UPLOAD_FILE_ERROR":
      return { ...state, uploadFileError: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_EDIT_APP":
      return { ...state, editApp: action.payload };
    case "COMING_SOON":
      return { ...state, isComingSoon: action.payload };
    case "UPDATE_MENU":
      return { ...state, menu: action.payload };
    case "UPDATE_PAGES":
      return { ...state, pages: action.payload };
    case "UPDATE_BURGER":
      return { ...state, burger: action.payload };
    case "UPDATE_LANGUAGE":
      return { ...state, language: action.payload };
    case "UPDATE_APP":
      return { ...state, app: action.payload };
    case "UPDATE_APP_LOGO":
      return { ...state, logo: action.payload };
    case "LOAD_FILTERS":
      return loadFilters(state, action);
    case "SELECT_PAYMENT_TYPE":
      return { ...state, paymentType: action.payload };
    case "UPDATE_SELECTED":
      return { ...state, selected: action.payload };
    case "UPDATE_APPLIED_FILTER":
      return updateAppliedFilter(state, action);
    case "UPDATE_FILTER":
      return updateFilter(state, action);
    case "RESET_FILTER":
      return resetFilter(state, action);
    default:
      return state;
  }
};
