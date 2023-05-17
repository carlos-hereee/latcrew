const loadContent = (state, action) => {
  return {
    ...state,
    isLoading: false,
    socials: action.payload.socials,
    about: action.payload.about,
    services: action.payload.services,
    schedule: action.payload.schedule,
  };
};

const loadFilters = (state, action) => {
  return {
    ...state,
    isLoading: false,
    filters: action.payload,
    isFiltered: false,
  };
};
const updateFilter = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    filtered: action.payload,
  };
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
  return {
    ...state,
    isLoading: false,
    isFiltered: false,
    filtered: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_MENU":
      return { ...state, isLoading: false, menu: action.payload };
    case "UPDATE_BURGER":
      console.log("action.payload", action.payload);
      return { ...state, isLoading: false, burger: action.payload };
    case "LOAD_CONTENT":
      return loadContent(state, action);
    case "LOAD_FILTERS":
      return loadFilters(state, action);
    case "SELECT_PAYMENT_TYPE":
      return { ...state, isLoading: false, paymentType: action.payload };
    case "UPDATE_SELECTED":
      return { ...state, isLoading: false, selected: action.payload };
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
