const setError = (state, action) => {
  return {
    ...state,
    error: [...state.error, action.payload],
  };
};
const setAccessToken = (state, action) => {
  return {
    ...state,
    isLoading: false,
    accessToken: action.payload,
  };
};
const setUserData = (state, action) => {
  return {
    ...state,
    isLoading: false,
    user: action.payload,
  };
};
const updateUserData = (state, action) => {
  return {
    ...state,
    user: action.payload,
    isAdmin: action.payload.isAdmin,
    isLoading: false,
  };
};
const updateShippingDetails = (state, action) => {
  return {
    ...state,
    shippingDetails: action.payload,
    isLoading: false,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return setError(state, action);
    case "SET_ACCESS_TOKEN":
      return setAccessToken(state, action);
    case "SET_USER_DATA":
      return setUserData(state, action);
    case "UPDATE_USER_DATA":
      return updateUserData(state, action);
    case "UPDATE_SHIPPING_DETAILS":
      return updateShippingDetails(state, action);
    default:
      return state;
  }
};
